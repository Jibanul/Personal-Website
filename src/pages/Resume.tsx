<<<<<<< HEAD
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

=======
import React from 'react';
import { BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import SkillLevelIcon from '../components/SkillLevelIcons';

function Resume() {
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Resume</h1>
        
        {/* Education */}
<<<<<<< HEAD
        <section id="education-section" className="mb-12">
=======
        <section className="mb-12">
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
<<<<<<< HEAD
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
=======
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img 
                  src="/ucf_logo.png"
                  alt="UCF Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">PhD in Computer Science</h3>
                  <p className="text-gray-600">University of Central Florida</p>
                  <p className="text-gray-500">2024</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img 
                  src="/ucf_logo.png"
                  alt="UCF Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">MS in Statistical Computing</h3>
                  <p className="text-gray-600">University of Central Florida</p>
                  <p className="text-gray-500">2018 • GPA: 3.96/4.0</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img 
                  src="/sust_logo.png"
                  alt="SUST Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">BS in Statistics</h3>
                  <p className="text-gray-600">Shahjalal University of Science & Technology</p>
                  <p className="text-gray-500">2016 • GPA Ranking: 4/120</p>
                </div>
              </div>
            </div>
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          </div>
        </section>

        {/* Experience */}
<<<<<<< HEAD
        <section id="experience-section" className="mb-12">
=======
        <section className="mb-12">
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Experience
          </h2>
          <div className="space-y-4">
<<<<<<< HEAD
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
=======
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Graduate Research and Teaching Assistant</h3>
              <p className="text-gray-600">Center for Research in Computer Vision, UCF</p>
              <p className="text-gray-500">May 2020 – August 2024</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Collaborated with cross-functional teams to develop deep learning models</li>
                <li>Designed vision transformers for class-agnostic object counting</li>
                <li>Developed vision-language approaches for zero-shot object counting</li>
                <li>Led lab sessions for Discrete Mathematics and programming courses</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Research Assistant</h3>
              <p className="text-gray-600">Department of Statistics, UCF</p>
              <p className="text-gray-500">August 2018 – April 2020</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Developed statistical models for analyzing time-series data</li>
                <li>Implemented machine learning algorithms for predictive modeling</li>
                <li>Collaborated with faculty on research projects in statistical computing</li>
                <li>Published research findings in peer-reviewed journals</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Data Modeler/Analyst (Intern)</h3>
              <p className="text-gray-600">Quicken Loans</p>
              <p className="text-gray-500">May 2019 – August 2019</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Constructed ML models for time-series forecasting</li>
                <li>Implemented advanced feature engineering techniques</li>
                <li>Performed statistical analysis and hypothesis testing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">Teaching Assistant</h3>
              <p className="text-gray-600">Department of Statistics, SUST</p>
              <p className="text-gray-500">January 2016 – July 2018</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Assisted professors in teaching undergraduate statistics courses</li>
                <li>Conducted tutorial sessions and graded assignments</li>
                <li>Mentored students in statistical analysis and research methods</li>
                <li>Developed course materials and practice problems</li>
              </ul>
            </div>
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          </div>
        </section>

        {/* Publications */}
<<<<<<< HEAD
        <section id="publications-section" className="mb-12">
=======
        <section className="mb-12">
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Selected Publications
          </h2>
<<<<<<< HEAD
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
=======
          <div className="space-y-4">
            {[
              {
                title: "Vision Transformers with Cross-Attention Pyramids for Class-Agnostic Counting",
                conference: "2024 9th Int Conference on Signal and Image Processing. IEEE"
              },
              {
                title: "Vision-Language Feature Refinement for Zero-Shot Object Counting",
                conference: "2024 9th International Conference on Frontiers of Signal Processing. IEEE"
              },
              {
                title: "Two-Stream Boosted TCRNet for Range-Tolerant Infra-Red Target Detection",
                conference: "2021 IEEE International Conference on Image Processing (ICIP). IEEE"
              }
            ].map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-gray-600 mt-2">{pub.conference}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Computer Vision", level: "expert" },
              { skill: "Machine Learning", level: "expert" },
              { skill: "Python", level: "expert" },
              { skill: "PyTorch", level: "expert" },
              { skill: "Statistical Analysis", level: "expert" },
              { skill: "Deep Learning", level: "expert" },
              { skill: "C++", level: "advanced" },
              { skill: "R", level: "advanced" },
              { skill: "MATLAB", level: "advanced" },
              { skill: "SQL", level: "advanced" }
            ].map(({ skill, level }) => (
              <div key={skill} className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-md">
                <SkillLevelIcon 
                  level={level as any}
                  size={24}
                  className="text-blue-600"
                />
                <span className="text-gray-700">{skill}</span>
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;