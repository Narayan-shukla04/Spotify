import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-3 flex items-center justify-between font-sans min-w-[800px]">
      
      {/* Left Section: Logo */}
      <div className="flex-shrink-0 cursor-pointer">
        {/* Spotify Logo Icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.3 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>

      {/* Center Section: Home & Search */}
      <div className="flex items-center gap-2">
        {/* Home Button */}
        <button className="w-[48px] h-[48px] rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-[#1f1f1f] rounded-full h-[48px] px-4 hover:bg-[#2a2a2a] border border-transparent hover:border-[#333] transition-all group w-[400px] xl:w-[480px]">
          {/* Magnifying Glass */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#b3b3b3] group-hover:text-white transition-colors">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          
          <input 
            type="text" 
            placeholder="What do you want to play?" 
            className="bg-transparent text-white w-full h-full ml-3 focus:outline-none placeholder-[#b3b3b3] font-medium text-[15px]"
          />
          
          {/* Browse Icon & Divider */}
          <div className="flex items-center h-full">
             <div className="w-px h-6 bg-white/20 mx-3"></div>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors">
                <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M3 15h6"></path>
                <path d="M3 18h6"></path>
             </svg>
          </div>
        </div>
      </div>

      {/* Right Section: Navigation Links & Logged-In Auth */}
      <div className="flex items-center gap-8">
        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-[#a7a7a7] font-bold text-[15px] tracking-wide">
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Premium</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Support</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all">Download</a>
        </div>
        
        {/* Vertical Divider */}
        <div className="h-6 w-px bg-white/20"></div>
        
        {/* Logged-In User Group */}
        <div className="flex items-center gap-5">
          <a href="#" className="flex items-center gap-1.5 text-white font-bold text-[14px] hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <polyline points="8 12 12 16 16 12"></polyline>
            </svg>
            Install App
          </a>

          {/* Notification Bell */}
          <button className="text-[#a7a7a7] hover:text-white hover:scale-105 transition-all p-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>

          {/* User Profile Avatar */}
          <button className="w-[32px] h-[32px] rounded-full bg-[#1f1f1f] hover:scale-105 transition-transform flex items-center justify-center border-4 border-black relative overflow-hidden group">
            {/* Using a colorful div with an initial as a placeholder for a profile picture */}
            <div className="w-full h-full bg-[#e11d48] flex items-center justify-center text-white text-xs font-bold group-hover:bg-[#be123c] transition-colors">
              U
            </div>
            {/* Optional: To use a real image, replace the div above with this: 
            <img src="YOUR_IMAGE_URL" alt="User Profile" className="w-full h-full object-cover" /> 
            */}
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;