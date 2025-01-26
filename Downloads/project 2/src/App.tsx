import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const ZeroShotCounter = lazy(() => import('./pages/projects/ZeroShotCounter'));
const VisionTransformers = lazy(() => import('./pages/projects/VisionTransformers'));
const InfraredDetection = lazy(() => import('./pages/projects/InfraredDetection'));
const PointCloudClassification = lazy(() => import('./pages/projects/PointCloudClassification'));
const Video = lazy(() => import('./pages/Video'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/zero-shot-counter" element={<ZeroShotCounter />} />
          <Route path="/projects/vision-transformers" element={<VisionTransformers />} />
          <Route path="/projects/infrared-detection" element={<InfraredDetection />} />
          <Route path="/projects/point-cloud-classification" element={<PointCloudClassification />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;