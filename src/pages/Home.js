import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/CardList'
import Session1 from'../components/Section1'
import '../styles/Home.css'

function Home () {
    return (
        <>
        <Header/>
        <div className='home'>
            <Session1/>
            <CardList/>
        </div>
        <Footer/>
        </>
        
    )
}

export default Home