import { useNavigate } from "react-router-dom";
import FormRegisterComponent from "../components/FormRegisterComponent";
import api from "../utils/api";

function FormRegisterPage() {
    const navigate = useNavigate();
  const handleSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Call API to register user
      const user = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        location: formData.location,
      };
      const userId = await api.registerUser(user);
      if (userId) {
        navigate('/login');
      }
    }
    console.log("Form submitted with data:", formData);
    // You can also perform further actions here, like sending the data to an API
  };

  return (
    <div className="register-container">
      <FormRegisterComponent handleSubmit={handleSubmit} />
    </div>
  );
}

export default FormRegisterPage;
