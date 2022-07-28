import React, { useEffect, useState } from 'react'
// import { BreedLink } from './BreedLink'

export const List = () => {

  const [dogList, setDogList] = useState({})
  const [err, setErr] = useState(null)
  const breedList = Object.keys(dogList)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breeds/list/all`)
        if(!res.ok) throw new Error('Fetch request did return data as expected.')

        const data = await res.json()

        setDogList(data.message)
        setErr(null)
      } catch(err) {
        setErr(err.message)
      }
    })()
  }, [])

  return (
    <div>
      {err ? (err.map(err => {
        return (<span key={err.indexOf(err)}>{err}</span>)
      })) : (breedList.map(breed => {
        return(<span key={breedList.indexOf(breed)}>{breed} </span>)
      }))}
    </div>
  )
}
