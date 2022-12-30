import '../styles/Cardlist.css'
import Card from './Card'
import {products} from '../models/Products'

function CardList () {
     return (
        <main className="cardlist">
        {products.map((product) => {
           return (
               < Card key={product.id} title={product.title} cover={product.cover}/>
            )  
        })}
        </main>
        
     )
    }
        


export default CardList