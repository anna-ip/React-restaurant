import React from 'react'
//import renderer from 'react-test-renderer'
//import { render } from '@testing-library/jest-dom'
import Reviews from './Reviews'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() })

test('<Reviews/> renders correctly using enzyme', () => {
  // const tree = shallow(<Reviews />)
  // expect(toJson(tree)).toMatchSnapshot()
})

// test('render correctly', () => {
//   // const tree = renderer
//   //   .create(
//   //     <Reviews
//   //       reviews={{
//   //         id: 1,
//   //         name: 'susan smith',
//   //         text:
//   //           "I'm baby meggings twee health goth +1. Bicycle rig…ie, cold-pressed four dollar toast everyday carry",
//   //       }}
//   //     />
//   //   )
//   //   .toJSON()
//   // expect(tree).toMatchSnapshot()
// })

// id: 1,
// name: 'susan smith',
// text:
//   "I'm baby meggings twee health goth +1. Bicycle rig…ie, cold-pressed four dollar toast everyday carry",

// test('<Reviews/> matches the snapshot', () => {
//   const component = render(
//     <Reviews>
//       <div></div>
//     </Reviews>
//   )
//   expect(component.container).toMatchSnapshot()
// })
