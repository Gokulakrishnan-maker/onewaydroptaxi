export default function CoimbatoreToChennai() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Coimbatore to Chennai Drop Taxi</h1>

      <p className="leading-relaxed mb-4">
        Comfortable and affordable one-way and round-trip taxi service from Coimbatore to Chennai.
        Clean vehicles, professional drivers, and transparent pricing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">One-Way Fare</h2>
      <p className="leading-relaxed mb-3">Distance: <strong>510 km</strong></p>
      <ul className="list-disc pl-6 leading-relaxed mb-4">
        <li>Sedan: ₹7,540 (510 km × ₹14 + driver bata ₹400)</li>
        <li>SUV: ₹10,090 (510 km × ₹19 + driver bata ₹400)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Round Trip Fare</h2>
      <p className="leading-relaxed mb-3">Distance: <strong>1,020 km (To & Return)</strong></p>
      <ul className="list-disc pl-6 leading-relaxed mb-4">
        <li>Sedan: ₹13,660 (1,020 km × ₹13 + driver bata ₹400)</li>
        <li>SUV: ₹18,760 (1,020 km × ₹18 + driver bata ₹400)</li>
      </ul>

      <p className="mt-4 leading-relaxed font-medium">
        Toll, Parking & State Permit Charges Extra.
      </p>

      <a
        href="tel:+916382980204"
        className="inline-block mt-6 bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-yellow-700"
      >
        Call to Book Now
      </a>
    </div>
  );
}
