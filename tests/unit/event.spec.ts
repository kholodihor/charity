import { mount } from '@vue/test-utils';
import Event from '@/components/events/Event.vue';
import EventInput from '@/components/events/EventInput.vue';
import EventList from '@/components/events/EventList.vue';

describe('Event.vue', () => {
  it('should render event text', () => {
    const wrapper = mount(Event);

    const event = wrapper.get('[data-test="event"]');

    expect(event.text()).toContain('Year Renovation Programm 2021');
    expect(event.text()).toContain('New York');
  });
});

describe('EventList.vue', () => {
  it('should contain', () => {
    const wrapperlist = mount(EventList);
    expect(wrapperlist.text()).toContain('Charity');
  });
});

describe('EventList.vue', () => {
  it('should plus', () => {
    const wrapperlist = mount(EventList);
    expect(wrapperlist.findAll('[data-test="event-item"]')).toHaveLength(2);
  });
});

describe('EventInput.vue', () => {
  it('should add new event', async () => {
    const wrapperinput = mount(EventInput);

    await wrapperinput
      .get('[data-test="new-event-date"]')
      .setValue('20.05.2022');
    await wrapperinput
      .get('[data-test="new-event-title"]')
      .setValue('New Item');
    await wrapperinput.get('[data-test="new-event-place"]').setValue('Kyiv');
    await wrapperinput.get('[data-test="form"]').trigger('submit');
  });
});
