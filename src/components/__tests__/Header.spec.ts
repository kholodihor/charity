import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

type AuthCallback = (user: { displayName: string } | null) => void
let authCallback: AuthCallback = () => {}

vi.mock('@/firebase/firebaseInit', () => ({ auth: {} }))
vi.mock('@/firebase/auth', () => ({ signInWithGoogle: vi.fn().mockResolvedValue({}) }))
vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((_auth, cb: AuthCallback) => {
    authCallback = cb
    return vi.fn()
  }),
  signOut: vi.fn().mockResolvedValue(undefined),
}))

import Header from '../Header.vue'
import { signInWithGoogle } from '@/firebase/auth'

describe('Header', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Charity Organisation')
  })

  it('shows login button when not logged in', () => {
    const wrapper = mount(Header)
    const loginButton = wrapper.find('button')
    expect(loginButton.exists()).toBe(true)
    expect(loginButton.text()).toBe('Login with Google')
  })

  it('starts Google sign-in when login button is clicked', async () => {
    const wrapper = mount(Header)
    await wrapper.find('button').trigger('click')
    expect(signInWithGoogle).toHaveBeenCalled()
  })

  it('shows user name and logout button when logged in', async () => {
    const wrapper = mount(Header)
    authCallback({ displayName: 'Jane Doe' })
    await flushPromises()
    expect(wrapper.find('.name').text()).toBe('Jane Doe')
    expect(wrapper.find('button').text()).toBe('Logout')
  })
})
