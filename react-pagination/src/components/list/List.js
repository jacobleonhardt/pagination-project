import React from 'react'
import { BreedLink } from './BreedLink'
export const List = ({breedList}) => {

  return (
      <ul className='list-group overflow-auto'>
        {breedList.map(breed => <BreedLink key={breedList.indexOf(breed)} breed={breed} />)}
      </ul>
  )
}
