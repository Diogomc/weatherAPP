import "@/app/styles/nav.css"
export const Nav = () => {
    return (
    <div>
        <nav className="nav-bar">
            <ul className="menu-ul">
                <li className="menu-item"><a href="#"><img className="w-12" src="./logo.png" alt="logo"/></a></li>
            </ul>
            <ul className="menu-ul">
                <li className="menu-item"><a href="#">Home</a></li>
                <li className="menu-item"><a href="#">About</a></li>
                <li className="menu-item"><a href="#">API</a></li>
                <li className="menu-item"><a href="#">Contact</a></li>
            </ul>
            <ul className="menu-ul">
                <li className="menu-item"><a href="https://github.com/Diogomc" target="_blank"><img className="icon" src="./github.png" alt="" /></a></li>
                <li className="menu-item"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank"><img className="icon" src="./linkedin.png" alt="linkedin" /></a></li>
            </ul>
        </nav>
    </div>
    )
}