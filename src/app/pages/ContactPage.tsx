import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary-deep-teal)] to-[var(--color-primary-soft-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-white">Get in Touch</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Whether you want to partner with us, apply for an internship, or learn more about our mission, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <p className="text-[var(--color-warm-gray-600)] leading-relaxed mb-8">
                  We're here to answer your questions and explore how we can work together to improve NICU care.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <a href="mailto:info@nicubabycare.com" className="text-[var(--color-primary-soft-blue)] hover:underline">
                      info@nicubabycare.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-primary-soft-blue)]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--color-primary-soft-blue)]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <a href="tel:+16507769672" className="text-[var(--color-primary-soft-blue)] hover:underline">
                      (650) 776-9672
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-[var(--color-warm-gray-50)] p-8 rounded-2xl">
                <h3 className="mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[var(--color-warm-gray-900)]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-warm-gray-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-soft-blue)]"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-[var(--color-warm-gray-900)]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-warm-gray-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-soft-blue)]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-[var(--color-warm-gray-900)]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-warm-gray-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-soft-blue)]"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block mb-2 text-[var(--color-warm-gray-900)]">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-warm-gray-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-soft-blue)]"
                    >
                      <option value="">Select an option</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="internship">Internship Application</option>
                      <option value="donation">Donation Information</option>
                      <option value="research">Research Collaboration</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-[var(--color-warm-gray-900)]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-warm-gray-300)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-soft-blue)] resize-none"
                      placeholder="Tell us more about your interest..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full text-lg py-4">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
