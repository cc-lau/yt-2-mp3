import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [videoId, setVideoId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState({});
  const options = {
    method: "GET",
    url: "https://youtube-mp3-download1.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "X-RapidAPI-Key": "08a6d9fb77msh8cbcb59ff4a36afp1c6bdajsn23b46a6ee430",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };

  const getYoutubeID = () => {
    let url = videoUrl.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2]
      ? setVideoId(url[2].split(/[^0-9a-z_\-]/i)[0])
      : url[0];
  };

  const convertVideo = () => {
    axios
      .request(options)
      .then(function (response) {
        setVideoData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setVideoUrl(e.target.value);
  };

  useEffect(() => {
    getYoutubeID();
  }, [videoUrl]);

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  return (
    <div>
      <input
        type="text"
        id="video-url"
        name="video-url"
        value={videoUrl}
        onChange={handleChange}
      ></input>
      <button onClick={convertVideo}>Convert</button>
    </div>
  );
}

export default Search;
