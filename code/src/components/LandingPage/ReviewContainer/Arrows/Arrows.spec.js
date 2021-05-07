import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Arrows from './Arrows'

//const clickFn = jest.fn()

describe('<Arrows/>', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(<Arrows />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Renders two buttons', () => {
    const wrapper = shallow(<Arrows />)
    const buttons = wrapper.find('button')
    expect(buttons.length).toBe(2)
  })

  //test btn click ?
  // test.skip('click have been called', () => {
  //   const component = shallow(<Arrows onClick={clickFn} />)
  //   component.find('button.prev').simulate('click')
  //   expect(clickFn).toHaveBeenCalled()
  // })
})
