import { Stethoscope, Lightbulb, Users, Heart } from 'lucide-react';

const programs = [
  {
    icon: Stethoscope,
    title: 'Medical Device Innovation',
    description: 'Supporting the development of cutting-edge monitoring and treatment devices specifically designed for premature and critically ill newborns.',
    color: 'var(--color-primary-soft-blue)'
  },
  {
    icon: Lightbulb,
    title: 'Research Partnerships',
    description: 'Funding breakthrough research in neonatal care, collaborating with leading medical institutions to advance scientific understanding.',
    color: 'var(--color-warm-peach)'
  },
  {
    icon: Users,
    title: 'Family Support Hub',
    description: 'Providing resources and education to families navigating the challenges of having a baby in the NICU.',
    color: 'var(--color-sage)'
  },
  {
    icon: Heart,
    title: 'Product Accessibility',
    description: 'Ensuring life-saving innovations reach hospitals and NICUs around the world, especially in underserved communities.',
    color: 'var(--color-soft-lavender)'
  }
];

export function Programs() {
  return (
    <section className="py-24 bg-[var(--color-warm-gray-50)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-white text-[var(--color-primary-deep-teal)] rounded-full text-sm mb-4">
            What We Do
          </div>
          <h2 className="mb-6">
            Activities
          </h2>
          <p className="text-lg text-[var(--color-warm-gray-600)]">
            We focus on four key areas to create lasting impact in neonatal care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-[var(--color-warm-gray-100)] hover:shadow-lg transition-shadow duration-[var(--duration-base)]"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${program.color}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: program.color }} />
                </div>
                <h3 className="mb-4">
                  {program.title}
                </h3>
                <p className="text-[var(--color-warm-gray-600)] leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
