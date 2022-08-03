import React from 'react'

export const Home = ({ startPic, selectBreed }) => {
  return (
    <div>
      {selectBreed ? (
        selectBreed.map(pic => {
          return <img src={pic} />
        })
      ) : <img className='mh-50' src={startPic} />}
    </div>
  )
}
