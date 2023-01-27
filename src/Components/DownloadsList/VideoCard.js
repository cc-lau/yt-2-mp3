import React from "react";

function VideoCard(props) {
  return (
    <div>
      <div>
        {props.title} {props.duration}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={props.downloadLink}
          download
          className="download_btn"
        >
          Download MP3
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
