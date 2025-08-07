// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSlider from '../components/HeroSlider';
import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: 'निर्माण क्षेत्र',
      titleEn: 'Construction Sector',
      description: 'मलेसिया र कतारमा निर्माण कार्यका लागि दक्ष कामदारहरू',
      descriptionEn: 'Skilled workers for construction projects in Malaysia and Qatar'
    },
    {
      icon: UsersIcon,
      title: 'होटल र रेस्टुरेन्ट',
      titleEn: 'Hotel & Restaurant',
      description: 'दुबई र कुवेतका होटलहरूमा सेवा क्षेत्रका कामदारहरू',
      descriptionEn: 'Service sector workers for hotels in Dubai and Kuwait'
    },
    {
      icon: GlobeAltIcon,
      title: 'कारखाना र उद्योग',
      titleEn: 'Factory & Industry',
      description: 'साउदी अरेबियाका कारखानाहरूमा औद्योगिक कामदारहरू',
      descriptionEn: 'Industrial workers for factories in Saudi Arabia'
    }
  ];

  const achievements = [
    { number: '२०००+', numberEn: '2000+', label: 'कामदारहरू पठाइएको', labelEn: 'Workers Deployed' },
    { number: '१५+', numberEn: '15+', label: 'वर्षको अनुभव', labelEn: 'Years Experience' },
    { number: '५', numberEn: '5', label: 'देशहरूमा सेवा', labelEn: 'Countries Served' },
    { number: '९८%', numberEn: '98%', label: 'सफलताको दर', labelEn: 'Success Rate' }
  ];

  const countries = [
    { name: 'मलेसिया', nameEn: 'Malaysia', flag: '🇲🇾', opportunities: '२५०+' },
    { name: 'कतार', nameEn: 'Qatar', flag: '🇶🇦', opportunities: '१८०+' },
    { name: 'साउदी अरेबिया', nameEn: 'Saudi Arabia', flag: '🇸🇦', opportunities: '३२०+' },
    { name: 'दुबई', nameEn: 'Dubai', flag: '🇦🇪', opportunities: '२००+' },
    { name: 'कुवेत', nameEn: 'Kuwait', flag: '🇰🇼', opportunities: '१५०+' }
  ];

  return (
    <>
      <SEOHead 
        title="पीस इन्टरनेशनल - नेपालको अग्रणी जनशक्ति भर्ती एजेन्सी | Peace International Nepal"
        description="पीस इन्टरनेशनल प्रा.लि. - विदेशी रोजगारका लागि नेपालको भरपर्दो साझेदार। मलेसिया, कतार, साउदी अरेबिया, दुबई र कुवेतमा सुरक्षित रोजगारी। सरकारी इजाजतपत्र प्राप्त।"
        keywords="नेपाल जनशक्ति भर्ती, विदेशी रोजगार नेपाल, मलेसिया काम, कतार जागिर, साउदी अरेबिया रोजगार, दुबई काम, कुवेत जागिर"
        canonicalUrl="/"
      />
      
      <div className="min-h-screen">
        {/* Hero Slider Section */}
        <HeroSlider />

        {/* Countries We Serve */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                हामीले सेवा दिने देशहरू | Countries We Serve
              </h2>
              <p className="text-xl text-blue-100">
                उच्च मागका रोजगार अवसरहरू | High Demand Job Opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-3">{country.flag}</div>
                  <h3 className="font-bold text-lg mb-1">{country.name}</h3>
                  <p className="text-blue-200 text-sm mb-2">{country.nameEn}</p>
                  <p className="text-blue-100 text-sm">{country.opportunities} अवसरहरू</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">
                हाम्रा सेवाहरू | Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                विभिन्न क्षेत्रमा दक्ष जनशक्ति आपूर्ति | Skilled manpower supply across various sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] rounded-xl p-4 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">{service.titleEn}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.descriptionEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                हाम्रा उपलब्धिहरू | Our Achievements
              </h2>
              <p className="text-xl text-blue-100">
                संख्याहरूमा हाम्रो सफलता | Our Success in Numbers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-blue-200 text-sm mb-1">{achievement.label}</div>
                  <div className="text-blue-100 text-xs">{achievement.labelEn}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6">
                  किन हामीलाई छान्नुहुन्छ? | Why Choose Us?
                </h2>
                <div className="space-y-4">
                  {[
                    { ne: 'अनुभवी टोली र प्रमाणित ट्र्याक रेकर्ड', en: 'Experienced team with proven track record' },
                    { ne: 'गुणस्तर आश्वासन र समयमै सेवा', en: 'Quality assurance and timely delivery' },
                    { ne: 'नवीन समाधान र आधुनिक प्रविधि', en: 'Innovative solutions and modern techniques' },
                    { ne: 'ग्राहक-केन्द्रित दृष्टिकोण र सहयोग', en: 'Customer-centric approach and support' },
                    { ne: 'प्रतिस्पर्धी मूल्य र पारदर्शी प्रक्रिया', en: 'Competitive pricing and transparent processes' },
                    { ne: 'दिगो र वातावरण-सचेत अभ्यासहरू', en: 'Sustainable and environmentally conscious practices' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 font-medium">{item.ne}</span>
                        <br />
                        <span className="text-gray-500 text-sm">{item.en}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <img
                  src="/WhatsApp Image 2025-08-06 at 22.01.57_505a82d4.jpg"
                  alt="हाम्रो टोली | Our Team"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-[#1e3a8a] mb-3">
                  व्यावसायिक उत्कृष्टता | Professional Excellence
                </h3>
                <p className="text-gray-600 mb-3">
                  हाम्रो समर्पित व्यावसायिक टोलीले वर्षौंको अनुभव र विशेषज्ञता ल्याउँछ।
                </p>
                <p className="text-gray-500 text-sm">
                  Our dedicated team of professionals brings years of experience and 
                  expertise to every project, ensuring the highest standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              आफ्नो सपनाको जागिर सुरु गर्न तयार हुनुहुन्छ?
            </h2>
            <p className="text-xl mb-2 text-blue-100">
              Ready to Start Your Dream Job?
            </p>
            <p className="text-lg mb-8 text-blue-200">
              हजारौं नेपालीहरूले विदेशमा सफल करियर बनाएका छन्। तपाईं पनि सामेल हुनुहोस्।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center shadow-lg"
              >
                अहिले नै आवेदन दिनुहोस् | Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/information"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1e3a8a] transition-colors duration-300 inline-flex items-center justify-center"
              >
                थप जानकारी | More Information
                <GlobeAltIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
