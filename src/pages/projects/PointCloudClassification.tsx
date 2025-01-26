import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PointCloudClassification() {
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
              src="/gt_vs_pred_mae.png"
              alt="Point Cloud Classification"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">Robustness in 3D Point Cloud Classification</h1>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Open3D", "OpenCV"].map((tech, index) => (
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
                  LiDAR point cloud processing plays a crucial role in safety-critical applications like self-driving cars, drones, robotics, and rescue missions. However, despite the impressive advancements in point cloud classification, existing state-of-the-art (SoTA) classifiers are often vulnerable to real-world perturbations, such as noise, occlusions, and geometric variations. This vulnerability limits the deployment of these models in dynamic environments. In this work, we focus on improving the robustness of point cloud classification models by leveraging local features, specifically the Fast Point Feature Histogram (FPFH), known for its resilience against variations such as translation and rotation. We propose a hybrid approach that combines raw point cloud data and FPFH local features, enabling improved robustness. We also introduce two benchmark datasets, ScanObjectNN-P and ModelNet40-P, to evaluate these models under real-world perturbations.
                </p>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[85%]">
                    <img
                      src="/perturbations.png"
                      alt="Point Cloud Perturbations"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 1: Examples of our eight primary perturbations from ModelNet40-P. Here, DMP stands for drop multiple patches, DSP is drop a single patch, and DRP is drop random points.
                  </p>
                </div>
              </div>

              <div id="architecture-highlights" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Architecture Highlights</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Local Features Integration:</strong> We incorporate FPFH local features, which capture the local geometry of each point and provide robustness to variations like translation, rotation, and noise.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Fusion Approach:</strong> A hybrid model combining both raw point clouds and FPFH local features, enabling the model to leverage the complementary strengths of both representations.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Deep Learning Models:</strong> The approach is applied to existing deep learning models such as Point-MAE and PointMLP, making minimal changes to their architecture while enhancing their robustness.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Benchmark Datasets:</strong> Introduction of ScanObjectNN-P and ModelNet40-P datasets with extreme perturbations for more rigorous evaluation of model performance.
                    </span>
                  </div>
                </div>
              </div>

              <div id="experimental-results" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Experimental Results</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Improved Robustness:</strong> Models that incorporate FPFH local features show improved classification accuracy across a variety of perturbations compared to baseline models.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Perturbation Sensitivity:</strong> Our evaluation on ScanObjectNN-P and ModelNet40-P datasets reveals that existing models suffer significant accuracy degradation (up to 60%) when tested with common perturbations like scaling, translation, and noise.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700">
                      <strong>Fusion Model Performance:</strong> The fusion model, which combines raw point cloud data with FPFH features, consistently outperforms baseline models, demonstrating the effectiveness of our hybrid approach in improving robustness.
                    </span>
                  </div>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[85%]">
                    <img
                      src="/baselinevsfusion.png"
                      alt="Baseline vs Fusion Model Comparison"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 2: Overall accuracy of Point-MAE (baseline) and our fusion Point-MAE model. A severity level of 0 means no perturbation. The fusion model performs better than the original method on these perturbations and overall on all perturbations
                  </p>
                </div>
                <div className="my-8 flex flex-col items-center">
                  <div className="w-[55%]">
                    <img
                      src="/baseline_models_scanobjectnn.png"
                      alt="Model Performance on ScanObjectNN"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 3: Accuracy of baseline models on clean and eight different perturbations on ScanObjectNN-P data. DMP stands for drop multiple patches, DSP is drop a single patch, and DRP is drop random points.
                  </p>
                </div>
              </div>

              <div id="conclusion" className="scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                <p className="text-gray-700 mb-4">
                  This work demonstrates the potential of leveraging local features, specifically FPFH, to enhance the robustness of deep learning models for point cloud classification. Our proposed hybrid model, which combines raw point cloud data with FPFH local features, provides a simple yet effective solution to address the vulnerability of existing models to real-world perturbations. By introducing more challenging benchmark datasets, we highlight the limitations of current SoTA models and offer a pathway for developing more robust classifiers suitable for safety-critical applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointCloudClassification;