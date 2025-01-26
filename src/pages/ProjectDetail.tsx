import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Zap, Layers, BookOpen, ChevronRight } from 'lucide-react';

const projectsData = {
  'zero-shot-counter': {
    title: "Zero-Shot Object Counter",
    description: "Created a vision-language model that can count objects using only text descriptions, without any explicit training on the target objects.",
    technologies: ["PyTorch", "CLIP", "Transformers"],
    imageUrl: "/qualitative1_vlm.png",
    longDescription: `Introduction
Accurately counting objects in complex images is a challenging task, especially when dealing with novel and diverse object categories. Traditional methods require extensive annotated datasets and struggle to generalize across unseen categories or domains. Existing class-agnostic counting approaches either depend on annotated visual examples or exhibit limited performance in multi-class scenarios.

To address these limitations, we propose Vision-Language feature refinement for zero-shot Object Counting (VLC), a novel method that leverages the power of vision-language models (VLMs). By using text prompts and pre-trained VLMs, our method enables zero-shot counting of unseen object categories without requiring visual exemplars. VLC achieves robust performance by refining pixel-level features, capturing multi-scale contextual information, and optimizing semantic alignment between vision and language modalities.

Architecture Highlights
Overview
The proposed VLC model integrates visual and textual information through a multi-step process involving CLIP encoders, a cross-modal encoder, a refinement module, and a decoder. Key features of the architecture include:

[ARCHITECTURE_IMAGE]

• **CLIP Encoders:** Extract shared semantic representations from images and text.
• **Cross-Modal Encoder:** Learns joint representations using self-attention, cross-attention, and contrastive loss for better localization and semantic alignment.
• **Refinement Module:** Enhances visual features using affine transformation and Atrous Spatial Pyramid Pooling (ASPP) to capture multi-scale contextual information.
• **Fusion and Decoding:** Combines features and generates density maps to predict object counts.

Key Architecture Highlights
• **Pixel-Level Contrastive Loss:** Improves alignment between text prompts and visual features for more accurate object localization.
• **Learnable Affine Transformation:** Fine-tunes similarity maps for task-specific optimization.
• **ASPP Integration:** Captures multi-scale contextual features to enhance feature refinement.
• **Zero-Shot Capability:** Performs robust object counting across unseen categories without retraining.

Experimental Results
FSC-147 Dataset
• Achieved state-of-the-art performance for zero-shot object counting tasks.
• Demonstrated improved counting accuracy in complex and cluttered image backgrounds.

Cross-Data Generalization
• Showcased robust generalization capabilities on the CARPK dataset, highlighting adaptability to diverse domains.

Ablation Study
• Verified the effectiveness of individual components (e.g., cross-modal encoder, refinement module) in improving performance.

Qualitative Insights
• Outperformed prior methods like CounTX in challenging multi-object scenarios.
• Generated more accurate density maps for diverse object categories.

[QUALITATIVE_IMAGE]

Conclusion
This work presents VLC, a vision-language model designed for zero-shot object counting tasks. By leveraging CLIP encoders, a cross-modal encoder, and a robust refinement process, VLC effectively aligns visual and linguistic features for accurate object localization and counting. Extensive evaluations on benchmark datasets demonstrate state-of-the-art results, with strong generalization capabilities across unseen categories and domains. This approach paves the way for more adaptable and efficient counting solutions in real-world applications.`
  },
  'vision-transformers': {
    title: "Vision Transformers for Object Counting",
    description: "Developed an advanced vision transformer architecture with Cross-Attention Pyramids for class-agnostic counting, achieving state-of-the-art performance on multiple datasets.",
    technologies: ["PyTorch", "Python", "Deep Learning"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    longDescription: `Introduction
Counting unseen objects in images remains a significant challenge in computer vision. Existing methods often struggle with object localization, handling background noise, and addressing varying object scales. These limitations are especially evident in class-agnostic counting tasks, where the target objects are not predefined, making it difficult to accurately predict object counts in complex scenarios. To solve this, we propose a novel vision transformer architecture with Cross-Attention Pyramids (CAP). CAP introduces a dual-branch structure and a feature aggregator module that enhances multi-scale representations for better counting accuracy. By using a cross-attention mechanism, CAP effectively addresses challenges such as over-counting, localization issues, and scalability, providing improved performance in both few-shot and zero-shot settings.

Architecture Highlights
Overview
The proposed CAP architecture consists of several key components working together to achieve accurate object counting:

[ARCHITECTURE_IMAGE]

• **Dual-Branch Structure:** CAP processes input images at two different resolutions, with a fine-grained branch for high-resolution patches and a coarse-grained branch for low-resolution patches. These branches interact to refine object localization and scaling.

• **Cross-Attention Mechanism:** The dual branches are interconnected through cross-attention, allowing the coarse-grained features to enhance the fine-grained features, improving context utilization and spatial awareness.

• **Feature Aggregator Module:** This module consolidates the feature pyramids from both branches, refining object representations across scales and enhancing the model's robustness to occlusions and varying object sizes.

• **Multi-Scale Representation:** The model generates stronger visual feature representations by leveraging multi-scale attention, ensuring effective object counting across different object scales and scenarios.

• **End-to-End Prediction:** The decoder generates a density map from the aggregated features, and the sum of this map provides the predicted object count, making the architecture suitable for generalized object counting tasks.

Experimental Results
FSC-147 Dataset Performance
• **State-of-the-Art Results:** On the FSC-147 test set, CAP outperforms the current state-of-the-art method by 16% in Mean Average Error (MAE) on the few-shot setting.
• **Zero-Shot Capabilities:** Shows significant improvements in the zero-shot setting, demonstrating strong generalization.
• **Robust Performance:** Maintains consistent accuracy across diverse object categories and scenarios.

[QUALITATIVE_IMAGE]

Generalization Capabilities
• **Cross-Category Adaptation:** The proposed method demonstrates exceptional ability to generalize across unseen object classes.
• **Minimal Data Requirements:** Achieves accurate counts even with minimal or no training data for new categories.
• **Domain Flexibility:** Successfully adapts to various domains and object types.

Technical Achievements
• **Precise Localization:** CAP excels in accurately localizing objects, preventing over-counting issues.
• **Scale Handling:** Effectively manages objects at multiple scales, demonstrated in challenging scenarios.
• **Noise Resistance:** Shows robust performance in complex backgrounds and occlusion cases.

Implementation Benefits
• **Efficient Processing:** Optimized architecture for balanced computational requirements.
• **Scalable Design:** Easily adaptable to different deployment scenarios and requirements.
• **Real-World Applicability:** Proven effectiveness in practical applications and diverse use cases.

Conclusion
We have introduced a novel vision transformer architecture, CAP, designed to solve the challenges of class-agnostic object counting. By leveraging dual-resolution cross-attention and a feature aggregator module, CAP delivers stronger multi-scale feature representations, improving counting accuracy in complex, real-world images. Our experimental results on the FSC-147 dataset demonstrate CAP's superiority over existing methods, with significant improvements in both few-shot and zero-shot settings. The proposed model not only addresses key issues like localization and scaling but also generalizes effectively to unseen object categories, making it a powerful tool for generalized object counting tasks in diverse applications.`
  },
  'infrared-detection': {
    title: "Infrared Small Target Detection System",
    description: "Built a two-stream boosted network for detecting small targets in infrared imagery, improving detection accuracy by 10% and reducing false positives.",
    technologies: ["Deep Learning", "C++", "CUDA"],
    imageUrl: "/var_det_wind.jpg",
    longDescription: `Introduction
Detecting small targets in infrared (IR) imagery is a critical task in various applications, including surveillance, defense, and industrial monitoring. However, this task presents significant challenges due to the low signal-to-noise ratio, complex backgrounds, and variable target appearances. Our research addresses these challenges through a novel two-stream boosted network architecture that significantly improves detection accuracy while reducing false positives.

Architecture Overview
The proposed system combines two complementary streams in a boosted network framework:

[ARCHITECTURE_IMAGE]

• **Feature Stream:** Extracts multi-scale features using a hierarchical CNN architecture optimized for small target characteristics.
• **Context Stream:** Processes wider spatial regions to understand background patterns and contextual information.
• **Boosting Module:** Adaptively weights and combines predictions from both streams to enhance detection reliability.
• **Range-Tolerant Design:** Accommodates targets at various distances and scales through multi-scale feature fusion.

Key Technical Innovations
• **Dual-Stream Processing:** Parallel processing of local features and global context for comprehensive scene understanding.
• **Adaptive Boosting:** Dynamic weighting mechanism that optimizes the contribution of each stream based on input characteristics.
• **Multi-Scale Integration:** Hierarchical feature extraction that captures targets at different scales and distances.
• **False Positive Suppression:** Advanced filtering techniques that reduce false detections in complex backgrounds.

Experimental Results
Performance Metrics
• Achieved 10% improvement in detection accuracy compared to baseline methods
• Reduced false positive rate by 15% in challenging scenarios
• Maintained real-time processing capabilities (30+ FPS on standard hardware)

Cross-Dataset Validation
• Demonstrated robust performance across multiple IR datasets
• Validated effectiveness in various environmental conditions

[QUALITATIVE_IMAGE]

Qualitative Analysis
• Successfully detected targets in complex backgrounds with significant clutter
• Maintained consistent performance across varying target sizes and thermal signatures
• Showed improved robustness to background noise and atmospheric effects

Implementation Details
• Developed using C++ and CUDA for optimal performance
• Integrated with existing surveillance systems through standardized interfaces
• Optimized for real-time processing on embedded systems

Conclusion
The Two-Stream Boosted Network represents a significant advancement in infrared small target detection. By combining dual-stream processing with adaptive boosting, our system achieves superior detection accuracy while maintaining practical computational efficiency. The demonstrated improvements in both detection accuracy and false positive reduction make this solution particularly valuable for real-world applications in surveillance and monitoring systems.`
  },
  'mortgage-prediction': {
    title: "Mortgage Approval Prediction",
    description: "Developed a time-series forecasting model for predicting mortgage loan approvals, achieving 31% improvement in accuracy.",
    technologies: ["Python", "Scikit-learn", "SQL"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
    longDescription: "Full description to be added"
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];
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

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600">Project not found</p>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatSection = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('Introduction') || 
          paragraph.startsWith('Architecture Highlights') ||
          paragraph.startsWith('Experimental Results') ||
          paragraph.startsWith('Conclusion')) {
        const sectionId = paragraph.split('\n')[0].toLowerCase().replace(/\s+/g, '-');
        return (
          <div key={index} id={sectionId} className="mb-6 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">{paragraph.split('\n')[0]}</h2>
            {paragraph.split('\n').slice(1).map((line, lineIndex) => (
              <p key={lineIndex} className="text-gray-700 mb-2">
                {line}
              </p>
            ))}
          </div>
        );
      }

      return (
        <div key={index} className="mb-6">
          {paragraph.split('\n').map((line, lineIndex) => {
            if (line === '[ARCHITECTURE_IMAGE]') {
              return (
                <div key={lineIndex} className="my-8 flex flex-col items-center">
                  <div className="w-[85%]">
                    <img
                      src={id === 'zero-shot-counter' 
                        ? "/Architecture_ZSOC_VLM.png" 
                        : id === 'vision-transformers'
                        ? "/Counting-Archi.png"
                        : "/TCRNET-2-boosting-figure.jpg"}
                      alt="Architecture Diagram"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 1: Architecture overview of the model
                  </p>
                </div>
              );
            }
            if (line === '[QUALITATIVE_IMAGE]') {
              return (
                <div key={lineIndex} className="my-8 flex flex-col items-center">
                  <div className="w-[70%]">
                    <img
                      src={id === 'zero-shot-counter' 
                        ? "/qualitative2_vlm.png" 
                        : id === 'vision-transformers'
                        ? "/qualitative2_cap.png"
                        : "/cegr02009_0001_761_all_detections.png"}
                      alt="Qualitative Results"
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Figure 2: Qualitative results showing the model's performance
                  </p>
                </div>
              );
            }

            if (line.startsWith('Overview') || 
                line.startsWith('Key Architecture Highlights') ||
                line.startsWith('FSC-147 Dataset') ||
                line.startsWith('Cross-Data Generalization') ||
                line.startsWith('Ablation Study') ||
                line.startsWith('Qualitative Insights') ||
                line.startsWith('FSC-147 Dataset Performance') ||
                line.startsWith('Generalization Capabilities') ||
                line.startsWith('Technical Achievements') ||
                line.startsWith('Implementation Benefits') ||
                line.startsWith('Performance Metrics')) {
              return (
                <h3 key={lineIndex} className="text-xl font-semibold mb-3 text-gray-800">
                  {line}
                </h3>
              );
            }

            if (line.startsWith('•')) {
              const content = line.substring(1).trim();
              const boldMatch = content.match(/\*\*(.*?)\*\*/);
              
              if (boldMatch) {
                const [fullMatch, boldText] = boldMatch;
                const parts = content.split(fullMatch);
                return (
                  <div key={lineIndex} className="flex items-start mb-3">
                    <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                    <span className="text-gray-700 flex-1">
                      {parts[0]}<strong>{boldText}</strong>{parts[1]}
                    </span>
                  </div>
                );
              }
              
              return (
                <div key={lineIndex} className="flex items-start mb-3">
                  <span className="text-blue-600 text-2xl leading-none mr-3 -mt-1">•</span>
                  <span className="text-gray-700 flex-1">{content}</span>
                </div>
              );
            }

            return (
              <p key={lineIndex} className="text-gray-700 mb-2">
                {line}
              </p>
            );
          })}
        </div>
      );
    });
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
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-blue-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
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
            <div className="prose prose-lg max-w-none">
              {id === 'zero-shot-counter' && (
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
              )}

              <div className="space-y-8">
                {formatSection(project.longDescription)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;