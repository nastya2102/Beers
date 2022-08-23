import React from 'react'
import { render } from '@testing-library/react'
import PolarChart from '../index'

describe('PolarChart', () => {
  test('should render PolarChart component', () => {
    const { container } = render(<PolarChart data={[1, 2]} allData={[{}, {}]} handleClickBeer={() => {}}/>)

    expect(container).toBeTruthy()
  })

  test('should match snapshot PolarChart component', () => {
    const { container } = render(<PolarChart data={[1, 2]} allData={[{}, {}]} handleClickBeer={() => {}}/>)

    expect(container).toMatchSnapshot()
  })
})
