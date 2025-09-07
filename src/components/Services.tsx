"use client";

import { useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    title: "Preventive & Corrective Maintenance",
    description: "Comprehensive maintenance programs for industrial machinery to prevent downtime and extend equipment life.",
    icon: "🔧",
    features: ["Scheduled maintenance programs", "Equipment health assessments", "Failure analysis & prevention", "Maintenance documentation"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Breakdown Support & Troubleshooting",
    description: "Expert diagnosis and repair of electromechanical and mechatronic systems to minimize production losses.",
    icon: "⚡",
    features: ["24/7 emergency response", "Root cause analysis", "System diagnostics", "Rapid fault resolution"],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "PLC Programming & Automation",
    description: "Professional programming and support for major PLC platforms including Siemens, Beckhoff, and Allen Bradley.",
    icon: "💻",
    features: ["Siemens TIA Portal", "Beckhoff TwinCAT", "Allen Bradley RSLogix", "HMI development"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Calibration & Testing",
    description: "Precision calibration and comprehensive testing of industrial equipment to ensure optimal performance.",
    icon: "📊",
    features: ["Instrument calibration", "Performance testing", "Compliance verification", "Test documentation"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Electrical Installations & Upgrades",
    description: "Professional electrical work including motors, drives, sensors, and control panel installations.",
    icon: "⚙️",
    features: ["Motor installations", "Variable frequency drives", "Sensor integration", "Control panel wiring"],
    color: "from-red-500 to-red-600"
  },
  {
    title: "Mechanical Repairs & Retrofitting",
    description: "Expert mechanical maintenance and upgrades for hydraulic, pneumatic, and actuator systems.",
    icon: "🔩",
    features: ["Hydraulic system repair", "Pneumatic maintenance", "Actuator replacement", "System retrofitting"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Condition Monitoring & Predictive Maintenance",
    description: "Advanced monitoring solutions using vibration, thermal, and IoT sensors for predictive maintenance.",
    icon: "📡",
    features: ["Vibration analysis", "Thermal imaging", "IoT sensor networks", "Data analytics"],
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Mechatronics Solutions",
    description: "Integrated solutions for robotics, conveyor automation, and CNC systems to improve efficiency.",
    icon: "🤖",
    features: ["Robotics integration", "Conveyor automation", "CNC programming", "System integration"],
    color: "from-orange-500 to-orange-600"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Engineering Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial maintenance and automation solutions to keep your operations running smoothly
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                hoveredIndex === index ? 'z-10' : 'z-0'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative p-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20' : 'hover:border-slate-600'
              }`}>
                
                {/* Electrical Glow Effect on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-blue-400/10 to-yellow-400/10 animate-pulse"></div>
                )}

                {/* Service Icon */}
                <div className="text-4xl mb-4 filter drop-shadow-lg">{service.icon}</div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mr-2 group-hover:animate-pulse"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Gradient Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Electric Border Animation */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-xl animate-pulse pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Service Callout */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-2 animate-pulse">⚡ Emergency Call-Out Service</h3>
            <p className="text-red-300 max-w-2xl">
              24/7 rapid response for critical downtime situations. When every minute counts, our emergency service ensures minimal production losses.
            </p>
            <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors duration-300">
              Emergency Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}