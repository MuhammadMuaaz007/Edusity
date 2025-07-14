import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";
import { useRef } from "react";
const VideoPlayer = ({ play, setPlay }) => {
  const player = useRef(null);
  const shutPlay = (e) => {
    if (e.target === player.current) {
      setPlay(false);
    }
  };
  return (
    <div
      className={`video-player ${play ? "" : "video-hide"}`}
      onClick={shutPlay}
      ref={player}
    >
      <video src={video} muted autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;
