import { products } from '../../../models/Products'
import PropsLogementLeft from './PropsLogementLeft'
import PropsLogementRight from './PropsLogementRight'
import '../../../styles/Collaps.css'
import { useParams } from 'react-router-dom'
import Collaps from '../../Collaps/Collaps'




function CollapsLogement() {

    //useParams pour récupérer l'id du produit dans le params
    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

    return (
        <div className='conteneur-props'>
        <div className='conteneur-props--left'>
        <Collaps>
                <PropsLogementLeft description={product.description} />
        </Collaps>
        </div>
        <div className='conteneur-props--right'>
        <Collaps>
                <PropsLogementRight equipement={product.equipments} />
        </Collaps>
        </div>
</div>
    )

}

export default CollapsLogement