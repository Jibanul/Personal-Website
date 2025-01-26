import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function VisionTransformers() {
  const [activeSection, setActiveSection] = React.useState('introduction');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'architecture-highlights', 'experimental-results', 'conclusion'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="fixed top-20 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-6">
              {['Introduction', 'Architecture Highlights', 'Experimental Results', 'Conclusion'].map((section) => {
                const sectionId = section.toLowerCase().replace(/\s+/g, '-');
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm font-medium transition-colors relative py-4
                      ${activeSection === sectionId 
                        ? 'text-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    {section}
                    {activeSection === sectionId && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-[400px]">
            <img 
              src="/qualitative2_cropped_cap.png"
              alt="Vision Transformers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">Vision Transformers for Object Counting</h1>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Python", "Deep Learning"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/30 backdrop-blur-md text-white rounded-full text-sm
                        border border-white/20 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-lg max-w-none [&_p]:text-justify">
              <div id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Counting unseen objects in images remains a significant challenge in computer vision. Existing methods often struggle with object localization, handling background noise, and addressing varying object scales. These limitations are especially evident in class-agnostic counting tasks, where the target objects are not predefined, making it difficult to accurately predict object counts in complex scenarios. To solve this, we propose a novel vision transformer architecture with Cross-Attention Pyramids (CAP). CAP introduces a dual-branch structure and a feature aggregator module that enhances multi-scale representations for better counting accuracy. By using a cross-attention mechanism, CAP effectively addresses challenges such as over-counting, localization issues, and scalability, providing improved performance in both few-shot and zero-shot settings.
                </p>
              </div>

              <div id="architecture-highlights" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Architecture Highlights</h2>
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-gray-700 mb-6">
                  The proposed CAP architecture consists of several key components working together to achieve accurate object counting:
                </p>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[85%]">
                    <img
                      src="/Counting-Archi.png"
                      alt="Architecture Diagram"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 1: Architecture overview of the CAP model
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Dual-Branch Structure:</strong> CAP processes input images at two different resolutions, with a fine-grained branch for high-resolution patches and a coarse-grained branch for low-resolution patches.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Cross-Attention Mechanism:</strong> The dual branches are interconnected through cross-attention, allowing the coarse-grained features to enhance the fine-grained features.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Feature Aggregator Module:</strong> This module consolidates the feature pyramids from both branches, refining object representations across scales.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>End-to-End Prediction:</strong> The decoder generates a density map from the aggregated features for accurate object counting.
                    </span>
                  </div>
                </div>
              </div>

              <div id="experimental-results" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Experimental Results</h2>
                <h3 className="text-xl font-semibold mb-4">FSC-147 Dataset Performance</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">On the FSC-147 test set, CAP outperforms the current state-of-the-art method by 16% in Mean Average Error (MAE) on the few-shot setting.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Shows significant improvements in the zero-shot setting, demonstrating strong generalization.</span>
                  </div>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[70%]">
                    <img
                      src="/qualitative2_cap.png"
                      alt="Qualitative Results"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 2: Qualitative results showing the model's performance
                  </p>
                </div>
              </div>

              <div id="conclusion" className="scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                <p className="text-gray-700 mb-4">
                  We have introduced a novel vision transformer architecture, CAP, designed to solve the challenges of class-agnostic object counting. By leveraging dual-resolution cross-attention and a feature aggregator module, CAP delivers stronger multi-scale feature representations, improving counting accuracy in complex, real-world images. Our experimental results on the FSC-147 dataset demonstrate CAP's superiority over existing methods, with significant improvements in both few-shot and zero-shot settings. The proposed model not only addresses key issues like localization and scaling but also generalizes effectively to unseen object categories, making it a powerful tool for generalized object counting tasks in diverse applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionTransformers;