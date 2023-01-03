import '../../styles/Cardlist.css'
import Card from './Card'
import {products} from '../../models/Products'
import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function CardList () {

     return (
        <main className="cardlist">
        {products.map((product) => {
           return (
            <Link to={`/fiche_logement/${product.id}`}>
               <Card key={product.id} title={product.title} cover={product.cover} />     
            </Link>
               
            )  
        })}
        </main>
        
     )
    }
        


export default CardList