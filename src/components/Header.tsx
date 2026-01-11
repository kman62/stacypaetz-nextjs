'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const signatureLogo = "https://stacypaetz.com/wp-content/uploads/2019/10/StacyPaetzSigOnly-1.gif";

const mainNavItems = [
  { label: 'HOME', href: '/' },
  { label: 'PICS', href: '/pics' },
  { label: 'ADVOCATE', href: '/advocate' },
  { label: 'CONTACT', href: '/contact' },
  { label: 'COACHING', href: '/coaching' },
  { label: 'CREATED', href: '/created' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center py-6">
          <Link href="/">
            <Image
              src={signatureLogo}
              alt="Stacy Paetz Signature"
              width={300}
              height={128}
              className="h-24 md:h-32 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Main Navigation - Desktop */}
        <nav className="hidden md:flex justify-center space-x-8 pb-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-[#eb092b] transition-all duration-200 uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-red-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-center pb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100">
            <div className="space-y-1 pt-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium text-gray-600 hover:text-[#eb092b] transition-all duration-200 uppercase tracking-wider px-4 py-3 rounded-lg hover:bg-red-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
