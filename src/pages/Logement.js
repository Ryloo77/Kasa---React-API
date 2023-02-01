import React from 'react'
import '../styles/logement/Logement.css'
import { products } from '../models/Products'
import ErrorPage from './Erreur'
import Carrousel from '../components/logement/carrousel/Carrousel'
import CollapsLogement from '../components/logement/infos_collaps_logement/CollapsLogement'
import Infos from '../components/logement/Infos/Infos'
import { useParams } from 'react-router-dom'


function Logement() {

    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)

    if (!product) {
        return (
            <ErrorPage />
        )
    }

    return (
        <div className='logement'>
            <Carrousel />
            <Infos />
            <CollapsLogement />
        </div>
    )
}

export default Logement