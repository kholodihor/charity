import { mount, shallowMount } from '@vue/test-utils';
import Event from '@/components/events/Event.vue';
import EventInput from '@/components/events/EventInput.vue';
import EventList from '@/components/events/EventList.vue';


describe('Event.vue', () => {
  it('should render event text', () => {
    const wrapperEvent = mount(Event);
    const event = wrapperEvent.get('[data-test="event"]');
    expect(event.text()).toContain('Year Renovation Programm 2021');
    expect(event.text()).toContain('New York');
  });
});

describe('Event.vue', () => {
  it('button has correct text', () => {
    const wrapperEvent = shallowMount(Event);
    expect(wrapperEvent.find('.book').text()).toEqual('Book Your Table');
  });
});
describe('Event.vue', () => {
  it('button has correct text', () => {
    const wrapperEvent = mount(Event)

    expect(wrapperEvent.find('.book').text()).toEqual('Book Your Table');
  });
});

describe('EventList.vue', () => {
  it('renders h1 tag', () => {
    const wrapperList = shallowMount(EventList);
    expect(wrapperList.find('h1').text()).toEqual('Featured Events');
  });
});

describe('EventList.vue', () => {
  it('should contain 2 elements', () => {
    const wrapperList = mount(EventList);
    expect(wrapperList.findAll('[data-test="event-item"]')).toHaveLength(2);
  });
});

describe('EventInput.vue', () => {
  it('should add new event', async () => {
    const wrapperInput = mount(EventInput);

    await wrapperInput
      .get('[data-test="new-event-date"]')
      .setValue('20.05.2022');
    await wrapperInput
      .get('[data-test="new-event-title"]')
      .setValue('New Item');
    await wrapperInput.get('[data-test="new-event-place"]').setValue('Kyiv');
    await wrapperInput.get('[data-test="form"]').trigger('submit');
  });
});
