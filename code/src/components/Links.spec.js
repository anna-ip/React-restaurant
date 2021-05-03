import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import Link from './Links.js'

//mock the react-router to be able to snapshot the Link component
jest.mock('react-router-dom')

it('<Link /> renders "null"', () => {
  //not sure this is the correct way?
  Router.mockReturnValue({})

  const tree = renderer
    .create(<Link to="http://localhost:3000">Go to home page</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
