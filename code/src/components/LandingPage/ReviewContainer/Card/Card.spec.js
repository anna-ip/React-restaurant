import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import Card from './Card'

const quote = {
  id: 1,
  name: 'susan smith',
  text:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
}

describe('<Card/>', () => {
  test('Renders correctly with enzyme', () => {
    const wrapper = shallow(<Card quote={quote} />)
    expect(wrapper).toMatchSnapshot()
  })

  // returns undefined
  // test.skip('except quote props', () => {
  //   const wrapper = shallow(<Card quote={quote} />)
  //   expect(wrapper.props().quote).toEqual(quote)
  // })

  test('contains text', () => {
    const wrapper = shallow(<Card quote={quote} />)
    const value = wrapper.find('p').text()
    expect(value).toEqual(
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    )
  })

  test('render name', () => {
    render(<Card quote={quote} />)
    expect(screen.getByRole('heading')).toHaveTextContent('susan smith')
  })
})
