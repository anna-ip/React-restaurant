import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'

test('<Card/> renders correctly', () => {
  const tree = renderer.create(<Card quote="" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('<Card/> render name', () => {
  render(<Card quote={{ name: 'Bob', text: 'Lorem ipsum' }} />)
  expect(screen.getByRole('heading')).toHaveTextContent('Bob')
})
