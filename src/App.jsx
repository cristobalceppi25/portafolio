import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Main } from './componentes/Main'

function App() {
  return (
    <>
      <Header />
      <div className='completePage'>
        <Main />
      </div>
    </>
  )
}

export default App
