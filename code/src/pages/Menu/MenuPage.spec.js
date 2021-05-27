import React from 'react'
import MenuPage, { filterMenus } from './MenuPage'
import { shallow } from 'enzyme'

jest.mock('React', () => ({
  ...jest.requireActual('React'),
  useContext: () => [fakeContext],
}))

const fakeContext = {
  menus: [
    {
      id: 1,
      title: 'buttermilk pancakes Gurka',
      category: 'breakfast',
      price: '250kr',
      img: 'pexels-ash-376464.jpg',
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    },
    {
      id: 2,
      title: 'biff rydberg',
      category: 'lunch',
      price: '250kr',
      img: 'pexels-ash-376464.jpg',
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    },
  ],
}

describe('<MenuPage/>', () => {
  test('Render Correctly', () => {
    const menuPage = shallow(<MenuPage />)

    expect(menuPage).toMatchSnapshot()
  })
})

describe('filterMenus', () => {
  test('filters by category', () => {
    const filteredItems = filterMenus(fakeContext.menus, 'breakfast')
    expect(filteredItems).toHaveLength(1)
  })

  test('filterMenu when no category exist', () => {
    const filteredItems = filterMenus(
      fakeContext.menus,
      'categorythatdoesnotexist'
    )
    expect(filteredItems).toHaveLength(0)
  })
})
