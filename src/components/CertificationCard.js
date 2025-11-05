// src/components/CertificationCard.js
import { Award } from 'lucide-react'; // Using a consistent icon

export default function CertificationCard({ name, organization, date }) {
  return (
    <div className="
      bg-gray-900/60 backdrop-blur-md 
      border border-white/10 rounded-lg 
      shadow-lg p-6 
      flex items-center space-x-4 
      transition-all duration-300 hover:border-white/20
    ">
      <div className="flex-shrink-0">
        {/* Use a styled icon */}
        <Award className="w-8 h-8 text-blue-400" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-100">{name}</h3>
        <p className="text-gray-300">{organization}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
}