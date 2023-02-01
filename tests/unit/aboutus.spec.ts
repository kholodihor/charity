import AboutUs from '@/components/AboutUs.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';

describe('AboutUs.vue', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(AboutUs);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render section title', () => {
    const event = wrapper.find('h1');
    expect(event.text()).toContain('Fight for right cause for save the world');
  });

  it('should contain li elements', () => {
    expect(wrapper.findAll('li')).toHaveLength(4);
  });
});
