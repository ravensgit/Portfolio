import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    label: 'Enterprise Data',
    detail:
      'Started with ETL pipelines and data integration across enterprise systems where reliability and accuracy mattered.'
  },
  {
    label: 'Backend Engineering',
    detail:
      'Moved into Java Spring Boot microservices, REST APIs, database optimization and production application development.'
  },
  {
    label: 'Graduate Study',
    detail:
      'Expanded into machine learning, deep learning, data intensive computing and computer systems.'
  },
  {
    label: 'Applied AI',
    detail:
      'Designed a vision language model framework that reduced hallucination rates by 82 percent without retraining.'
  }
];

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    );

    gsap.fromTo(
      visualRef.current.children,
      { opacity: 0, x: 28 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: visualRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30 z-0">
        <div
          className="w-1.5 h-1.5 bg-white rounded-full absolute top-[15%] left-[10%] animate-[float-up_15s_linear_infinite]"
          style={{ boxShadow: '0 0 10px 2px white' }}
        />
        <div
          className="w-2 h-2 bg-blue-500 rounded-full absolute top-[60%] left-[85%] animate-[float-up_20s_linear_infinite]"
          style={{ boxShadow: '0 0 15px 3px rgba(59,130,246,0.5)' }}
        />
        <div
          className="w-1 h-1 bg-purple-500 rounded-full absolute top-[80%] left-[20%] animate-[float-up_12s_linear_infinite]"
          style={{ boxShadow: '0 0 12px 2px rgba(168,85,247,0.5)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div ref={contentRef} className="w-full flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.16)]">
             About Me
          </h2>

          <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed mb-6">
            My experience has taken me across different areas of software engineering rather than a single specialization.
            
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-loose mb-6">
            Starting with enterprise data integration and later moving into backend development helped me understand how software is designed, built and maintained in production environments.
          </p>

          <p className="text-base md:text-lg text-gray-400 leading-loose">
            Pursuing an MS in Computer Science and Engineering strengthened that foundation while giving me the chance to explore machine learning and computer vision through coursework and research. Instead of replacing what I learned in industry, it expanded the way I think about solving software problems.
          </p>
        </div>

        <div ref={visualRef} className="w-full">
          <div className="relative glass rounded-[2rem] p-6 md:p-8 overflow-hidden journey-card">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 pointer-events-none" />

            <p className="relative text-xs text-gray-400 tracking-[0.28em] uppercase mb-8 font-semibold">
              Career Timeline
            </p>

            <div className="relative space-y-5">
              <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-blue-400 via-violet-400 to-white/20" />

              {journey.map((item, index) => (
                <div key={item.label} className="relative flex gap-5 items-start journey-step">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#050505] border border-blue-400/40 flex items-center justify-center text-xs text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.25)] font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex-1 rounded-2xl bg-white/[0.035] border border-white/10 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-xs text-violet-300 uppercase tracking-[0.25em] mb-2 font-semibold">
                Current Direction
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently seeking opportunities where backend engineering, data engineering and AI platforms come together to build practical software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
