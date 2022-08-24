import React from 'react'

export const BreedPics = ({data}) => {
  return (
    <div className="row grid">
      {data.map(pic => <img className="grid-item w-33 p-2 col col-md-4" key={data.indexOf(pic)} src={pic} alt=""/>)}
    </div>
  )
}
