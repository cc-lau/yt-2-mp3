import React from "react";
import "./CardStyles.css"

function VideoCard(props) {
  return (
    <div className="video-card">
      <div className="video-title">
        {props.title}{" "}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.downloadLink}
          download
          className="download-link"
        >
          Download MP3
        </a>
        <div className="video-duration">{props.duration}</div>
      </div>
  );
}

export default VideoCard;
