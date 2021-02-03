import React from 'react'
import HeaderC from "../src/header.css"
import Linkedin  from "./images/linkedin.svg"
import Whats from "./images/whatsapp.svg"
import Git from "./images/029-github.svg"


const Header = () => {
    return (
        <div>
            <header className={<HeaderC/>}>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/denner-augusto-paula-bernardes-970713164" target='blank'> <img src={Linkedin} alt='linkedin'/></a>
                        <a href="https://api.whatsapp.com/send?phone=5511978057417" target='blank'><img src={Whats} alt='whatsapp'/></a>
                        <a href='https://github.com/denner-august'><img src={Git} alt='github'/></a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header
