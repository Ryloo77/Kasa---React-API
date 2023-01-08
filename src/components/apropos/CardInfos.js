import vectorApropos from '../../assets/vectorApropos.png'

function CardApropos(props) {
    return (
            <div className="conteneur-apropos">
                <h2 className="apropos-title">{props.title}</h2>
                <img src={vectorApropos} alt="vector" className='apropos-vector'/>
                <p className="apropos-text">{props.contenu}</p>
          </div>

    )

}

export default CardApropos