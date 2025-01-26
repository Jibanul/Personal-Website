import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 'zero-shot-counter',
      title: "Zero-Shot Object Counter",
      description: "Created a vision-language model that can count objects using only text descriptions, without any explicit training on the target objects.",
      technologies: ["PyTorch", "CLIP", "Transformers"],
      imageUrl: "/qualitative1_vlm.png"
    },
    {
      id: 'vision-transformers',
      title: "Vision Transformers for Object Counting",
      description: "Developed an advanced vision transformer architecture with Cross-Attention Pyramids for class-agnostic counting, achieving state-of-the-art performance on multiple datasets.",
      technologies: ["PyTorch", "Python", "Deep Learning"],
      imageUrl: "/qualitative2_cropped_cap.png"
    },
    {
      id: 'infrared-detection',
      title: "Infrared Small Target Detection System",
      description: "Built a two-stream boosted network for detecting small targets in infrared imagery, improving detection accuracy by 10% and reducing false positives.",
      technologies: ["CNN", "MATLAB", "CUDA"],
      imageUrl: "/var_det_wind.jpg"
    },
    {
      id: 'point-cloud-classification',
      title: "Robustness in 3D Point Cloud Classification",
      description: "Developed a robust point cloud classification system with enhanced resilience to noise and occlusion, achieving state-of-the-art performance on ModelNet40.",
      technologies: ["PyTorch", "Open3D", "OpenCV"],
      imageUrl: "/gt_vs_pred_mae.png"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <Link 
                  to={`/projects/${project.id}`}
                  className="block text-xl font-semibold mb-4 hover:text-blue-600 transition-colors"
                >
                  {project.title}
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-900 rounded-full text-sm
                        border border-blue-300/20 shadow-sm hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/projects/${project.id}`}
                  className="group inline-flex items-center px-4 py-2 
                    bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-sm
                    border border-white/20 rounded-full shadow-lg
                    hover:shadow-blue-500/25 hover:from-blue-600/80 hover:to-blue-700/80
                    focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                    transition-all duration-300
                    text-white text-sm font-medium"
                  style={{ 
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;