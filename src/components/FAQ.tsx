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
  MessageCircle
} from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Booking & Reservations",
      icon: Phone,
      questions: [
        {
          question: "How can I book a taxi with Onewaydroptaxibooking?",
          answer:
            "You can book through our website, call +91 9791401055, or WhatsApp us. Advance bookings and quick pickups are available based on driver availability."
        },
        {
          question: "How far in advance can I book a taxi?",
          answer:
            "You can book 30 days in advance for local trips and 15 days for outstation rides. For guaranteed availability, book at least 2 hours before your trip."
        },
        {
          question: "Can I modify or cancel my booking?",
          answer:
            "Yes. You can modify or cancel your booking up to 15 minutes before pickup time. After the driver is assigned, a ₹50 cancellation charge applies."
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
            "Fare is based on distance (₹18–₹35 per km depending on car type), base fare ₹50, night charges 25% (11 PM – 5 AM), AC charges ₹3/km, and waiting charges ₹2/min."
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept UPI (Google Pay, PhonePe, Paytm), cash, credit/debit cards, and net banking. Payments can be made directly to the driver or online."
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No. All charges such as toll, parking, and interstate permits (if needed) are clearly informed before your trip. We follow 100% transparent pricing."
        }
      ]
    },

    {
      category: "Service Areas & Routes",
      icon: MapPin,
      questions: [
        {
          question: "Which areas do you cover in Kallakurichi?",
          answer:
            "We cover all areas in and around Kallakurichi including Sankarapuram, Ulundurpet, Chinnasalem, Thiyagadurgam, Vadalur, Neyveli, Virudhachalam, Pennadam, and nearby rural villages."
        },
        {
          question: "Do you provide outstation services?",
          answer:
            "Yes! We provide outstation taxi services from Kallakurichi to Chennai, Pondicherry, Trichy, Salem, Coimbatore, Bangalore, Madurai, Thanjavur, Chidambaram, and all major cities in Tamil Nadu and Karnataka."
        },
        {
          question: "Do you offer airport transfers?",
          answer:
            "Yes. We provide 24/7 airport taxi service from Kallakurichi to Chennai Airport, Trichy Airport, Pondicherry Airport, and Salem Airport. Flight tracking is included for arrival pickups."
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
          content="FAQ for Onewaydroptaxibooking: Booking help, pricing details, Kallakurichi taxi service areas, outstation routes, and cancellation policy."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.onewaydroptaxibooking.com/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Onewaydroptaxibooking" />
        <meta property="og:description" content="Frequently asked questions about taxi booking, pricing, and routes from Kallakurichi." />
        <meta property="og:url" content="https://www.onewaydroptaxibooking.com/faq" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.flatMap((cat) =>
              cat.questions.map((q) => ({
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
            <p className="text-lg text-gray-600">Find answers to all your taxi service questions</p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg">
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
                          className="w-full p-4 flex justify-between text-left"
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
            <p className="text-gray-700 mb-6">Our support team is available 24/7 to assist you.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919791401055"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                <Phone className="inline h-4 w-4 mr-2" /> Call +91 9791401055
              </a>

              <a
                href="https://wa.me/919791401055"
                className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>

              <a
                href="mailto:onewaydroptaxibooking7@gmail.com"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2"
              >
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
