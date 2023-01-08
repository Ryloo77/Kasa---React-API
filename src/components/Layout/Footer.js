import logoFooter from '../../assets/logoFooter.png'
import '../../styles/layout/Footer.css'
function Footer () {
    return(
        <div className="footer">
            <img src={logoFooter} alt="logo" className="footer-img"/>
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </div>

)
}

export default Footer