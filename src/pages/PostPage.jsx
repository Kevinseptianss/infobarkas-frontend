import { useState } from "react";
import imageLogo from "../assets/imageslogo.jpeg";
function PostPage() {
  const [imageSrc, setImageSrc] = useState([]);

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
  if (imageSrc.length > 0) {
    let placeholderCount = 0;
    if (imageSrc.length < 6) {
        placeholderCount = 5
    } else {
        placeholderCount = Math.max(0, 5 - (imageSrc.length - 5));
    }
    
    return (
      <div className="form-container">
        <form className="forms post">
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
            accept=".jpg, .png, .jpeg"
            multiple
            onChange={handleImageChange}
          />
          <label>Judul Iklan</label>
          <input type="text" name="nama" />
          <label>Harga Barang</label>
          <input type="number" name="harga" />
          <label>Deskripsi Barang</label>
          <textarea className="from-textarea" name="deskripsi" />
          <button type="submit" className="btn-jual">
            Post
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form className="forms post">
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
