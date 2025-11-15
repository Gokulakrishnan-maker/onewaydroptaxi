import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Clock, 
  MapPin, 
  AtSign,
  MessageCircle   // ✅ Missing import fixed
} from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Booking & Reservations",
      icon: Phone,
      questions: [
        {
          question: "How can I book a taxi with Onewaydroptaxi?",
          answer:
            "You can book through our website, call +91 9791401055, or WhatsApp us. We accept advance bookings and immediate pickups based on availability."
        },
        {
          question: "How far in advance can I book a taxi?",
          answer:
            "You can book up to 30 days in advance for local trips and 15 days for outstation. For guaranteed availability, book 2 hours before."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer:
            "Yes, modifications or cancellations are free up to 15 minutes before pickup. After driver dispatch, a ₹50 cancellation charge applies."
        }
      ]
    },
    {
      category: "Pricing & Payments",
      icon: Clock,
      questions: [
        {
          question: "How is the fare calculated?",
          answer:
            "Fares are based on distance (₹18–₹35 per km depending on car type), base fare ₹50, AC charges ₹3/km, night surcharge 25% (11 PM–5 AM), and waiting time ₹2/min."
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept UPI (GPay, PhonePe, Paytm), cash, credit/debit cards, and net banking. You can pay the driver or online."
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No, we maintain 100% transparent pricing. Tolls, parking, or outstation driver allowance are communicated clearly before your trip."
        }
      ]
    },
    {
      category: "Service Areas & Routes",
      icon: MapPin,
      questions: [
        {
          question: "Which areas do you cover in Coimbatore?",
          answer:
            "We serve all areas: RS Puram, Gandhipuram, Peelamedu, Saibaba Colony, Singanallur, Race Course, Ukkadam, and surrounding suburbs."
        },
        {
          question: "Do you provide outstation services?",
          answer:
            "Yes, we provide outstation trips to Chennai, Bangalore, Madurai, Ooty, Kodaikanal, Kochi, and more. Driver allowance applies for multi-day trips."
        },
        {
          question: "Do you offer airport transfers?",
          answer:
            "Yes, 24/7 Coimbatore Airport pickup and drop available. We track your flight for on-time arrivals."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Onewaydroptaxibooking | Taxi Service Questions</title>
        <meta
          name="description"
          content="FAQ for Onewaydroptaxibooking: Taxi booking, pricing, outstation service, Coimbatore routes, cancellation policy, and more."
        />
        <link rel="canonical" href="https://www.onewaydroptaxibooking.com/faq" /> 
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Onewaydroptaxibooking" />
        <meta property="og:description" content="Frequently asked questions about our taxi booking and pricing." />
        <meta property="og:url" content="https://www.onewaydroptaxibooking.com/faq" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap(cat =>
              cat.questions.map(q => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": { "@type": "Answer", "text": q.answer }
              }))
            )
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">Find answers to all taxi booking questions</p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6 flex items-center gap-3">
                  <category.icon className="h-6 w-6" />
                  <h2 className="text-xl font-bold">{category.category}</h2>
                </div>

                <div className="p-6 space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const id = categoryIndex * 10 + faqIndex;
                    return (
                      <div key={faqIndex} className="border rounded-lg">
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full p-4 text-left flex justify-between"
                        >
                          <span className="font-semibold">{faq.question}</span>
                          {openFAQ === id ? <ChevronUp /> : <ChevronDown />}
                        </button>

                        {openFAQ === id && (
                          <div className="p-4 bg-gray-50 border-t">{faq.answer}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CONTACT BOX */}
          <div className="mt-12 bg-orange-50 border rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6">Our support team is available 24/7 to help you.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919791401055" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                <Phone className="inline h-4 w-4 mr-2" /> Call +91 9791401055
              </a>

              <a href="https://wa.me/919791401055" className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>

              <a href="mailto:onewaydroptaxibooking7@gmail.com" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2">
                <AtSign className="h-4 w-4" /> Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
