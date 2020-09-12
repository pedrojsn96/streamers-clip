import axios from "axios";

const { REACT_APP_ACCEPT, REACT_APP_CLIENT_ID, REACT_APP_TOKEN } = process.env;

export const Api = axios.create({
  baseURL: "https://api.twitch.tv/",
  timeout: 1000,
});

export const getStreamers = () => {
  return Api.get("kraken/users", {
    params: {
      login: "gaules,deercheerup",
    },
    headers: {
      Accept: REACT_APP_ACCEPT,
      "Client-ID": REACT_APP_CLIENT_ID,
    },
  });
};

export const getClips = (streamer_id) => {
  return Api.get("helix/clips", {
    params: {
      broadcaster_id: streamer_id,
    },
    headers: {
      Authorization: `Bearer ${REACT_APP_TOKEN}`,
      "Client-ID": REACT_APP_CLIENT_ID,
    },
  });
};
