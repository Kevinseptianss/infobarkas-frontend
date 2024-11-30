import { Link } from "react-router-dom";
import infoLogo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Link to={`/`}>
          <img className="logo" src={infoLogo} alt="Logo" />
        </Link>
      </div>

      <div className="header-search">
        <div className="dropdown">
          <button className="dropdown-button">Semua Kategori</button>
          <div className="dropdown-content">
            <a>Mobil Bekas</a>
            <a>Motor Bekas</a>
            <a>Properti</a>
          </div>
        </div>

        <div className="header-container-search">
          <i className="fas fa-search search-icon"></i>
          <input className="search-bar" />
        </div>
      </div>

      <div className="header-buttons">
        <div className="header-container-btn-jual">
          <Link to={`/jual`}>
            <button className="btn-jual">Jual</button>
          </Link>
        </div>
        <div className="header-container-btn-jual">
          <Link to={"/login"}>
            <button className="btn-jual">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
