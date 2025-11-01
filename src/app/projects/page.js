// src/app/projects/page.js
import ProjectCard from "@/components/ProjectCard";

// Mock data for your projects
const projectsData = [
  {
    title: "E-Commerce Store",
    description: "A multi vendor e-commerce platform built with Next.js and Stripe for payments. Includes user auth, a shopping cart, and an admin dashboard.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "Neon", "Clerk", "Inngest"],
    liveUrl: "https://go-cart-nine.vercel.app/", 
    githubUrl: "https://github.com/mrAnkit2003/GoCart", 
  },
  {
    title: "Portfolio Website",
    description: "The very website you are looking at! Built with Next.js and Tailwind CSS to be fast, responsive, and easy to update.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://my-portfolio-two-psi-90.vercel.app/",
    githubUrl: "https://github.com/mrAnkit2003/My-Portfolio",
  },
  {
    title: "Video Conferencing Website",
    description: "A video conferencing platform enabling real-time video calls, messaging, and authenticated user sessions.",
    techStack: ["React", "WebRTC", "Socket.io", "Mongo Atlas", "Express.js", "Node.js"],
    liveUrl: "https://nexmeetfrontend-suek.onrender.com/",
    githubUrl: "https://github.com/mrAnkit2003/NexMeet",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto max-w-7xl p-8">
      <h1 className="text-4xl font-bold text-white-900 text-center mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}