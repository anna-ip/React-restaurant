import React from 'react'
import renderer from 'react-test-renderer'
import MenuCard from './MenuCard'

it('renders correctly', () => {
  const tree = renderer.create(<MenuCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
