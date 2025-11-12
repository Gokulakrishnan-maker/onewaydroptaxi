import React from "react";

const PopularRoutes = () => {
  const routeCategories = [
    {
      title: "Major City Routes",
      color: "from-blue-50 to-blue-100",
      routes: [
        "Chennai ↔ Madurai",
        "Chennai ↔ Coimbatore",
        "Chennai ↔ Salem",
        "Chennai ↔ Trichy",
      ],
    },
    {
      title: "Temple Tour Routes",
      color: "from-green-50 to-green-100",
      routes: [
        "Madurai ↔ Rameswaram",
        "Chennai ↔ Kanchipuram",
        "Thanjavur ↔ Kumbakonam",
        "Trichy ↔ Thanjavur",
      ],
    },
    {
      title: "Hill Station Routes",
      color: "from-purple-50 to-purple-100",
      routes: [
        "Coimbatore ↔ Ooty",
        "Madurai ↔ Kodaikanal",
        "Salem ↔ Yercaud",
        "Chennai ↔ Yelagiri",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Popular Routes by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routeCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${category.color} rounded-2xl shadow-sm p-6 text-left hover:shadow-md transition duration-300`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-800">
                {category.routes.map((route, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {route}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
