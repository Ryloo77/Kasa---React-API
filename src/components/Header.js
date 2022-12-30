import '../styles/Header.css'
import logo from '../assets/logo.png'
import Navigation from './Navigation'
function Header () {
    return (
        <header className="header">
            <img src={logo} alt="kasa" className='header-logo'/>
            <Navigation/>
        </header>
    )
}

export default Header;