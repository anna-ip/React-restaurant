import * as React from 'react'
import FilterBtn, { getCategoryFromSection } from './FilterBtn'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import { mockFilteredMenus } from '../MenuCard/MenuCard.spec'

beforeEach(() => {
  jest.spyOn(React, 'useContext').mockReturnValue(mockFilteredMenus)
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('<Filterbtn/>', () => {
  test.skip('render correctly', () => {
    const wrapper = mount(<FilterBtn />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('getCategoryFromSection', () => {
  test('returns the category if it exists', () => {
    const actualTitle = mockFilteredMenus[0].category
    const title = getCategoryFromSection(mockFilteredMenus[0])
    expect(title).toEqual(actualTitle)
  })

  test('returns all', () => {
    const title = getCategoryFromSection(undefined)
    expect(title).toEqual('all')
  })

  test('expect no category with the name banana', () => {
    const title = getCategoryFromSection(mockFilteredMenus[0])
    expect(title).not.toEqual('banana')
  })
})
