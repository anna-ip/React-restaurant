import React from 'react'
import { shallow } from 'enzyme'
import useViewport from './useViewport'

const HookWrapper = (props) => {
  const hook = props.hook ? props.hook() : undefined
  return <div hook={hook} />
}

describe('<useViewport/>', () => {
  test('HookWrapper renders', () => {
    const wrapper = shallow(<HookWrapper />)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should set initial value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useViewport()} />)
    const { hook } = wrapper.find('div').props()
    const { width } = hook
    expect(width).toBe(1024)
  })
})
