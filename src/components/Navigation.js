import { Link } from 'react-router-dom'
import '../styles/Navigation.css'
function Navigation() {
    return (
        <div className="header-nav">
            <ul className="header-nav--list">
                <li ><Link className='header-nav--li'to="/">Accueil</Link></li>
                <li ><Link className='header-nav--li'to="">A propos</Link></li>
            </ul>
        </div>

    )
}

export default Navigation