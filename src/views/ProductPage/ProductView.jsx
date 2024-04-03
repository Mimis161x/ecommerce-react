import React, {useState} from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { FetchData } from '../../components/FetchData'
import { listMap } from '../../components/listMap'
import { listDesc } from '../../components/listAsc'

export const ProductView = () => {
    const [order, setOrder] = useState(() => listDesc)

    function handleChange() {
        return null;
    }
  return (

<body>
    <script src="index.js" defer> </script>
    
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
            <li><button type="button"  className="fas fa-bell"></button></li>
            <li> <a href="signup.html">Sign in</a></li>
            <li><a href="signup.html">Sign up</a></li>
        </ul>

    </nav>
    <main>
        <select className="price-selector" onChange={handleChange()}>
            <option value="defaultValue" >default</option>
            <option value="descending-price">Descending Price </option>
            <option value="ascending-price">Ascending Price</option> 
             
        </select>


        <div className="bdy">
       <div id="container">
        
       </div>
    </div>
    <div>
        <FetchData func={order}/>
    </div>
    </main>
    <footer className="footer">
        <p>Made by Mimis!</p>
    </footer>

    
</body>
  )
}
