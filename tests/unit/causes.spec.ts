import LatestCauses from '@/components/cards/LatestCauses.vue';
import { createPinia, setActivePinia } from 'pinia';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { useRefsStore } from '@/stores/refs.store';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('useRefsStore', () => {
  let store: ReturnType<typeof useRefsStore>;

  beforeEach(() => {
    store = useRefsStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test('creates a store', () => {
    expect(store).toBeDefined();
  });
});

describe('LatestCauses.vue', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(LatestCauses);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render section subtitle', () => {
    const subtitle = wrapper.get('[data-test="subtitle"]');
    expect(subtitle.text()).toContain('Causes');
  });

  it('should render correct amount of cards', () => {
    const length = useRefsStore().cards.length
    expect(wrapper.findAll('[data-test="card"]')).toHaveLength(length);
  });

  it('card should contain correct value', () => {
    const cards = wrapper.findAll('[data-test="card"]')
    expect(cards[0].text()).toContain(45000)
  });
});
