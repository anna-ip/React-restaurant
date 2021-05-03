import { render, screen } from '@testing-library/react'
import App from './App'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
configure({ adapter: new Adapter() })

test('<App/> renders correctly using enzyme', () => {
  const tree = shallow(<App />)
  expect(toJson(tree)).toMatchSnapshot()
})
