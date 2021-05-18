import React from 'react'
import { shallow } from 'enzyme'
import useCarousel from './useCarousel'

const data = [
  {
    id: 1,
    name: 'susan smith',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
]

const HookWrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined
  return <div hook={hook} />
}

describe('<useCArousel/>', () => {
  test('should render', () => {
    const wrapper = shallow(<HookWrapper />)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should set inital value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useCarousel(data)} />)
    const { hook } = wrapper.find('div').props()
    const [nextReview, prevReview, quote] = hook
    expect(quote).toBe(data[0])
  })

  // test nextReview
  // test prevReview
})
