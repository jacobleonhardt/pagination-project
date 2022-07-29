import React from 'react'

export const Home = ({ startPic, selectBreed }) => {
  return (
    <div>
      {selectBreed ? (
        selectBreed.map(pic => {
          return <img src={pic} />
        })
      ) : <img className='mw-30 m-3' src={startPic} />}
    </div>
  )
}
