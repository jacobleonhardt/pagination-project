import React, { useEffect, useState } from 'react'
import { Navigation } from './components/navigation/Navigation';
import { List } from './components/list/List';
import { Home } from './components/homepage/Home';
import { ErrorMessage } from './components/list/ErrorMessage'
import './App.css';

function App() {

  const [dogList, setDogList] = useState({})
  const [startPic, setStartPic] = useState('')
  const [selectBreed, setSelectBreed] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const breedList = Object.keys(dogList)


  const getBreedListings = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/list/all`)
      if(!res.ok) throw Error('Fetch list request did not return data as expected.')

      const data = await res.json()

      setDogList(data.message)
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message)
    }
  }

  const getStartImage = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
      if(!res.ok) throw Error('Fetch image request did not return data as expected.')

      const data = await res.json()

      setStartPic(data.message)
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message)
    }
  }

  const getSelectedBreed = async () => {
    try {
      const res = await fetchError(`https://dog.ceo/api/breed/${selectBreed}/images`)
      if(!res.ok) throw Error('Fetch image by breed did not return data as expected.')

      const data = await res.json()

      setSelectBreed(data.message)
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message)
    }
  }

  useEffect(() => {
    getBreedListings()
    getStartImage()
  }, [])

  return (
    <div className="App">
      <header className='navbar bg-light fixed-top'>
        <Navigation />
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <button type="button" className='btn btn-dark' data-bs-dismiss="offcanvas" aria-label="Close"><ion-icon name="close"></ion-icon></button>
          <List breedList={breedList} selectBreed={getSelectedBreed}/>
        </div>
      </header>
      <main>
        {fetchError && <ErrorMessage error={fetchError} />}
        <Home startPic={startPic} selectBreed={selectBreed} />
      </main>
    </div>
  );
}

export default App;
