//import { products } from '../../../models/Products'
import { products } from '../../../models/Products'
import PropsLogementLeft from './PropsLogementLeft'
import PropsLogementRight from './PropsLogementRight'
import { useParams } from 'react-router-dom'




function CollapsLogement() {

    //useParams pour récupérer l'id du produit dans le params
    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

            return(  
                
                <div className='conteneur-collaps'>
                <PropsLogementLeft description={product.description} />
                <PropsLogementRight equipement={product.equipments}/>
            </div>
 
    ) 
                
            }

export default CollapsLogement