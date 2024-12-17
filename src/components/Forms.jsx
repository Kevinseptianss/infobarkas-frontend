import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setAuthUserActionCreator,
} from "../states/isAuth/action";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../utils/firebase-config";
import api from "../utils/api";

const Forms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // Send ID token to the backend
      const response = await fetch(import.meta.env.VITE_API_URL+ "/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const responseJson = await response.json();

      const { message } = responseJson;

      const {
        data: { accessToken },
      } = responseJson;

      if (response.ok) {
        api.putAccessToken(accessToken);
        const authUser = await api.getOwnProfile();
        console.log(authUser);
        dispatch(setAuthUserActionCreator(authUser));
        navigate("/");
        window.location.reload();
        alert("Sign-In Successful");
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };


  return (
    <div className="form-container">
      <form action="" className="forms">
        <label>Masuk Akun Anda</label>

        <div className="button-wrapper">
          <button type="button" onClick={handleGoogleSignIn} className="google-sign-in-button">
            Login With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
