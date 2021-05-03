import React from 'react'
//import renderer from 'react-test-renderer'
import LandingPage from './LandingPage'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() })

test('<LandingPage/> renders correctly using enzyme', () => {
  const tree = shallow(<LandingPage />)
  expect(toJson(tree)).toMatchSnapshot()
})

// test('Render correctly', () => {
//   // TypeError: Cannot read property 'reviews' of undefined
//   // const tree = renderer.create(<LandingPage />).toJSON()
//   // console.log(tree)
//   // expect(tree).toMatchSnapshot()
// })
