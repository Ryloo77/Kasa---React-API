import CardList from '../components/CardList'
import Session1 from'../components/Section1'
import '../styles/Home.css'

function Home () {
    return (
        <div className='home'>
            <Session1/>
            <CardList/>
        </div>
    )
}

export default Home