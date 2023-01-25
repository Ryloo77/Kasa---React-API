import montain from'../../assets/montain.png'
import montainMobile from "../../assets/montain-Mobile.png"

export default function Montain (){
    return(
        <section className='montain'>
            <img src={montain} alt="montain_image" className="montain-img"/>
            <img src={montainMobile} alt='montain-mobile' className='montain-img-mobile'/>
            </section>
        
    )
}