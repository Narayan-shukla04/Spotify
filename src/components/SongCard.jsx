import { useDispatch } from "react-redux";
import { setPause, setPlay, setSong } from "../features/MusicSlice";
import { PauseIcon } from "lucide-react";

// You can use lucide-react or heroicons for the Play icon.
// Here's a raw SVG for maximum compatibility without extra dependencies.
const PlayIcon = () => (
  <svg
    role="img"
    height="24"
    width="24"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="ml-1"
  >
    <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
  </svg>
);

const SongCard = ({ song, handlePlay, isPlaying, currentSong}) => {
  let dispatch = useDispatch();

 
 

  return (
    <div className="group relative w-44 p-4 rounded-md bg-[#181818] hover:bg-[#282828] transition-colors duration-300 ease-in-out cursor-pointer flex flex-col gap-4 font-sans select-none">
      {/* Image Wrapper */}
      <div className="relative w-full aspect-square rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
        <img
          src={song.thumbnail}
          alt={`${song.title} cover`}
          className="object-cover w-full h-full"
        />

        {
          isPlaying &&currentSong?.title === song.title? <button
          onClick={()=>dispatch(setPause())}
          className="absolute bottom-2 right-2 bg-[#1ed760] text-black rounded-full p-3 shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#1fdf64] focus:outline-none z-10 flex items-center justify-center"
        >
     <PauseIcon/>
        </button>:<button
          onClick={()=>handlePlay(song)}
          className="absolute bottom-2 right-2 bg-[#1ed760] text-black rounded-full p-3 shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#1fdf64] focus:outline-none z-10 flex items-center justify-center"
        >
     <PlayIcon/>
        </button>
        }
      </div>

      {/* Text Info */}
      <div className="flex flex-col min-h-[62px]">
        <h3 className="text-white font-bold text-base truncate pb-1">
          {song.title}
        </h3>
        <p className="text-[#a7a7a7] text-sm font-medium truncate line-clamp-2 hover:underline">
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
