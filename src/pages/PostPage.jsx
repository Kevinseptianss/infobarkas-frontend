import { useEffect, useState } from "react";
import imageLogo from "../assets/imageslogo.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
function PostPage() {
  const [imageSrc, setImageSrc] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const { authUser = null } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  const handleWithoutImage = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert("Mohon input gambar minimal 1 aja"); // Show alert if no images are selected
    return; // Exit the function
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Get all selected files
    const newImageSrcs = []; // Array to hold the new image sources
    setImageSrc([]);
    files.forEach((file) => {
      const reader = new FileReader(); // Create a FileReader for each file
      reader.onloadend = () => {
        newImageSrcs.push(reader.result); // Push the result to the new array
        if (newImageSrcs.length === files.length) {
          setImageSrc((prevSrcs) => [...prevSrcs, ...newImageSrcs]); // Update state once all files are read
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    });
  };

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
      await api.postAds(formData, imageSrc); // Call the API to post the ad
      navigate("/");
    } catch (error) {
      alert("Failed to post ad. Please try again." + error); // Handle error
    }
  };

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
          <input
            type="file"
            name="image"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <label>Judul Iklan</label>
          <input type="text" name="title" onChange={handleInputChange} />
          <label>Harga Barang</label>
          <input type="number" name="price" onChange={handleInputChange} />
          <label>Kategori</label>
          <select name="category" onChange={handleInputChange}>
            <option value="">Pilih Kategori</option>
            <option value="mobil">Mobil Bekas</option>
            <option value="motor">Motor Bekas</option>
            <option value="properti">Properti</option>
            <option value="hanphone">Handphone</option>
            <option value="komputer">Komputer</option>
            <option value="elektronik">Elektronik Lainnya</option>
            <option value="hobiolahraga">Hobi & Olahraga</option>
            <option value="pribadi">Keperluan Pribadi</option>
            <option value="bayi">Perlengkapan Bayi</option>
            <option value="kantor">Perlengkapan Kantor</option>
          </select>
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

  return (
    <div className="form-container">
      <form className="forms post" onSubmit={handleWithoutImage}>
        <div className="label-title">
          <label>Pasang Iklan Jualan</label>
        </div>

        <div className="container-image">
          <div className="wrapper-image">
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
          </div>
          <div className="wrapper-image">
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
            <img src={imageLogo}></img>
          </div>
        </div>
        <input
          type="file"
          name="image"
          accept=".jpg, .png, .jpeg"
          multiple
          onChange={handleImageChange}
        />
        <label>Judul Iklan</label>
        <input type="text" name="nama" />
        <label>Harga Barang</label>
        <input type="number" name="harga" />
        <label>Kategori</label>
        <select name="kategori" onChange={handleInputChange}>
          <option value="">Pilih Kategori</option>
          <option value="mobil">Mobil Bekas</option>
          <option value="motor">Motor Bekas</option>
          <option value="properti">Properti</option>
          <option value="hanphone">Handphone</option>
          <option value="komputer">Komputer</option>
          <option value="elektronik">Elektronik Lainnya</option>
          <option value="hobiolahraga">Hobi & Olahraga</option>
          <option value="pribadi">Keperluan Pribadi</option>
          <option value="bayi">Perlengkapan Bayi</option>
          <option value="kantor">Perlengkapan Kantor</option>
        </select>
        <label>Deskripsi Barang</label>
        <textarea className="from-textarea" name="deskripsi" />
        <button type="submit" className="btn-jual">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostPage;
