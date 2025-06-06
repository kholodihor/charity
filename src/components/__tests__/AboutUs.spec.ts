import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutUs from '../AboutUs.vue'

describe('AboutUs Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(AboutUs)
    
    // Check if the component renders
    expect(wrapper.find('.box').exists()).toBe(true)
    
    // Check if the title is rendered correctly
    expect(wrapper.find('h1').text()).toBe('Fight for right cause for save the world')
    
    // Check if the "About Us" text is present
    expect(wrapper.find('span').text()).toContain('About Us')
    
    // Check if the paragraph text is present
    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.find('p').text()).toContain('From hunger to disaster relief')
    
    // Check if the motivation section is present
    expect(wrapper.find('.motivation').exists()).toBe(true)
    
    // Check if the list items are rendered
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBe(4)
    expect(listItems[0].text()).toContain('Food and water charity')
    expect(listItems[1].text()).toContain('Sent a gift anytime')
    expect(listItems[2].text()).toContain('Make donation')
    expect(listItems[3].text()).toContain('24/7 support')
    
    // Check if the quote is present
    expect(wrapper.find('cite').text()).toBe('Mironton T.')
    expect(wrapper.find('.img span').text()).toContain('Life is a long lesson in humanity')
  })
  
  it('renders all required images', () => {
    const wrapper = mount(AboutUs)
    
    // Check if all images are rendered
    const images = wrapper.findAll('img')
    expect(images.length).toBe(4)
    
    // Check image sources
    expect(images[0].attributes('src')).toBe('/img/water.webp')
    expect(images[1].attributes('src')).toBe('/img/medicine.webp')
    expect(images[2].attributes('src')).toBe('/img/school.webp')
    expect(images[3].attributes('src')).toBe('/img/motivation-image.webp')
  })
})
