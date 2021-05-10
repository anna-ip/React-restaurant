import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header/>', () => {
  test('Renders correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Has a heading with the Restaurant name', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', { name: 'The Diner' })
    ).toBeInTheDocument()
  })

  test('Contains the Restaurant name', () => {
    const wrapper = shallow(<Header />)
    const heading = wrapper.find('h1')
    const result = heading.text()
    expect(result).toBe('The Diner')
  })
})
