import { Button } from './Button';
import { Heart } from 'lucide-react';
import { Link } from 'react-router';
import kangarooCare from '../../imports/Kangarobe1.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-sky)]/30 rounded-full">
            <Heart className="w-4 h-4 text-[var(--color-primary-deep-teal)]" />
            <span className="text-sm text-[var(--color-primary-deep-teal)]">Making a difference for our tiniest patients</span>
          </div>

          <h1 className="leading-tight">
            Innovative Care for NICU Babies
          </h1>

          <p className="text-lg text-[var(--color-warm-gray-600)] leading-relaxed">
            We launch cutting-edge products that transform neonatal care, giving premature and critically ill babies the best chance at a healthy future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/donate">
              <Button variant="primary">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-warm-gray-100)]">
            <div>
              <div className="text-3xl text-[var(--color-primary-deep-teal)]">500K+</div>
              <div className="text-sm text-[var(--color-warm-gray-600)] mt-1">Premature Births/Year in US</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--color-primary-deep-teal)]">10%</div>
              <div className="text-sm text-[var(--color-warm-gray-600)] mt-1">Of All US Births</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--color-primary-deep-teal)]">15M</div>
              <div className="text-sm text-[var(--color-warm-gray-600)] mt-1">Premature Births Worldwide</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={kangarooCare}
              alt="Mother providing kangaroo care to premature baby in NICU"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-soft-lavender)] rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--color-warm-peach)] rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
}
