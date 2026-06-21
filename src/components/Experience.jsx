import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: 'April 2024 – December 2024',
    title: 'System Engineer — Java Backend',
    org: 'Tata Consultancy Services, Chennai',
    points: [
      'Developed and shipped backend features for a high-traffic retail CRM serving a major Australian supermarket chain, contributing to 10+ Spring Boot microservices.',
      'Built and extended billing and transaction RESTful APIs handling customer order data across a distributed microservices architecture.',
      'Diagnosed database timeout errors on high-volume endpoints by identifying unoptimized queries and applying indexing fixes.',
      'Expanded JUnit test coverage and contributed to Docker and Kubernetes based deployments through Azure DevOps CI/CD pipelines.',
    ],
  },
  {
    period: 'January 2023 – March 2024',
    title: 'Assistant System Engineer — Data Integration',
    org: 'Tata Consultancy Services, Chennai',
    points: [
      'Built and maintained enterprise ETL pipelines using Informatica PowerCenter and IICS across SAP, Oracle, GCP, Salesforce, and Kronos HRM.',
      'Debugged and refactored existing pipelines by fixing transformation logic and validating outputs before production releases.',
      'Traced and resolved scheduled batch job failures caused by server issues and connection timeouts within SLA windows.',
      'Automated routine data validation using SQL and shell scripts, reducing manual checks on pipeline runs.',
    ],
  },
  {
    period: 'December 2021 – December 2022',
    title: 'Assistant System Engineer — Trainee',
    org: 'Tata Consultancy Services, Chennai',
    points: [
      'Completed onboarding in ETL development, SQL, Linux, and Informatica before moving into production pipeline support within 3 months.',
      'Contributed to production workflows through data validation, issue triage, and pipeline fixes on live deployments.',
    ],
  },
];

const awards = ['Star of the Month ×2', 'On-the-Spot Award'];

const Experience = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, x: -24 },
      {
        opacity: 1, x: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full py-28 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-mono text-sm text-blue-400 mb-3 text-center tracking-[0.35em] uppercase">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">Production engineering</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Three years at TCS across Java backend development, enterprise data integration, production troubleshooting, and deployment support.
        </p>

        <div ref={listRef} className="space-y-6">
          {roles.map((r) => (
            <div key={r.title} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-400">{r.org}</p>
                </div>
                <p className="font-mono text-xs text-violet-400 whitespace-nowrap">{r.period}</p>
              </div>
              <ul className="space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="text-gray-300 text-sm leading-relaxed pl-4 border-l border-white/10">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-6 md:p-8">
          <p className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase mb-4">Recognition</p>
          <div className="flex flex-wrap gap-3">
            {awards.map((award) => (
              <span key={award} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">{award}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
