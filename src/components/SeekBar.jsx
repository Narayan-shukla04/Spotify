import React, { useState, useRef, useEffect } from "react";
import {
  PlusCircle,
  Shuffle,
  SkipBack,
  Pause,
  Play, // Imported Play icon
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Volume2,
  PictureInPicture2,
  Maximize2,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { setPause, setPlay } from "../features/MusicSlice";

export default function SeekBar({
  currentSong,
  audioRef,
  isPlaying,
  handlePrev,
  handleNext,
  shuffle,
}) {
  // 1. Setup Refs and State
  const dispatch = useDispatch();

  const [isSeeking, setIsSeeking] = useState(false);

  const [progress, setProgress] = useState(0); // Current time in seconds
  const [duration, setDuration] = useState(0); // Total duration in seconds
  const [volume, setVolume] = useState(0.7); // Volume from 0.0 to 1.0

  // 2. Default song fallback (if nothing is selected yet)
  const song = currentSong || {};

  // 4. Auto-play when a new song is passed in
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.play();
      dispatch(setPlay());
    }
  }, [currentSong]);

  // 5. Update Progress Bar as song plays
  const handleTimeUpdate = () => {
    if (!isSeeking) {
      setProgress(audioRef.current.currentTime);
    }
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // 6. User dragging the seek bar
  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekChange = (e) => {
    const newTime = Number(e.target.value);
    setProgress(newTime);
  };

  const handleSeekEnd = (e) => {
    if (!audioRef.current) return;
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
    setIsSeeking(false);
  };

  // 7. User dragging the volume bar
  const handleVolume = (e) => {
    const newVolume = 0.1 + Number(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Helper function to format seconds into M:SS
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Calculate widths for the CSS filling
  const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;
  const volumePercentage = volume * 100;

  return (
    <div className="h-[90px] w-full bg-black flex items-center justify-between px-4 z-50 text-[#a7a7a7] font-sans select-none fixed bottom-0 left-0">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => dispatch(setPause())}
      />

      {/* LEFT SECTION: Song Info */}
      {currentSong ? (
        <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
          <div className="relative w-14 h-14 flex-shrink-0 group cursor-pointer">
            <img
              src={song.thumbnail}
              alt="Album Cover"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-center overflow-hidden whitespace-nowrap">
            <span className="text-sm font-bold text-white hover:underline cursor-pointer truncate">
              {song.title}
            </span>
            <span className="text-[11px] font-medium hover:underline cursor-pointer truncate mt-0.5">
              {song.artist}
            </span>
          </div>
          <PlusCircle
            size={16}
            className="hover:text-white cursor-pointer ml-2 flex-shrink-0"
            strokeWidth={2}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4 w-[30%] min-w-[180px]"></div>
      )}

      {/* CENTER SECTION: Play Controls & Progress */}
      <div className="flex flex-col items-center justify-center max-w-[45%] w-full gap-2">
        <div className="flex items-center gap-6">
          <Shuffle
            onClick={shuffle}
            size={20}
            className="hover:text-white cursor-pointer"
          />
          <SkipBack
            onClick={handlePrev}
            size={20}
            className="hover:text-white cursor-pointer fill-current"
          />

          <button className="bg-white rounded-full p-2 hover:scale-105 transition-transform text-black flex items-center justify-center w-8 h-8">
            {isPlaying ? (
              <Pause
                fill="black"
                onClick={() => dispatch(setPause())}
                size={16}
              />
            ) : (
              <Play
                fill="black"
                onClick={() => dispatch(setPlay())}
                size={16}
                className="ml-0.5"
              />
            )}
          </button>

          <SkipForward
            onClick={handleNext}
            size={20}
            className="hover:text-white cursor-pointer fill-current"
          />
          <Repeat size={20} className="hover:text-white cursor-pointer" />
        </div>

        <div className="flex items-center gap-8 w-full max-w-[627px]">
          <div className="text-[11px] font-medium min-w-[32px] text-right">
            {formatTime(progress)}
          </div>

          {/* FUNCTIONAL SEEK BAR */}
          <div className="relative group flex  items-center  h-6 flex-1">
            <div className="absolute w-full h-1 bg-[#4d4d4d] rounded-full pointer-events-none">
              <div
                className="h-full bg-white rounded-full relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.01}
              value={progress}
              onChange={handleSeekChange}
              onMouseDown={handleSeekStart}
              onTouchStart={handleSeekStart}
              onMouseUp={handleSeekEnd}
              onTouchEnd={handleSeekEnd}
              onKeyUp={handleSeekEnd}
              className="absolute inset-0 w-full h-full opacity-0 appearance-none bg-transparent cursor-pointer z-20"
            />
          </div>

          <div className="text-[11px] font-medium min-w-[32px]">
            {formatTime(duration)}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION: Extra Controls */}
      <div className="flex items-center justify-end gap-4 w-[30%] min-w-[180px]">
        <Mic2
          size={16}
          strokeWidth={2}
          className="hover:text-white cursor-pointer"
        />
        <ListMusic
          size={16}
          strokeWidth={2}
          className="hover:text-white cursor-pointer mr-4"
        />

        {/* FUNCTIONAL VOLUME BAR */}
        <div className="relative group flex items-center h-4 w-[93px]">
          <Volume2
            size={16}
            strokeWidth={2}
            className="hover:text-white cursor-pointer absolute -left-6 top-0"
          />

          {/* Visual Track */}
          <div className="absolute w-full h-1 bg-[#4d4d4d] rounded-full pointer-events-none">
            <div
              className="h-full bg-white group-hover:bg-[#1db954] rounded-full relative"
              style={{ width: `${volumePercentage}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow"></div>
            </div>
          </div>

          {/* Native Input */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolume}
            className="absolute w-full h-full opacity-0 cursor-pointer z-20 m-0"
          />
        </div>

        <PictureInPicture2
          size={16}
          strokeWidth={2}
          className="hover:text-white cursor-pointer ml-2"
        />
        <Maximize2
          size={16}
          strokeWidth={2}
          className="hover:text-white cursor-pointer"
        />
      </div>
    </div>
  );
}
