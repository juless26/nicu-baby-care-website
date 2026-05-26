import smallNicuBaby from '../../imports/small-NICUbaby.jpg';
import lactationSupport from '../../imports/nicu-lactation-support-callout.jpg';
import nicuBasics from '../../imports/NICU-Basics-722x406.jpg';

export function Impact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-[var(--color-primary-sky)]/30 text-[var(--color-primary-deep-teal)] rounded-full text-sm">
              Our Vision
            </div>

            <h2>
              Building the Future of Neonatal Care
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center text-xl">
                  →
                </div>
                <div>
                  <h4 className="mb-2">Better Monitoring Technology</h4>
                  <p className="text-[var(--color-warm-gray-600)]">
                    We're working to develop advanced monitoring systems that can detect health issues earlier, allowing for faster intervention and better outcomes for premature babies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center text-xl">
                  →
                </div>
                <div>
                  <h4 className="mb-2">Enhanced Comfort Solutions</h4>
                  <p className="text-[var(--color-warm-gray-600)]">
                    From innovative incubator designs to gentle positioning aids, we're supporting products that make NICU stays more comfortable for babies and less stressful for families.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center text-xl">
                  →
                </div>
                <div>
                  <h4 className="mb-2">Expanding Access Worldwide</h4>
                  <p className="text-[var(--color-warm-gray-600)]">
                    Our goal is to bring life-saving innovations to NICUs around the world, especially in underserved communities where advanced neonatal care is limited.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={nicuBasics}
                    alt="Baby receiving care in NICU incubator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={lactationSupport}
                    alt="Mother bonding with newborn in NICU"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={smallNicuBaby}
                    alt="Premature baby receiving gentle care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMGhhbmRzJTIwY2FyZSUyMGdlbnRsZXxlbnwxfHx8fDE3Nzk3NjUwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Close connection between caregiver and baby"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
