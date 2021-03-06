import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('<Footer/>', () => {
  test('Renders correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Check the name', () => {
    const wrapper = shallow(<Footer />)
    const heading = wrapper.find('h2')
    const result = heading.text()
    expect(result).toBe('The Diner')
  })

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
})
