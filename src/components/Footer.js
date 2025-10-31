export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Ankit Das. All rights reserved.</p>
        <p>Made with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}