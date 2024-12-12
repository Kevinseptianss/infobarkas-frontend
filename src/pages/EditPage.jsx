/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import imageLogo from "../assets/imageslogo.jpeg";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";
function EditPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getAdsById(id); // Fetch product by ID
        const data = {
            id: id,
            title: response.title,
            price: response.price,
            description: response.description,
            category: response.category,
        }
        setFormData(data); // Assuming the response data contains the product
        const imageUrls = response.images.map(src => "http://localhost:3000/images/" + src);
        setImageSrc(imageUrls);
    } catch (error) {
        setError("Product not found" + error); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProduct();
  }, [id]); // Dependency array includes productId

  const { authUser = null } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      await api.editAds(formData, imageSrc); // Call the API to post the ad
      navigate("/");
    } catch (error) {
      alert("Failed to post ad. Please try again." + error); // Handle error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  if (!formData) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  if (imageSrc.length > 0) {
    let placeholderCount = 0;
    if (imageSrc.length < 6) {
      placeholderCount = 5;
    } else {
      placeholderCount = Math.max(0, 5 - (imageSrc.length - 5));
    }

    return (
      <div className="form-container">
        <form className="forms post" onSubmit={handleSubmit}>
          <div className="label-title">
            <label>Pasang Iklan Jualan</label>
          </div>

          <div className="container-image">
            <div className="wrapper-image">
              {imageSrc.slice(0, 5).map((src, index) => (
                <img key={index} src={src} alt={`image ${index + 1}`} />
              ))}
              {imageSrc.length < 5 &&
                Array.from(
                  { length: Math.min(5 - imageSrc.length, 5) },
                  (_, i) => (
                    <img
                      key={`logo-${i}`}
                      src={imageLogo}
                      alt={`placeholder ${i + 1}`}
                    />
                  )
                )}
            </div>
            <div className="wrapper-image">
              {imageSrc
                .filter((_, index) => index > 4) // Filter out images with index <= 4
                .map((src, index) => (
                  <img key={index} src={src} alt={`image ${index + 1}`} />
                ))}
              {Array.from({ length: placeholderCount }, (_, i) => (
                <img
                  key={`logo-${i}`}
                  src={imageLogo}
                  alt={`placeholder ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <label>Judul Iklan</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          <label>Harga Barang</label>
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
          <label>Deskripsi Barang</label>
          <textarea
            className="from-textarea"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-jual">
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default EditPage;
