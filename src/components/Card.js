import '../styles/Card.css'

    function clickToCard(){
        console.log("ceci est un click sur une carte 🤪")
    }
function Card (props) {
    
return (
    <div className="card" onClick={clickToCard}>
        <p>{props.description}</p>
        <h2 className="card-title">{props.title }</h2>
        <img src={props.cover} alt="cover" className="card-cover"/>
    </div>
)
}

export default Card