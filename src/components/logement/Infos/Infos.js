import '../../../styles/logement/Infos.css'
import PropsInfos from './PropsInfos'
import { products } from '../../../models/Products'
import { useParams } from 'react-router-dom'

const Infos = (index) => {



  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  console.log (product)
  return ( 
 
    <PropsInfos 
    title={product.title} 
    location={product.location} 
    tag={product.tags} 
    hostName={product.host.name} 
    hostPicture={product.host.picture} 
    stars={product.rating}/>
     )


  }
  





export default Infos
