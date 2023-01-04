import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation-wrap fixed-top navbar-light bg-light shadow">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="#">SUGUNA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
        
        
      </ul>
     
    </div>
     {/* <button className='btn btn-outline-primary me-2'><i className="fa-solid fa-arrow-right-to-bracket me-2"></i><Link to="Login">Login</Link></button> 
     <button className='btn btn-outline-primary me-2'><i className="fas fa-user me-2"></i><Link to="Register">Register</Link></button> 
     <button className='btn btn-outline-primary'><i className="fas fa-shopping-basket me-2"></i><Link to="">Cart</Link></button> */}
    
  </div>
</nav>
    </div>
  )
}

export default Navbar
