'use client'; 

import Link from 'next/link';
import Image from 'next/image'; // We still need this for your logo
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const NavLink = ({ href, children, isMobile = false }) => {
    const isActive = (pathname === href) || (href === '/' && pathname === '/');
    // Updated active class for a more modern feel
    const activeClasses = 'bg-white/10 text-white'; // Brighter, semi-transparent
    const inactiveClasses = 'text-gray-300 hover:bg-white/10 hover:text-white'; // Use white/10 for hover
    const mobileClasses = 'block rounded-md px-3 py-2 text-base font-medium';
    const desktopClasses = 'rounded-md px-3 py-2 text-sm font-medium';

    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)} 
        className={`transition-colors ${isActive ? activeClasses : inactiveClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      >
        {children}
      </Link>
    );
  };

  return (
    // 1. Removed bg-gray-800 and shadow-lg
    // 2. Added a subtle bottom border
    <nav className="sticky top-0 z-50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left Side: Title */}
          <div className="flex-shrink-0">
            {/* We use a Link component to go to the home page */}
            <Link href="/" className="text-white font-bold text-xl">
              Ankit
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
              // 3. Made the button transparent
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
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
        // 4. Added a background to the mobile menu for readability
        <div className="md:hidden bg-[#1a0033]" id="mobile-menu">
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