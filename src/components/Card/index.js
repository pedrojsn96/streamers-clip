import "./index.scss";
import React from "react";

const Card = ({ streamer, handleClick }) => {
  return (
    <div
      className="card"
      key={streamer.display_nameyar}
      onClick={() => handleClick(streamer)}
    >
      <img
        className="card__image"
        src={streamer.logo}
        alt="Imagem do Streamer"
      />
      <div className="card__description">
        <p className="card__name">{streamer.display_name}</p>
        <p className="card__bio">{streamer.bio}</p>
      </div>
    </div>
  );
};

export default Card;
