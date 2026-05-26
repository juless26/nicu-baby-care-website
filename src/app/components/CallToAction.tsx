import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="mb-6 text-white">
          Join Us in Making a Difference
        </h2>

        <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Your support helps us launch the next generation of life-saving products for NICU babies. Together, we can give every baby the best chance at a healthy future.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/donate">
            <Button
              variant="accent"
              className="text-lg px-8 py-4"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/partner">
            <button className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 rounded-md transition-all duration-[var(--duration-base)] backdrop-blur-sm border border-white/30">
              Partner With Us
            </button>
          </Link>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-2">Every Dollar</div>
            <div className="text-white/80">Makes a Difference</div>
          </div>
          <div>
            <div className="text-4xl mb-2">100%</div>
            <div className="text-white/80">Nonprofit Commitment</div>
          </div>
          <div>
            <div className="text-4xl mb-2">Join Us</div>
            <div className="text-white/80">Be Part of the Solution</div>
          </div>
        </div>
      </div>
    </section>
  );
}
