import React from 'react'
import LandingPage from './LandingPage'
import { shallow } from 'enzyme'
import Image from '../../images/pexels-emre-can-2079438.jpg'

describe('<LandingPage/>', () => {
  test('Renders correctly using enzyme', () => {
    const tree = shallow(<LandingPage />)
    expect(tree).toMatchSnapshot()
  })

  // Test Review component?
  // Test there is an image?
  console.log('Image:', Image)
  test.skip('renders image', () => {
    const wrapper = shallow(<LandingPage />)
    const image = wrapper.find('.img')

    expect(image.src).toEqual(Image)
  })
})
