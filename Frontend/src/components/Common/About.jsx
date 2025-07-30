import React from "react";

const team = [
  {
    name: "John",
    role: "Founder & Visionary",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jacob",
    role: "Design Head",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Alex Carter",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const About = () => {
  return (
    <div className="font-[Inter] text-gray-800">
      <section className="py-20 px-6 lg:px-32 bg-white text-center">
        <h1
          className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome to DelightLoop
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          We're reimagining how modern businesses create meaningful email experiences. DelightLoop helps you launch beautiful campaigns that truly connect.
        </p>
      </section>

      <section className="bg-gray-50 py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Team"
            className="rounded-3xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-purple-700 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At DelightLoop, we empower creators and marketers with tools that
              blend simplicity, beauty, and automation.
            </p>
            <p className="text-lg text-gray-600">
              Whether you’re launching a startup or scaling a brand, our
              platform helps you stay ahead in the email game — delightfully.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600">
            Innovators. Designers. Builders of Delight.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-10">
        <p className="text-lg">Crafted with ❤️ by the DelightLoop Team</p>
      </footer>
    </div>
  );
};

export default About;
