'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children, isMobile = false }) => {
    const isActive = (pathname === href) || (href === '/' && pathname === '/');
    const activeClasses = 'bg-white/10 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-white/10 hover:text-white';
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
    <nav className="sticky top-0 z-50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          
          <div className="flex-shrink-0">
            <Link
              href="/"
              
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Image
                src="/logo.png" 
                alt="Ankit Das Logo"
                width={32}  
                height={32}
                className="rounded-full" 
              />
              <span>Ankit</span>
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