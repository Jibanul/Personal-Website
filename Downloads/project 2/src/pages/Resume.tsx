import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';

function Resume() {
  const [visibleSections, setVisibleSections] = useState({
    education: false,
    experience: false,
    awards: false,
    publications: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const sectionId = entry.target.id.replace('-section', '') as keyof typeof visibleSections;
          if (sectionId in visibleSections) {
            setVisibleSections(prev => ({
              ...prev,
              [sectionId]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['education-section', 'experience-section', 'awards-section', 'publications-section']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    sections.forEach(section => section && observer.observe(section));

    return () => {
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, []);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Resume</h1>
        
        {/* Education */}
        <section id="education-section" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                logo: "/ucf_logo.png",
                degree: "PhD in Computer Science",
                school: "University of Central Florida",
                year: "2024"
              },
              {
                logo: "/ucf_logo.png",
                degree: "MS in Statistical Computing",
                school: "University of Central Florida",
                year: "2018 • GPA: 3.96/4.0"
              },
              {
                logo: "/sust_logo.png",
                degree: "BS in Statistics",
                school: "Shahjalal University of Science & Technology",
                year: "2016 • GPA Ranking: 4/120"
              }
            ].map((edu, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ease-out bg-white p-4 rounded-lg shadow-sm
                  ${visibleSections.education 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <img 
                    src={edu.logo}
                    alt={`${edu.school} Logo`}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience-section" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Experience
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Graduate Research and Teaching Assistant",
                company: "Center for Research in Computer Vision, UCF",
                period: "May 2020 – August 2024",
                points: [
                  "Collaborated with cross-functional teams to develop deep learning models",
                  "Designed vision transformers for class-agnostic object counting",
                  "Developed vision-language approaches for zero-shot object counting",
                  "Led lab sessions for 1500+ students in Discrete Mathematics and programming."
                ]
              },
              {
                title: "Data Modeler/Analyst (Intern)",
                company: "Quicken Loans",
                period: "May 2019 – August 2019",
                points: [
                  "Improved mortgage forecasting model accuracy by 31% through model refinement.",
                  "Applied advanced feature engineering to enhance model performance and accuracy.",
                  "Conducted statistical analysis and hypothesis testing to support data-driven decisions."
                ]
              }
            ].map((exp, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out bg-white p-6 rounded-lg shadow-sm
                  ${visibleSections.experience 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500">{exp.period}</p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Honors and Awards */}
        <section id="awards-section" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Honors and Awards
          </h2>
          <div className="space-y-4">
            {[
              {
                logo: "/Microsoft-Azure-Logo.png",
                title: "Microsoft Azure Scholarship",
                org: "University of Central Florida",
                year: "2019",
                description: "Awarded to utilize cloud-computing resources to support big data projects"
              },
              {
                logo: "/siemens-logo.png",
                title: "First Place, Siemens Wind Power Big Data Analytics Symposium Competition",
                org: "University of Central Florida",
                year: "2017"
              }
            ].map((award, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out bg-white p-6 rounded-lg shadow-sm
                  ${visibleSections.awards 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={award.logo}
                    alt={`${award.title} Logo`}
                    className="w-24 h-auto object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{award.title}</h3>
                    <p className="text-gray-600">{award.org}</p>
                    <p className="text-gray-500">{award.year}</p>
                    {award.description && (
                      <p className="text-gray-600 mt-2">{award.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications-section" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Selected Publications
          </h2>
          <div className="space-y-2">
            {[
              {
                title: "Vision Transformers with Cross-Attention Pyramids for Class-Agnostic Counting",
                conference: "2024 9th Int Conference on Signal and Image Processing. IEEE",
                link: "https://ieeexplore.ieee.org/abstract/document/10671540"
              },
              {
                title: "Vision-Language Feature Refinement for Zero-Shot Object Counting",
                conference: "2024 9th International Conference on Frontiers of Signal Processing. IEEE",
                link: "https://ieeexplore.ieee.org/abstract/document/10785495"
              },
              {
                title: "Two-Stream Boosted TCRNet for Range-Tolerant Infra-Red Target Detection",
                conference: "2021 IEEE International Conference on Image Processing (ICIP). IEEE",
                link: "https://ieeexplore.ieee.org/abstract/document/9506170"
              }
            ].map((pub, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out bg-white p-6 rounded-lg shadow-sm
                  ${visibleSections.publications 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-4">{pub.conference}</p>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-2.5 
                    bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-sm
                    border border-white/20 rounded-full shadow-lg
                    hover:shadow-blue-500/25 hover:from-blue-600/80 hover:to-blue-700/80
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                    transition-all duration-300 transform hover:scale-[1.02]
                    text-white font-medium"
                  style={{ 
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  Paper <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;