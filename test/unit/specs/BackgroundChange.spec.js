import { mount } from 'vue-test-utils'
import BackgroundChange from '@/components/BackgroundChange'

describe('BackgroundChange', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BackgroundChange)
  })

  it('should render correct contents', () => {
    expect(wrapper.find('h1').text()).toBe('Change Background')
  })

  it('defaults to a count of 0', () => {
    expect(wrapper.vm.counter).toBe(0)
  })

  it('should increment counter value', () => {
    expect(wrapper.vm.counter).toBe(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.counter).toBe(1)
  })

  it('presents the current count', () => {
    expect(wrapper.find('h2').html()).toContain(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.find('h2').html()).toContain(1)
  })

  it('should change to a random background colour', () => {
    expect(wrapper.find('#counter').hasStyle('background-color', 'rgba(0, 0, 0)')).toBe(true)
  })
})
