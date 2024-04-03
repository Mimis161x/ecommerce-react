import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ProductView } from '../ProductPage/ProductView'


export function LandingPage() {
  
  return (
    <>
      <nav>
        <div className="menu-container">
          <button type="button" className="fas fa-bars burger-icon">Menu</button>
          <ul className="navb">

            <li className="navitem"><Link to="/">
              <img src="store-logo.png" />
            </Link> </li>
            <li className="navitem"><Link to="/products">Our products</Link></li>
            <li className="navitem"><Link to="/Contact">Contact</Link></li>
            <input type="text" placeholder="best price for.." />
          </ul>
        </div>

        <ul className="nava">
          <li><button type="button" onclick="notify()" className="fas fa-bell"></button></li>
          <li> <Link to="signIn">Sign in</Link></li>
          <li><Link to="signIn">Sign up</Link></li>
        </ul>

      </nav>
      <main>
        <div className="products">
          <div className="product">
            <img src="electronics.png" />
            <h4 className="title"><Link to="#">electronics</Link></h4>
          </div>
          <div className="product">
            <img src="jewelery.png" />
            <h4 className="title"><Link to="#">jewelery</Link></h4>
          </div>
          <div className="product">
            <img src="mensclothing.png" />
            <h4 className="title"><Link to="#">Mens Clothing</Link></h4>
          </div>
          <div className="product">
            <img src="womensclothing.png" />
            <h4 className="title"><Link to="#">Womens Clothing</Link></h4>
          </div>
        </div>
      </main>

    </>

  )
}

