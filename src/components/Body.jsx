/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { asyncGetAd, asyncGetAdSearch } from "../states/ads/action";
import { useParams } from "react-router-dom";

function Body({ title }) {
  const dispatch = useDispatch();
  let { id } = useParams();
  try {
    const detail = atob(id); // Attempt to decode the Base64 string
    const parsedDetail = JSON.parse(detail); // Assuming the decoded string is JSON
  
    // Check if the parsed detail has the owner_id property
    if (parsedDetail && parsedDetail.id) {
      id = parsedDetail.id; // Assign owner_id to id
    }
  } catch {
    null
  }

  const [headerTitle, setHeaderTitle] = useState("");

  // Use useSelector to get ads from the Redux state
  const ads = useSelector((state) => state.ads); // Ensure this path is correct

  // Check if ads is null or not an array, and default to an empty array
  const adsList = Array.isArray(ads) ? ads : [];

  // Fetch ads when the component mounts
  useEffect(() => {
    setHeaderTitle(title);
    const fetchAds = async () => {
      id ? (dispatch(asyncGetAdSearch(id))) : dispatch(asyncGetAd());
    };

    fetchAds();
  }, [dispatch, id]);

  return (
    <div className="body-container">
      <h1 className="title">{headerTitle}</h1>
      <div className="card-container">
        {adsList.length > 0 ? ( // Check if adsList is not empty
          adsList.map((product, index) => (
            <Card
              key={index}
              productId={product.id}
              productTitle={product.title}
              productPrice={api.formatToRupiah(product.price)} // Assuming price is already formatted
              productLocation={product.location}
              productImage={product.first_image}
            />
          ))
        ) : (
          <p>Tidak ada iklan untuk ditampilkan.</p> // Message when ads are empty
        )}
      </div>
    </div>
  );
}

export default Body;