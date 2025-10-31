// src/app/page.js
import Link from 'next/link';
import Image from 'next/image'; 

import { Download } from 'lucide-react';

export default function Home() {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-8rem)] px-8">
      
      
      <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-16">
        <Image
          
          src="/my-photo.jpg"
          alt="Ankit Das"
          width={250}  
          height={250} 
          className="rounded-full shadow-2xl" 
          priority 
        />
      </div>

      
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white-900 leading-tight">
          Ankit Das
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-medium text-blue-600">
          Full-Stack Web Developer
        </h2>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
          I'm a passionate developer focused on building beautiful, responsive, and
          user-friendly web applications. I love solving problems and turning
          ideas into real-world products.
        </p>
        
        
        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View My Projects
          </Link>
          
        
          <a
            href="/resume-Ankit-Das.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-lg shadow-lg ring-1 ring-blue-600 hover:bg-gray-100 transition-colors duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            My Resume
          </a>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-700 bg-white rounded-lg shadow-lg ring-1 ring-gray-300 hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}