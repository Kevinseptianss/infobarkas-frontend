import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ImageProfile() {
  const { authUser = null } = useSelector((states) => states);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        !event.target.closest(".dropdown-profile") &&
        !event.target.closest(".profile-icon")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.stopPropagation();
    localStorage.removeItem("accessToken");
    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <MdMessage />
      {authUser ? (
        <CgProfile
          onClick={toggleDropdown}
          className="profile-icon"
          style={{ cursor: "pointer" }}
        />
      ) : (
        <img
          src={
            import.meta.env.VITE_APP_URL + "/images/" + authUser?.profile_path
          }
          alt="Profile"
          onClick={toggleDropdown}
          className="profile-icon"
          style={{ cursor: "pointer" }}
        />
      )}

      {isDropdownOpen && (
        <div className="dropdown-profile">
          <ul>
            <Link to={"/profile/me"}><li>Profile</li></Link>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default ImageProfile;
