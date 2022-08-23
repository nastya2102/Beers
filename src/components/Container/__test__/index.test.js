import React from 'react'
import { render } from '@testing-library/react'
import Container from '../index'

describe('Container', () => {
  test('should render Container component', () => {
    const { container } = render(<Container><span>123</span></Container>)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Container component', () => {
    const { container } = render(<Container><span>123</span></Container>)

    expect(container).toMatchSnapshot()
  })
})
