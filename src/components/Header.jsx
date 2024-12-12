import { Link, useNavigate } from "react-router-dom";
import infoLogo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { asyncGetUser  } from "../states/isAuth/action";

function Header() {
  const authUser  = useSelector((state) => state.authUser );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!authUser ) {
      dispatch(asyncGetUser ());
    }
  }, [authUser , dispatch]);

  const handleRefresh = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
    }
  };

  const renderButtons = () => {
    if (!authUser ) {
      return (
        <div className="header-container-btn-jual">
          <Link to={"/login"}>
            <button className="btn-jual">Login</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="header-container-btn-jual">
          <Link to={"/profile"}>
            <button className="btn-jual">{authUser .name}</button>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <img
          className="logo"
          src={infoLogo}
          alt="Logo"
          onClick={handleRefresh}
        />
      </div>

      <div className="header-search">
        <div className="dropdown-header">
          <button className="dropdown-header-button">Semua Kategori</button>
          <div className="dropdown-header-content">
            <a>Mobil Bekas</a>
            <a>Motor Bekas</a>
            <a>Properti</a>
          </div>
        </div>

        <div className="header-container-search">
          <i className="fas fa-search search-icon"></i>
          <input
            className="search-bar"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </div>

      <div className="header-buttons">
        <div className="header-container-btn-jual">
          <Link to={`/jual`}>
            <button className="btn-jual">Jual</button>
          </Link>
        </div>
        {renderButtons()}
      </div>
    </div>
  );
}

export default Header;