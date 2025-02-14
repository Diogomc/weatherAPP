import '@/app/styles/footer.css'
export const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-links'>
                <ul>
                    <li>Api that I used: <a href="https://www.weatherapi.com/">Click Here</a></li>
                </ul>
                <ul>
                    <li>©Copyright | <a href="https://www.linkedin.com/in/diogo-marcondes/">Diogo Marcondes</a></li>
                </ul>
                <ul className='links-profile'>
                    <li className="menu-item"><a href="https://github.com/Diogomc" target="_blank"><img className="icon" src="./github.png" alt="" /></a></li>
                    <li className="menu-item"><a href="https://www.linkedin.com/in/diogo-marcondes/" target="_blank"><img className="icon" src="./linkedin.png" alt="linkedin" /></a></li>
                </ul>
            </div>
        </footer>
    )
}