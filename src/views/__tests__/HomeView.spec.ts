import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('renders correctly', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            images: {
              slides: ['slide1', 'slide2', 'slide3']
            }
          }
        })]
      }
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.home-container').exists()).toBe(true)
  })

  it('displays motto overlay', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            images: {
              slides: ['slide1', 'slide2', 'slide3']
            }
          }
        })]
      }
    })
    const mottoOverlay = wrapper.find('.motto-overlay')
    expect(mottoOverlay.exists()).toBe(true)
    expect(mottoOverlay.find('h1').text()).toContain('Helping Hands')
  })
})
