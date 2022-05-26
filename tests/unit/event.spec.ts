/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPinia, setActivePinia } from 'pinia';
import { mount, shallowMount, VueWrapper } from '@vue/test-utils';
import Event from '@/components/Event.vue';
import { useEventStore } from '@/stores/event.store';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('useEventStore', () => {
  let store: ReturnType<typeof useEventStore>;

  beforeEach(() => {
    store = useEventStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test('creates a store', () => {
    expect(store).toBeDefined();
  });
});

describe('Event.vue', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(Event);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render event text', () => {
    const wrapper = mount(Event);
    const event = wrapper.get('[data-test="event"]');
    expect(event.text()).toContain('New York');
  });

  it('button has correct text', () => {
    const wrapper = shallowMount(Event);
    expect(wrapper.find('.book').text()).toEqual('Book Your Table');
  });

  it('should contain 2 elements', () => {
    const wrapper = mount(Event);
    expect(wrapper.findAll('[data-test="event"]')).toHaveLength(2);
  });

  it('should add new event', async () => {
    const wrapper = mount(Event);
    await wrapper.get('[data-test="new-event-date"]').setValue('20.05.2022');
    await wrapper.get('[data-test="new-event-title"]').setValue('New Item');
    await wrapper.get('[data-test="new-event-place"]').setValue('Kyiv');
    await wrapper.get('[data-test="form"]').trigger('submit');
  });

  it('should contain 3 elements now', () => {
    const wrapper = mount(Event);
    expect(wrapper.findAll('[data-test="event"]')).toHaveLength(3);
  });
});
