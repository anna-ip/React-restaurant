import React from 'react'
import { shallow } from 'enzyme'
import Links from './Links.js'

//mock the react-router to be able to snapshot the Link component
jest.mock('react-router-dom')

const props = {
  to: '/menu',
  text: 'Take me to the',
}

describe('<Links/>', () => {
  test('Render correctly', () => {
    const wrapper = shallow(<Links props={props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test.skip('Simulate Link click', () => {
    const component = shallow(<Links props={props} />)
    const Links = component.find('Link.styledLink')
    console.log(Links)
    // Links.simulate('click')
    // expect(component.find('Link.styledLink').length).toEqual(1)
  })

  // test render props?
  test.skip('renders text', () => {
    const component = shallow(<Links props={props} />)
    expect(component.props().text).toBe('Take me to the')
  })
})
