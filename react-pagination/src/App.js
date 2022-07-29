import React, { useEffect, useState } from 'react'
import { Navigation } from './components/navigation/Navigation';
import { List } from './components/list/List';
import { Home } from './components/homepage/Home';
import { ErrorMessage } from './components/list/ErrorMessage'
import './App.css';

function App() {

  const [dogList, setDogList] = useState({})
  const [startPic, setStartPic] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const breedList = Object.keys(dogList)

  useEffect(() => {
    (async () => {
      try {
        const listRes = await fetch(`https://dog.ceo/api/breeds/list/all`)
        const startRes = await fetch(`https://dog.ceo/api/breeds/image/random`)
        if(!listRes.ok) throw Error('Fetch list request did not return data as expected.')
        if(!startRes.ok) throw Error('Fetch image request did not return data as expected.')

        const listData = await listRes.json()
        const startData = await startRes.json()

        setDogList(listData.message)
        setStartPic(startData.message)
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message)
      }
    })()
  }, [])

  return (
    <div className="App">
      <header className='navbar bg-light fixed-top'>
        <Navigation />
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <button type="button" className='btn btn-dark' data-bs-dismiss="offcanvas" aria-label="Close"><ion-icon name="close"></ion-icon></button>
          <List breedList={breedList} />
        </div>
      </header>
      <main>
        {fetchError && <ErrorMessage error={fetchError} />}
        <Home pic={startPic} />
      </main>
    </div>
  );
}

export default App;
