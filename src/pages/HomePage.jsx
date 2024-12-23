import { useParams } from "react-router-dom";
import Body from "../components/Body";

function HomePage() {
  const { id } = useParams();
  let title = "Iklan Terbaru";
  if (id) {
    title = "Pencarian : " + id;
  }
  return (
    <div className="home-page">
      <Body title={title}/>
    </div>
  );
}

export default HomePage;
