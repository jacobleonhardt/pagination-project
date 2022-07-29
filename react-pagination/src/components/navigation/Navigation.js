import React from 'react'

export const Navigation = () => {
  return (
    <nav className='container-lg'>
      <h1 className='navbar-brand'>Dog Pictures</h1>
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <ion-icon name="paw"></ion-icon>
      </button>
    </nav>
  )
}
