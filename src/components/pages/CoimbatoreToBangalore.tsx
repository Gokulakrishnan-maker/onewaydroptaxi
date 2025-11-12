export default function CoimbatoreToBangalore() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Coimbatore to Bangalore Drop Taxi</h1>

      <p className="leading-relaxed mb-4">
        Safe and comfortable travel from Coimbatore to Bangalore with professional drivers and clean vehicles.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">One-Way Fare</h2>
      <p className="leading-relaxed mb-3">Distance: <strong>317 km</strong></p>
      <ul className="list-disc pl-6 leading-relaxed mb-4">
        <li>Sedan: ₹4,838 (317 km × ₹14 + driver bata ₹400)</li>
        <li>SUV: ₹6,423 (317 km × ₹19 + driver bata ₹400)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Round Trip Fare</h2>
      <p className="leading-relaxed mb-3">Distance: <strong>634 km (To & Return)</strong></p>
      <ul className="list-disc pl-6 leading-relaxed mb-4">
        <li>Sedan: ₹8,642 (634 km × ₹13 + driver bata ₹400)</li>
        <li>SUV: ₹11,812 (634 km × ₹18 + driver bata ₹400)</li>
      </ul>

      <p className="mt-4 leading-relaxed font-medium">
        Toll, Parking & State Permit Charges Extra.
      </p>

      <a
        href="tel:+919791401055"
        className="inline-block mt-6 bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-yellow-700"
      >
        Call to Book Now
      </a>
    </div>
  );
}
