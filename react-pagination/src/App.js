import React, { useEffect, useMemo, useState } from 'react';
import { Navigation } from './components/navigation/Navigation';
import { List } from './components/list/List';
import { ErrorMessage } from './components/list/ErrorMessage';
import { BreedPics } from './components/breedpics/BreedPics';
import { Pagination } from './components/Pagination';
import './App.css';

function App() {
  const [dogList, setDogList] = useState({})
  const [startPic, setStartPic] = useState('')
  const [selectBreed, setSelectBreed] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const breedList = Object.keys(dogList)
  const pageSize = 9

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

  const dogPictureData = useMemo(() => {
    const firstPage = (currentPage - 1) * pageSize
    const lastPage = firstPage + pageSize

    return selectBreed.slice(firstPage, lastPage)
  }, [selectBreed, currentPage])


  useMemo(() => {
    setCurrentPage(1)
  }, [selectBreed])

  // useEffect(() => {
  //   getBreedListings()
  //   getStartImage()
  // }, [])

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
              <BreedPics data={dogPictureData} />
              <Pagination
              totalCountOfItemsInData={selectBreed.length}
              pageSize={pageSize}
              siblingCount={1}
              currentPage={currentPage}
              onPageChange={ page => setCurrentPage(page)}
              />
            </>)
          : <img className='mh-50' src={startPic} alt="" />}
        </div>
      </main>
    </div>
  );
}

export default App;
