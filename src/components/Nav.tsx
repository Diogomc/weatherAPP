'use client'
import "@/app/styles/nav.css"
import { useState } from "react"
export const Nav = () => {

    const [menuOpened, setMenuOpened] = useState(true);

    return (
        <div>
            <nav className="nav-bar">
                <li onClick={() => setMenuOpened(!menuOpened)} className="menu-item"><a href="#"><img className="menu-icon" src="menu.png" alt="logo" /></a></li>
                <div className={`container-menu ${menuOpened ? 'menu-opened' : ''}`}>

                    <ul className="menu-ul">
                        <li className="menu-item-icon"><a href="#"><img className="logo w-12" src="./logo.png" alt="logo" /></a></li>
                    </ul>
                    <ul className="menu-ul">
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#">About</a></li>
                        <li className="menu-item"><a href="#">API</a></li>
                        <li className="menu-item"><a href="#">Contact</a></li>
                    </ul>
                    <ul className="menu-ul">
                        <li className="menu-item menu-item-icon"><a href="https://github.com/Diogomc" target="_blank"><img className="icon" src="./github.png" alt="" /></a></li>
                        <li className="menu-item menu-item-icon"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank"><img className="icon" src="./linkedin.png" alt="linkedin" /></a></li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}