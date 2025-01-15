import { useParams } from "react-router-dom";
import Body from "../components/Body";

function MyProfilePage() {
    const { id } = useParams();
    const detail = JSON.parse(atob(id));
    return (
      <div className="myprofile-page">
            <Body title={detail.name}/>
      </div>
    );
  }
  
  export default MyProfilePage;
  