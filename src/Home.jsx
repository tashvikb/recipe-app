import React, { useEffect, useState } from 'react'
import "./style.css";
import logo from "./img/logo.png";
import RecipeList from './RecipeList'
import Footer from './Footer'

export default function Home() {

  const [searchBar, setSearchBar] = useState()

  const searchBarfunc = (e) => {
    setSearchBar(e.target.value)
  }

  useEffect(() => {
    document.title = "Home | Recipe App"
  }, [])

  return (
    <div className="container">
      <div className="home">
        <nav>
          <h1 className="app-title">
            <span>
              <img src={logo} alt="logo" className="app-logo" />
            </span>
            Recipe App
          </h1>
        </nav>

        <input type="text" className="search" placeholder="search recipe" onChange={searchBarfunc} />

        <RecipeList/>

        <Footer/>

      </div>
    </div>
  );
}
