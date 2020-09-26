import React from "react";

const Card = ({ streamer }) => {
  return (
    <div key={streamer.display_nameyar}>
      <img src={streamer.logo} />
      <p>{streamer.display_name}</p>
      <p>{streamer.bio}</p>
    </div>
  );
};

export default Card;
