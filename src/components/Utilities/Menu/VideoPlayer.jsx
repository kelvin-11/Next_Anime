"use client";
import React, { useState } from "react";
import Youtube from "react-youtube";
import { XCircle } from "@phosphor-icons/react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "300",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-dark float-right bg-color-accent px-2 py-2 mb-1"
        >
          <XCircle size={36} />
        </button>

        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Play Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
