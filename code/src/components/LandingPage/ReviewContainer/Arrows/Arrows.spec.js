import React from 'react'
import { shallow } from 'enzyme'
import Arrows from './Arrows'

//const clickFn = jest.fn()

const setup = () => shallow(<Arrows />)

describe('<Arrows/>', () => {
  test('Renders correctly', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })

  test('Renders two buttons/arrows', () => {
    const wrapper = setup()
    const buttons = wrapper.find('button')
    expect(buttons.length).toBe(2)
  })

  test('click have been clicked', () => {
    const component = shallow(<Arrows />)
    const button = component.find('button.prev')
    button.simulate('click')
    expect(component.find('button.prev').length).toEqual(1)
  })
})
