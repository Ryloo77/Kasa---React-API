import '../styles/Header.css'
import logo from '../assets/logo.png'
import Navigation from './Navigation'
function Header () {
    return (
        <div className="header">
            <img src={logo} alt="kasa" className='header-logo'/>
            <Navigation/>
        </div>
    )
}

export default Header;