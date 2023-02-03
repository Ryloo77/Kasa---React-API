import Starfunction from "../StarNotation"
function PropsInfosLogement(props) {
  return (

    <section>
      <div className="info">

        <div className="infoleft">
          <h1 className="info-title">{props.title}</h1>
          <h2 className="info-localisation">{props.location}</h2>
          <div className="info-plus">
            {props.tag.map((listTag, index) => {
              return (
                <li key={index} className="info-plus--unique">{listTag}</li>
              )
            }
            )}
          </div>

        </div>
        <div className="inforight">
          <div className="host">
            <span className="host-name">{props.hostName}</span>
            <img src={props.hostPicture} alt="cover" className="host-picture" />
            <div className="info-stars--list">
              {Starfunction()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




export default PropsInfosLogement
