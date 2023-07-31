import React from 'react'
import {FaCocktail} from 'react-icons/fa'


const Header = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand " to="/" > <FaCocktail color='yellow'/>  Cocktails</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
    </div>
  </div>
</nav>

    </>
  )
}

export default Header