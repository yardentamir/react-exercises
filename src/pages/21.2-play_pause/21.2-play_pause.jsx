import React, { useRef } from 'react';
import CustomButton from '../../Components/CustomButton';
import Video from "./video.mp4";

export default function Editing() {

  const vidRef = useRef();

  const playVideo = () => {
    vidRef.current.play();
  }

  const pauseVideo = () => {
    vidRef.current.pause();
  }

  return (
    <div>
      <video src={Video} ref={vidRef} type="video/mp4" />
      <CustomButton text="Play" callback={playVideo} />
      <CustomButton text="Pause" callback={pauseVideo} />
    </div>
  )
}

// <video controls autostart autoPlay src={Video} type="video/mp4" />