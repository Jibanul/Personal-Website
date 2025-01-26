import React from 'react';
import { BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import SkillLevelIcon from '../components/SkillLevelIcons';

function Resume() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Resume</h1>
        
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Experience
          </h2>
          <div className="space-y-4">
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
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Selected Publications
          </h2>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;