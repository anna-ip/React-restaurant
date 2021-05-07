import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import Links from './Links.js'
import { shallow } from 'enzyme'

//mock the react-router to be able to snapshot the Link component
jest.mock('react-router-dom')

describe('<Links/>', () => {
  const props = {
    to: '/menu',
    text: 'Take me to the',
  }

  test('<Link /> renders "null"', () => {
    //not sure this is the correct way?
    Router.mockReturnValue({
      Router: () => {},
    })

    const tree = renderer
      .create(<Links to="/menu">Take me to the</Links>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Render correctly', () => {
    const wrapper = shallow(<Links props={props} />)
    expect(wrapper).toMatchSnapshot()
  })

  // test render props?
})
