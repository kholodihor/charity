import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.box').exists()).toBe(true)
  })

  it('displays contact information', () => {
    const wrapper = mount(Footer)
    expect(wrapper.find('.phone').exists()).toBe(true)
    expect(wrapper.text()).toContain('+123 456 789')
    expect(wrapper.text()).toContain('email@.mail')
  })

  it('displays social media links', () => {
    const wrapper = mount(Footer)
    const socialLinks = wrapper.findAll('.social a')
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it('displays gallery images', () => {
    const wrapper = mount(Footer)
    const images = wrapper.findAll('.gallery img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('displays current year', () => {
    const wrapper = mount(Footer)
    const currentYear = new Date().getFullYear().toString()
    expect(wrapper.text()).toContain(currentYear)
  })
})
