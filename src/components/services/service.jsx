import React from 'react';

const Services = () => {
  const services = [
    'Web Development',
    'ERP Solutions',
    'Mobile Apps',
    'Custom Software',
    'Digital Marketing',
    'Cloud Solutions',
    'Cybersecurity',
    'IT Support'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-600 mb-4">
                Professional {service.toLowerCase()} solutions tailored to your needs
              </p>
              <a href={`#${service.toLowerCase()}`} className="text-[#2E5077] flex items-center">
                Learn More
                {/* Assuming you have a component for ArrowRight */}
                <span className="ml-2 h-4 w-4">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
