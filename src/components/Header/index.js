import "./index.scss";
import React from "react";
import StreamClips from "../../images/stream-clips.svg";
import QRCode from "../../images/qrcode.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleLogoClik = () => {
    history.push("/");
  };

  return (
    <header className="header">
      <div>
        <img
          className="header__logo"
          src={StreamClips}
          alt="Stream Clips logo"
          onClick={() => handleLogoClik()}
        />
      </div>
      <div className="header__donation-section">
        <p className="header__donation-text">Ajude a manter o site</p>
        <img className="header__qrcode" src={QRCode} alt="QRCode para doação" />
      </div>
    </header>
  );
};

export default Header;
