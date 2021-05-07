import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header/>', () => {
  test('<Header/> renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('<Header/> has a heading with the Restaurant name', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', { name: 'The Diner' })
    ).toBeInTheDocument()
  })

  test('<Header/> contains the Restaurant name', () => {
    const wrapper = shallow(<Header />)
    const heading = wrapper.find('h1')
    const result = heading.text()
    expect(result).toBe('The Diner')
  })
})
