import React from 'react';
import { ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Vision Transformers for Object Counting",
      description: "Developed an advanced vision transformer architecture with Cross-Attention Pyramids for class-agnostic counting, achieving state-of-the-art performance on multiple datasets.",
      technologies: ["PyTorch", "Python", "Deep Learning"],
      type: "Research"
    },
    {
      title: "Zero-Shot Object Counter",
      description: "Created a vision-language model that can count objects using only text descriptions, without any explicit training on the target objects.",
      technologies: ["PyTorch", "CLIP", "Python"],
      type: "Research"
    },
    {
      title: "Infrared Target Detection System",
      description: "Built a two-stream boosted network for detecting small targets in infrared imagery, improving detection accuracy by 10% and reducing false positives.",
      technologies: ["Deep Learning", "C++", "CUDA"],
      type: "Industry Collaboration"
    },
    {
      title: "Mortgage Approval Prediction",
      description: "Developed a time-series forecasting model for predicting mortgage loan approvals, achieving 31% improvement in accuracy.",
      technologies: ["Python", "Scikit-learn", "SQL"],
      type: "Industry"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {project.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;