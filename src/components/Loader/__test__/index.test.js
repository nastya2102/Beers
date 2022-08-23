import React from 'react'
import { render } from '@testing-library/react'
import Loader from '../index'

describe('Loader', () => {
  test('should render Loader component', () => {
    const { container } = render(<Loader />)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Loader component', () => {
    const { container } = render(<Loader />)

    expect(container).toMatchSnapshot()
  })
})
