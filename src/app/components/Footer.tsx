import { Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[var(--color-warm-gray-900)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-soft-pink)]" fill="currentColor" />
              <span className="text-xl">NICU Baby Care</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              A nonprofit organization dedicated to launching innovative products that improve care for NICU babies worldwide.
            </p>
            <div className="text-sm text-white/60">
              Tax ID: 12-3456789<br />
              501(c)(3) Nonprofit Organization
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/about" className="hover:text-[var(--color-warm-peach)] transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-[var(--color-warm-peach)] transition-colors">Activities</Link></li>
              <li><Link to="/impact-stories" className="hover:text-[var(--color-warm-peach)] transition-colors">Impact Stories</Link></li>
              <li><a href="#" className="hover:text-[var(--color-warm-peach)] transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Get Involved</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/donate" className="hover:text-[var(--color-warm-peach)] transition-colors">Donate</Link></li>
              <li><Link to="/partner" className="hover:text-[var(--color-warm-peach)] transition-colors">Partner With Us</Link></li>
              <li><Link to="/internships" className="hover:text-[var(--color-warm-peach)] transition-colors">Internships</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-warm-peach)] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>
            © 2026 NICU Baby Care. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-warm-peach)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-warm-peach)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
