import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPause, setPlay, setSong } from "../features/MusicSlice";

export const SongHook = (songs = []) => {
  let { currentSong, isPlaying } = useSelector((store) => store.song);

  const dispatch = useDispatch();

  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (!audioRef.current || !currentSong) {
      return;
    }

   

    audioRef.current.src = currentSong.url;
    audioRef.current.load()
   

   
  }, [currentSong]);

  useEffect(() => {
    if (!audioRef.current || !currentSong?.url) return;

    const syncPlayback = async () => {
      try {
        if (isPlaying) {
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } catch (error) {
        console.log(error);
      }
    };

    syncPlayback();
  }, [isPlaying, currentSong]);

  const handlePlay = (song) => {
    if (song.id === currentSong?.id) {
      dispatch(setPlay());
    } else {
      dispatch(setSong(song));
      dispatch(setPlay());
    }
  };

  const handleNext = () => {
    if (songs.length === 0 || !currentSong) return;

    const currentIndex = songs.findIndex((elem) => elem.id === currentSong?.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    const nextSong = songs[nextIndex];

    dispatch(setSong(nextSong));
    dispatch(setPlay());
  };




  const handlePrev = () => {
    if (songs.length === 0 || !currentSong) return;

    const currentIndex = songs.findIndex((elem) => elem.id === currentSong?.id);
    const prevIndex = (currentIndex -1+songs.length) % songs.length;
    const prevSong = songs[prevIndex];

    dispatch(setSong(prevSong));
    dispatch(setPlay());
  };




  const shuffle=()=>{
    let randomIndex=Math.floor(Math.random()* songs.length)
    dispatch(setSong(songs[randomIndex]))
    dispatch(setPlay())
  }

  return {
    audioRef,
    handlePlay,
    handleNext,
    handlePrev,
    shuffle
  };
};
