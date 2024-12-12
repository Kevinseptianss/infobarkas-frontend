import { useParams } from "react-router-dom";
import ImageSlideshow from "../components/ImageSlideshow";
import { formatToRupiah } from "../utils/data-local";
import { useEffect, useState } from "react";
import api from "../utils/api";

function DetailPage() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getAdsById(productId);
        if (!response) {
          setError("Product not found");
        } else {
          setProduct(response);
          console.log(response);
        }
      } catch (error) {
        setError("Failed to fetch product: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="detail-container">
      <ImageSlideshow images={product.images} />
      <div className="detail-wrapper">
        <div className="detail-content-wrapper">
          <div className="detail-content-title">
            <p>📍 {product.location}</p>
            <h1>{product.title}</h1>
          </div>
          <div className="detail-content-price">
            <h1>{formatToRupiah(product.price)}</h1>
            <button className="btn-jual">Kirim Pesan</button>
          </div>
        </div>

        <div className="detail-description-wrapper">
          <div className="detail-description">
            <h2>Deskripsi</h2>
            <p>{product.description}</p>
          </div>
          <div className="detail-toko">
            {(product.profile_path) ? (
              <img
                src={
                  import.meta.env.VITE_API_URL +
                    "/profile/" +
                    product.profile_path
                }
                alt="Profile"
              />
            ) : (
              <div className="placeholder-detail-image">No Image</div>
            )}
            <h2>{product.name} ❯</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
