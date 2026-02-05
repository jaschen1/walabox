
import React, { useState } from 'react';
import { LOGO_URL, TOOLS } from '../constants';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect py-3 md:py-5 px-4 md:px-6 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={LOGO_URL} 
              alt="WalaBox Logo" 
              className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-500 ease-out border border-white/40" 
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 tracking-tighter leading-none">
              WalaBox
            </h1>
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-400 mt-0.5 md:mt-1">Creative Studio</span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-3 md:gap-10">
          <div className="hidden sm:flex items-center gap-4 md:gap-8 mr-4">
            <a href="#" className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors">首页</a>
            
            {/* Dropdown Menu for Explore Tools */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-xs md:text-sm font-black uppercase tracking-widest text-gray-500 hover:text-blue-600 transition-colors group">
                探索工具
                <svg 
                  className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="w-48 md:w-56 bg-white/70 backdrop-blur-[32px] border border-white/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden p-2 ring-1 ring-black/5">
                  {TOOLS.filter(t => !t.isComingSoon).map((tool) => (
                    <a 
                      key={tool.id}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 md:p-3 rounded-xl hover:bg-white/80 hover:scale-[1.02] transition-all group/item"
                    >
                      <span className="text-lg md:text-xl group-hover/item:scale-110 transition-transform">{tool.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-[12px] md:text-[13px] font-black text-gray-800 group-hover/item:text-blue-600 transition-colors">{tool.title}</span>
                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">立即使用</span>
                      </div>
                    </a>
                  ))}
                  <div className="mt-1 pt-1 border-t border-black/5">
                    <div className="px-3 py-2 text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest text-center">更多工具孵化中...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Liquid Glass Red Button */}
          <a 
            href="https://xhslink.com/m/5at2IomKfqs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20"
          >
            {/* Liquid Background */}
            <div className="absolute inset-0 bg-red-500/80 backdrop-blur-xl transition-colors duration-500 group-hover:bg-red-600/90" />
            
            {/* Shine Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
            
            <span className="relative z-10 text-[14px] md:text-[18px]">📕</span>
            <span className="relative z-10 text-[10px] md:text-sm font-black text-white uppercase tracking-[0.1em] md:tracking-[0.2em]">
              <span className="hidden xs:inline">小红书</span> @文弱李工
            </span>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-xl md:rounded-2xl pointer-events-none" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
