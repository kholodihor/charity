import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Charity Organisation')
  })

  it('shows login button when not logged in', () => {
    const wrapper = mount(Header)
    // By default isLoggedIn is false
    const loginButton = wrapper.find('button')
    expect(loginButton.exists()).toBe(true)
    expect(loginButton.text()).toBe('Login')
  })

  it('toggles login state when button is clicked', async () => {
    const wrapper = mount(Header)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.name').exists()).toBe(true)
  })
})
