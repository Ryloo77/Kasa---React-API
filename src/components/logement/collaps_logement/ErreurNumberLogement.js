import { products } from '../../../models/Products'
import ErrorPage from '../../../pages/Erreur'
import { useParams, Routes, Route } from 'react-router-dom'


function ErreurNumeroLogement () {

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

}

export default ErreurNumeroLogement