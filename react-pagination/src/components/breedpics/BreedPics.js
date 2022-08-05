import React from 'react'

export const BreedPics = ({data}) => {
  return (
    <div className="row">
      {data.map(pic => <img className="mh-25 p-2 col col-md-4" key={data.indexOf(pic)} src={pic} alt=""/>)}
    </div>
  )
}
