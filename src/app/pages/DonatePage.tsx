import { Button } from '../components/Button';
import { Heart, DollarSign, TrendingUp, Users, TestTube, Building2, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router';

export function DonatePage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-[var(--color-soft-pink)]" fill="currentColor" />
          <h1 className="mb-6 text-white">Support Our Mission</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Your donation helps us launch life-saving innovations for NICU babies. Every contribution brings us closer to a world where every premature baby has access to the best care possible.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Ways to Give</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)]">
              Choose the option that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-warm-gray-50)] p-8 rounded-xl text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-soft-blue)]" />
              <h3 className="mb-3">One-Time Gift</h3>
              <p className="text-[var(--color-warm-gray-600)] mb-6">
                Make an immediate impact with a single donation
              </p>
              <Link to="/contact">
                <Button variant="primary" className="w-full">
                  Give Now
                </Button>
              </Link>
            </div>

            <div className="bg-[var(--color-primary-sky)]/20 p-8 rounded-xl text-center border-2 border-[var(--color-primary-soft-blue)]">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-deep-teal)]" />
              <h3 className="mb-3">Monthly Giving</h3>
              <p className="text-[var(--color-warm-gray-600)] mb-6">
                Provide sustained support with recurring donations
              </p>
              <Link to="/contact">
                <Button variant="primary" className="w-full">
                  Become a Partner
                </Button>
              </Link>
            </div>

            <div className="bg-[var(--color-warm-gray-50)] p-8 rounded-xl text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-soft-blue)]" />
              <h3 className="mb-3">Corporate Giving</h3>
              <p className="text-[var(--color-warm-gray-600)] mb-6">
                Partner with us through corporate sponsorship
              </p>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Giving */}
      <section className="py-20 bg-[var(--color-warm-gray-50)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Your Impact</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)]">
              Here's how your donation supports our work
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                <TestTube className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
              </div>
              <div>
                <h4 className="mb-2">Product Development</h4>
                <p className="text-[var(--color-warm-gray-600)]">
                  Funding research and development of innovative NICU monitoring systems, comfort devices, and medical equipment.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
              </div>
              <div>
                <h4 className="mb-2">Hospital Partnerships</h4>
                <p className="text-[var(--color-warm-gray-600)]">
                  Building relationships with NICUs worldwide to ensure innovations reach the babies who need them most.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
              </div>
              <div>
                <h4 className="mb-2">Family Resources</h4>
                <p className="text-[var(--color-warm-gray-600)]">
                  Creating educational materials and support resources for families navigating the NICU experience.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
              </div>
              <div>
                <h4 className="mb-2">Global Access</h4>
                <p className="text-[var(--color-warm-gray-600)]">
                  Expanding reach to underserved communities where advanced neonatal care is limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="mb-4">Other Ways to Support</h2>
          <p className="text-lg text-[var(--color-warm-gray-600)] mb-12 max-w-2xl mx-auto">
            Can't donate right now? There are other meaningful ways to support NICU babies
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="mb-3">Spread the Word</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Share our mission with friends, family, and on social media
              </p>
            </div>
            <div className="p-6">
              <h4 className="mb-3">Apply for Internships</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Join our team and contribute your skills and passion
              </p>
            </div>
            <div className="p-6">
              <h4 className="mb-3">Partner With Us</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Connect us with researchers, hospitals, or funding opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
