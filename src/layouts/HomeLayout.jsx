import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSideBar from "../components/RightSideBar"; // 1. Import the new sidebar
import { useSelector } from "react-redux";
import SongCard from "../components/SongCard";
import SeekBar from "../components/SeekBar";
import AllSongs from "../utils/Allsong.json";
import { nanoid } from "nanoid";
import { SongHook } from "../hooks/SongHook";
import { Store } from "lucide-react";

export const SongWithId = AllSongs.map((elem) => ({
  ...elem,
  id: nanoid(),
}));

const HomeLayout = () => {
  const { isPlaying, currentSong } = useSelector((Store) => Store.song);
  let { handlePlay, audioRef, handleNext, handlePrev, shuffle } =
    SongHook(SongWithId);

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-wrap gap-8 p-5 overflow-y-auto bg-gray-950">
          {SongWithId.map((elem) => {
            return (
              <SongCard
                handlePlay={handlePlay}
                currentSong={currentSong}
                isPlaying={isPlaying}
                key={elem.id}
                song={elem}
              />
            );
          })}
        </div>

        <RightSideBar currentSong={currentSong} />
      </div>

      <div className="h-[10%]">
        <SeekBar
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          handlePlay={handlePlay}
          handleNext={handleNext}
          handlePrev={handlePrev}
          shuffle={shuffle}
        />
      </div>
    </div>
  );
};

export default HomeLayout;
