import React from 'react'
import { BreedLink } from './BreedLink'
export const List = ({breedList, selectBreed}) => {

  return (
      <ul className='list-group overflow-auto'>
        {breedList.map(breed => {
          return <BreedLink onClick={(e) => selectBreed(e.target.value)} key={breedList.indexOf(breed)} breed={breed} />
        })}
      </ul>
  )
}
