import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard({ title, description, techStack, liveUrl, githubUrl, imageUrl }) {
  return (
    <div className="
      bg-gray-900/60 backdrop-blur-md 
      border border-white/10 rounded-lg 
      shadow-lg overflow-hidden 
      transform transition-all duration-300 
      hover:shadow-xl hover:-translate-y-1 hover:border-white/20
    ">

      <Image
        src={imageUrl}
        alt={`${title} thumbnail`}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 h-24 overflow-hidden">{description}</p>

        <div className="mb-6">
          <p className="font-semibold text-gray-200 mb-2">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  bg-blue-900/50 text-blue-200 
                  ring-1 ring-blue-400/50
                  rounded-full px-3 py-1 text-sm font-medium
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            
            className="btn-primary-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-4 py-2 
              text-sm font-medium text-gray-200 
              bg-white/5 rounded-lg shadow-md 
              ring-1 ring-white/10 hover:bg-white/10 transition-colors
            "
          >
            <Github className="w-4 h-4" />
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}