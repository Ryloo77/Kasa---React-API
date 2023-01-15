import React from 'react'
import '../styles/logement/Logement.css'
import Carrousel from '../components/logement/carrousel/Carrousel'
import CollapseLogement from '../components/logement/collaps_logement/CollapsLogement'
import Infos from '../components/logement/Infos/Infos'


function Logement (){

    return (
        <div className='logement'>        
        <Carrousel/>
        <Infos/>
        <CollapseLogement/>
        </div>

    )
}

export default Logement