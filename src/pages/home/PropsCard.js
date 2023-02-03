import '../../styles/home/Cardlist.css'


function Card(props) {

    return (
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            <img src={props.cover} alt="cover" className="card-cover" />
        </div>
    )
}

export default Card