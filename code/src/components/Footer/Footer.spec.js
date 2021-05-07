import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('<Footer/>', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // test that the Footer component contains adress and phone no
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
