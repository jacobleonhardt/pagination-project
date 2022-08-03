import React from 'react'

export const BreedPics = ({data}) => {
  return (
    <div className="mw-25">
      {data.map(pic => <img key={data.indexOf(pic)} src={pic} />)}
    </div>
  )
}
