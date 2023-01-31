import { Link } from 'react-router-dom'
import '../../styles/layout/Navigation.css'
function Navigation() {
    return (
        <nav className="header-nav">
            <Link className='header-nav--link' to="/">Accueil</Link>
            <Link className='header-nav--link' to="Apropos">A propos</Link>
        </nav>
    )
}

export default Navigation