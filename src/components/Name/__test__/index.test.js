import React from 'react'
import { render } from '@testing-library/react'
import Name from '../index'

describe('Name', () => {
  test('should render Name component', () => {
    const { container } = render(<Name onClick={() => {}}><span>123</span></Name>)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Name component', () => {
    const { container } = render(<Name onClick={() => {}}><span>123</span></Name>)

    expect(container).toMatchSnapshot()
  })
})
