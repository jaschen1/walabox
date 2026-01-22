
import React, { useState, useRef } from 'react';
import { ToolEntry } from '../types';

interface ToolCardProps {
  tool: ToolEntry & { isTeaser?: boolean };
  isActive?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isActive }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const CardWrapper = (tool.isComingSoon || tool.isTeaser) ? 'div' : 'a';
  const wrapperProps = (tool.isComingSoon || tool.isTeaser)
    ? { className: "group relative block h-full cursor-default" }
    : { 
        href: tool.url, 
        target: "_blank", 
        rel: "noopener noreferrer", 
        className: "group relative block h-full" 
      };

  return (
    <CardWrapper {...wrapperProps as any}>
      {/* Floating Shadow */}
      {isActive && (
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/10 blur-[50px] rounded-full shadow-float -z-10" />
      )}

      {/* Intense Backlight */}
      <div 
        className={`absolute -inset-10 rounded-[4rem] bg-gradient-to-br ${tool.color} transition-all duration-1000 pointer-events-none z-[-1] ${isActive ? 'opacity-20 blur-[100px]' : 'opacity-0 blur-[40px]'}`} 
        style={{ transform: `translate(${tilt.x * 2}px, ${tilt.y * 2}px)` }}
      />
      
      {/* Liquid Glass Main Container */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative h-[650px] flex flex-col bg-white/85 backdrop-blur-[32px] border border-white/80 rounded-[3.5rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.12)] transition-all duration-300 ring-1 ring-inset ring-white/40 z-10 ${isActive ? 'scale-100 animate-float' : 'scale-90 grayscale-[0.2]'}`}
        style={{ 
          transform: isActive ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` : '',
          transformStyle: 'preserve-3d'
        }}
      >
        
        {/* Shine/Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-10" />

        {/* Image Section */}
        <div className="relative h-[380px] overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
          <img 
            src={tool.image} 
            alt={tool.title} 
            className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${tool.isTeaser ? 'grayscale contrast-125 brightness-75' : 'group-hover:scale-110'}`}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${tool.isTeaser ? 'bg-black/40 opacity-70' : 'bg-gradient-to-t from-white/60 via-transparent to-white/10 opacity-70'}`} />
          
          {/* Status Badge Over Image */}
          {(tool.isComingSoon || tool.isTeaser) && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className={`px-8 py-3 backdrop-blur-3xl text-white text-[10px] font-black rounded-2xl shadow-2xl border border-white/10 tracking-[0.4em] transform -rotate-3 uppercase ${tool.isTeaser ? 'bg-black/70' : 'bg-blue-600/60'}`}>
                {tool.isTeaser ? 'Coming Soon...' : '即将推出'}
              </div>
            </div>
          )}

          {/* Top-left Tag */}
          <div className="absolute top-10 left-10 z-30" style={{ transform: 'translateZ(40px)' }}>
            <div className={`px-6 py-2.5 text-[10px] font-black tracking-[0.25em] text-white backdrop-blur-2xl border border-white/40 rounded-2xl uppercase shadow-2xl ${tool.isTeaser ? 'bg-gray-600/50' : (tool.isComingSoon ? 'bg-orange-600/50' : 'bg-black/50')}`}>
              {tool.tag}
            </div>
          </div>

          {/* Floating Icon */}
          <div className={`absolute -bottom-10 right-12 w-24 h-24 rounded-[2rem] bg-white shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex items-center justify-center text-5xl transition-all duration-1000 border border-gray-100 z-30 ${isActive ? 'translate-y-0 scale-100' : 'translate-y-6 scale-90 opacity-60'}`} style={{ transform: 'translateZ(60px)' }}>
            {tool.icon}
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-12 pt-14 flex flex-col flex-grow ${tool.isTeaser ? 'opacity-70' : ''}`} style={{ transform: 'translateZ(30px)' }}>
          <h3 className={`text-4xl font-black text-gray-900 mb-6 tracking-tighter transition-colors ${isActive ? 'text-gray-950 translate-y-0' : 'text-gray-700 translate-y-2'}`}>
            {tool.title}
          </h3>
          
          <p className="text-gray-600 text-base leading-relaxed mb-10 font-medium line-clamp-3 tracking-tight">
            {tool.description}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${tool.color} ${isActive ? 'animate-pulse shadow-[0_0_20px_rgba(0,0,0,0.3)]' : ''}`} />
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                {tool.isTeaser ? 'WalaBox 实验室' : (tool.isComingSoon ? '灵感孵化中' : '运行中')}
              </span>
            </div>
            
            <div className={`flex items-center gap-3 font-black text-[11px] uppercase tracking-[0.25em] transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-50'} ${tool.isTeaser ? 'text-gray-400' : (tool.isComingSoon ? 'text-orange-600' : 'text-blue-600')}`}>
              {tool.isTeaser ? '探索更多' : (tool.isComingSoon ? '蓄势待发' : '立即开始')}
              {isActive && !tool.isComingSoon && !tool.isTeaser && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]" />
      </div>
    </CardWrapper>
  );
};

export default ToolCard;
