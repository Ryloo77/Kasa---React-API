import CardList from '../components/home/CardList'
import Session1 from'../components/home/Section1'
import '../styles/home/Home.css'

function Home () {
    return (
        <>
        <div className='home'>
            <Session1/>
            <CardList/>
        </div>
        </>
        
    )
}

export default Home