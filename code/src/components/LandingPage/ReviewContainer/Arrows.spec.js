import React from 'react'
import renderer from 'react-test-renderer'
import Arrows from './Arrows'

test('Renders correctly', () => {
  const tree = renderer.create(<Arrows />).toJSON()
  expect(tree).toMatchSnapshot()
})
