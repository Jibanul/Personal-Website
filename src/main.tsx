<<<<<<< HEAD
import { StrictMode, Suspense } from 'react';
=======
import { StrictMode } from 'react';
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }>
        <App />
      </Suspense>
=======
      <App />
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
    </BrowserRouter>
  </StrictMode>
);