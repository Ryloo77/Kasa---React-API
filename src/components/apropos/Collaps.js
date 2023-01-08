import '../../styles/a_propos/CardApropos.css'
import CardApropos from './CardInfos'
import { datas } from '../../models/Datas'

function CollapsApropos() {

    return (
        <section className="apropos">
            
            {datas.map((data, index) => {
                return (
                    <CardApropos key={index} title={data.title} contenu={data.contenu}/>     
            )

            })}
        </section>

    )

}

export default CollapsApropos