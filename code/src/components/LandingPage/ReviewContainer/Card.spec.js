import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'

test('Render correctly', () => {
  // //const quote = [{ name: 'Smoothie', text: 'Lorem' }]
  const tree = renderer.create(<Card quote="" />).toJSON()
  expect(tree).toMatchSnapshot()
})
