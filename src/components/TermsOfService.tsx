import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertTriangle, CreditCard, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Onewaydroptaxibooking | Taxi Booking Policies</title>
        <meta
          name="description"
          content="Onewaydroptaxibooking Terms & Conditions – Booking rules, cancellation policy, payment terms, passenger responsibilities, and service guidelines for taxi service in Kallakurichi & Tamil Nadu."
        />
        <meta
          name="keywords"
          content="Onewaydroptaxibooking terms, taxi terms and conditions, Kallakurichi taxi policies, booking rules, cancellation policy"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.onewaydroptaxibooking.com/terms" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms & Conditions - Onewaydroptaxibooking" />
        <meta
          property="og:description"
          content="Read the official Terms & Conditions for taxi booking with Onewaydroptaxibooking."
        />
        <meta property="og:url" content="https://www.onewaydroptaxibooking.com/terms" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions - Onewaydroptaxibooking",
            "url": "https://www.onewaydroptaxibooking.com/terms",
            "description":
              "Terms & Conditions for taxi bookings including cancellation policy, payment terms, customer responsibilities, and service rules.",
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
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
              <p className="text-gray-600">Last updated: January 2025</p>
            </div>

            <div className="prose max-w-none">
              {/* Service Agreement */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold flex items-center mb-4 text-gray-900">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Service Agreement
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    By using Onewaydroptaxibooking services, you agree to follow the terms listed
                    below. Our taxi services operate across Kallakurichi and Tamil Nadu.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Taxi service available 24/7 in Kallakurichi and across Tamil Nadu</li>
                    <li>Drivers are verified and trained professionals</li>
                    <li>Vehicles are regularly checked and maintained</li>
                    <li>Services provided as per state transport guidelines</li>
                  </ul>
                </div>
              </section>

              {/* Booking Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Booking Terms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Booking Process</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Advance booking recommended</li>
                      <li>• Immediate pickup subject to availability</li>
                      <li>• Confirmation via call/SMS/WhatsApp</li>
                      <li>• Driver details shared before pickup</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-3">Cancellation Policy</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Free cancellation up to 15 minutes before pickup</li>
                      <li>• ₹50 cancellation charge after driver is assigned</li>
                      <li>• No-show fee: ₹100</li>
                      <li>• Outstation trips: 24-hour prior cancellation required</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payment Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold flex items-center text-gray-900 mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                  Payment Terms
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Accepted Payments</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Cash</li>
                        <li>• UPI (PhonePe, Google Pay, Paytm)</li>
                        <li>• Debit/Credit cards</li>
                        <li>• Net banking</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Fare Guidelines</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Transparent pricing</li>
                        <li>• Tolls/parking extra</li>
                        <li>• Night charges 25% (11 PM – 5 AM)</li>
                        <li>• Outstation driver allowance if applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Responsibilities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold flex items-center text-gray-900 mb-4">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
                  Passenger Responsibilities
                </h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide correct pickup information</li>
                    <li>Be available at pickup on time</li>
                    <li>Behave respectfully with drivers</li>
                    <li>No smoking, drinking, or prohibited items</li>
                    <li>Route changes must be informed in advance</li>
                    <li>Pay the agreed fare</li>
                  </ul>
                </div>
              </section>

              {/* Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability & Insurance</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Onewaydroptaxibooking follows all safety standards and legal guidelines:
                  </p>

                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Vehicles meet state transport regulations</li>
                    <li>Drivers hold valid licenses</li>
                    <li>Insurance coverage as per state requirements</li>
                    <li>Service subject to availability and conditions</li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    For questions or clarifications regarding these terms:
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

export default TermsOfService;
