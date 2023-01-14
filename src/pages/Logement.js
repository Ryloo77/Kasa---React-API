import React from 'react'
import '../styles/logement/Logement.css'
import Carrousel from '../components/logement/carrousel/Carrousel'
import CollapseLogement from '../components/logement/collaps_logement/CollapsLogement'


function Logement (){

    return (
        <div className='logement'>        
        <Carrousel/>
        <CollapseLogement/>
        </div>

    )
}

export default Logement