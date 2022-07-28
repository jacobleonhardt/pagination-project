import React from 'react'
import { List } from './components/list/List';
import { Home } from './components/Homepage/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <List />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
