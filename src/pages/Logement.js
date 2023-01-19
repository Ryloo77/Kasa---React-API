import React from 'react'
import '../styles/logement/Logement.css'
import { products } from '../models/Products'
import ErrorPage from './Erreur'
import Carrousel from '../components/logement/carrousel/Carrousel'
import CollapseLogement from '../components/logement/collaps_logement/CollapsLogement'
import Infos from '../components/logement/Infos/Infos'
import { useParams, Routes, Route } from 'react-router-dom'


function Logement (){

    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

    if (!product) {
        return (
            <Routes>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        )
    }


    return (
        <div className='logement'>
        <Carrousel/>
        <Infos/>
        <CollapseLogement/>     
        </div>
    )
}

export default Logement