import vectorApropos from '../../assets/vectorApropos.png'
import { useState } from 'react'

function CardApropos(props) {

    const [active, setActive] = useState(false)

    const handToggle = () => {
        setActive(!active)
    }
    return (
            <div className={`conteneur-apropos ${active && "active"}`}>
                <h2 className="apropos-title" onClick={handToggle}>{props.title}
                <img src={vectorApropos} alt="vector" className="apropos-vector"/>
                </h2>
                <p className="apropos-text">{props.contenu}</p>
          </div>

    )

}

export default CardApropos