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
    const x = Math.floor(Math.random() * 255)
    const y = Math.floor(Math.random() * 255)
    const z = Math.floor(Math.random() * 255)

    const bgColor = `rgb(${x}, ${y}, ${z})`

    expect(wrapper.find('#count').hasStyle('background-color', bgColor)).toBe(false)
  })

  it('should have transform properties', () => {
    expect(wrapper.find('#boxmove').hasStyle('transform', 'translate(0, 0, 0)')).toBe(true)
  })
})
