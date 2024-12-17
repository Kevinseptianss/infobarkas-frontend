/* eslint-disable react/prop-types */
import { useState } from "react";
import CitySelect from "./CitiesSelect";

function FormRegisterComponent({ handleSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    location: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update formData based on input changes
  };

  const handleCitySelect = (city) => {
    setFormData({ ...formData, location: city.label  });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit(formData); // Call handleSubmit with the form data object
  };

  return (
    <div className="form-container">
      <form className="forms" onSubmit={onSubmit}>
        <label>Registrasi</label>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <CitySelect onCitySelect={handleCitySelect} />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Konfirmasi Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button className="btn-jual" type="submit">
          Daftar
        </button>
      </form>
    </div>
  );
}

export default FormRegisterComponent;
