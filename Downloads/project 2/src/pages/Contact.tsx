import React from 'react';
import { Linkedin, Github, GraduationCap, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Photo Side */}
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600">
              <div className="absolute inset-0">
                <img 
                  src="/AdobeStock_891302794.jpeg"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl font-bold mb-12">Contact</h1>
              
              <div>
                {/* Contact Information */}
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Dallas-Fort Worth, Texas</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold mt-12 mb-6">Connect Online</h2>
                  <div className="space-y-6">
                    <a 
                      href="https://www.linkedin.com/in/jibanul/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a 
                      href="https://github.com/Jibanul/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>GitHub Profile</span>
                    </a>
                    <a 
                      href="https://scholar.google.com/citations?user=g81dybwAAAAJ&hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Google Scholar</span>
                    </a>
                    <a 
                      href="https://www.youtube.com/@LightsCameraVision" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <svg 
                        className="w-6 h-6 group-hover:scale-110 transition-transform" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>YouTube Channel</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;