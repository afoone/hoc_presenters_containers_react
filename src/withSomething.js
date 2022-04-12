const withSomething = Comp => props => {
  const {
    object = {
      a: 1,
    },
    color = 'red',
    ...rest
  } = props
  return (
    <div style={{ color }} object={object}>
      <Comp {...rest} />
    </div>
  )
}

export default withSomething
