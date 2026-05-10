import React from "react";

const RightSideBar = ({ currentSong }) => {
  return (
    <div className="w-72 bg-black text-[#a7a7a7] p-4 hidden lg:flex flex-col overflow-y-auto border-l border-[#282828]">
      {currentSong ? (
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-xl">{currentSong.album}</h3>
          <img src={currentSong.thumbnail} alt="" />

          <h1 className="text-white text-2xl font-bold">{currentSong.title}</h1>
          <p>{currentSong.artist}</p>

          
        </div>
      ) : (
        <div>
          {" "}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-white text-base">Friend Activity</h2>
          </div>
          {/* Placeholder content for the sidebar */}
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm">
              Connect with Facebook to see what your friends are playing.
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform w-max text-sm mt-2">
              Connect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;

// <div className="w-72 bg-black text-[#a7a7a7] p-4 hidden lg:flex flex-col overflow-y-auto border-l border-[#282828]">

//     <div className="flex items-center justify-between mb-6">
//       <h2 className="font-bold text-white text-base">Friend Activity</h2>
//     </div>

//     {/* Placeholder content for the sidebar */}
//     <div className="flex flex-col gap-4 mt-4">
//       <p className="text-sm">Connect with Facebook to see what your friends are playing.</p>
//       <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform w-max text-sm mt-2">
//         Connect
//       </button>
//     </div>
//   </div>
