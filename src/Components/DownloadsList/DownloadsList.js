import React, { useState, useEffect, useContext } from "react";
import VideoContext from "../../VideoContext";
import VideoCard from "./VideoCard";

function DownloadsList() {
  const { videoDownload } = useContext(VideoContext);
  const [isConverted, setIsConverted] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDuration, setVideoDuration] = useState("");

  function fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  function checkConverted() {
    if (Object.keys(videoDownload).length !== 0) {
      setIsConverted(true);
    }
  }

  useEffect(() => {
    const roundedDuration = Math.round(videoDownload.duration);
    const duration = fmtMSS(roundedDuration);
    setVideoTitle(videoDownload.title);
    setVideoDuration(duration);
    checkConverted();
  }, [videoDownload]);

  return (
    <div>
      {isConverted ? (
        <VideoCard title={videoTitle} duration={videoDuration}></VideoCard>
      ) : null}
    </div>
  );
}

export default DownloadsList;
