import React from 'react'
import { shallow } from 'enzyme'

const HookWrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined
  return <div hook={hook} />
}

describe('<useViewport/>', () => {
  test('HookWrapper renders', () => {
    const wrapper = shallow(<HookWrapper />)
    expect(wrapper.exists()).toBeTruthy()
  })
})
