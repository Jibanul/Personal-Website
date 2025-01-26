import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function InfraredDetection() {
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
              src="/var_det_wind.jpg"
              alt="Infrared Detection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">Infrared Small Target Detection System</h1>
                <div className="flex flex-wrap gap-2">
                  {["CNN", "MATLAB", "CUDA"].map((tech, index) => (
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
                  Detecting small targets in infrared (IR) imagery is a critical task in various applications, including surveillance, defense, and industrial monitoring. However, this task presents significant challenges due to the low signal-to-noise ratio, complex backgrounds, and variable target appearances. While conventional deep learning models have underperformed in such scenarios, TCRNet has been introduced as a solution that optimizes the target-to-clutter ratio (TCR) to improve detection performance in infrared imagery.
                  
In this work, we present TCRNet-2, a novel two-stream architecture that further improves target detection by processing target and clutter information in parallel streams, each designed to maximize TCR. Moreover, we introduce the Boosted TCRNet-2 framework, which combines the outputs of two networks: a primary network that identifies regions of interest (ROI) and a secondary network trained specifically to distinguish targets from false positives. This synergistic approach reduces false alarms while enhancing detection accuracy.


                </p>
              </div>

              <div id="architecture-highlights" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Architecture Overview</h2>
                <p className="text-gray-700 mb-6">
                  The proposed system combines two complementary streams in a boosted network framework:
                </p>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[92%]">
                    <img
                      src="/2stream_architecture.png"
                      alt="Two-Stream Architecture"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 1: Two-Stream Network Architecture Overview. Filters of the first layers of both target and clutter streams are analytically derived while the other convolutional layers are iteratively learned to minimize the TCR cost function.
                  </p>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[70%]">
                    <img
                      src="/TCRNET-2-boosting-figure.jpg"
                      alt="Boosted Network Pipeline"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 2: Boosted Network Pipeline
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Two-Stream Design:</strong> TCRNet-2 processes target and clutter streams separately, utilizing analytically derived eigenfilters in the first layer to maximize TCR. These fixed filters enable robust feature extraction with fewer learnable parameters.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Boosted Network Framework:</strong> The secondary TCRNet-2 network refines the primary network's ROIs, leveraging its specialized training to focus on false positives, thus improving discrimination.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>TCR Metric Optimization:</strong> Both networks use the TCR metric as the objective function, ensuring precise target detection while minimizing clutter responses.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Range-Tolerant Design:</strong> Accommodates targets at various distances and scales through multi-scale feature fusion.
                    </span>
                  </div>
                </div>
              </div>

              <div id="experimental-results" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Experimental Results</h2>
                <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Achieved 10% improvement in detection accuracy compared to baseline methods</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Reduced false positive rate by 13x in challenging scenarios</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">Maintained real-time processing capabilities.</span>
                  </div>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[70%]">
                    <img
                      src="/cegr02009_0001_761_all_detections.png"
                      alt="Detection Results"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 3: Qualitative results showing detection performance in challenging scenarios
                  </p>
                </div>
              </div>

              <div id="conclusion" className="scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                <p className="text-gray-700 mb-4">
                  The Two-Stream Boosted Network represents a significant advancement in infrared small target detection. By combining dual-stream processing with adaptive boosting, our system achieves superior detection accuracy while maintaining practical computational efficiency. The demonstrated improvements in both detection accuracy and false positive reduction make this solution particularly valuable for real-world applications in surveillance and monitoring systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfraredDetection;