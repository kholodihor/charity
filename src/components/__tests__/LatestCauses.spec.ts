import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import LatestCauses from '../LatestCauses.vue'
import Card from '../Card.vue'
import { useRefsStore } from '@/stores/refs.store'

// Mock Firebase
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn().mockResolvedValue({
    forEach: (callback: (doc: { id: string, data: () => { name: string, sum: string, goal: string } }) => void) => {
      // Mock donation data
      const donations = [
        { id: '1', data: () => ({ name: 'John', sum: '100', goal: 'water' }) },
        { id: '2', data: () => ({ name: 'Jane', sum: '200', goal: 'water' }) },
        { id: '3', data: () => ({ name: 'Bob', sum: '150', goal: 'education' }) },
        { id: '4', data: () => ({ name: 'Alice', sum: '300', goal: 'medicine' }) }
      ]
      donations.forEach(callback)
    }
  })
}))

vi.mock('@/firebase/firebaseInit', () => ({
  db: {}
}))

describe('LatestCauses Component', () => {
  beforeEach(() => {
    // Create a fresh pinia instance for each test
    setActivePinia(createPinia())
    
    // Setup the store with test data
    const store = useRefsStore()
    store.cards = [
      {
        title: 'Water Project Title',
        subtitle: 'Water',
        goal: 45000,
        raised: 0, // Will be updated by component
        togo: 10000,
        image: 'card1'
      },
      {
        title: 'Education Project Title',
        subtitle: 'Education',
        goal: 45000,
        raised: 0, // Will be updated by component
        togo: 7000,
        image: 'card2'
      },
      {
        title: 'Medicine Project Title',
        subtitle: 'Medicine',
        goal: 45000,
        raised: 0, // Will be updated by component
        togo: 16000,
        image: 'card3'
      }
    ]
  })

  it('renders correctly with title and subtitle', async () => {
    const wrapper = mount(LatestCauses)
    
    // Check title section
    expect(wrapper.find('.causes-title').exists()).toBe(true)
    expect(wrapper.find('.causes-title h1').text()).toBe('Latest Causes')
    expect(wrapper.find('[data-test="subtitle"]').text()).toContain('Causes')
  })

  it('renders three Card components', async () => {
    const wrapper = mount(LatestCauses)
    
    // Wait for component to finish mounting and processing
    await vi.dynamicImportSettled()
    
    // Check if three cards are rendered
    const cards = wrapper.findAllComponents(Card)
    expect(cards.length).toBe(3)
  })

  it('passes correct props to Card components', async () => {
    const wrapper = mount(LatestCauses)
    
    // Wait for component to finish mounting and processing
    await vi.dynamicImportSettled()
    
    // Get all Card components
    const cards = wrapper.findAllComponents(Card)
    
    // Check first card (Water)
    expect(cards[0].props('title')).toBe('Water Project Title')
    expect(cards[0].props('subtitle')).toBe('Water')
    expect(cards[0].props('image')).toBe('card1')
    expect(cards[0].props('goal')).toBe(45000)
    
    // Check second card (Education)
    expect(cards[1].props('title')).toBe('Education Project Title')
    expect(cards[1].props('subtitle')).toBe('Education')
    expect(cards[1].props('image')).toBe('card2')
    expect(cards[1].props('goal')).toBe(45000)
    
    // Check third card (Medicine)
    expect(cards[2].props('title')).toBe('Medicine Project Title')
    expect(cards[2].props('subtitle')).toBe('Medicine')
    expect(cards[2].props('image')).toBe('card3')
    expect(cards[2].props('goal')).toBe(45000)
  })

  it('calculates donation sums correctly for each category', async () => {
    const wrapper = mount(LatestCauses)
    
    // Wait for component to finish mounting and processing
    await vi.dynamicImportSettled()
    
    // Get all Card components after donations are processed
    const cards = wrapper.findAllComponents(Card)
    
    // Check calculated raised amounts based on our mock data
    // Water: 100 + 200 = 300
    expect(cards[0].props('raised')).toBe(300)
    
    // Education: 150
    expect(cards[1].props('raised')).toBe(150)
    
    // Medicine: 300
    expect(cards[2].props('raised')).toBe(300)
  })
})
