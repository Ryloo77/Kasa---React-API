import sectionImg from '../../assets/sectionImg.png'
import PropsCard from './PropsCard'
import { products } from '../../models/Products'
import { Link } from 'react-router-dom'
import '../../styles/home/Section1.css'
import '../../styles/home/Home.css'
import '../../styles/home/Cardlist.css'

function Home() {
    return (
        <>
            <main className='home'>
                <section className='section1'>
                    <img src={sectionImg} alt="fond_Marin" className="section1-img" />
                    <p className='section1-text'> Chez vous, partout et ailleurs</p>
                </section>

                <section className="cardlist">
                    {products.map((product) => {
                        return (
                            <Link className="cardlist-link" key={product.id} to={`/fiche_logement/${product.id}`}>
                                <PropsCard title={product.title} cover={product.cover} />
                            </Link>
                        )
                    })}
                </section>

            </main>
        </>
    )
}

export default Home