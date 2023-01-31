import PropsCarr from './PropsCarr'
import vector from '../../../assets/vector.png'
import { products } from '../../../models/Products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../styles/logement/Carrousel.css'


function ImageSlider() {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)

    const [current, setCurrent] = useState(0)
    const slides = product.pictures;
    const length = slides.length;

    const prevSlide = () => {
        //si on est sur l'image 0, tu me renvoi l'image de fin (0-1 = dernière image), sinon tu décrémentes de -1
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    const nextSlide = () => {
        // si on est sur l'image de fin (0-1= dernière image), tu reviens à l'image 0, sinon tu incrémentes de 1
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className='conteneur'>
            <button  className={length === 1 ? "carrousel-btn--hidden" : 'carrousel-btn--G'}><img src={vector} alt="" onClick={prevSlide} /></button>
            <button  className={length === 1 ? "carrousel-btn--hidden" : 'carrousel-btn--D'}><img src={vector} alt="" onClick={nextSlide} /></button>

            {product.pictures.map((picture, index) => {
                return (
                    <div key={index} className={index === current ? "slide active" : "slide"}>
                        {console.log(index)}
                        {console.log(current)}
                        {/*si l'index (position de l'image dans le tableau) est égale au current (image actuel), alors tu me retournes l'image correspondante*/}
                        {index === current && (<PropsCarr picture={picture} />)}
                        <p className={index === current ? "number-picture active" : "number-picture"}>
                            <span>{length === 1 ? "" : index + 1 + "/" + length}</span>
                        </p>

                    </div>
                )
            })}
        </div>


    )

}

export default ImageSlider