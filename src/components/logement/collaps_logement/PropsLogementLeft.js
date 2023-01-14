import vectorApropos from '../../../assets/vectorApropos.png'
import '../../../styles/logement/CollapsLogement.css'
import { useState } from 'react'

function PropsLogementLeft(props) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }
    
    return (
            <div className={`collaps ${active && "active"}`}>
                <h2 className="collaps-title" onClick={handToggle}>Description
                <img src={vectorApropos} alt="vector" className="collaps-vector"/>
                </h2>
                <p className="collaps-text">{props.description}</p>
          </div>

    )

}

export default PropsLogementLeft