import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative w-full py-32 overflow-hidden bg-[#050505]">
      <div className="glow-blob w-[450px] h-[450px] bg-violet-600/15 top-0 left-1/2 -translate-x-1/2" />
      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-blue-400 mb-3 tracking-[0.35em] uppercase">Contact</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Let’s build something reliable together.
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
          I am open to Software Engineer, Backend Engineer, Data Engineer and AI Platform opportunities across the United States.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="mailto:naveen.cspro@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-medium hover:scale-105 transition-transform">
            <Mail size={15} /> Email
          </a>
          <a href="https://www.linkedin.com/in/naveen-cspro/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="https://github.com/ravensgit" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors">
            <Github size={15} /> GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors">
            <Download size={15} /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
