import '../../styles/Collaps.css'
import '../../styles/a_propos/Apropos.css'
//import PropsApropos from './PropsApropos'
import Collaps from '../Collaps/Collaps'
import { datas } from '../../models/Datas'

function CardContenu() {

    return (
        <section className='apropos-info'>
            {datas.map((data, index) => {
                return (
                    <Collaps key={index} title={data.title} content={data.contenu}/>

                )
            })}
        </section>
    )

}

export default CardContenu