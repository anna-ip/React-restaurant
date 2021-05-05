import React from 'react'
import renderer from 'react-test-renderer'
import MenuCard from './MenuCard'

// renders null ?
test('<MenuCard/> renders correctly', () => {
  const tree = renderer.create(<MenuCard />).toJSON()
  expect(tree).toMatchSnapshot()
})

//? Test image render

//? Test props
//? Test title price desc.
