import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Globe, Menu, User } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.39,13.72A10.93,10.93,0,0,0,21.13,12a11,11,0,0,0-18.26,0,10.93,10.93,0,0,0-1.26,1.72,1,1,0,0,0,0,1.06,10.93,10.93,0,0,0,1.26,1.72,11,11,0,0,0,18.26,0,10.93,10.93,0,0,0,1.26-1.72A1,1,0,0,0,22.39,13.72Z"/>
          </svg>
          <span className="ml-2 text-red-500 text-xl font-bold">airbnb</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-gray-600">Experience</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Stays</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Enhance</a>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-800 hover:text-gray-600">
            Airbnb your home
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Globe className="h-5 w-5" />
          </button>
          <button className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md">
            <Menu className="h-5 w-5" />
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">Landing page title</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Subheading that sets up context, shares more info about the website, or
          generally gets people psyched to keep scrolling.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors">
          Button
        </button>
      </main>
    </div>
  );
};

export default LandingPage;