import React from 'react'

const HomePresenter = ({ someSideEffect }) => <div>{someSideEffect}</div>

const MemoizedHomePresenter = React.memo(HomePresenter)

// export const Home = () => {
//   const someSideEffect = () => 'mi resultado'

//   return <MemoizedHomePresenter someSideEffect={someSideEffect()} />
// }

const Home = ({ mockRender }) => {
  const someSideEffect = 'mi resultado'
  const renderComponent = text => (
    <MemoizedHomePresenter someSideEffect={text} />
  )
  const render = mockRender || renderComponent
  return render(someSideEffect)
}

export const _ = {
  HomePresenter,
  MemoizedHomePresenter,
}

export default Home
