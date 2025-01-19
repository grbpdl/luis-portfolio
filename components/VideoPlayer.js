import VideoPlayerControls from "@/components/VideoPlayerControls";
import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState();
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      const loadingTimeout = setTimeout(() => {
        if (videoProgress === currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  const toggleMuteUnmute = () => {
    const video = videoRef.current;
    if (video) {
      setIsMuted(!video.muted);
      video.muted = !video.muted;
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        video.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          isMuted={isMuted}
          onPlayPause={togglePlayPause}
          onMuteUnmute={toggleMuteUnmute}
          onFullscreenToggle={toggleFullscreen}
        />
      </div>
      <video
        className="w-full"
        ref={videoRef}
        loop
        muted={isMuted}
        autoPlay
      >
        <source src="/reaction.mp4" />
      </video>
    </div>
  );
}
