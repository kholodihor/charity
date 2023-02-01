import ChooseUs from '@/components/ChooseUs.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';

describe('ChooseUs.vue', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(ChooseUs);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render section title', () => {
    const title = wrapper.find('h1');
    expect(title.text()).toContain('The Perfect Help');
  });

  it('should render cards', () => {
    expect(wrapper.findAll('[data-test="card"]')).toHaveLength(2);
    expect(wrapper.findAll('.font-effect-shadow-multiple')).toHaveLength(2);
    expect(wrapper.findAll('.font-effect-shadow-multiple')[0].text()).toContain('01');
  });
});
