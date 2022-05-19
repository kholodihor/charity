import { createPinia, setActivePinia } from 'pinia';
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
