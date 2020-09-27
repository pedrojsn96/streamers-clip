import "./index.scss";
import React, { useEffect, useState, Fragment } from "react";

import { getStreamers } from "../../services";
import { Card, Header } from "../../components";

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
    <Fragment>
      <Header />
      <div className="home-page">
        <h1 className="home-page__title">Procurar</h1>
        <div className="home-page__content">
          {!Boolean(streamers.length) && (
            <div>
              <p>Loading</p>
            </div>
          )}

          {streamers.length !== 0 &&
            streamers.map((streamer) => (
              <Card streamer={streamer} handleClick={handleCardClick} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
