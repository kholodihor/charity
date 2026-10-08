import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import Slider from '../slider/Slider.vue'

// Exposed refs are unwrapped on the component instance
interface SliderExposed {
  currentSlide: number
  nextSlide: () => void
}

const threeSlides = {
  slots: { default: () => [1, 2, 3].map(() => h('div', { class: 'slide' })) },
}

describe('Slider', () => {
  it('renders correctly', () => {
    const wrapper = mount(Slider)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.classes()).toContain('slider')
  })

  it('starts with currentSlide set to 1', () => {
    const wrapper = mount(Slider)
    expect((wrapper.vm as unknown as SliderExposed).currentSlide).toBe(1)
  })

  it('wraps around after the last slide', async () => {
    const wrapper = mount(Slider, threeSlides)
    const vm = wrapper.vm as unknown as SliderExposed
    vm.nextSlide()
    vm.nextSlide()
    expect(vm.currentSlide).toBe(3)
    vm.nextSlide()
    expect(vm.currentSlide).toBe(1)
  })

  it('sets up auto-play interval and clears it on unmount', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval')
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const wrapper = mount(Slider)
    expect(setIntervalSpy).toHaveBeenCalled()
    wrapper.unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    setIntervalSpy.mockRestore()
    clearIntervalSpy.mockRestore()
  })
})
