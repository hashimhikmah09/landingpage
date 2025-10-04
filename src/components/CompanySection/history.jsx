import React from "react";

const History = () => {
  return (
    <section id="history" className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our History</h2>
        <p className="text-gray-600 mb-10">
          From humble beginnings to a global impact — here’s a look at our journey through the years.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">2015 — The Beginning</h3>
            <p className="text-gray-500 text-sm">
              We started as a small group of tech enthusiasts building productivity tools for small teams.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2018 — Growth & Innovation</h3>
            <p className="text-gray-500 text-sm">
              Expanded globally and launched our first cloud-based platform with over 10k users.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2023 — Leading the Future</h3>
            <p className="text-gray-500 text-sm">
              Our products now empower millions worldwide — and our story is just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
