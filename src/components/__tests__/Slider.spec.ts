import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from '../slider/Slider.vue'

describe('Slider', () => {
  it('renders correctly', () => {
    const wrapper = mount(Slider)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('slider')
  })

  it('starts with currentSlide set to 1', () => {
    const wrapper = mount(Slider)
    // Access the exposed ref value
    expect(wrapper.vm.currentSlide).toBe(1)
  })

  it('sets up auto-play interval', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval')
    mount(Slider)
    expect(setIntervalSpy).toHaveBeenCalled()
    setIntervalSpy.mockRestore()
  })
})
