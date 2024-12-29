import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Download } from 'lucide-react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am Rahul Kumar', 'a Full-Stack Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.3)' }}
      >
        <source src="https://assets.mixkit.co/videos/41640/41640-720.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white drop-shadow-lg">Hello !!</h1>
        <div className="text-3xl mb-8" style={{ color: '#0070f3', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <span ref={el}></span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1jaeh_TL0QmyzZgZp8JI5gUFDYIxF7W0A/view?usp=drivesdk"
            download
            className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
