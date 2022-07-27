import React from 'react'

export const List = () => {

  const dogList = async () => {
    try {
      const req = await fetch(`https://dog.ceo/api/breeds/list/all`)
      const data = await req.json()

      return data.message
    } catch(err) {
      return err.message
    }
  }

  return (
    <div>
      {dogList.map(breed => {
        return(<a>{breed}</a>)
      })}
    </div>
  )
}
