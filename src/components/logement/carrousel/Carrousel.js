
import ImageSlider from './ImageSlider'
import { products } from '../../../models/Products'
import ErrorPage from '../../../pages/Erreur'
import { Route, Routes, useParams } from 'react-router-dom'


function Carrousel() {


    //useParams pour récupérer l'id du produit dans le params
    const { productId } = useParams()
    //récupération du produit appelé égal à l'id du "params"
    const product = products.find((product) => product.id === productId)

    if (!product) {
        return (
            <Routes>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        )
    }
    

    return (
        <ImageSlider />
    )
}



export default Carrousel