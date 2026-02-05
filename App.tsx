
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header.tsx';
import ToolCard from './components/ToolCard.tsx';
import { TOOLS } from './constants.tsx';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

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

  // Touch handlers for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

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
      <div className="fixed top-[-15%] right-[-10%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] rounded-full bg-blue-200/30 md:bg-blue-200/40 blur-[100px] md:blur-[150px] pointer-events-none -z-20 animate-pulse" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] rounded-full bg-indigo-200/30 md:bg-indigo-200/40 blur-[100px] md:blur-[150px] pointer-events-none -z-20" style={{ animationDelay: '3s' }} />

      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center relative py-4 md:py-8 overflow-hidden">
        {/* Hero Section */}
        <section className="text-center px-6 mb-8 md:mb-12 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-white/50 text-blue-600 font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8">
            <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-blue-500"></span>
            </span>
            WalaBox Creative Studio
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-gray-900 mb-4 md:mb-6 leading-[1.1] md:leading-[1.0] tracking-tighter">
            释放你的 <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">极致灵感</span>
          </h1>
          <p className="text-gray-400 max-w-xs md:max-w-xl mx-auto text-sm md:text-lg font-bold tracking-tight opacity-80">
            探索数字与艺术的完美融合，为每一个创意碎片提供持续动力
          </p>
        </section>

        {/* 3D Stage Container */}
        <div 
          className="relative w-full max-w-[1400px] h-[550px] md:h-[750px] flex items-center justify-center perspective-[2000px] md:perspective-[3500px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 lg:left-20 z-[60] w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/60 md:bg-white/80 backdrop-blur-2xl border border-white/80 shadow-xl flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10 group-hover:-translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-4 lg:right-20 z-[60] w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/60 md:bg-white/80 backdrop-blur-2xl border border-white/80 shadow-xl flex items-center justify-center text-gray-800 hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              // Sizing for responsive view
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const cardWidth = isMobile ? window.innerWidth * 0.8 : 450;
              const horizontalShift = isMobile ? cardWidth * 0.45 : 450 * 0.6;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let opacity = 0;
              let zIndex = 0;
              let scale = 0.8;

              if (isCenter) {
                translateX = 0;
                translateZ = isMobile ? 200 : 400; 
                rotateY = 0;
                opacity = 1;
                zIndex = 50;
                scale = 1.0;
              } else if (isLeft) {
                translateX = -horizontalShift; 
                translateZ = isMobile ? -150 : 0;
                rotateY = isMobile ? 30 : 45;
                opacity = 0.6;
                zIndex = 40;
                scale = 0.8;
              } else if (isRight) {
                translateX = horizontalShift;
                translateZ = isMobile ? -150 : 0;
                rotateY = isMobile ? -30 : -45;
                opacity = 0.6;
                zIndex = 40;
                scale = 0.8;
              } else {
                opacity = 0;
                translateZ = -2000;
                translateX = offset > 0 ? 1200 : -1200;
              }

              return (
                <div
                  key={tool.id}
                  className="absolute transition-all duration-700 md:duration-1000 cubic-bezier"
                  style={{
                    width: `${cardWidth}px`,
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

        {/* Indicators */}
        <div className="mt-4 md:mt-12 flex gap-2 md:gap-4 z-20">
          {allEntries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-10 md:w-16 bg-blue-600 shadow-lg' : 'w-2 md:w-3 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </main>

      <footer className="py-8 md:py-12 px-6 md:px-10 border-t border-white/40 bg-white/90 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <img 
              src="https://walabox-assets.oss-cn-beijing.aliyuncs.com/unnamed.jpg" 
              alt="Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/50" 
            />
            <div className="flex flex-col text-left">
              <span className="text-lg md:text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tighter leading-none">
                WalaBox
              </span>
              <span className="text-[10px] text-indigo-900/40 font-black uppercase tracking-widest mt-0.5">Creative Studio</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
             <a href="https://xhslink.com/m/5at2IomKfqs" target="_blank" className="text-[10px] md:text-xs font-black text-blue-500 hover:text-blue-700 transition-all uppercase tracking-widest">反馈建议</a>
             <a href="https://xhslink.com/m/5at2IomKfqs" target="_blank" className="flex items-center gap-1.5 text-[10px] md:text-xs font-black text-[#ff2442] transition-all uppercase tracking-widest">
               📕 小红书 @文弱李工
             </a>
          </div>

          {/* Copyright */}
          <div className="text-indigo-900/30 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center md:text-right">
            © 2026 WalaBox Studio. <br className="md:hidden" /> 版权所有
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
