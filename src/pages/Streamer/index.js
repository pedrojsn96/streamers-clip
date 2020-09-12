import React, { useEffect, useState } from "react";
import { getClips } from "../../services";

import { useParams } from "react-router-dom";

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
    <div>
      <h1>Streamer Page: {name}</h1>

      <h2>List of Clips</h2>
      {!Boolean(clips.length) && (
        <div>
          <p>Loading</p>
        </div>
      )}

      <iframe
        src="https://clips.twitch.tv/embed?clip=DifficultHomelyWalrusArsonNoSexy&parent=localhost&autoplay=false"
        height="360"
        width="640"
        frameborder="0"
        scrolling="no"
        allowFullScreen
      />

      {clips.length !== 0 &&
        clips.map((clip) => (
          <div key={clip.id}>
            <img src={clip.thumbnail_url} />
            <p>Titulo: {clip.title}</p>
            <p>Visualizações: {clip.view_count}</p>
            <p>Data de criação: {clip.created_at}</p>
            {/* <p>{clip.embed_url}</p> */}
          </div>
        ))}
    </div>
  );
};

export default Streamer;
