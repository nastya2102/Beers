import React from 'react'
import { render } from '@testing-library/react'
import Image from '../index'

describe('Image', () => {
  test('should render Image component', () => {
    const { container } = render(<Image />)

    expect(container).toBeTruthy()
  })

  test('should match snapshot Image component', () => {
    const { container } = render(<Image />)

    expect(container).toMatchSnapshot()
  })
})
