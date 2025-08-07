// pages/Contact.js
import React, { useState } from 'react';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
  UserIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address | ठेगाना',
      details: [
        'Peace International Pvt. Ltd.',
        'Maiti Marga, Pingalasthan-09',
        'Goushala, Kathmandu, Nepal'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Phone & Fax | फोन र फ्याक्स',
      details: [
        'Phone: +977-5913706',
        'Phone: +977-1-4113707',
        'Fax: +977-1-4113708'
      ]
    },
    {
      icon: ClockIcon,
      title: 'Business Hours | कार्यालय समय',
      details: [
        'Sunday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Emergency: Available on call'
      ]
    }
  ];

  const departmentContacts = [
    {
      icon: UserIcon,
      department: 'Person-In-Charge',
      departmentNp: 'प्रभारी व्यक्ति',
      emails: ['pce.intlovs@yahoo.com', 'ashdri77@yahoo.com'],
      description: 'General inquiries and management communication',
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      icon: DocumentTextIcon,
      department: 'Documentation Associates',
      departmentNp: 'कागजात सहयोगी',
      emails: ['peace_doc@yahoo.com'],
      description: 'Visa processing, work permits, and documentation',
      color: 'from-[#1B1948] to-[#004876]'
    },
    {
      icon: GlobeAltIcon,
      department: 'Public Relations',
      departmentNp: 'जनसम्पर्क',
      emails: ['ipeacepr@yahoo.com'],
      description: 'Media relations and public communications',
      color: 'from-[#1e3a8a] to-[#004876]'
    },
    {
      icon: PaperAirplaneIcon,
      department: 'Ticketing Department',
      departmentNp: 'टिकटिङ विभाग',
      emails: ['ticketingpc@yahoo.com'],
      description: 'Flight bookings and travel arrangements',
      color: 'from-[#004876] to-[#1B1948]'
    }
  ];

  const quickContacts = [
    { type: 'For Job Seekers', typeNp: 'रोजगारी खोज्नेहरूका लागि', email: 'pce.intlovs@yahoo.com', phone: '+977-1-4113707' },
    { type: 'For Employers', typeNp: 'रोजगारदाताहरूका लागि', email: 'ashdri77@yahoo.com', phone: '+977-5913706' },
    { type: 'Documentation Help', typeNp: 'कागजात सहायता', email: 'peace_doc@yahoo.com', phone: '+977-1-4113707' },
    { type: 'Travel Support', typeNp: 'यात्रा सहयोग', email: 'ticketingpc@yahoo.com', phone: '+977-1-4113708' }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Peace International Nepal | Apply for Overseas Jobs | Recruitment Agency"
        description="Contact Peace International Pvt. Ltd. for overseas employment opportunities. Located in Goushala, Kathmandu. Phone: +977-5913706. Email: pce.intlovs@yahoo.com. Apply now for jobs abroad!"
        keywords="contact peace international, apply overseas jobs Nepal, recruitment agency contact Kathmandu, manpower agency phone number, overseas job application Nepal"
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.58_975496c4.jpg"
              alt="Contact Peace International"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                Get In Touch With Us | हामीसँग सम्पर्क गर्नुहोस्
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Contact Peace International
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Ready to start your overseas career journey? Connect with our expert team for personalized assistance
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-2">Quick Contact</h2>
              <p className="text-lg text-[#004876] mb-2">द्रुत सम्पर्क</p>
              <p className="text-gray-600">
                Choose the right department for faster assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100">
                  <h3 className="font-semibold text-[#1B1948] mb-1">{contact.type}</h3>
                  <p className="text-sm text-[#004876] mb-3">{contact.typeNp}</p>
                  <div className="space-y-2">
                    <a href={`mailto:${contact.email}`} className="block text-[#1e3a8a] hover:text-[#004876] text-sm">
                      {contact.email}
                    </a>
                    <a href={`tel:${contact.phone}`} className="block text-gray-700 hover:text-gray-900 text-sm font-medium">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <h2 className="text-3xl font-bold text-[#1B1948] mb-2">Send us a Message</h2>
                <p className="text-lg text-[#004876] mb-6">हामीलाई सन्देश पठाउनुहोस्</p>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004876] focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004876] focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004876] focus:border-transparent transition-colors duration-200"
                        placeholder="+977-9841234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004876] focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="job-seeker">Job Opportunity</option>
                        <option value="employer">Manpower Requirement</option>
                        <option value="documentation">Documentation Help</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#004876] focus:border-transparent transition-colors duration-200"
                      placeholder="Please describe your inquiry or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#1B1948] hover:to-[#004876] focus:ring-2 focus:ring-[#004876] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1B1948] mb-2">Get in Touch</h2>
                  <p className="text-lg text-[#004876] mb-6">सम्पर्कमा रहनुहोस्</p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    We're here to help you with all your manpower recruitment needs. 
                    Whether you're looking for overseas employment opportunities or need 
                    skilled workers for your business, our experienced team is ready to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                      <div className="bg-gradient-to-br from-[#004876]/10 to-[#1e3a8a]/10 rounded-lg p-3 mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-[#004876]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B1948] mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-2">Department-wise Contact</h2>
              <p className="text-lg text-[#004876] mb-2">विभागीय सम्पर्क</p>
              <p className="text-gray-600">
                Connect directly with the right department for specialized assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {departmentContacts.map((dept, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${dept.color} rounded-xl p-4 mr-4`}>
                      <dept.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1B1948]">{dept.department}</h3>
                      <p className="text-sm text-[#004876]">{dept.departmentNp}</p>
                      <p className="text-gray-600 text-sm mt-1">{dept.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Email Contacts:</h4>
                    {dept.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="block bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 text-[#004876] hover:from-blue-50 hover:to-blue-100 hover:text-[#1B1948] transition-all duration-200 border border-blue-100"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-2">Find Our Office</h2>
              <p className="text-lg text-[#004876] mb-2">हाम्रो कार्यालय भेट्नुहोस्</p>
              <p className="text-gray-600">
                Visit us at our office in Goushala, Kathmandu
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <div className="grid lg:grid-cols-3 gap-8 items-center mb-8">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                    <h3 className="text-xl font-semibold text-[#1B1948] mb-4 flex items-center">
                      <MapPinIcon className="h-6 w-6 text-[#004876] mr-2" />
                      Office Location
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="font-medium">Peace International Pvt. Ltd.</p>
                      <p>Maiti Marga, Pingalasthan-09</p>
                      <p>Goushala, Kathmandu</p>
                      <p>Nepal</p>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-blue-100">
                      <h4 className="font-medium text-[#1B1948] mb-3">Contact Details:</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>📞 +977-5913706</p>
                        <p>📞 +977-1-4113707</p>
                        <p>📠 +977-1-4113708</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.8243756483985!2d85.34511207518271!3d27.70466862561016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19825ce9a3dd%3A0xd8f668afabb3140!2sPeace%20International%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1754543824088!5m2!1sen!2snp" 
                      width="100%" 
                      height="400" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Peace International Office Location"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Need directions? Click on the map to open in Google Maps for detailed navigation.
                </p>
                <a
                  href="https://maps.google.com/?q=Peace+International+Pvt.+Ltd.+Goushala+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#1B1948] hover:to-[#004876] transition-all duration-200"
                >
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Image Background */}
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.59_e5dd7236.jpg"
              alt="CTA Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-2 text-white">Ready to Take the Next Step?</h2>
            <p className="text-xl text-blue-100 mb-2">अर्को कदम चाल्न तयार हुनुहुन्छ?</p>
            <p className="text-lg mb-8 text-blue-200">
              Join thousands of successful workers who have found their dream jobs abroad through Peace International
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:pce.intlovs@yahoo.com"
                className="bg-white text-[#004876] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Apply for Jobs
                <EnvelopeIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:ashdri77@yahoo.com"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Hire Workers
                <UserIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
