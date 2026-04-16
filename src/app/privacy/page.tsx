import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Privacy policy for Manasvikaar Wellness services.',
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <main className="bg-white py-34">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 font-display text-4xl font-semibold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mb-16 text-gray-600">Last updated: April 2026</p>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              At Manasvikaar Wellness, we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 font-display text-lg font-semibold text-gray-900">
              Personal Information
            </h3>
            <p className="mb-4 text-gray-600">
              We collect personal information you voluntarily provide when:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Booking therapy or coaching sessions</li>
              <li>Registering for workshops</li>
              <li>Subscribing to our newsletter</li>
              <li>Contacting us through our website</li>
            </ul>
            <p className="mt-4 text-gray-600">This may include:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Name and contact information (email, phone number)</li>
              <li>Age and demographic information</li>
              <li>Health and wellness information relevant to your sessions</li>
              <li>Payment information (processed securely)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide and improve our wellness services</li>
              <li>
                Schedule and conduct therapy, coaching, and workshop sessions
              </li>
              <li>Communicate with you about appointments and services</li>
              <li>Send important updates and resources</li>
              <li>Process payments securely</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              4. Information Sharing
            </h2>
            <p className="mb-4 text-gray-600">
              We do not sell, rent, or trade your personal information to third
              parties. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Service providers who assist in our operations (e.g., payment
                processors)
              </li>
              <li>Legal authorities when required by law</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              5. Data Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. This includes secure
              storage, encryption where appropriate, and access controls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              6. Confidentiality in Therapy Sessions
            </h2>
            <p className="mb-4 text-gray-600">
              All therapy and coaching sessions are confidential. Your therapist
              or coach will not share the content of your sessions with anyone
              except:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>With your explicit written consent</li>
              <li>As required by law (e.g., safety concerns)</li>
              <li>
                For supervision purposes (with identifying information removed)
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              7. Cookies and Tracking
            </h2>
            <p className="text-gray-600">
              Our website uses cookies to improve your browsing experience. You
              can disable cookies through your browser settings. We may also use
              analytics tools to understand how visitors use our site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              8. Data Retention
            </h2>
            <p className="text-gray-600">
              We retain your personal information for as long as necessary to
              provide our services and as required by law. You may request
              deletion of your data at any time, subject to legal retention
              requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              9. Your Rights
            </h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              10. Third-Party Links
            </h2>
            <p className="text-gray-600">
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices of those sites. Please
              review their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this policy periodically. We will notify you of
              significant changes through our website or by email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-gray-900">
              12. Contact Us
            </h2>
            <p className="mb-4 text-gray-600">
              For questions about this Privacy Policy or to exercise your
              rights, please contact:
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
