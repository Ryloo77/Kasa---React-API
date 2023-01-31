export default function PorpsLogementRight(props) {

    return (
        <div>
            <h2 className="collaps-title">Equipements</h2>
            <div className=' collaps-text'>

                {props.equipement.map((listEquipement, index) => {
                    return (
                        <p key={index} className="collaps-equipement--text">{listEquipement}</p>
                    )
                }
                )}
            </div>
        </div>

    )

}