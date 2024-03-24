import React from 'react'
import './style.css'

export function LandingPage() {
  return (
    <>
      <nav>
        <div className="menu-container">
          <button type="button" className="fas fa-bars burger-icon">Menu</button>
          <ul className="navb">

            <li className="navitem"><a href="index.html">
              <img src="store-logo.png"/>
            </a> </li>
            <li className="navitem"><a href="#">Our products</a></li>
            <li className="navitem"><a href="#">Contact</a></li>
            <input type="text" placeholder="best price for.."/>
          </ul>
        </div>

        <ul className="nava">
          <li><button type="button" onclick="notify()" className="fas fa-bell"></button></li>
          <li> <a href="signup.html">Sign in</a></li>
          <li><a href="signup.html">Sign up</a></li>
        </ul>

      </nav>
      <main>
        <div className="products">
          <div className="product">
            <img src="electronics.png"/>
              <h4 className="title"><a href="#">electronics</a></h4>
          </div>
          <div className="product">
            <img src="jewelery.png"/>
              <h4 className="title"><a href="#">jewelery</a></h4>
          </div>
          <div className="product">
            <img src="mensclothing.png"/>
              <h4 className="title"><a href="#">Mens Clothing</a></h4>
          </div>
          <div className="product">
            <img src="womensclothing.png"/>
              <h4 classNameName="title"><a href="#">Womens Clothing</a></h4>
          </div>
        </div>
      </main>
      <footer classNameName="footer">
        <p>Made by Mimis!</p>
      </footer>
    </>

  )
}

