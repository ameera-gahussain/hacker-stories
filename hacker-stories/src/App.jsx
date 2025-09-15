import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getTitle(title) {
  return title;
}

function App() {

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App
