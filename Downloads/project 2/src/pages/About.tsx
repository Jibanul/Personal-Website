import React from 'react';
import { Brain, Database, Network } from 'lucide-react';

function About() {
  return (
    <div className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-8">
              As an AI Researcher with a PhD specializing in Computer Vision, Machine Learning, and Applied Statistics, 
              I bring expertise in developing cutting-edge solutions in deep learning and statistical computing. 
              My research focuses on advancing the field of computer vision through innovative approaches to 
              object detection, counting, and vision-language applications.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Brain className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">Developing advanced vision transformers and deep learning models for object detection and counting.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Specializing in vision-language models, zero-shot learning, and multimodal applications.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Network className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Statistical Computing</h3>
              <p className="text-gray-600">Applied statistics and data mining for large-scale analysis and predictive modeling.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;