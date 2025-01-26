import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap, Briefcase, ArrowRight, Linkedin, ExternalLink } from 'lucide-react';
import { FaPython, FaAws, FaGitAlt, FaDatabase, FaCogs } from 'react-icons/fa';
import { BiMessageSquareDetail, BiStats } from 'react-icons/bi';
import { TbBrandCpp, TbBrandOpenai, TbBrandPython, TbDeviceVisionProFilled } from 'react-icons/tb';
import { SiPytorch, SiOpencv } from 'react-icons/si';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [videoHeight, setVideoHeight] = useState(600);
  const videoRef = useRef<HTMLVideoElement>(null);
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const experienceVideoRef = useRef<HTMLVideoElement>(null);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    education: false,
    skills: false,
    experience: false,
    projects: false
  });
  const fullText = "Welcome! I'm glad you're here, and thanks for stopping by.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'about-section') {
            setVisibleSections(prev => ({ ...prev, about: entry.isIntersecting }));
          } else if (entry.target.id === 'education-section') {
            setVisibleSections(prev => ({ ...prev, education: entry.isIntersecting }));
          } else if (entry.target.id === 'skills-section') {
            setVisibleSections(prev => ({ ...prev, skills: entry.isIntersecting }));
          } else if (entry.target.id === 'experience-section') {
            setVisibleSections(prev => ({ ...prev, experience: entry.isIntersecting }));
          } else if (entry.target.id === 'projects-section') {
            setVisibleSections(prev => ({ ...prev, projects: entry.isIntersecting }));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const sections = ['about-section', 'education-section', 'skills-section', 'experience-section', 'projects-section']
      .map(id => document.getElementById(id))
      .filter(Boolean);

    sections.forEach(section => section && observer.observe(section));

    return () => {
      clearInterval(typingInterval);
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleVideoLoad = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        const containerWidth = video.parentElement?.clientWidth || 0;
        const aspectRatio = video.videoWidth / video.videoHeight;
        const calculatedHeight = containerWidth / aspectRatio;
        setVideoHeight(calculatedHeight);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleVideoLoad);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleVideoLoad);
      }
    };
  }, []);

  const skills = [
    { skill: "Python", icon: FaPython },
    { skill: "PyTorch", icon: SiPytorch },
    { skill: "C++", icon: TbBrandCpp },
    { skill: "SQL", icon: FaDatabase },
    { skill: "Computer Vision", icon: TbDeviceVisionProFilled },
    { skill: "Machine Learning", icon: FaCogs },
    { skill: "Deep Learning", icon: TbBrandOpenai },
    { skill: "Statistical Analysis", icon: BiStats },
    { skill: "NLP", icon: BiMessageSquareDetail },
    { skill: "OpenCV", icon: SiOpencv },
    { skill: "AWS", icon: FaAws },
    { skill: "Git", icon: FaGitAlt }
  ];

  const experiences = [
    {
      title: "Graduate Research and Teaching Assistant",
      company: "Center for Research in Computer Vision, UCF",
      period: "May 2020 – August 2024"
    },
    {
      title: "Data Modeler/Analyst",
      company: "Quicken Loans",
      period: "May 2019 – August 2019"
    },
    {
      title: "Teaching and Data Mining Lab Instructor",
      company: "Department of Statistics & Data Science, UCF",
      period: "August 2018 – April 2020"
    }
  ];

  const projects = [
    {
      id: 'zero-shot-counter',
      title: "Zero-Shot Object Counter",
      imageUrl: "/qualitative1_vlm.png"
    },
    {
      id: 'vision-transformers',
      title: "Vision Transformers for Object Counting",
      imageUrl: "/qualitative2_cropped_cap.png"
    },
    {
      id: 'infrared-detection',
      title: "Infrared Small Target Detection",
      imageUrl: "/var_det_wind.jpg"
    },
    {
      id: 'point-cloud-classification',
      title: "3D Point Cloud Classification",
      imageUrl: "/gt_vs_pred_mae.png"
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated padding and grid gap */}
      <section className="min-h-screen grid md:grid-cols-2 gap-4 md:gap-0 pt-24 md:pt-0">
        {/* Left Content - Adjusted padding */}
        <div className="flex flex-col justify-center p-4 md:p-8 lg:p-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none text-center">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-transparent bg-clip-text inline-block transform transition-all duration-500 hover:scale-[1.02]">
              <div>HELLO!</div>
              <div>I'M</div>
              <div>JIBANUL</div>
            </div>
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            AI Researcher with a PhD specializing in Computer Vision, Machine Learning, and Applied Statistics.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right Image with Message - Adjusted padding */}
        <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
          <div className="relative perspective-1000 mb-6">
            <div className="w-[240px] md:w-[289px] h-[240px] md:h-[289px] rounded-full overflow-hidden transform transition-all duration-500 preserve-3d group-hover:scale-105 group-hover:rotate-y-12">
              <img 
                src="/profile.jpg"
                alt="Jibanul Haque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="relative max-w-[300px] md:max-w-[400px] bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100/50 px-4 md:px-6 py-4 rounded-2xl shadow-lg">
            <div className="absolute left-1/2 -top-3 w-6 h-6 transform -translate-x-1/2 rotate-45 bg-gradient-to-br from-blue-50 to-white border-l-2 border-t-2 border-blue-100/50"></div>
            <p className="text-gray-800 text-center relative z-10 text-sm md:text-base">
              {displayText}
              {isTyping && (
                <span className="inline-block w-1 h-5 ml-1 bg-blue-600 animate-blink"></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Video Side - 40% */}
            <div className={`md:col-span-2 relative h-[500px] overflow-hidden transform transition-all duration-1000 ${
              visibleSections.about ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <video
                ref={aboutVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg"
                src="/AdobeStock_643132685.mp4"
              />
            </div>
            {/* Content Side - 60% */}
            <div className={`md:col-span-3 transform transition-all duration-1000 delay-300 ${
              visibleSections.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="prose prose-lg">
                <p className="text-xl mb-6 text-justify">
                  Growing up, I was always the go-to person when my friends struggled with math or statistics. Little did I know, this love for solving problems would lead me to a PhD in Computer Vision and a career in AI. Combining my background in Computer Science and Statistics, I've spent the past eight years building innovative AI models in fields like image processing, predictive modeling, vision-language learning, and 3D point cloud analysis to solve real-world challenges.
                </p>
                <p className="text-xl mb-6 text-justify">
                  Along the way, teaching has been a constant source of inspiration. Whether mentoring university students or creating AI tutorials online, my goal is always to make complex topics accessible and understandable.
                </p>
                <p className="text-xl text-justify">
                  When I'm not immersed in code, you'll find me exploring new countries (traveling is my happy place) chasing new memories to fuel life. Let's connect! I'd love to share my journey and learn about yours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`transform transition-all duration-1000 ${
              visibleSections.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50">
                <div className="flex items-center">
                  <img 
                    src="/ucf_logo.png"
                    alt="UCF Logo"
                    className="w-20 h-20 object-contain mr-6"
                  />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">University of Central Florida</h4>
                    <div className="space-y-2 mt-3">
                      <p className="text-lg font-semibold text-blue-700">PhD in Computer Science</p>
                      <p className="text-lg font-semibold text-blue-700">MS in Statistical Computing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${
              visibleSections.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50">
                <div className="flex items-center">
                  <img 
                    src="/sust_logo.png"
                    alt="SUST Logo"
                    className="w-20 h-20 object-contain mr-6"
                  />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Shahjalal University of Science & Technology</h4>
                    <div className="space-y-2 mt-3">
                      <p className="text-lg font-semibold text-blue-700">BS in Statistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link 
              to="/projects"
              className="group inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All
              <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* Image Container - 70% height */}
                <div className="relative w-full pt-[70%] overflow-hidden">
                  <img 
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Title Container - 30% height */}
                <div className="flex-1 flex items-center bg-gradient-to-br from-blue-50/90 via-blue-50/80 to-white/70 backdrop-blur-sm border-t border-blue-100/30 p-4">
                  <h3 className="text-gray-800 text-sm md:text-base font-medium line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map(({ skill, icon: Icon }, index) => (
              <div 
                key={skill} 
                className={`flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl 
                  transition-all duration-300 transform cursor-pointer
                  hover:scale-105 hover:-translate-y-1 hover:bg-blue-50
                  ${visibleSections.skills 
                    ? 'translate-y-0 opacity-100 rotate-0 scale-100' 
                    : 'translate-y-20 opacity-0 -rotate-12 scale-50'
                  }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <Icon className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                  visibleSections.skills ? 'scale-100' : 'scale-0'
                }`} />
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Work Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100
                    ${visibleSections.experience 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-20 opacity-0'
                    }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div className="h-full">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Side with View Resume Button */}
            <div className="flex flex-col items-center">
              <video
                ref={experienceVideoRef}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full transform transition-all duration-1000 mb-6 ${
                  visibleSections.experience ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
                src="/AdobeStock_531799904.mp4"
              />
              <Link
                to="/resume"
                className={`group inline-flex items-center px-8 py-4 text-lg font-medium text-white 
                  bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-sm
                  border border-white/20 rounded-full shadow-lg
                  hover:shadow-blue-500/25 hover:from-blue-600/80 hover:to-blue-700/80
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                  transition-all duration-300 transform
                  ${visibleSections.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  transitionDelay: '200ms',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)'
                }}
              >
                View Resume
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-blue-50/80 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-600/90 text-sm font-medium">
            Jibanul Haque | © 2025
          </p>
          <a 
            href="https://www.linkedin.com/in/jibanul/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-gray-600/90 hover:text-blue-600 transition-colors group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;