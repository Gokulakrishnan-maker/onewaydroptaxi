import React from "react";
import { MapPin } from "lucide-react";

const CitiesWeCover = () => {
  const cities = [
    "Ariyalur", "Bengaluru", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari",
    "Kodaikanal", "Krishnagiri", "Kumbakonam", "Madurai", "Mayiladuthurai", "Nagapattinam",
    "Namakkal", "Nilgiris", "Perambalur", "Puducherry", "Pudukkottai", "Ramanathapuram",
    "Rameswaram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni",
    "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur",
    "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Virudhunagar"
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">All Cities We Cover</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 border border-gray-100 p-5 rounded-xl shadow-sm transition duration-300"
            >
              <MapPin className="w-6 h-6 text-gray-700 mb-2" />
              <span className="text-gray-800 font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesWeCover;
