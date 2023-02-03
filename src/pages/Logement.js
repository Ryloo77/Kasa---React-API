import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../models/Products'
import PropsInfosLogement from '../components/props_products/PropsInfosLogement'
import Slideshow from '../components/Slideshow'
import ErrorPage from './Erreur'
import Collaps from '../components/Collaps'
import '../styles/logement/Logement.css'
import '../styles/logement/Infos.css'



function Logement() {

    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)

    if (!product) {
        return (
            <ErrorPage />
        )
    }

    return (
        <main>

            <div className='logement'>
                <Slideshow />

                <PropsInfosLogement
                    title={product.title}
                    location={product.location}
                    tag={product.tags}
                    hostName={product.host.name}
                    hostPicture={product.host.picture}
                    const stars={product.rating} />

                <div className='conteneur-props'>
                    <div className='conteneur-props--description'>
                        <Collaps content={product.description} title="description" />
                    </div>


                    <div className='conteneur-props--equipments'>
                        <Collaps content={product.equipments} title="équipement" />
                    </div>
                </div>


            </div>
        </main>

    )
}

export default Logement