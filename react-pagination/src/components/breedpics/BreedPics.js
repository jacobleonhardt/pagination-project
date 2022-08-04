import React from 'react'

export const BreedPics = ({data}) => {
  return (
    <div className="row">
      {data.map(pic => <img key={data.indexOf(pic)} src={pic} className="col col-md-4"/>)}
    </div>
  )
}
