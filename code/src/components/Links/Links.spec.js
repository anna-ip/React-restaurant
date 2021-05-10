import React from 'react'
import { shallow } from 'enzyme'
import Links from './Links.js'

//mock the react-router to be able to snapshot the Link component
jest.mock('react-router-dom')

describe('<Links/>', () => {
  const props = {
    to: '/menu',
    text: 'Take me to the',
  }

  test('Render correctly', () => {
    const wrapper = shallow(<Links props={props} />)
    expect(wrapper).toMatchSnapshot()
  })

  // test render props?
})
