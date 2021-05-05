import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import FilterBtn from './FilterBtn'
import { MenuContext } from '../../App'

test.skip('render correctly', () => {
  const tree = renderer.create(<FilterBtn />).toJSON()
  expect(tree).toMatchSnapshot()
})

test.skip('<FilterBtn/> has a default btn all', () => {
  const menus = 'menus'
  const { getByRole } = render(
    <MenuContext.Provider value={menus}>
      <FilterBtn />
    </MenuContext.Provider>
  )
  expect(getByRole('button', { name: 'all' })).toBeInTheDocument()
})
