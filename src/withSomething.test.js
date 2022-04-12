import { render } from '@testing-library/react'
import withSomething from './withSomething'

describe('withSomething', () => {
  const MockWithColorComponent = withSomething(props => (
    <div>Test Color {props.style}</div>
  ))

  it('should return a function', () => {
    const { container } = render(<MockWithColorComponent />)
    expect(container).toMatchSnapshot()
  })
})
