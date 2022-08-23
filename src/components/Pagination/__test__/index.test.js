import React from 'react'
import { render } from '@testing-library/react'
import Pagination from '../index'

describe('Pagination', () => {
  test('should render Pagination component', () => {
    const { container } = render(<Pagination active={1} onChange={() => {}} isLastPage={true}/>)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Pagination component', () => {
    const { container } = render(<Pagination active={1} onChange={() => {}} isLastPage={true}/>)

    expect(container).toMatchSnapshot()
  })
})
