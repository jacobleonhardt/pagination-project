import React from 'react'

export const List = ({breedList, getSelectedBreed}) => {
  return (
      <ul className='list-group overflow-auto'>
        {breedList.map(breed => {
          return (<button className='list-group-item text-capitalize'
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => getSelectedBreed(breed)}
                  key={breedList.indexOf(breed)} >
                    {breed}
                  </button>)
        })}
      </ul>
  )
}
