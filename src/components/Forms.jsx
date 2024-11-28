import { useState } from "react";

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

    // nanti bisa diganti misal request API ke backend buat submit
    console.log("Submited");

    setFormsData({
      email: "",
      password: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit} className="forms">
      <div className="form-element">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formsData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formsData.password}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <button type="submit" className="btn-jual">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Forms;
