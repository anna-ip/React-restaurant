import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('render correctly', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})

// test that the Footer component contains adress and phone no
test('Check that there is a phone number', () => {
  render(<Footer />)
  expect(screen.getByText('08-5754933')).toBeInTheDocument()
})

test('Check that there is an adress', () => {
  render(<Footer />)
  expect(
    screen.getByText('Luddingsbo Mekanikusv 54, 129 88 Stockholm')
  ).toBeInTheDocument()
})
