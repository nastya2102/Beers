import React from 'react'
import { render } from '@testing-library/react'
import NothingFound from '../index'

describe('NothingFound', () => {
  test('should render NothingFound component', () => {
    const { container } = render(<NothingFound />)

    expect(container).toBeTruthy()
  })

  test('should match snapshot NothingFound component', () => {
    const { container } = render(<NothingFound />)

    expect(container).toMatchSnapshot()
  })
})
