import '../../styles/layout/Header.css'
import logo from '../../assets/logo.png'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
function Header () {
    return (
        <header className="header">
            <Link to={"/"}><img src={logo} alt="kasa" className='header-logo'/></Link>
            <Navigation/>
        </header>
    )
}

export default Header;