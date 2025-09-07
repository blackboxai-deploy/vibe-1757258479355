"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      urgent: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your industrial maintenance and automation needs? Contact us for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">contact@ymengineering.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-4 animate-pulse">
                    <span className="text-white font-bold">🚨</span>
                  </div>
                  <div>
                    <p className="text-red-400 text-sm">Emergency Hotline</p>
                    <p className="text-red-300 font-bold">+1 (555) 999-HELP</p>
                    <p className="text-red-300 text-xs">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Service Areas</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Manufacturing facilities</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Processing plants</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Distribution centers</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <p>Industrial complexes</p>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="p-6 bg-gradient-to-br from-green-900/30 to-slate-800/30 border border-green-500/30 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Response Times</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-gray-300">Emergency Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">&lt; 2hrs</div>
                  <div className="text-sm text-gray-300">Critical Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Same Day</div>
                  <div className="text-sm text-gray-300">Standard Calls</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">48hrs</div>
                  <div className="text-sm text-gray-300">Planned Work</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Request Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="maintenance">Preventive & Corrective Maintenance</option>
                  <option value="breakdown">Breakdown Support & Troubleshooting</option>
                  <option value="plc">PLC Programming & Automation</option>
                  <option value="calibration">Calibration & Testing</option>
                  <option value="electrical">Electrical Installations & Upgrades</option>
                  <option value="mechanical">Mechanical Repairs & Retrofitting</option>
                  <option value="monitoring">Condition Monitoring & Predictive Maintenance</option>
                  <option value="mechatronics">Mechatronics Solutions</option>
                  <option value="emergency">Emergency Call-Out Service</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  placeholder="Please describe your project requirements, timeline, and any specific equipment or systems involved..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 rounded focus:ring-red-400 focus:ring-2"
                />
                <label className="ml-2 text-sm text-red-400">
                  🚨 This is an urgent/emergency request
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 YM Engineering. Professional Industrial Maintenance & Automation Services.
          </p>
          <p className="text-sm text-gray-500">
            Licensed • Insured • Professional Engineering Services
          </p>
        </div>
      </div>
    </section>
  );
}