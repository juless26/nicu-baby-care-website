import { Button } from '../components/Button';
import { Briefcase, Lightbulb, Users, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function InternshipsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Internship Opportunities</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Join our team and help launch innovative products that improve care for NICU babies. We're looking for passionate individuals ready to make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Intern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Intern With Us?</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)] max-w-2xl mx-auto">
              Gain hands-on experience in nonprofit management, healthcare innovation, and social impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-soft-pink)]/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[var(--color-soft-pink)]" />
              </div>
              <h3>Meaningful Work</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                Contribute to projects that directly impact babies and families
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-warm-peach)]/30 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Learn & Grow</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                Develop skills in healthcare tech, fundraising, and nonprofit operations
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-sage)]/40 flex items-center justify-center">
                <Users className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Network</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                Connect with healthcare professionals, researchers, and innovators
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-soft-lavender)]/40 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Build Experience</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                Gain practical experience for careers in healthcare or social impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Areas */}
      <section className="py-20 bg-[var(--color-warm-gray-50)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Internship Areas</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)]">
              We're building our team across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-3">Product Research & Development</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Support the identification and evaluation of innovative NICU technologies, conduct market research, and assist with product development partnerships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-3">Fundraising & Development</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Help with grant writing, donor outreach, fundraising campaigns, and building relationships with potential partners and sponsors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-3">Marketing & Communications</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Create content for social media, newsletters, and our website. Help tell the stories of NICU innovation and family impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h4 className="mb-3">Family Support Resources</h4>
              <p className="text-[var(--color-warm-gray-600)]">
                Develop educational materials, compile resources for NICU families, and help build our Family Support Hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="mb-8 text-center">What We're Looking For</h2>

          <div className="space-y-4 mb-12">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center mt-1">
                ✓
              </div>
              <p className="text-[var(--color-warm-gray-600)]">
                <strong>Passion for healthcare and social impact</strong> – A genuine desire to improve outcomes for vulnerable babies and families
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center mt-1">
                ✓
              </div>
              <p className="text-[var(--color-warm-gray-600)]">
                <strong>Self-motivated and proactive</strong> – Ability to work independently and take initiative on projects
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center mt-1">
                ✓
              </div>
              <p className="text-[var(--color-warm-gray-600)]">
                <strong>Strong communication skills</strong> – Written and verbal communication for diverse audiences
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center mt-1">
                ✓
              </div>
              <p className="text-[var(--color-warm-gray-600)]">
                <strong>Collaborative mindset</strong> – Willingness to work with a small, mission-driven team
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center mt-1">
                ✓
              </div>
              <p className="text-[var(--color-warm-gray-600)]">
                <strong>Commitment</strong> – Availability for at least 10-15 hours per week for a minimum of 3 months
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[var(--color-warm-gray-600)] mb-8">
              Ready to join our mission? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="primary" className="text-lg px-8">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
