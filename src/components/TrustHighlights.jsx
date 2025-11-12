import React from "react";
import { CheckCircle, Shield, Star, Target } from "lucide-react";

const TrustHighlights = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600 mb-3" />,
      title: "Verified Reviews",
      description:
        "All feedback displayed is from genuine users who have used our service.",
      color: "from-green-50 to-green-100",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 mb-3" />,
      title: "Safe Travels",
      description:
        "We maintain strict safety standards and experienced drivers for every trip.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500 mb-3" />,
      title: "Top Rated",
      description:
        "Trusted by thousands of happy travelers across Tamil Nadu and beyond.",
      color: "from-yellow-50 to-yellow-100",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600 mb-3" />,
      title: "On-Time Promise",
      description:
        "Consistent record of timely pickups and reliable drop services.",
      color: "from-purple-50 to-purple-100",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Travelers Trust Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${item.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300`}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
