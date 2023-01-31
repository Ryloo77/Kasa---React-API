import '../../styles/home/Cardlist.css'
import Card from './Card'
import {products} from '../../models/Products'
import { Link } from 'react-router-dom'
function CardList () {

     return (
        <main className="cardlist">
        {products.map((product) => {
           return (
            <Link className="cardlist-link" key={product.id} to={`/fiche_logement/${product.id}`}>
               <Card  title={product.title} cover={product.cover} />     
            </Link>
               
            )  
        })}
        </main>
        
     )
    }
        


export default CardList