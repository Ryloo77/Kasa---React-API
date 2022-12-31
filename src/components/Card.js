import '../styles/Card.css'


function Card (props) {

return (

        <div className="card">
            <p>{props.description}</p>
            <h2 className="card-title">{props.title}</h2>
            <img src={props.cover} alt="cover" className="card-cover"/>
        </div>

       
)
   
}

export default Card