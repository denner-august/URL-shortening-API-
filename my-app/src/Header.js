import React from 'react'
import HeaderC  from "../src/header.css"
import Logo from "./images/logo.svg"

const Header = () => {
    return (
    <div>
        <header >
         <nav>
                <div><img src={Logo} alt="" srcset=""/></div>
                <ul>
                  
                </ul>
         </nav>
      </header>
    </div>
    )
}

export default Header
