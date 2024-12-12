import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/ProfileEdit.css";
import api from "../utils/api";

function ProfileEditPage() {
  const authUser = useSelector((state) => state.authUser);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formsData, setFormsData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (authUser) {
      setFormsData({
        name: authUser.name || "",
        phone: authUser.phone || "",
      });
    }
  }, [authUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormsData({ ...formsData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the selected image as the new state
        api.postProfilePicture(file);
        window.location.reload();
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api.editProfile(formsData);
    if (result) {
      alert("Berhasil ubah data");
      window.location.reload();
    }
  };

  return (
    <div className="profile-edit-container">
      <div
        className="profile-edit-image"
        onClick={() => document.getElementById("imageUpload").click()}
      >
        {selectedImage || (authUser && authUser.profile_path) ? (
          <img
            src={
              selectedImage ||
              import.meta.env.VITE_API_URL + "/profile/" + authUser.profile_path
            }
            alt="Profile"
          />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>
      <input
        type="file"
        id="imageUpload"
        style={{ display: "none" }} // Hide the file input
        accept="image/*" // Accept only image files
        onChange={handleImageChange}
      />
      <form className="profile-edit-input" onSubmit={handleSubmit}>
        <label htmlFor="name">Nama</label>
        <input
          id="name"
          value={formsData.name}
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          value={authUser?.email}
          type="email"
          placeholder="Enter your email"
          disabled
        />

        <label htmlFor="phone">Nomor Handphone</label>
        <input
          id="phone"
          value={formsData.phone}
          name="phone"
          type="number"
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <button type="submit" className="submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileEditPage;
