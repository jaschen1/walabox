
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ToolCard from './components/ToolCard';
import { TOOLS } from './constants';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const allEntries = [
    ...TOOLS,
    {
      id: 'teaser',
      title: '更多精彩',
      description: '我们正在构思更多有趣的创意实验，敬请期待下一场灵感爆发。新的交互方式、AI 赋能的艺术创作，一切都在进行中。',
      icon: '✨',
      url: '#',
      color: 'from-blue-400 to-indigo-600',
      tag: '即将到来',
      image: 'https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed%20%2812%29.jpg',
      isComingSoon: true,
      isTeaser: true
    }
  ];

  const total = allEntries.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-[#f1f5f9] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden flex flex-col">
      {/* Liquid Background Blobs */}
      <div className="fixed top-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-200/40 blur-[150px] pointer-events-none -z-20 animate-pulse" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-200/40 blur-[150px] pointer-events-none -z-20" style={{ animationDelay: '3s' }} />

      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center relative py-8">
        {/* Hero Section */}
        <section className="text-center px-6 mb-12 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-white/50 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            WalaBox Creative Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-[0.85] tracking-tighter">
            释放你的 <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">极致灵感</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-bold tracking-tight opacity-80">
            探索数字与艺术的完美融合，为每一个创意碎片提供持续动力
          </p>
        </section>

        {/* 3D Stage Container */}
        <div className="relative w-full max-w-[1400px] h-[750px] flex items-center justify-center perspective-[3500px]">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-8 lg:left-20 z-[60] w-20 h-20 rounded-full bg-white/80 backdrop-blur-2xl border border-white/80 shadow-2xl flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-500 group"
          >
            <svg className="w-10 h-10 group-hover:-translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-8 lg:right-20 z-[60] w-20 h-20 rounded-full bg-white/80 backdrop-blur-2xl border border-white/80 shadow-2xl flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-500 group"
          >
            <svg className="w-10 h-10 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Layout */}
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            {allEntries.map((tool, index) => {
              let offset = (index - activeIndex);
              
              if (offset < -total / 2) offset += total;
              if (offset > total / 2) offset -= total;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              const cardWidth = 450;
              const overlapAmount = cardWidth * 0.4; 
              const horizontalShift = cardWidth - overlapAmount;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let opacity = 0;
              let zIndex = 0;
              let scale = 0.8;

              if (isCenter) {
                translateX = 0;
                translateZ = 400; 
                rotateY = 0;
                opacity = 1;
                zIndex = 50;
                scale = 1.05;
              } else if (isLeft) {
                translateX = -horizontalShift; 
                translateZ = 0;
                rotateY = 45;
                opacity = 0.8;
                zIndex = 40;
                scale = 0.85;
              } else if (isRight) {
                translateX = horizontalShift;
                translateZ = 0;
                rotateY = -45;
                opacity = 0.8;
                zIndex = 40;
                scale = 0.85;
              } else {
                opacity = 0;
                translateZ = -2000;
                translateX = offset > 0 ? 1500 : -1500;
              }

              return (
                <div
                  key={tool.id}
                  className="absolute w-[450px] transition-all duration-1000 cubic-bezier"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  <ToolCard tool={tool as any} isActive={isCenter} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicator */}
        <div className="mt-12 flex gap-4 z-20">
          {allEntries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-16 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'w-3 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </main>

      <footer className="py-12 px-6 md:px-10 border-t border-white/40 bg-white/90 backdrop-blur-3xl relative overflow-hidden">
        {/* Subtle decorative glow for footer */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 relative z-10 text-center md:text-left">
          {/* Column 1: Logo & Brand */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img 
              src="https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed.jpg" 
              alt="Logo" 
              className="w-14 h-14 rounded-[1.1rem] shadow-xl shadow-blue-500/10 border border-white/50" 
            />
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tighter leading-none">
                WalaBox
              </span>
              <span className="text-xs text-indigo-900/60 font-black uppercase tracking-[0.2em] mt-1">Creative Studio</span>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div className="flex items-center justify-center gap-10">
             <a href="https://xhslink.com/m/5at2IomKfqs" target="_blank" className="text-sm font-black text-blue-500 hover:text-blue-700 hover:scale-105 transition-all uppercase tracking-widest">反馈建议</a>
             <a href="https://xhslink.com/m/5at2IomKfqs" target="_blank" className="flex items-center gap-2 text-sm font-black text-[#ff2442] hover:drop-shadow-[0_0_8px_rgba(255,36,66,0.3)] hover:scale-105 transition-all uppercase tracking-widest">
               <span className="text-xl">📕</span> 小红书 @文弱李工
             </a>
          </div>

          {/* Column 3: Copyright */}
          <div className="text-indigo-900/40 text-xs font-black uppercase tracking-[0.3em] md:text-right">
            © 2026 WalaBox Studio. <br className="md:hidden" /> 版权所有
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
