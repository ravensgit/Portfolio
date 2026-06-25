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
      'Built backend features for a high traffic retail CRM across 10+ Spring Boot microservices serving a major Australian supermarket chain.',
      'Developed REST APIs for billing and transaction services and improved database performance through query optimization and indexing.',
      'Contributed to JUnit testing, Docker and Kubernetes based deployments and Azure DevOps CI/CD pipelines as part of biweekly releases.'
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'JUnit', 'Docker', 'Kubernetes', 'Azure DevOps']
  },
  {
    period: 'January 2023 – March 2024',
    title: 'Assistant System Engineer — Data Integration',
    org: 'Tata Consultancy Services, Chennai',
    points: [
      'Built and maintained enterprise ETL pipelines using Informatica PowerCenter and IICS across SAP, Oracle, GCP, Salesforce and Kronos.',
      'Improved pipeline reliability by fixing transformation logic, validating outputs and resolving scheduled batch failures within SLA windows.',
      'Automated routine data validation using SQL and shell scripts, reducing manual checks on pipeline runs.'
    ],
    technologies: ['Informatica', 'ETL', 'SQL', 'Shell Scripting', 'SAP', 'Oracle', 'GCP', 'Salesforce', 'Kronos']
  },
  {
    period: 'December 2021 – December 2022',
    title: 'Assistant System Engineer — Trainee',
    org: 'Tata Consultancy Services, Chennai',
    points: [
      'Completed training in ETL development, SQL, Linux and Informatica before moving into production pipeline work within three months.',
      'Supported live workflows through data validation, issue triage and pipeline fixes on production deployments.'
    ],
    technologies: ['SQL', 'Linux', 'Informatica', 'ETL', 'Data Validation']
  }
];

const awards = [
  {
    title: 'Star of the Month',
    detail: 'Awarded twice at Tata Consultancy Services for outstanding performance and delivery contributions.',
    certificates: [
      {
        label: 'Certificate 1',
        href: '/certificates/star-of-the-month-1.pdf'
      },
      {
        label: 'Certificate 2',
        href: '/certificates/star-of-the-month-2.pdf'
      }
    ]
  },
  {
    title: 'On-the-Spot Award',
    detail: 'Recognized for delivering a production change with zero business disruption.',
    certificates: [
      {
        label: 'View Certificate',
        href: '/certificates/on-the-spot-award.pdf'
      }
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full py-28 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-mono text-sm text-blue-400 mb-3 text-center tracking-[0.35em] uppercase">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-center">
          Professional Experience
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Three years building enterprise software across backend development, data integration and production systems at Tata Consultancy Services.
        </p>

        <div ref={listRef} className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-400">{role.org}</p>
                </div>

                <p className="font-mono text-xs text-violet-400 whitespace-nowrap">
                  {role.period}
                </p>
              </div>

              <ul className="space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="text-gray-300 text-sm leading-relaxed pl-4 border-l border-white/10"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-6 md:p-8">
          <p className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase mb-4">
            Recognition
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award) => (
              <div
                key={award.title}
                className="rounded-2xl bg-white/[0.035] border border-white/10 p-5"
              >
                <h3 className="text-white font-bold mb-2">{award.title}</h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {award.detail}
                </p>

                <div className="flex flex-wrap gap-3">
                  {award.certificates.map((certificate) => (
                    <a
                      key={certificate.href}
                      href={certificate.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {certificate.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
