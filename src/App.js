import React from 'react'
import "./App.css"
import Nav from './components/nav/Nav'
import Recipe from './components/recipe/Recipe'
import Header from './components/header/Header'

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Recipe />
    </div>

  )
}

export default App