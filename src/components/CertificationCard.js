// src/components/CertificationCard.js

// A simple icon for the card
const BadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-500" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L8.707 1.5z"/>
    <path d="M1.5 8.707 8.146.646a.5.5 0 0 1 .708 0l6.646 6.646a.5.5 0 0 1 .708.708L8.707 15.354a.5.5 0 0 1-.708 0L1.5 8.707z"/>
  </svg>
);


export default function CertificationCard({ name, organization, date }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 transition-shadow hover:shadow-md">
      <div className="flex-shrink-0">
        <BadgeIcon />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600">{organization}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}