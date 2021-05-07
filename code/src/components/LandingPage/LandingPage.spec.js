import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow } from 'enzyme'

describe('<LandingPage/>', () => {
  test('Renders correctly using enzyme', () => {
    const tree = shallow(<LandingPage />)
    expect(tree).toMatchSnapshot()
  })

  //Problems with reviews/context
  test.skip('<LandingPage/> renders the correct image', () => {
    renderer.create(
      <Router>
        <LandingPage />
      </Router>
    )
    const img = screen.getAllByAltText('restaurant')
    //not sure I can use this as src?
    expect(img.src).toEqual('../../images/pexels-emre-can-2079438.jpg')
  })

  // Test Review component?
  // Test there are links?
  // Test there is an image?
})
