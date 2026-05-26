import kangarooCare from '../../imports/Kangarobe1.png';
import lactationSupport from '../../imports/nicu-lactation-support-callout.jpg';

export function ImpactStoriesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white">Impact Stories</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Real stories from families, healthcare providers, and researchers whose lives have been touched by innovative NICU care.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-primary-sky)]/30 flex items-center justify-center">
              <span className="text-4xl">📖</span>
            </div>
            <h2 className="mb-4">Stories Coming Soon</h2>
            <p className="text-lg text-[var(--color-warm-gray-600)] leading-relaxed">
              As we launch our programs and begin supporting innovative NICU products, we'll share stories from the families and healthcare providers who are part of this journey. Check back soon to read about the real impact of improved neonatal care.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 bg-[var(--color-warm-gray-50)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={kangarooCare}
                alt="Mother providing kangaroo care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={lactationSupport}
                alt="Mother bonding with baby in NICU"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--color-warm-gray-600)] max-w-2xl mx-auto">
              Every baby in the NICU has a story. Every family has a journey. We're here to support them with the innovations that can make a difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
