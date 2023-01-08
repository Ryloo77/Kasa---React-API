import PropsCarr from './PropsCarr'
import vector from '../../assets/vector.png'
import ClickG from './AnimationCarr'
import {products} from '../../models/Products'
import '../../styles/logement/Carrousel.css'
import { useParams } from 'react-router-dom'



function Carrousel() {
    //useParams pour récupérer l'id du produit dans le params
    const {productId} = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)
    return (

        <div className='conteneur'>
        {product.pictures.map((picture, index) => {
         return (
            <div  key={product.id + index} className='carrousel'>
            <PropsCarr  picture={picture}/>
            <button className='carrousel-btn--G'><img src={vector} alt="" onClick={ClickG}/></button>
            <button className='carrousel-btn--D'><img src={vector} alt=""/></button>

            </div>
            
     )
   })}
    </div>
    )
}
        


export default Carrousel