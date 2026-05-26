import { Heart, Target, Eye, Users } from 'lucide-react';
import nicuCare from '../../imports/110A0283-1-900x600.jpg';

export function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">About NICU Baby Care</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We are a nonprofit organization dedicated to launching innovative products that transform care for premature and critically ill newborns in neonatal intensive care units worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
                </div>
                <h2>Our Mission</h2>
              </div>
              <p className="text-[var(--color-warm-gray-600)] leading-relaxed text-lg">
                To identify, support, and launch innovative medical products and technologies that improve outcomes for babies in neonatal intensive care, while making these innovations accessible to hospitals and families worldwide.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-warm-peach)]/30 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[var(--color-primary-deep-teal)]" />
                </div>
                <h2>Our Vision</h2>
              </div>
              <p className="text-[var(--color-warm-gray-600)] leading-relaxed text-lg">
                A world where every premature and critically ill baby has access to the most advanced, compassionate care possible, regardless of geographic location or economic circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[var(--color-warm-gray-50)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-[var(--color-warm-gray-600)] leading-relaxed">
                <p>
                  NICU Baby Care was founded with a clear purpose: to bridge the gap between innovative medical technology and the families who need it most.
                </p>
                <p>
                  Every year, approximately 15 million babies are born prematurely worldwide. These tiny fighters face significant health challenges, and the quality of care they receive in their first days, weeks, and months can make all the difference.
                </p>
                <p>
                  We believe that innovation has the power to save lives. By supporting the development and deployment of cutting-edge NICU products—from advanced monitoring systems to comfort-enhancing devices—we're working to give every baby the best possible start.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={nicuCare}
                alt="Healthcare professional caring for baby in NICU"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)] max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-soft-pink)]/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[var(--color-soft-pink)]" />
              </div>
              <h3>Compassion</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                We approach every decision with empathy for the families and babies we serve
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-warm-peach)]/30 flex items-center justify-center">
                <Target className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Innovation</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                We seek out and support breakthrough technologies that push boundaries
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-sage)]/40 flex items-center justify-center">
                <Users className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Collaboration</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                We partner with researchers, hospitals, and families to create real solutions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-soft-lavender)]/40 flex items-center justify-center">
                <Eye className="w-8 h-8 text-[var(--color-primary-deep-teal)]" />
              </div>
              <h3>Transparency</h3>
              <p className="text-[var(--color-warm-gray-600)]">
                We operate with honesty and accountability to our supporters
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
