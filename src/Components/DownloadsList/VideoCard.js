import React from "react";

function VideoCard(props) {
  return (
    <div>
      <div>
        {props.title} {props.duration}
      </div>
    </div>
  );
}

export default VideoCard;
