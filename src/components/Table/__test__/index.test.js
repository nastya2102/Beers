import React from 'react'
import { render } from '@testing-library/react'
import Table from '../index'

describe('Table', () => {
  test('should render Table component', () => {
    const { container } = render(<Table data={1} handleClickBeer={() => {}} currentSort={"none"} handleChangeSort={() => {}}/>)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Table component', () => {
    const { container } = render(<Table data={1} handleClickBeer={() => {}} currentSort={"none"} handleChangeSort={() => {}}/>)

    expect(container).toMatchSnapshot()
  })
})
