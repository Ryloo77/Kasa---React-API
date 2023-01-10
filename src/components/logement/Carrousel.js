import PropsCarr from './PropsCarr'
import vector from '../../assets/vector.png'
import { products } from '../../models/Products'
import '../../styles/logement/Carrousel.css'
import { useParams } from 'react-router-dom'



function Carrousel() {
    //useParams pour récupérer l'id du produit dans le params
    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

    //Create a product Slider in React js without any external library (youtube)
    let imgBox = document.getElementsByClassName('conteneur');


    const handleClickLeft = (e) => {
        e.preventDefault();
        imgBox[0].scrollLeft = imgBox[0].scrollLeft - imgBox[0].clientWidth;
    }


    const handleClickRight = (e) => {
        e.preventDefault()
        imgBox[0].scrollLeft = imgBox[0].scrollLeft + imgBox[0].clientWidth;
    }

    return (
    <main className='main'>
        <button className='carrousel-btn--G'><img src={vector} alt="" onClick={handleClickLeft} /></button>
        <button className='carrousel-btn--D'><img src={vector} alt="" onClick={handleClickRight} /></button>

        <div className='conteneur'>

            {product.pictures.map((picture, index) => {
                return (

                    <div key={product.id + index} className="carrousel">
                        <PropsCarr picture={picture} className="carrousel-img" />
                    </div>

                )
            })}
        </div>
    </main>
    )
}



export default Carrousel