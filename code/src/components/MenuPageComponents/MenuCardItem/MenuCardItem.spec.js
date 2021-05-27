import React from 'react'
import { shallow } from 'enzyme'
import MenuCardItem from './MenuCardItem'

const menu = {
  category: 'shakes',
  desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  id: 9,
  img: 'pexels-alexander-mils-2103945.jpg',
  price: '100kr',
  title: 'quarantine buddy',
}

describe('<MenuCardItem/>', () => {
  test('Renders correctly', () => {
    const wrapper = shallow(
      <MenuCardItem menu={menu} src={`assets/${menu.img}`} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('should set logo image src correctly', () => {
    const wrapper = shallow(
      <MenuCardItem menu={menu} src={`assets/${menu.img}`} />
    )
    const image = wrapper.find('img')
    expect(image.getElement(0).props.src).toEqual(
      'assets/pexels-alexander-mils-2103945.jpg'
    )
  })
})
