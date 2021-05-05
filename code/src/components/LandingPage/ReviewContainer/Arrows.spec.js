import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'
import Arrows from './Arrows'

test('<Arrows/> renders correctly', () => {
  const tree = renderer.create(<Arrows />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('<Arrows/> renders two buttons', () => {
  render(<Arrows />)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2)
})
