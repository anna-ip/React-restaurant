import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'

test('<Card/> renders correctly', () => {
  const tree = renderer.create(<Card quote="" />).toJSON()
  expect(tree).toMatchSnapshot()
})

//? test for the content or props
