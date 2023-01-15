
const PropsInfos = (props) => {
  return (
    <div className="info">
      <div className="infoleft">
        <h1 className="info-title">{props.title}</h1>
        <h2 className="info-localisation">{props.location}</h2>
        <div className="info-plus">
          {props.tag.map((listTag, index) => {
            return (
              <li key={listTag + { index }} className="info-plus--unique">{listTag}</li>
            )
          }
          )}
        </div>


      </div>
      <div className="inforight">
        <div className="host">
          <span className="host-name">{props.hostName}</span>
          <img src={props.hostPicture} alt="cover" className="host-picture" />
        </div>
        <div className="info-stars--list">
          <ul>
            <li className="info-star"><svg className="star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" />
            </svg></li>
            <li className="info-star"><svg className="star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" />
            </svg></li>
            <li className="info-star"><svg className="star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" />
            </svg></li>
            <li className="info-star"><svg className="star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" />
            </svg></li>
            <li className="info-star"><svg className="star" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3" />
            </svg></li>
          </ul>


        </div>
      </div>

    </div>



  )
}

export default PropsInfos
