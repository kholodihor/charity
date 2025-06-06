import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Slide from '../slider/Slide.vue'

describe('Slide', () => {
  it('renders correctly', () => {
    const wrapper = mount(Slide, {
      slots: {
        default: '<div class="test-content">Slide Content</div>'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('slide')
  })

  it('renders slot content', () => {
    const wrapper = mount(Slide, {
      slots: {
        default: '<div class="test-content">Slide Content</div>'
      }
    })

    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slide Content')
  })
})
