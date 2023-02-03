import Stargrey from '../assets/Stargrey.png'
import StarRed from '../assets/StarRed.png'
import { products } from "../models/Products";
import { useParams } from "react-router-dom";
function Starfunction() {

  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  const stars = parseInt(product.rating)

  switch (stars) {
    case 1:
      return (
        <ul>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
        </ul>
      );
    case 2:
      return (
        <ul>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
        </ul>
      )
    case 3:
      return (
        <ul>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
        </ul>
      );
    case 4:
      return (
        <ul>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={Stargrey} alt="Notation" /></li>
        </ul>
      );
    case 5:
      return (
        <ul>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
          <li className="info-star"><img className="star" src={StarRed} alt="Notation" /></li>
        </ul>
      );
    default:
      return 5;
  }
}

export default Starfunction
