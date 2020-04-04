import React from 'react'

import '../App.css'

 const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-custom ">
  <a className="navbar-brand" href="#home">TK RA Husnul Khotimah</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home"> <i className="fa fa-fw fa-home"></i> Home <span className="sr-only">(current)</span></a>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about"> <i className="fa fa-fw fa-address-card"></i> About</a>
        
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#program"> <i className="fa fa-fw fa-book"></i> Program</a>
        
      </li>
    </ul>
 
  </div>
</nav>

  )
}
export default Navbar
