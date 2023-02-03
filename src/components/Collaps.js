import vectorApropos from '../assets/vectorApropos.png'
import '../styles/Collaps.css'
import { useState } from 'react'

function Collaps(props) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }

    if (Array.isArray(props.content)) {
        return (
            <div className='onClick-collaps' onClick={handToggle}>
                <div className={`conteneur-collaps ${active && "active"}`}>
                    <div className="collaps-vector">
                        <img src={vectorApropos} alt="vector" className="vector" />
                    </div>

                    <h2 className="collaps-title">{props.title}</h2>
                    <ul className="collaps-text">
                        {props.content.map((element, index) =>

                            <li key={index}>{element}</li>

                        )}
                    </ul>

                </div>
            </div>

        )
    }

    return (
        <div className='onClick-collaps' onClick={handToggle}>
            <div className={`conteneur-collaps ${active && "active"}`}>
                <div className="collaps-vector">
                    <img src={vectorApropos} alt="vector" className="vector" />
                </div>
                <h2 className="collaps-title">{props.title}</h2>
                <p className="collaps-text">{props.content}</p>
            </div>
        </div>

    )


}

export default Collaps