import vectorApropos from '../../assets/vectorApropos.png'
import '../../styles/logement/Collaps.css'
import { useState } from 'react'

function Collaps(props) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }
    return (
            <div className={`conteneur-collaps ${active && "active"}`}> 
                <img src={vectorApropos} alt="vector" className="collaps-vector" onClick={handToggle}/>
                {props.children}     
          </div>

    )

}

export default Collaps