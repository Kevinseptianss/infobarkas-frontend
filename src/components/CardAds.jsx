/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useState } from "react";
import "../styles/CardAds.css";

function CardAds({ ad, isExpanded, onToggle }) {
  const [textToCopy, setTextToCopy] = useState(
    `${import.meta.env.VITE_APP_URL}/detail/${ad.id}`
  );

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Link berhasil di salin");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDelete = async () => {
    try {
      const isConfirmed = window.confirm(
        "Apakah anda yakin ingin di hapus iklannya?"
      );
      if (isConfirmed) {
        await api.deleteAds(ad.id);
        window.location.reload();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="ads-card" onClick={onToggle}>
      <div className="ads-card-contain">
        <div className="ads-left">
          <img
            src={"http://localhost:3000/images/" + ad.first_image}
            alt={ad.title}
          />
        </div>
        <div className="ads-right">
          <div className="ads-detail">
            <h2>{ad.title}</h2>
            <p className="ads-price">{api.formatToRupiah(ad.price)}</p>
            <p className="ads-info">
              {api.formatDate(ad.created_at) +
                " - " +
                api.postedAt(ad.created_at) +
                " - " +
                ad.status}
            </p>
          </div>
        </ div>
      </div>
      <div className={`ads-button ${isExpanded ? "visible" : "hidden"}`}>
        <Link to={`/profile/edit-ads/${ad.id}`}>
          <button className="btn-jual">Sunting</button>
        </Link>
        <button className="btn-jual btn-delete" onClick={handleDelete}>
          Hapus
        </button>
        <button className="btn-jual" onClick={copyToClipboard}>
          Bagikan
        </button>
      </div>
    </div>
  );
}

export default CardAds;