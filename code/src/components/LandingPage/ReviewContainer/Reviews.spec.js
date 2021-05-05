import React from 'react'
import renderer from 'react-test-renderer'
// import shallowRenderer from 'react-test-renderer/shallow'
import { render } from '@testing-library/jest-dom'
import Reviews from './Reviews'

// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import toJson from 'enzyme-to-json'
// Enzyme.configure({ adapter: new Adapter() })

// test('<Reviews/> renders correctly using enzyme', () => {
//   const tree = shallow(<Reviews />)
//   expect(toJson(tree)).toMatchSnapshot()
// })

test.skip('<Reviews/> renders correctly', () => {
  // const tree = renderer
  //   .create(
  //     <Reviews storeReviews={{ reviews: { id: 1, name: 'susan', text: '' } }} />
  //   )
  //   .toJSON()
  // expect(tree).toMatchSnapshot()
})
