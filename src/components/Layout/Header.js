import '../../styles/layout/Header.css'
import logo from '../../assets/logo.png'
import '../../styles/layout/Navigation.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className="header">
            <Link to={"/"}><img src={logo} alt="kasa" className='header-logo' /></Link>

            <nav className="header-nav">
                <Link className='header-nav--link' to="/">Accueil</Link>
                <Link className='header-nav--link' to="Apropos">A propos</Link>
            </nav>

        </header>
    )
}

export default Header;