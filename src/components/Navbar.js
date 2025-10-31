'use client'; // This is a client component because it uses hooks (useState)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// You can customize this array with your page info
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook to get the current page

  // Helper component for nav links
  const NavLink = ({ href, children, isMobile = false }) => {
    const isActive = (pathname === href) || (href === '/' && pathname === '/');
    const activeClasses = 'bg-gray-900 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';
    const mobileClasses = 'block rounded-md px-3 py-2 text-base font-medium';
    const desktopClasses = 'rounded-md px-3 py-2 text-sm font-medium';

    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
        className={`transition-colors ${isActive ? activeClasses : inactiveClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left Side: Title */}
          <div className="flex-shrink-0">
            {/* We use a Link component to go to the home page */}
            <Link href="/" className="text-white font-bold text-xl">
              My Portfolio
            </Link>
          </div>

          {/* Right Side: Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side: Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                // Close Icon
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} isMobile={true}>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}