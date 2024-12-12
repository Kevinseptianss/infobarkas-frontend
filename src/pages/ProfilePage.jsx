import { useEffect, useState } from "react";
import api from "../utils/api";
import CardAds from "../components/CardAds";
import "../styles/CardAds.css";
import { useNavigate } from "react-router-dom";
import ImageProfile from "../components/ImageProfile";
import "../styles/ProfilePage.css"; // Import the new CSS file for ProfilePage

function ProfilePage() {
  const [ads, setAds] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [expandedCardId, setExpandedCardId] = useState(null); // State to track the expanded card

  const getAds = async () => {
    try {
      const response = await api.getMyAds();
      setAds(response);
    } catch (err) {
      setError(err.message); // Set error message if the API call fails
    } finally {
      setLoading(false); // Set loading to false after the API call
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getAds();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Loading indicator
  }

  if (error) {
    navigate("/login");
  }

  const toggleCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id); // Toggle the expanded card
  };

  return (
    <div className="container-profile">
      <div className="profile-header-menu">
        <ImageProfile />
      </div>
      <div className="ads-container">
        {ads?.length > 0 ? (
          ads?.map((ad) => (
            <CardAds 
              key={ad.id} 
              ad={ad} 
              isExpanded={expandedCardId === ad.id} 
              onToggle={() => toggleCard(ad.id)} 
            />
          ))
        ) : (
          <div className="no-ads-message">No ads found.</div> // Message when no ads are available
        )}
      </div>
    </div>
  );
}

export default ProfilePage;