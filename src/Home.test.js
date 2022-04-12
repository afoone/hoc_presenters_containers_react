import { render, screen } from '@testing-library/react'
import React from 'react'
import Home, { _ } from './Home'

const { MemoizedHomePresenter } = _

describe('home', () => {
  it('should render', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('should render what i want', () => {
    render(<MemoizedHomePresenter someSideEffect='hello world' />)
    screen.getByText('hello world')
  })

  it('should pass props to the component', () => {
    const mockRender = jest.fn()
    render(<Home mockRender={mockRender} />)
    expect(mockRender).toHaveBeenCalledWith('mi resultado')
  })
})
