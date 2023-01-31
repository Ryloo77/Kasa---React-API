import '../styles/Erreur.css'
import { Link } from 'react-router-dom'

function ErrorPage() {

    return (
        <div className='erreur'>
            <h2 className='erreur-title'>404</h2>
            <p className='erreur-msg'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='erreur-link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage