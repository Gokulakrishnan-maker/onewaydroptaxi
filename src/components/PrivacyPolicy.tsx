import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Onewaydroptaxibooking | Secure Taxi Service in Tamil Nadu</title>
        <meta
          name="description"
          content="Onewaydroptaxibooking Privacy Policy – Learn how we securely handle your personal data, location information, and booking details. Trusted taxi service in Kallakurichi, Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Onewaydroptaxibooking privacy policy, Kallakurichi taxi privacy, secure taxi booking Tamil Nadu, data protection policy"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.onewaydroptaxibooking.com/privacy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy - Onewaydroptaxibooking" />
        <meta
          property="og:description"
          content="Read the privacy policy of Onewaydroptaxibooking and understand how we protect your personal and booking information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onewaydroptaxibooking.com/privacy" />
        <meta property="og:site_name" content="Onewaydroptaxibooking" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Onewaydroptaxibooking" />
        <meta
          name="twitter:description"
          content="Learn how Onewaydroptaxibooking protects your privacy and booking information."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Onewaydroptaxibooking",
            "url": "https://www.onewaydroptaxibooking.com/privacy",
            "description":
              "Privacy Policy for Onewaydroptaxibooking – Data protection, user security, and booking safety guidelines.",
            "publisher": {
              "@type": "Organization",
              "name": "Onewaydroptaxibooking",
              "url": "https://www.onewaydroptaxibooking.com/"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 2025</p>
            </div>

            <div className="prose max-w-none">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Information We Collect
                </h2>

                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Name, mobile number, and email for booking</li>
                    <li>Pickup and drop locations for trip planning</li>
                    <li>Payment details (processed securely by payment partners)</li>
                    <li>Booking history for service improvement</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Location Data</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>GPS location for accurate pickup</li>
                    <li>Trip route information for accurate fare estimation</li>
                    <li>Real-time tracking to ensure rider safety</li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  How We Use Your Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Process taxi bookings and provide service</li>
                      <li>• Share ride details with assigned drivers</li>
                      <li>• Send confirmations and trip updates</li>
                      <li>• Calculate accurate fares</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Safety & Support</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Ensure customer & driver safety</li>
                      <li>• Provide customer support</li>
                      <li>• Improve service quality</li>
                      <li>• Maintain legal and regulatory compliance</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-2" />
                  Data Protection
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We follow standard security practices to protect your data:
                  </p>

                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Encrypted communication using HTTPS</li>
                    <li>Secure payment systems through authorized gateways</li>
                    <li>Limited access to personal data</li>
                    <li>Regular security audits</li>
                    <li>Compliance with Indian data protection laws</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Access</h3>
                    <p className="text-gray-600 text-sm">You may request your stored personal data.</p>
                  </div>

                  <div className="bg-white border-2 border-green-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Correction</h3>
                    <p className="text-gray-600 text-sm">You may ask for corrections to inaccurate data.</p>
                  </div>

                  <div className="bg-white border-2 border-red-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Deletion</h3>
                    <p className="text-gray-600 text-sm">You may request deletion of your personal data.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For any questions about this Privacy Policy, contact us:
                  </p>

                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> +91 9791401055</p>
                    <p><strong>Email:</strong> onewaydroptaxibooking7@gmail.com</p>
                    <p><strong>Address:</strong> Kallakurichi, Tamil Nadu, India</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
