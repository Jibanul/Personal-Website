<<<<<<< HEAD
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
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Video from './pages/Video';
import Contact from './pages/Contact';
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<<<<<<< HEAD
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
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
    </div>
  );
}

export default App;