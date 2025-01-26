import React from 'react';
<<<<<<< HEAD
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
=======
import { Mail, Linkedin, Github, GraduationCap, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-12">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">
                    contact@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Orlando, Florida</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Connect Online</h2>
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <Github className="w-6 h-6" />
                <span>GitHub Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-4 text-gray-600 hover:text-blue-600">
                <GraduationCap className="w-6 h-6" />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
>>>>>>> c08e5caede08d68c0b6e6465edd30e5d6d305a93
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;