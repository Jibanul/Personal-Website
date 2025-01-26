import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

function ZeroShotCounter() {
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
              src="/qualitative1_vlm.png"
              alt="Zero-Shot Object Counter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">Zero-Shot Object Counter</h1>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "CLIP", "Transformers"].map((tech, index) => (
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
              <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Quick Navigation
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Introduction', id: 'introduction' },
                    { title: 'Architecture Highlights', id: 'architecture-highlights' },
                    { title: 'Experimental Results', id: 'experimental-results' },
                    { title: 'Conclusion', id: 'conclusion' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                      <span className="font-bold">{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Accurately counting objects in complex images is a challenging task, especially when dealing with novel and diverse object categories. Traditional methods require extensive annotated datasets and struggle to generalize across unseen categories or domains. Existing class-agnostic counting approaches either depend on annotated visual examples or exhibit limited performance in multi-class scenarios.
                </p>
                <p className="text-gray-700 mb-4">
                  To address these limitations, we propose Vision-Language feature refinement for zero-shot Object Counting (VLC), a novel method that leverages the power of vision-language models (VLMs). By using text prompts and pre-trained VLMs, our method enables zero-shot counting of unseen object categories without requiring visual exemplars. VLC achieves robust performance by refining pixel-level features, capturing multi-scale contextual information, and optimizing semantic alignment between vision and language modalities.
                </p>
              </div>

              <div id="architecture-highlights" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Architecture Highlights</h2>
                <h3 className="text-xl font-semibold mb-4">Overview</h3>
                <p className="text-gray-700 mb-6">
                  The proposed VLC model integrates visual and textual information through a multi-step process involving CLIP encoders, a cross-modal encoder, a refinement module, and a decoder.
                </p>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[85%]">
                    <img
                      src="/Architecture_ZSOC_VLM.png"
                      alt="Architecture Diagram"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 1: Architecture overview of the VLC model
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>CLIP Encoders:</strong> Extract shared semantic representations from images and text.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Cross-Modal Encoder:</strong> Learns joint representations using self-attention, cross-attention, and contrastive loss for better localization and semantic alignment.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Refinement Module:</strong> Enhances visual features using affine transformation and Atrous Spatial Pyramid Pooling (ASPP) to capture multi-scale contextual information.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Fusion and Decoding:</strong> Combines features and generates density maps to predict object counts.
                    </span>
                  </div>
                </div>
              </div>

              <div id="experimental-results" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Experimental Results</h2>
                <h3 className="text-xl font-semibold mb-4">FSC-147 Dataset</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Achieved state-of-the-art performance for zero-shot object counting tasks.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Demonstrated improved counting accuracy in complex and cluttered image backgrounds.</span>
                  </div>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[70%]">
                    <img
                      src="/qualitative2_vlm.png"
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
                  This work presents VLC, a vision-language model designed for zero-shot object counting tasks. By leveraging CLIP encoders, a cross-modal encoder, and a robust refinement process, VLC effectively aligns visual and linguistic features for accurate object localization and counting. Extensive evaluations on benchmark datasets demonstrate state-of-the-art results, with strong generalization capabilities across unseen categories and domains. This approach paves the way for more adaptable and efficient counting solutions in real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZeroShotCounter;