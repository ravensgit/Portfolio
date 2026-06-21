import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    eyebrow: '82% Reduction',
    title: 'Hallucination Grounding in Vision-Language Models',
    date: 'April 2026',
    type: 'Research Project',
    tech: ['Python', 'PyTorch', 'BLIP', 'CLIP', 'Hugging Face'],
    desc: 'Designed a training-free caption selection framework that reduced sentence-level hallucination from 4.08% to 0.74% across 5,000 COCO images using BLIP candidates, CLIP visual alignment, and object-count penalties.',
    live: null,
    github: 'https://github.com/ravensgit/Hallucination-Grounding',
  },
  {
    eyebrow: '73K Records',
    title: 'Earthquake Risk Analysis',
    date: 'April 2025',
    type: 'Deployed App',
    tech: ['Python', 'PySpark', 'XGBoost', 'LightGBM', 'Streamlit'],
    desc: 'Built a PySpark-based ML pipeline over 73K USGS seismic records with engineered reliability features, model benchmarking, and a deployed Streamlit risk checker with interactive heatmaps.',
    live: 'https://quakeanalysis.streamlit.app',
    github: 'https://github.com/ravensgit/Earthquake-Analysis',
  },
  {
    eyebrow: 'Responsive UI',
    title: 'Personal Engineering Portfolio Website',
    date: 'May 2026',
    type: 'Frontend Project',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    desc: 'Designed and developed a responsive React portfolio using reusable components, modular UI sections, custom CSS, and cross-device layouts to showcase professional experience and engineering projects.',
    live: null,
    github: 'https://github.com/ravensgit/Portfolio',
  },
  {
    eyebrow: '92.29% Accuracy',
    title: 'Image Classification with Neural Networks',
    date: 'June 2025',
    type: 'Deep Learning Project',
    tech: ['Python', 'TensorFlow', 'Scikit-learn'],
    desc: 'Built CNN and feed-forward neural network models for Fashion MNIST and UCI Adult classification, reaching 92.29% image classification accuracy and 86% tabular classification accuracy.',
    live: null,
    github: 'https://github.com/ravensgit/Neural_Networks',
  },
];

const Missions = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="missions" ref={sectionRef} className="relative w-full py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="font-mono text-sm text-blue-400 mb-3 text-center tracking-[0.35em] uppercase">Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">Selected work</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          A focused set of projects across applied AI, data engineering, frontend development, and deep learning.
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div key={p.title} className="glass project-card rounded-[1.75rem] p-7 md:p-8 min-h-[320px] flex flex-col hover:bg-white/[0.06] transition-colors relative overflow-hidden">
              <span className="absolute top-5 right-6 text-5xl font-black text-white/5">{String(index + 1).padStart(2, '0')}</span>
              <div className="mb-5">
                <span className="inline-flex px-4 py-2 rounded-full bg-black/35 border border-white/10 text-xs font-mono tracking-[0.2em] uppercase text-gray-300">{p.type}</span>
              </div>
              <p className="font-mono text-xs text-blue-300 tracking-[0.25em] uppercase mb-3">{p.eyebrow}</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight max-w-xl">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 uppercase tracking-wide">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 items-center flex-wrap">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                    <ExternalLink size={14} /> Live app
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-gray-300 hover:text-white">
                  <Github size={14} /> GitHub
                </a>
                <span className="ml-auto font-mono text-xs text-gray-600">{p.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
