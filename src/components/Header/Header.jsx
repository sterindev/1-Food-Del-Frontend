import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary.Our mission is to satisfy your craving and elevate your dining experience,one delicious meal at a time.</p>
             <a href="#explore-menu">
              <button>View Menu</button>
            </a>
            {/* <button >View Menu</button> */}
        </div>

    </div>
  )
}

export default Header