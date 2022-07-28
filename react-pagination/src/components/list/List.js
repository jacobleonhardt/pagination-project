import React, { useEffect, useState } from 'react'
import { BreedLink } from './BreedLink'
import { ErrorMessage } from './ErrorMessage'

export const List = () => {

  const [dogList, setDogList] = useState({})
  const [fetchError, setFetchError] = useState(null)
  const breedList = Object.keys(dogList)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breeds/list/allS`)
        if(!res.ok) throw Error('Fetch request did return data as expected.')

        const data = await res.json()

        setDogList(data.message)
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message)
      }
    })()
  }, [])

  return (
    <div>
      {fetchError && <ErrorMessage error={fetchError} />}
      {breedList.map(breed => <BreedLink key={breedList.indexOf(breed)} breed={breed} />)}
    </div>
  )
}
