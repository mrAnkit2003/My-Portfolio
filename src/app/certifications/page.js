// src/app/certifications/page.js
import CertificationCard from "@/components/CertificationCard";


const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "HTML5", "CSS3", "Java"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Stripe", "Figma"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL"],
  }
];


const certsData = [
  {
    name: "IBM Full Stack Software Developer",
    organization: "IBM",
    date: "Jan 2025",
  },
  {
    name: "The Structured Query Language (SQL)",
    organization: "University of Colorado Boulder (Coursera)",
    date: "Jun 2025",
  },
  {
    name: "Cloud Infrastructure AI Foundations Associate",
    organization: "Oracle",
    date: "Oct 2025",
  },
];

export default function Certifications() {
  return (
    <div className="container mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold text-white-900 text-center mb-12">
         Skills & Certifications
      </h1>

      
      <section>
        <h2 className="text-3xl font-semibold text-white-800 mb-8">
          My Technical Skills
        </h2>
        <div className="bg-white rounded-lg shadow-xl p-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-white-800 mb-8">
          My Certifications
        </h2>
        <div className="space-y-6">
          {certsData.map((cert) => (
            <CertificationCard
              key={cert.name}
              name={cert.name}
              organization={cert.organization}
              date={cert.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}