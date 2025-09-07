"use client";

export default function About() {

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            About YM Engineering
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional industrial engineering services with a vision for growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Profile */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Expert Engineering Services</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                YM Engineering provides specialized freelance services in industrial maintenance, automation, and electrical systems. 
                With extensive experience across multiple industries, we deliver reliable solutions that minimize downtime and maximize efficiency.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our comprehensive approach covers everything from preventive maintenance to complex automation projects, 
                ensuring your industrial operations run smoothly and efficiently.
              </p>
            </div>

            {/* Core Expertise */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">PLC Platforms</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Siemens TIA Portal</li>
                    <li>• Beckhoff TwinCAT</li>
                    <li>• Allen Bradley RSLogix</li>
                    <li>• Schneider Unity Pro</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-2">Systems</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Industrial Robotics</li>
                    <li>• Conveyor Systems</li>
                    <li>• CNC Automation</li>
                    <li>• Process Control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Business Vision & Expansion */}
          <div className="space-y-6">
            {/* Current Service Model */}
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-slate-800/30 border border-blue-500/30 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Current Service Model</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Direct client engagement and on-site service delivery</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Flexible scheduling for both planned and emergency work</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Comprehensive documentation and reporting</p>
                </div>
              </div>
            </div>

            {/* Future Expansion Vision */}
            <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-slate-800/30 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Growth Vision</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Expanding team of qualified technicians</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Enhanced on-site service capabilities</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Broader geographic coverage and faster response times</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Specialized teams for different industrial sectors</p>
                </div>
              </div>
            </div>

            {/* Service Commitment */}
            <div className="p-6 bg-gradient-to-br from-green-900/30 to-slate-800/30 border border-green-500/30 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Our Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether working as an individual contractor or leading a growing team, YM Engineering maintains the highest standards 
                of technical excellence, reliability, and customer service. Our goal is to be your trusted partner for all 
                industrial maintenance and automation needs.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Certified Professional</h4>
            <p className="text-sm text-gray-300">Industry certifications and continuous professional development</p>
          </div>
          <div className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Safety Standards</h4>
            <p className="text-sm text-gray-300">Strict adherence to industrial safety protocols and regulations</p>
          </div>
          <div className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-lg font-semibold text-green-400 mb-2">Rapid Response</h4>
            <p className="text-sm text-gray-300">Fast mobilization for emergency and critical maintenance needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}