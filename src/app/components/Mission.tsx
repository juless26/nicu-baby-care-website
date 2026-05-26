import nicuCare from '../../imports/110A0283-1-900x600.jpg';

export function Mission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={nicuCare}
                alt="Healthcare professional caring for baby in NICU with medical equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="inline-block px-4 py-1 bg-[var(--color-sage)]/30 text-[var(--color-primary-deep-teal)] rounded-full text-sm">
              Our Mission
            </div>

            <h2>
              Every Baby Deserves the Best Start
            </h2>

            <div className="space-y-4 text-[var(--color-warm-gray-600)] leading-relaxed">
              <p>
                NICU Baby Care was founded on a simple yet powerful belief: innovation can save lives. Each year, millions of babies are born prematurely or with critical health conditions that require specialized care.
              </p>

              <p>
                We partner with medical researchers, engineers, and healthcare providers to develop and launch life-changing products that address the most pressing needs in neonatal intensive care units worldwide.
              </p>

              <p>
                From advanced monitoring systems to comfort-enhancing technologies, every product we support is designed with one goal in mind: giving NICU babies and their families hope for a healthier tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
