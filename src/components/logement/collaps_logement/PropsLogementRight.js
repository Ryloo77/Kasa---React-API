import vectorApropos from '../../../assets/vectorApropos.png'
import '../../../styles/logement/CollapsLogement.css'
import { useState } from 'react'

export default function PorpsLogementRight(props, index) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }
    return (
            <div  className={`collaps ${active && "active"}`}>
                <h2 className="collaps-title" onClick={handToggle}>Equipements
                <img src={vectorApropos} alt="vector" className="collaps-vector"/>
                </h2>
                <div className=' collaps-text'>

                {props.equipement.map((listEquipement) => { 
                return (
                    <p key ={listEquipement[0] + {index}} className="collaps-equipement--text">{listEquipement}</p>  
                ) 
                }
                )}
                </div>
               
          </div>

    )

}