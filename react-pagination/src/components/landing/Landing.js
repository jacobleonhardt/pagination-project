import React from 'react'

export const Landing = ({startPic}) => {
  return (
    <>
      <h2>Welcome! Here's a dog.</h2>
      <img className='img-fluid' src={startPic} alt="" />
    </>
  )
}
