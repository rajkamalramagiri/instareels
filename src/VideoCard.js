import React from "react";
import { useState, useRef } from "react";

function VideoCard({ url }) {
  const [isPlay, setPlay] = useState(false);
  const vidref = useRef(null);
  const play = () => {
    if (!isPlay) {
      vidref.current.play();
      setPlay(true);
    } else {
      vidref.current.pause();
      setPlay(false);
    }
  };
  return (
    <div className="videocard">
      <video
        onClick={play}
        ref={vidref}
        className="video_player"
        src={url}
        alt="insta rrel"
        loop
      />
    </div>
  );
}

export default VideoCard;
