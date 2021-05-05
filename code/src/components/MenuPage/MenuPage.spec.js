import React, { useContext } from 'react'
import { getByRole, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import MenuPage from './MenuPage'
import { MenuContext } from '../../App'

const menus = jest.fn()

test.skip('<MenuPage/> renders correctly', () => {
  const tree = renderer.create(<MenuPage value={{ menus }} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test.skip('<MenuPage/> has a heading that displays Menu', () => {
  render(
    <MenuContext.Provider value={{ menus }}>
      <MenuPage />
    </MenuContext.Provider>
  )
  expect(getByRole('heading', { name: 'Menu' })).toBeInTheDocument()
  screen.debug()
})
