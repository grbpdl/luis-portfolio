import React from "react";
import PlayButton from "@/public/play.svg";
import PauseButton from "@/public/pause.svg";
import MuteButton from "@/public/mute.svg";
import UnmuteButton from "@/public/unmute.svg";
import FullscreenButton from "@/public/fullscreen.svg";

const VideoPlayerControls = ({
  progress,
  size = 48,
  width = 3,
  isPaused,
  isMuted,
  onPlayPause,
  onMuteUnmute,
  onFullscreenToggle,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex justify-center items-center space-x-4">
      {/* Play/Pause Button */}
      <div className="relative flex justify-center items-center">
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#aaaaaa"
            strokeWidth={width}
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#ffffff"
            strokeWidth={width}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute">
          <button
            className="group cursor-pointer flex justify-center items-center"
            onClick={onPlayPause}
          >
            <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
              {isPaused ? <PlayButton /> : <PauseButton />}
            </div>
          </button>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        className="group cursor-pointer flex justify-center items-center"
        onClick={onMuteUnmute}
      >
        <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
          {isMuted ? <MuteButton /> : <UnmuteButton />}
        </div>
      </button>

      {/* Fullscreen Toggle Button */}
      <button
        className="group cursor-pointer flex justify-center items-center"
        onClick={onFullscreenToggle}
      >
        <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
          <FullscreenButton />
        </div>
      </button>
    </div>
  );
};

export default VideoPlayerControls;
