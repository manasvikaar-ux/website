import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Terms and conditions for Manasvikaar Wellness services.',
  title: 'Terms & Conditions',
};

export default function TermsPage() {
  return (
    <main className="bg-white py-34">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-display text-4xl font-semibold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mb-16 text-gray-600">Last updated: April 2026</p>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using Manasvikaar Wellness website and services,
              you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to these terms, please do not
              use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              2. Description of Services
            </h2>
            <p className="mb-4 text-gray-600">
              Manasvikaar provides mental wellness services including:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Individual therapy sessions</li>
              <li>Group therapy and counseling</li>
              <li>Wellness workshops (in-person and virtual)</li>
              <li>Corporate coaching sessions</li>
              <li>Digital wellness resources</li>
              <li>Online courses and podcasts</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              3. Booking and Appointments
            </h2>
            <p className="mb-4 text-gray-600">
              Sessions can be booked through our online booking system or by
              contacting us directly. Appointment confirmation will be sent via
              email or WhatsApp. Please arrive on time for in-person sessions or
              join virtual sessions at the scheduled time.
            </p>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900">
              Cancellation Policy
            </h3>
            <p className="text-gray-600">
              We request at least 24 hours notice for cancellations or
              rescheduling. Cancellations with less than 24 hours notice may be
              charged in full. No-shows will be charged the full session fee.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              4. Payment Terms
            </h2>
            <p className="text-gray-600">
              Payment is required at the time of booking unless otherwise
              agreed. We accept various payment methods including bank
              transfers, UPI, and online payments. Package deals and
              subscriptions must be used within the specified timeframe.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              5. Confidentiality and Privacy
            </h2>
            <p className="text-gray-600">
              All client information and session content is kept strictly
              confidential. We do not share personal data with third parties
              without explicit consent, except as required by law. Please refer
              to our Privacy Policy for more details.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content on this website, including course materials, workshop
              content, podcasts, and resources, is the property of Manasvikaar
              Wellness Pvt Ltd. Unauthorized reproduction, distribution, or
              copying of any materials is prohibited without prior written
              consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Our services are for wellness and educational purposes.
              Manasvikaar does not provide medical diagnosis or treatment.
              Services are not a substitute for professional medical advice,
              diagnosis, or treatment. If you have a medical emergency, please
              contact emergency services immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              8. Professional Conduct
            </h2>
            <p className="text-gray-600">
              All therapists and coaches maintain professional standards as
              required by their respective certifying bodies. Clients are
              expected to conduct themselves respectfully during all
              interactions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              9. Modifications to Services
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify, suspend, or discontinue any
              service at any time without notice. Prices are subject to change
              with advance notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              10. Contact Information
            </h2>
            <p className="mb-4 text-gray-600">
              For questions about these terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Email: hello@manasvikaar.com</li>
              <li>Phone: +91 80500 72071</li>
              <li>WhatsApp: +91 80500 72071</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
