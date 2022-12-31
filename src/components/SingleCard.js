import '../styles/Cardlist.css'
import Card from './Card'
import {products} from '../models/Products'
import { useParams } from 'react-router-dom'



function SingleCard () {
    const {productId} = useParams()
    const product = products.find((product) => product.id === productId)
     return (
        <main className="singleCard">
               < Card key={product.id} title={product.title} cover={product.cover}/>
        </main>
        
     )
    }
        


export default SingleCard