import PropsCarr from './PropsCarr'
import vector from '../../../assets/vector.png'
//import ErrorPage from '../../pages/Erreur'
import { products } from '../../../models/Products'
import '../../../styles/logement/Carrousel.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ImageSlider  () {
    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

//Build a React image slider carousel from scratch tutorial
const [current, setCurrent] = useState (0)
const slides = product.pictures;
const length = slides.length;

console.log(length)


const nextSlide = () => {
    //si l'état actuel (point 0) est égale au nombre d'images alors on renvoit 0, sinon 
    setCurrent(current === length - 1 ? 0 : current + 1)
}


const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
}
console.log(current)


// if(!Array.isArray(slides) || slides.length <=0 ){
//     return null;
// }

return (
<div className='conteneur'>
    <button className='carrousel-btn--G'><img src={vector} alt="" onClick={prevSlide} /></button>
    <button className='carrousel-btn--D'><img src={vector} alt="" onClick={nextSlide}/></button>

    {product.pictures.map((picture, index) => {
        return (
            <div key={index} className={index === current ? "slide active" : "slide"}>  
            {index === current && (<PropsCarr  picture={picture}/>)}              
                
            </div>


        )
    })}
</div>
)
}

export default ImageSlider