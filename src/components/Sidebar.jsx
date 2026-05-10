import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-[350px] bg-black text-white p-2 h-screen flex flex-col font-sans">
      
     

      {/* Main Library Section */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col mt-2">
        
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-4 text-white">
          <button className="flex items-center gap-3 hover:text-white transition-colors group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b3b3b3] group-hover:text-white transition-colors">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <polyline points="7 10 5 12 7 14"></polyline>
            </svg>
            <span className="font-bold text-[16px] tracking-wide text-[#b3b3b3] group-hover:text-white transition-colors">Your Library</span>
          </button>

          <button className="flex items-center gap-1.5 bg-[#1f1f1f] hover:bg-[#2a2a2a] px-3 py-1 rounded-full text-[14px] font-bold transition-colors">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
            </svg>
            Create
          </button>
        </header>

        {/* Scrollable Content Cards */}
        <div className="flex-1 overflow-y-auto px-2 pb-4 scrollbar-hide">
          
          {/* Card 1: Create Playlist */}
          <div className="bg-[#242424] p-5 rounded-lg mb-2">
            <h3 className="font-bold text-[16px] mb-2 tracking-wide">
              Create your first playlist
            </h3>
            <p className="text-[14px] font-medium text-white mb-5">
              It's easy, we'll help you
            </p>
            <button className="bg-white text-black text-[14px] font-bold px-4 py-1.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all">
              Create playlist
            </button>
          </div>

          {/* Card 2: Find Podcasts */}
          <div className="bg-[#242424] p-5 rounded-lg">
            <h3 className="font-bold text-[16px] mb-2 tracking-wide">
              Let's find some podcasts to follow
            </h3>
            <p className="text-[14px] font-medium text-white mb-5">
              We'll keep you updated on new episodes
            </p>
            <button className="bg-white text-black text-[14px] font-bold px-4 py-1.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all">
              Browse podcasts
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;