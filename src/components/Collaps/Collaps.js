import vectorApropos from '../../assets/vectorApropos.png'
import '../../styles/Collaps.css'
import { useState } from 'react'

function Collaps(props) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }
    return (
        <div className='onClick-collaps' onClick={handToggle}>
            <div className={`conteneur-collaps ${active && "active"}`}> 
                <div className="collaps-vector">
                <img src={vectorApropos} alt="vector" className="vector" onClick={handToggle}/>
                </div> 
                {props.children}         
          </div>
          </div>

    )

}

export default Collaps