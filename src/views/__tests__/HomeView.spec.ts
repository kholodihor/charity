import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import HomeView from '../HomeView.vue'

// Sections that talk to Firebase or the router are covered by their own specs
const mountHome = () =>
  mount(HomeView, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
      stubs: {
        NavBar: true,
        Header: true,
        Donation: true,
        LatestCauses: true,
        ChoseUs: true,
        Events: true,
        NewsFeed: true,
        Footer: true,
      },
    },
  })

describe('HomeView', () => {
  it('renders correctly', () => {
    const wrapper = mountHome()
    expect(wrapper.find('.home-container').exists()).toBe(true)
  })

  it('displays motto overlay', () => {
    const wrapper = mountHome()
    const mottoOverlay = wrapper.find('.motto-overlay')
    expect(mottoOverlay.exists()).toBe(true)
    expect(mottoOverlay.find('h1').text()).toContain('Helping Hands')
  })

  it('toggles the side menu from the nav button', async () => {
    const wrapper = mountHome()
    const button = wrapper.find('#nav-icon')
    expect(button.attributes('aria-expanded')).toBe('false')
    await button.trigger('click')
    expect(button.attributes('aria-expanded')).toBe('true')
    await button.trigger('click')
    expect(document.body.style.position).toBe('')
  })
})
