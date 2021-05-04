import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import Links from './Links.js'

//mock the react-router to be able to snapshot the Link component
jest.mock('react-router-dom')

test('<Link /> renders "null"', () => {
  //not sure this is the correct way?
  Router.mockReturnValue({
    Router: () => {},
  })

  const tree = renderer
    .create(<Links to="http://localhost:3000">Go to home page</Links>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
