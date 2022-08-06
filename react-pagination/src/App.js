import React, { useEffect, useMemo, useState } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { List } from './components/list/List';
import { Home } from './components/homepage/Home';
import { ErrorMessage } from './components/list/ErrorMessage';
import { BreedPics } from './components/breedpics/BreedPics';
import ReactPaginate from 'react-paginate';
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

  const getSelectedBreed = async (breed) => {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
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
          <List breedList={breedList} getSelectedBreed={getSelectedBreed}/>
        </div>
      </header>
      <main className="mt-5 p-2 d-flex flex-column align-items-center">
        {fetchError && <ErrorMessage error={fetchError} />}
        <div className="container">
          { selectBreed ? (<>
              <BreedPics data={selectBreed} />
              <ReactPaginate
                totalCountOfItemsInData={selectBreed.length}
                pageSize={30}
                siblingCount={1}
                currenPage={null}
                onPageChange={null}
                nextLabel={<ion-icon name="arrow-dropright"></ion-icon>}
                previousLabel={<ion-icon name="arrow-dropleft"></ion-icon>}
              />
            </>)
          : <Home startPic={startPic} selectBreed={selectBreed} />}
        </div>
      </main>
    </div>
  );
}

export default App;
