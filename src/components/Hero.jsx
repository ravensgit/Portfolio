import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    );

    gsap.fromTo(photoRef.current,
      { opacity: 0, scale: 0.92, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: 'power2.out', delay: 0.35 }
    );

    gsap.to(photoRef.current, {
      y: -8,
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.6,
    });

    gsap.fromTo(statsRef.current.children,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.85 }
    );
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="glow-blob w-[560px] h-[560px] bg-blue-600/22 -top-32 -left-32" />
      <div className="glow-blob w-[520px] h-[520px] bg-violet-600/16 bottom-0 right-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div ref={textRef}>
          <p className="text-sm text-blue-400 mb-4 tracking-[0.32em] uppercase font-semibold">Software Engineer</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.95]">
            Naveen<br />Manikandan
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-5 leading-relaxed max-w-xl font-medium">
            Drawn to the engineering behind software, from backend systems to intelligent applications.
          </p>
          <p className="text-gray-400 max-w-xl mb-8 leading-loose">
            Software engineer with three years of industry experience at Tata Consultancy Services and an MS in Computer Science and Engineering from the University at Buffalo. Every step in my career has come from wanting to understand software a little better than I did before.
          </p>

          <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-xl mb-10">
            <div className="glass stat-card rounded-xl p-4">
              <p className="text-3xl font-bold text-blue-400">3 yrs</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">TCS Experience</p>
            </div>
            <div className="glass stat-card rounded-xl p-4">
              <p className="text-3xl font-bold text-violet-400">82%</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">VLM Reduction</p>
            </div>
            <div className="glass stat-card rounded-xl p-4">
              <p className="text-3xl font-bold text-white">MS CSE</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">University at Buffalo</p>
            </div>
          </div>

          <a href="#missions" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform">
            Explore My Work <ArrowDown size={15} />
          </a>
        </div>

        <div ref={photoRef} className="relative flex justify-center md:justify-end hero-photo-wrap">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/22 via-violet-600/12 to-transparent rounded-[2rem] blur-2xl scale-90" />
          <img
            src="/photo.jpg"
            alt="Naveen Manikandan"
            className="relative w-full max-w-xl lg:max-w-2xl rounded-[2rem] border border-white/10 object-cover shadow-[0_0_52px_rgba(59,130,246,0.16)] hero-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
