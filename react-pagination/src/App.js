import React, { useEffect, useState } from 'react'
import { List } from './components/list/List';
import { Home } from './components/Homepage/Home';
import { ErrorMessage } from './components/list/ErrorMessage'
import './App.css';

function App() {

  const [dogList, setDogList] = useState({})
  const [fetchError, setFetchError] = useState(null)
  const breedList = Object.keys(dogList)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breeds/list/all`)
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
    <div className="App">
      <header>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          BREEDS
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <List breedList={breedList} />
        </div>
      </header>
      <main>
        {fetchError && <ErrorMessage error={fetchError} />}
        <Home />
      </main>
    </div>
  );
}

export default App;
