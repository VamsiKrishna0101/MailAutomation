import React from 'react';

const services = [
  {
    text: "Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.",
    bg: "bg-[#00997a]",
  },
  {
    text: "Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.",
    bg: "bg-[#ff9900]",
  },
  {
    text: "Analyze performance with custom reports, funnel visualizations, and industry benchmarking.",
    bg: "bg-[#1aff1a]",
  },
];

const Services = () => {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 pr-4 pl-4 mb-6 gap-10 m-10">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center text-justify p-6 h-80 rounded-xl shadow-md ${service.bg}`}
        >
          <p className="text-gray-800 font-medium">{service.text}</p>
          
                        <button
            className="b-black mt-17 mr-60 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-md hover:bg-gray-900 transition duration-200 ease-in-out"
            aria-label="signup"
          >
            Explore Now
          </button>

        </div>
        
      ))}
    </div>
  );
};

export default Services;
