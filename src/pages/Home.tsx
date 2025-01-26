import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap, Brain, Database, Network } from 'lucide-react';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
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

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            HELLO, I'M JIBANUL.
            <br />
            NICE TO MEET YOU!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently at UCF as an AI Researcher, specializing in Computer Vision and Machine Learning, developing innovative solutions in deep learning and statistical computing.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Right Image with Message */}
        <div className="flex flex-col items-center justify-center p-8 md:p-16">
          <div className="relative perspective-1000 mb-6">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden transform transition-all duration-500 preserve-3d group-hover:scale-105 group-hover:rotate-y-12">
              <img 
                src="/profile.jpg"
                alt="Jibanul Haque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-[400px] min-h-[60px] relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
            <p className="text-gray-800 text-center">
              {displayText}
              {isTyping && <span className="inline-block w-1 h-5 ml-1 bg-blue-600 animate-blink"></span>}
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Side */}
            <div className="relative h-[500px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/AdobeStock_643132685.mp4"
              />
            </div>
            {/* Content Side */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="prose prose-lg">
                <p className="text-xl mb-6">
                  As an AI Researcher with a PhD specializing in Computer Vision, Machine Learning, and Applied Statistics, 
                  I bring expertise in developing cutting-edge solutions in deep learning and statistical computing.
                </p>
                <p className="text-xl">
                  My research focuses on advancing the field of computer vision through innovative approaches to 
                  object detection, counting, and vision-language applications. I'm passionate about pushing the boundaries
                  of what's possible in AI and creating solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src="/ucf_logo.png"
                  alt="UCF Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">University of Central Florida</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600">PhD in Computer Science</p>
                    <p className="text-gray-600">MS in Statistical Computing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src="/sust_logo.png"
                  alt="SUST Logo"
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">Shahjalal University of Science & Technology</h4>
                  <p className="text-gray-600">BS in Statistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">Developing advanced vision transformers and deep learning models for object detection and counting.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Specializing in vision-language models, zero-shot learning, and multimodal applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Network className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Statistical Computing</h3>
              <p className="text-gray-600">Applied statistics and data mining for large-scale analysis and predictive modeling.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;