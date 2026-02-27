import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Bikers Choice Kakinada
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Premium bike modification, LED upgrades, wraps, touring builds, helmets & accessories.
          Trusted by 4.8k+ riders across Kakinada.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 transition-all">
            <h3 className="font-semibold text-xl mb-2">LED Mods</h3>
            <p className="text-gray-400 text-sm">
              Headlights, indicators, fog lamps, DRLs & premium wiring.
            </p>
          </div>

          <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 transition-all">
            <h3 className="font-semibold text-xl mb-2">Wraps & Styling</h3>
            <p className="text-gray-400 text-sm">
              Custom wraps, glossy/matte finish, tank pads & graphic upgrades.
            </p>
          </div>

          <div className="p-5 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 transition-all">
            <h3 className="font-semibold text-xl mb-2">Touring Setup</h3>
            <p className="text-gray-400 text-sm">
              Crash guards, saddle stays, mobile holders & luggage systems.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <p className="text-lg text-gray-300">📞 +91 8523876978</p>
        <p className="text-gray-400">📍 Kakinada, Andhra Pradesh</p>

        <a
          href="https://www.instagram.com/bikers_choice_kakinada"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700"
        >
          Visit Instagram
        </a>
      </section>
    </div>
  );
};

export default App;
