import React from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'
import Links from '../Links/Links'
import Image from '../../images/pexels-emre-can-2079438.jpg'

describe('<LandingPage/>', () => {
  test('Renders correctly using enzyme', () => {
    const tree = shallow(<LandingPage />)
    expect(tree).toMatchSnapshot()
  })

  test('Simulate Link click', () => {
    const component = shallow(<LandingPage />)
    const Link = component.find(Links).last()
    Link.simulate('click')
    expect(component.find(Links).length).toBe(2)
  })

  // Test Review component?
  // Test there are links?
  // Test there is an image?
  console.log('Image:', Image)
  test.skip('renders image', () => {
    const wrapper = shallow(<LandingPage />)
    const image = wrapper.find('.img')

    expect(image.src).toEqual(Image)
  })
})
