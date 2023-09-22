import image from "../assets/img/logo_corbuma3.png"
import '../assets/css/componentes/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header__logo" src={image} alt="Corbuma logo" />
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item" to="/politica">POLÍTICA INOCUIDAD</Link></li>
                    <li><Link className="menu-item" to="/syso">SYSO</Link></li>
                    <li><Link className="menu-item" to="/space">SPACE</Link></li>
                    
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header
