import "./index.scss";
import React from "react";
import StreamClips from "../../images/stream-clips.svg";
import QRCode from "../../images/qrcode.png";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const handleLogoClik = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={StreamClips}
        alt="Stream Clips logo"
        onClick={() => handleLogoClik()}
      />
      <div className="footer__info">
        <p>Criado por @pedrojsn96</p>
        <p>
          Sugestões? Manda DM{" "}
          <span role="img" aria-label="Emoji de dedo das mãos">
            &#x1F446;
          </span>
        </p>
      </div>
      <div className="footer__donation-section">
        <p className="footer__donation-text">Ajude a manter o site</p>
        <img className="footer__qrcode" src={QRCode} alt="QRCode para doação" />
      </div>
    </footer>
  );
};

export default Footer;
