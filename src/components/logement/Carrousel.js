import PropsCarr from './PropsCarr'
import {products} from '../../models/Products'
import '../../styles/Carrousel.css'
import { useParams } from 'react-router-dom'



function Carroussel() {
    //useParams pour récupérer l'id du produit dans le params
    const {productId} = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)
    return (
        <div className="carrousel">
        {product.pictures.map((picture) => {
         return (
            <PropsCarr picture={[picture]}/>
     )
   })}
    </div>
    )
}
        


export default Carroussel