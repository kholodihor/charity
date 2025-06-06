import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Donation from '../Donation.vue'

// Mock types for testing

// Mock modules before imports
vi.mock('@/utils/swal', () => ({
  default: { fire: vi.fn() }
}))

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  addDoc: vi.fn().mockResolvedValue({ id: 'mock-doc-id' })
}))

vi.mock('@/firebase/firebaseInit', () => ({
  db: {}
}))

// Import after mocking
import Swal from '@/utils/swal'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

describe('Donation Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
    
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn()
    }
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    })
  })

  it('renders correctly', () => {
    const wrapper = mount(Donation)
    expect(wrapper.find('.donation-box').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Become a Donar')
    expect(wrapper.findAll('input').length).toBe(2)
    expect(wrapper.findAll('select').length).toBe(1)
    expect(wrapper.find('button.submit').text()).toBe('Make a donation')
  })

  it('populates name from localStorage if user is logged in', async () => {
    // Setup localStorage mock to return a user
    window.localStorage.getItem = vi.fn().mockReturnValue('John Doe')
    
    const wrapper = mount(Donation)
    await flushPromises()
    
    // Check if the name input is populated
    const nameInput = wrapper.find('input[placeholder="your name"]')
    expect(nameInput.element instanceof HTMLInputElement).toBe(true)
    expect((nameInput.element as HTMLInputElement).value).toBe('John Doe')
    expect(window.localStorage.getItem).toHaveBeenCalledWith('user')
  })

  it('keeps name empty if user is not logged in', async () => {
    // Setup localStorage mock to return null (no user)
    window.localStorage.getItem = vi.fn().mockReturnValue(null)
    
    const wrapper = mount(Donation)
    await flushPromises()
    
    // Check if the name input is empty
    const nameInput = wrapper.find('input[placeholder="your name"]')
    expect((nameInput.element as HTMLInputElement).value).toBe('')
    expect(window.localStorage.getItem).toHaveBeenCalledWith('user')
  })

  it('validates form and shows validation errors when fields are empty', async () => {
    const wrapper = mount(Donation)
    
    // Submit form with empty fields
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    
    // Check if SweetAlert was called with warning
    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Please check your inputs',
      text: 'Please correct the highlighted fields.',
      icon: 'warning'
    })
    
    // Check that validation error messages are displayed
    expect(wrapper.findAll('.error-message').length).toBeGreaterThan(0)
    
    // Check that addDoc was not called
    expect(addDoc).not.toHaveBeenCalled()
  })

  it('validates that donation amount must be numeric', async () => {
    const wrapper = mount(Donation)
    
    // Fill in the form with invalid donation amount
    await wrapper.find('input[placeholder="your name"]').setValue('John Doe')
    await wrapper.find('input[placeholder="sum of donation"]').setValue('abc')
    await wrapper.find('select').setValue('education')
    
    // Submit the form
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    
    // Check if validation error is shown
    expect(wrapper.findAll('.error-message').length).toBeGreaterThan(0)
    expect(wrapper.find('.error-message').text()).toContain('Please enter a valid number')
    
    // Check that addDoc was not called
    expect(addDoc).not.toHaveBeenCalled()
  })

  it('submits donation successfully when all fields are filled', async () => {
    const wrapper = mount(Donation)
    
    // Fill in the form
    await wrapper.find('input[placeholder="your name"]').setValue('John Doe')
    await wrapper.find('input[placeholder="sum of donation"]').setValue('100')
    await wrapper.find('select').setValue('education')
    
    // Submit the form
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    
    // Check if addDoc was called with correct data
    expect(collection).toHaveBeenCalledWith(db, 'donations')
    
    // Verify addDoc was called
    expect(addDoc).toHaveBeenCalled()
    
    // Get the actual call arguments
    const addDocCalls = vi.mocked(addDoc).mock.calls
    expect(addDocCalls.length).toBe(1)
    
    // Check the second argument (data object)
    const donationData = addDocCalls[0][1] as {
      name: string;
      sum: string;
      goal: string;
      timestamp: Date;
    }
    expect(donationData).toMatchObject({
      name: 'John Doe',
      sum: '100',
      goal: 'education'
    })
    expect(donationData.timestamp).toBeInstanceOf(Date)
    
    // Check if success message was shown
    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Thank you for Your Donation',
      text: 'John Doe, your donation of $100 for education has been received.',
      icon: 'success'
    })
  })

  it('handles errors during donation submission', async () => {
    // Reset mocks to ensure clean state
    vi.clearAllMocks();
    
    // Setup addDoc to reject with an error
    vi.mocked(addDoc).mockRejectedValueOnce(new Error('Firebase error'));
    
    const wrapper = mount(Donation);
    
    // Fill in the form with valid data
    await wrapper.find('input[placeholder="your name"]').setValue('John Doe');
    await wrapper.find('input[placeholder="sum of donation"]').setValue('100');
    await wrapper.find('select').setValue('education');
    
    // Submit the form
    await wrapper.find('form').trigger('submit');
    
    // Wait for all promises to resolve
    await flushPromises();
    
    // Check if addDoc was called (validation passed)
    expect(addDoc).toHaveBeenCalled();
    
    // Check if error message was shown using a direct mock check
    expect(vi.mocked(Swal.fire)).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Error',
        icon: 'error'
      })
    );
  })
})
