import { createContext, useState } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videoDownload, setVideoDownload] = useState([]);

  const addVideo = (videoData) => {
    setVideoDownload(videoData);
  };

  return (
    <VideoContext.Provider value={{ videoDownload, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
export default VideoContext;
