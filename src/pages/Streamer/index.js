import "./index.scss";
import React, { useEffect, useState, Fragment } from "react";
import { getClips } from "../../services";

import { useParams } from "react-router-dom";
import { Header, Footer } from "../../components";

const Streamer = () => {
  const { name, id } = useParams();
  const [clips, setClips] = useState([]);

  useEffect(() => {
    getClips(id).then(({ data }) => {
      const clips = data.data;
      setClips(clips);
    });
  }, [id]);

  return (
    <Fragment>
      <Header />
      <div className="streamer-page">
        <h1 className="streamer-page__title">Clips de {name}</h1>
        <div className="streamer-page__content">
          {!Boolean(clips.length) && (
            <div>
              <p>Loading</p>
            </div>
          )}

          {clips.length !== 0 &&
            clips.map((clip) => (
              <a
                className="streamer-page__clips-frame"
                href={clip.url}
                key={clip.id}
                target="blank"
              >
                <img
                  className="streamer-page__clips-thumbnail"
                  src={clip.thumbnail_url}
                  alt="Clip thumbnail"
                />
                <div className="streamer-page__clips-description">
                  <p className="streamer-page__clips-title">{clip.title}</p>
                  <div className="streamer-page__clips-info">
                    <p className="streamer-page__clips-views">
                      <span
                        className="streamer-page__icon"
                        role="img"
                        aria-label="Emoji de olhos"
                      >
                        &#x1F440;
                      </span>{" "}
                      {clip.view_count}
                    </p>
                    <p className="streamer-page__clips-date">
                      <span
                        className="streamer-page__icon"
                        role="img"
                        aria-label="Emoji de calendário"
                      >
                        &#x1F5D3;
                      </span>{" "}
                      {new Date(clip.created_at).toLocaleDateString("pt-br")}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Streamer;
