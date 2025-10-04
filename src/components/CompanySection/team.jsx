import React from "react";
import team1 from "../../assets/images/image-hero-mobile.png";
import team2 from "../../assets/images/image-hero-mobile.png";
import team3 from "../../assets/images/image-hero-mobile.png";

const OurTeam = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO & Founder", img: team1 },
    { name: "David Kim", role: "Lead Developer", img: team2 },
    { name: "Amara Obi", role: "UI/UX Designer", img: team3 },
    { name: "Michael Green", role: "Product Manager", img: team1 },
    { name: "Linda Okoro", role: "Marketing Lead", img: team2 },
    { name: "Tomi Ade", role: "Frontend Engineer", img: team3 },
  ];

  return (
    <section id="our-team" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A passionate group of innovators, creators, and problem-solvers working together 
          to make great things happen. We value creativity, collaboration, and a shared 
          vision for excellence.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 max-w-xs"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mb-4 shadow-lg transform hover:scale-105 transition duration-300"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};

export default OurTeam;
