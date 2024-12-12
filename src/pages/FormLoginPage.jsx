import { useSelector } from "react-redux";
import Forms from "../components/Forms";
import { useNavigate } from "react-router-dom";

export default function FormLoginPage() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  if (!authUser) {
    return (
      <div>
        <Forms />
      </div>
    );
  } else {
    navigate('/');
  }
  
}
