/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Card.css";
function Card({ productId, productTitle, productPrice, productLocation, productImage }) {

  return (
    <Link to={`/detail/${productId}`}>
      <div className="card">
        <img src={import.meta.env.VITE_API_URL + '/images/' + productImage} alt="Product" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{productTitle}</h2>
          <p className="card-price">{productPrice}</p>
          <p className="card-location">📍 {productLocation}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTpes = {
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productLocation: PropTypes.string.isRequired,
};

export default Card;
