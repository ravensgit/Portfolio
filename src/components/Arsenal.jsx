import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const groups = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL', 'Shell Scripting'] },
  { title: 'Backend', items: ['Spring Boot', 'Hibernate (JPA)', 'RESTful APIs', 'Microservices', 'Apache Kafka', 'OAuth 2.0'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Responsive Web Design', 'Component-Based Development'] },
  { title: 'Data Engineering', items: ['ETL Pipelines', 'Informatica', 'Data Integration', 'SQL Optimization', 'Pandas', 'NumPy'] },
  { title: 'AI / ML', items: ['PyTorch', 'PySpark', 'TensorFlow', 'Scikit-learn', 'Hugging Face Transformers', 'BLIP', 'CLIP', 'Computer Vision', 'Vision-Language Models'] },
  { title: 'Cloud & DevOps', items: ['Azure DevOps', 'Docker', 'Kubernetes', 'GCP', 'Git', 'Jenkins', 'Streamlit'] },
  { title: 'Databases', items: ['MySQL', 'MS SQL', 'SAP HANA', 'Oracle'] },
];

const Arsenal = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.09, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section id="arsenal" ref={sectionRef} className="relative w-full py-28">
      <div className="glow-blob w-[400px] h-[400px] bg-blue-600/10 bottom-0 left-1/3" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <p className="font-mono text-sm text-blue-400 mb-3 text-center tracking-[0.35em] uppercase">Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">Technical toolkit</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Technologies I have used across enterprise software, backend development, data engineering, applied AI and frontend projects.
        </p>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="glass skill-card rounded-2xl p-6 hover:bg-white/[0.06] transition-colors min-h-[180px]">
              <p className="font-mono text-xs text-violet-400 mb-4 tracking-[0.25em] uppercase">{g.title}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 leading-relaxed">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
