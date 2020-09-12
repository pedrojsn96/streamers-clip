import React, { useEffect, useState } from "react";

import { getStreamers } from "../../services";
import Card from "../../components/Card";

import { useHistory } from "react-router-dom";

const Home = () => {
  const [streamers, setStreamers] = useState([]);
  const history = useHistory();

  const handleCardClick = (streamer) => {
    history.push(`/${streamer.name}/${streamer._id}`);
  };

  useEffect(() => {
    getStreamers().then((response) => {
      const { users } = response.data;
      setStreamers(users);
    });
  }, []);

  return (
    <div>
      <h1>List of Streamers</h1>
      {!Boolean(streamers.length) && (
        <div>
          <p>Loading</p>
        </div>
      )}

      {streamers.length !== 0 &&
        streamers.map((streamer) => (
          <div
            key={streamer.display_name}
            onClick={() => handleCardClick(streamer)}
          >
            <Card streamer={streamer} />
          </div>
        ))}
    </div>
  );
};

export default Home;
