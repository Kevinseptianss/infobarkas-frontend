/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ productId, productTitle, productPrice, productLocation }) {
  const fetchRandomImage = () => {
    const randomImageUrl =
      "https://picsum.photos/200/300?random=" +
      Math.floor(Math.random() * 1000);
    return randomImageUrl; // URL of the random image
  };

  return (
    <Link to={`/detail/${productId}`}>
      <div className="card">
        <img src={fetchRandomImage()} alt="Product" className="card-image" />
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
