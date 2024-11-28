import { useState } from "react";
import "../styles/Form.css";

const Forms = () => {
  const [formsData, setFormsData] = useState({
    email: "",
    password: "",
  });

  /**
   * For handling change on form
   * @param {*} event any event triggered by user
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormsData({ ...formsData, [name]: value });
  };

  /**
   * For handling submit form
   * @param {*} e any event triggered by user
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // it can be changed to API call
    console.log("Submited");

    setFormsData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit} className="forms">
        <label>Masuk Akun Anda</label>
        <div className="form-element">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukan E-Mail anda"
            required
            value={formsData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Masukan password anda"
            required
            value={formsData.password}
            onChange={handleChange}
          />
        </div>

        <div className="button-wrapper">
          <button type="submit" className="btn-jual">
            Login
          </button>
          <button type="submit" className="btn-jual">
            Daftar dengan E-Mail
          </button>
          <button type="submit" className="google-sign-in-button">
            Login With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
