import sectionImg from '../../assets/sectionImg.png'
import '../../styles/home/Section1.css'
function LogoCardList () {
    return (
        <div className='section1'>
            <img src={sectionImg} alt="fond_Marin" className="section1-img"/>
            <p className='section1-text'> Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default LogoCardList