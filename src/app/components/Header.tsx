import { Heart, Menu } from 'lucide-react';
import { Button } from './Button';
import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-warm-gray-100)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[var(--color-primary-soft-blue)]" fill="currentColor" />
            <span className="text-xl text-[var(--color-warm-gray-900)]">NICU Baby Care</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              About
            </Link>
            <Link to="/impact-stories" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Impact Stories
            </Link>
            <Link to="/internships" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Internships
            </Link>
            <Link to="/contact" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Contact
            </Link>
            <Link to="/donate">
              <Button variant="primary" className="text-sm px-5 py-2">
                Donate
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-[var(--color-warm-gray-600)]" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-[var(--color-warm-gray-100)] flex flex-col gap-4">
            <Link to="/about" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              About
            </Link>
            <Link to="/impact-stories" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Impact Stories
            </Link>
            <Link to="/internships" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Internships
            </Link>
            <Link to="/contact" className="text-[var(--color-warm-gray-600)] hover:text-[var(--color-primary-deep-teal)] transition-colors">
              Contact
            </Link>
            <Link to="/donate">
              <Button variant="primary" className="text-sm w-full">
                Donate
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
