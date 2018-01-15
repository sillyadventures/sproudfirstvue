import { mount } from 'vue-test-utils'
import HomePage from '@/components/HomePage'

describe('HomePage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HomePage)
  })

  it('should render correct contents', () => {
    expect(wrapper.find('h1').text()).toBe('Home Page')
  })

  it('should render the correct message', () => {
    const input = wrapper.find('input')
    input.element.value = 'Something'
    input.trigger('input')

    expect(wrapper.find('h2').text).toBe('Something')
  })
})
