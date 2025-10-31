// src/components/ProjectCard.js
import Link from 'next/link';

// We can add simple icons as text for a professional touch
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M10.707 8.707 8.354 6.354a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708 0l.146-.147a.5.5 0 1 0-.708-.708L7.05 9.707 6.354 9l1.5-1.5 2.353 2.354-.707.707a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708 0z"/>
    <path d="M6.354 5.354a.5.5 0 0 0 0 .708l.146.147a.5.5 0 1 0 .708-.708L6.354 5.354z"/>
    <path d="M5.354 4.354a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-1.146 1.147-1.146-1.147a.5.5 0 0 0-.708 0z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export default function ProjectCard({ title, description, techStack, liveUrl, githubUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* You can use a placeholder image service or a local image */}
      <img
        src={`https://placehold.co/600x400/334155/e2e8f0?text=${title.replace(' ', '+')}`}
        alt={`${title} thumbnail`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 h-20 overflow-hidden">{description}</p>
        
        <div className="mb-6">
          <p className="font-semibold text-gray-800 mb-2">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium"
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
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            <LinkIcon />
            Live Demo
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg shadow-md ring-1 ring-gray-300 hover:bg-gray-200 transition-colors"
          >
            <GithubIcon />
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
}