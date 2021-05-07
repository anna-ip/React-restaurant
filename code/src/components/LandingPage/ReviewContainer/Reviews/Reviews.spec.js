import * as React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import Reviews from './Reviews'

import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

beforeEach(() => {
  // might need to mock useState and useEffect aswell
  //the useeffect mock?
  const reviewState = jest
    .spyOn(React, 'useState')
    .mockReturnValueOnce([undefined, jest.fn()])
    .mockReturnValueOnce([0, jest.fn()])
  //console.log(reviewState(), reviewState())

  jest.spyOn(React, 'useContext').mockReturnValue([
    {
      id: 1,
      name: 'susan smith',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
  ])
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('<Reviews/>', () => {
  test.skip('<Renders correctly using enzyme', () => {
    const wrapper = shallow(<Reviews />)
    expect(wrapper.state('current')).toEqual(0)
  })
})
