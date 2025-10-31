
import Link from 'next/link';

import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      value: 'ankit.das.ad03@gmail.com', 
      href: 'mailto:ankit.das.ad03@gmail.com', 
      cta: 'Send an Email',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      value: 'Ankit Das', 
      href: 'https://www.linkedin.com/in/ankit-das-0ab999320/',
      cta: 'View Profile',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6 text-blue-600" />,
      value: 'mrAnkit2003', 
      href: 'https://github.com/mrAnkit2003',
      cta: 'View Profile',
    },
  ];

  return (
    <div className="container mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold text-white-900 text-center mb-8">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-600 text-center mb-16 max-w-lg mx-auto">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>

      
      <div className="space-y-8">
        {contactMethods.map((method) => (
          <Link
            href={method.href}
            key={method.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <span className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                  {method.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {method.name}
                  </h3>
                  <p className="text-gray-600">{method.value}</p>
                </div>
              </div>
              <span className="hidden sm:block text-lg font-medium text-blue-600">
                {method.cta} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}