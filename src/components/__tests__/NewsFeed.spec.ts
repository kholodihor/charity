import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import NewsFeed from '../NewsFeed.vue'
import { useRefsStore } from '@/stores/refs.store'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('NewsFeed Component', () => {
  beforeEach(() => {
    // Create a fresh pinia instance for each test
    setActivePinia(createPinia())
    
    // Setup the store with test data
    const store = useRefsStore()
    store.news = [
      {
        title: 'Test News Title 1',
        subtitle: 'Education',
        owner: 'by Tester',
        date: '1 June 2025',
        image: 'insights1'
      },
      {
        title: 'Test News Title 2',
        subtitle: 'Water',
        owner: 'by Admin',
        date: '2 June 2025',
        image: 'insights2'
      },
      {
        title: 'Test News Title 3',
        subtitle: 'Food',
        owner: 'by Editor',
        date: '3 June 2025',
        image: 'insights3'
      }
    ]

    // Reset axios mocks
    vi.mocked(axios.post).mockReset()
  })

  it('renders correctly with title and subtitle', () => {
    const wrapper = mount(NewsFeed)
    
    // Check title section
    expect(wrapper.find('.title').exists()).toBe(true)
    expect(wrapper.find('.title h1').text()).toBe('News Feed')
    expect(wrapper.find('.title span').text()).toContain('Insights')
  })

  it('renders all news cards from the store', () => {
    const wrapper = mount(NewsFeed)
    
    // Get all news cards (excluding the form card)
    const newsCards = wrapper.findAll('.card:not(.form)')
    
    // Should have 3 news cards
    expect(newsCards.length).toBe(3)
  })

  it('displays correct content for each news card', () => {
    const wrapper = mount(NewsFeed)
    
    // Get all news cards (excluding the form card)
    const newsCards = wrapper.findAll('.card:not(.form)')
    
    // Check first news card
    expect(newsCards[0].find('h3').text()).toBe('Test News Title 1')
    expect(newsCards[0].find('.card-content > span').text()).toBe('Education')
    expect(newsCards[0].find('.footer-item:first-child span').text()).toBe('by Tester')
    expect(newsCards[0].find('.footer-item:last-child span').text()).toBe('1 June 2025')
    expect(newsCards[0].find('img').attributes('src')).toBe('/img/insights1.webp')
    
    // Check second news card
    expect(newsCards[1].find('h3').text()).toBe('Test News Title 2')
    expect(newsCards[1].find('.card-content > span').text()).toBe('Water')
    
    // Check third news card
    expect(newsCards[2].find('h3').text()).toBe('Test News Title 3')
    expect(newsCards[2].find('.card-content > span').text()).toBe('Food')
  })

  it('renders the newsletter subscription form', () => {
    const wrapper = mount(NewsFeed)
    
    // Check form exists
    const form = wrapper.find('.card.form')
    expect(form.exists()).toBe(true)
    
    // Check form title
    expect(form.find('.form-title h4').text()).toBe('Get weekly Newsletter')
    
    // Check form inputs
    expect(form.find('input[placeholder="Enter full Name"]').exists()).toBe(true)
    expect(form.find('input[placeholder="Enter your Email"]').exists()).toBe(true)
    
    // Check submit button
    expect(form.find('button[type="submit"]').text()).toBe('Subscribe Now')
  })

  it('validates form inputs and shows error when invalid', async () => {
    const wrapper = mount(NewsFeed)
    
    // Mock window.alert
    const alertMock = vi.fn()
    window.alert = alertMock
    
    // Submit form without filling inputs
    await wrapper.find('form').trigger('submit')
    
    // Should show validation error
    expect(alertMock).toHaveBeenCalledWith('Validation failed')
  })

  it('submits form successfully when inputs are valid', async () => {
    // Setup fake timers
    vi.useFakeTimers()
    
    // Mock successful axios post
    vi.mocked(axios.post).mockResolvedValueOnce({})
    
    const wrapper = mount(NewsFeed)
    
    // Mock window.alert
    const alertMock = vi.fn()
    window.alert = alertMock
    
    // Fill form inputs
    await wrapper.find('input[placeholder="Enter full Name"]').setValue('Test User')
    await wrapper.find('input[placeholder="Enter your Email"]').setValue('test@example.com')
    
    // Submit form
    await wrapper.find('form').trigger('submit')
    
    // Wait for promises to resolve
    await flushPromises()
    
    // Should call axios.post with correct data
    expect(axios.post).toHaveBeenCalledWith(
      'https://charity-6b405-default-rtdb.firebaseio.com/subscribe.json',
      {
        name: 'Test User',
        email: 'test@example.com'
      }
    )
    
    // Should show success message
    expect(alertMock).toHaveBeenCalledWith('You subscribed successfully')
    
    // Wait for the timeout to clear form
    vi.advanceTimersByTime(2000)
    
    // Need to force Vue to update the DOM after the state changes
    await flushPromises()
    await nextTick()
    
    // Form should be cleared
    const nameInput = wrapper.find('input[placeholder="Enter full Name"]').element as HTMLInputElement
    const emailInput = wrapper.find('input[placeholder="Enter your Email"]').element as HTMLInputElement
    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    
    // Restore real timers
    vi.useRealTimers()
  })

  it('validates email format', async () => {
    const wrapper = mount(NewsFeed)
    
    // Mock window.alert
    const alertMock = vi.fn()
    window.alert = alertMock
    
    // Fill form with invalid email
    await wrapper.find('input[placeholder="Enter full Name"]').setValue('Test User')
    await wrapper.find('input[placeholder="Enter your Email"]').setValue('invalid-email')
    
    // Submit form
    await wrapper.find('form').trigger('submit')
    
    // Should show validation error
    expect(alertMock).toHaveBeenCalledWith('Validation failed')
    
    // Axios post should not be called
    expect(axios.post).not.toHaveBeenCalled()
  })
})
