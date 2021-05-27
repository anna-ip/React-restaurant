import React from 'react'
import { shallow } from 'enzyme'
import Arrows from './Arrows'

const setup = () => shallow(<Arrows />)

describe('<Arrows/>', () => {
  test('Renders correctly', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })

  test.skip('Renders two buttons/arrows', () => {
    const wrapper = setup()
    const buttons = wrapper.find('button')
    expect(buttons.length).toBe(2)
  })

  test.skip('prev btn have been clicked', () => {
    const component = setup()
    const button = component.find('button.prev')
    button.simulate('click')
    expect(component.find('button.prev').length).toEqual(1)
  })

  test.skip('next btn have been clicked', () => {
    const component = setup()
    const button = component.find('button.next')
    button.simulate('click')
    expect(component.find('button.next').length).toEqual(1)
  })
})
