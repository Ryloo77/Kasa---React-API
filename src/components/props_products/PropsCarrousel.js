function PropsCarr(props) {

    return (
        <>
            <img src={props.picture} alt="logement_picture" className="carrousel-img" />
            {console.log(props.picture)}
        </>
    )
}

export default PropsCarr