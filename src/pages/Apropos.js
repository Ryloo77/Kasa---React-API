import montain from '../assets/montain.png'
import montainMobile from "../assets/montain-Mobile.png"
import '../styles/Collaps.css'
import '../styles/a_propos/Apropos.css'
import Collaps from '../components/Collaps'
import { datas } from '../models/Datas'

function Apropos() {

    return (
        <main className='main-apropos'>
            <section className='montain'>
                <img src={montain} alt="montain_image" className="montain-img" />
                <img src={montainMobile} alt='montain-mobile' className='montain-img-mobile' />
            </section>

            <section className='apropos-info'>
                {datas.map((data, index) => {
                    return (
                        <Collaps key={index} title={data.title} content={data.contenu} />
                    )
                })}
            </section>
        </main>
    )
}

export default Apropos