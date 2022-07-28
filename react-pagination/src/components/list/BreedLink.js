import React from 'react'

export const BreedLink = ({breed}) => {
  return (
    <a className='list-group-item text-capitalize' href={`https://dog.ceo/api/breed/${breed}/images`}>
      {breed}
    </a>
  )
}
