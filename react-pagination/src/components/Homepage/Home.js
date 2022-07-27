import React, { useReducer } from 'react'

export const Home = () => {

  const [state, dispatch] = useReducer((state, action) => {
    const { type } = action
    switch (type) {
      case type === 'search':
        break;
      default:

    }
  })

  return (
    <div>Home</div>
  )
}
