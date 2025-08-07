// pages/About.js
import React from 'react';
import { 
  UsersIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  EyeIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const About = () => {
  const keyFeatures = [
    {
      icon: UserGroupIcon,
      title: 'P.I SQUAD',
      description: 'Our strength lies in our talented team with accumulated knowledge base and expertise in diverse fields.',
      highlights: [
        'Strategic support to clients',
        'Reliable and competent professionals',
        'Excellent communication skills',
        'Specialized candidate testing team',
        'Active participation in meeting client needs'
      ]
    },
    {
      icon: ComputerDesktopIcon,
      title: 'DATA BANK',
      description: 'Well-computerized data bank system to provide the exact worker as per requirements.',
      highlights: [
        'Computerized database system',
        'Quick and accurate matching',
        'No delays in worker deployment',
        'Comprehensive worker profiles',
        'Real-time availability updates'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'ASSURANCE',
      description: 'Full guarantee on all workers recruited through proper screening and testing.',
      highlights: [
        '100% worker guarantee',
        'Proper screening process',
        'Medical examinations',
        'Replacement liability coverage',
        'Quality assurance commitment'
      ]
    }
  ];

  const workerQualities = [
    { icon: '💪', title: 'Competent & Skilled', description: 'Most competent and skilled workers exactly as per requirement' },
    { icon: '⚡', title: 'Young & Energetic', description: 'Young, energetic and hardworking individuals' },
    { icon: '🧠', title: 'Mentally & Physically Fit', description: 'All workers are mentally and physically fit for their roles' },
    { icon: '🎓', title: 'Well Educated', description: 'Most workers have passed basic schooling and above' },
    { icon: '🎯', title: 'Disciplined', description: 'Very sincere, well-disciplined, and responsible workers' },
    { icon: '💬', title: 'English Proficient', description: 'Good at speaking and writing English, eliminating communication barriers' }
  ];

  const achievements = [
    { number: '5000+', label: 'Workers Deployed', icon: UsersIcon },
    { number: '15+', label: 'Years Experience', icon: StarIcon },
    { number: '5', label: 'Countries Served', icon: GlobeAltIcon },
    { number: '100%', label: 'Guarantee Rate', icon: ShieldCheckIcon }
  ];

  const coreValues = [
    {
      icon: StarIcon,
      title: 'Reliability',
      description: 'Most reliable and trustworthy recruitment agency in Nepal'
    },
    {
      icon: HeartIcon,
      title: 'Competence',
      description: 'Full service competent recruitment solutions'
    },
    {
      icon: UserGroupIcon,
      title: 'Client Focus',
      description: 'Dedicated to long-term success of our clients'
    },
    {
      icon: EyeIcon,
      title: 'Career Care',
      description: 'Never compromising the career of our candidates'
    }
  ];

  return (
    <>
      <SEOHead
        title="About Peace International - Leading Recruitment Agency Nepal | Our Story"
        description="Learn about Peace International Pvt. Ltd. - Nepal's most reliable manpower recruitment agency since 2009. Licensed by Department of Foreign Employment. 15+ years experience, 2000+ workers deployed."
        keywords="about peace international, manpower agency Nepal history, recruitment company Nepal, licensed employment agency, Nepal manpower services"
        canonicalUrl="/about"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_3a478bc5.jpg"
              alt="Peace International Office"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          {/* Animated Background Patterns */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#004876] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1e3a8a] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                Leading Recruitment Agency in Nepal
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                About Peace International
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Your most reliable, trustworthy and competent full-service Nepali recruitment agency
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#004876]/10 text-[#004876] rounded-full text-sm font-medium mb-6">
                  <GlobeAltIcon className="h-4 w-4 mr-2" />
                  Headquartered in Kathmandu
                </div>
                
                <h2 className="text-4xl font-bold text-[#1B1948] mb-6">Leading Recruitment Excellence</h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Peace International Pvt. Ltd (P.I) is a leading recruitment agency providing 
                    recruitment and manpower support to clients across all segments. Headquartered 
                    in Kathmandu, the capital of Nepal, we are massively networked both nationally 
                    and globally.
                  </p>
                  <p>
                    In a very short period of time, Peace International Pvt. Ltd. has become known 
                    as the most reliable, trustworthy and competent, full-service Nepali recruitment agency.
                  </p>
                  <p>
                    Gifted by the experience of our team, we are successful in meeting the requirements 
                    of our clients. We are absolutely focused on, and dedicated to, the long-term success 
                    of our clients without compromising the career of our candidates.
                  </p>
                  <p>
                    Peace International Pvt. Ltd. has tremendous experience in sourcing and deploying 
                    the most competent workers in all spheres to internationally reputed clients.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#004876] to-[#1B1948] rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-white/20 rounded-xl p-4 mb-3 group-hover:bg-white/30 transition-colors duration-300">
                          <achievement.icon className="h-8 w-8 text-white mx-auto" />
                        </div>
                        <div className="text-3xl font-bold mb-1">{achievement.number}</div>
                        <div className="text-blue-200 text-sm">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-[#1e3a8a] rounded-full p-4 shadow-lg animate-bounce">
                  <StarIcon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#004876] rounded-full p-4 shadow-lg animate-pulse">
                  <CheckCircleIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-4">
                हाम्रो कार्यालय र टोली | Our Office & Team
              </h2>
              <p className="text-lg text-gray-600">
                काठमाडौंमा रहेको हाम्रो आधुनिक कार्यालय र अनुभवी टोली
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.58_975496c4.jpg"
                    alt="Office Reception"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">रिसेप्शन क्षेत्र</h3>
                  <p className="text-gray-600">ग्राहक परामर्शका लागि स्वागत क्षेत्र</p>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.58_a0e9bb4f.jpg"
                    alt="Meeting Room"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">बैठक कक्ष</h3>
                  <p className="text-gray-600">ग्राहक छलफलका लागि व्यावसायिक बैठक स्थान</p>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.59_e5dd7236.jpg"
                    alt="Work Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">कार्य क्षेत्र</h3>
                  <p className="text-gray-600">दस्तावेज प्रशोधन र सेवा क्षेत्र</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that have made us Nepal's most trusted recruitment agency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
                >
                  <div className="bg-gradient-to-br from-[#004876] to-[#1e3a8a] rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B1948] mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B1948] mb-4">What Sets Us Apart</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to recruitment excellence
              </p>
            </div>
            
            <div className="space-y-12">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-[#004876] to-[#1e3a8a] rounded-xl p-4 mr-6">
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#1B1948]">{feature.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#004876] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative bg-gradient-to-br from-[#004876]/10 to-[#1e3a8a]/10 rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#004876]/5 to-transparent"></div>
                      <div className="text-center relative z-10">
                        <feature.icon className="h-24 w-24 text-[#004876] mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-[#1B1948]">{feature.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Workers */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B1948] mb-4">About Our Workers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                P.I workers are the most competent, skilled and exactly as per the requirement. 
                They are exactly the people of your choice.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {workerQualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
                >
                  <div className="text-5xl mb-4 hover:scale-110 transition-transform duration-300">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#004876] mb-3">{quality.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-blue-200">
              <h3 className="text-2xl font-bold text-[#1B1948] mb-4">Worker Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-[#004876] mb-3">Professional Qualities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Understanding of duties and responsibilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Follow company and country regulations
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Easy accessibility and communication
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Eliminate communication obstacles
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#004876] mb-3">Personal Attributes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Young, energetic and hardworking
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Mentally and physically fit
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Well educated with basic schooling
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-[#004876] mr-2" />
                      Sincere and well disciplined
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment & Commitment Section with Image Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_89b90394.jpg"
              alt="Peace International Team"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Commitment</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  P.I effort is to benefit both the client and the candidate. An investment in 
                  Peace International Manpower is a profitable option.
                </p>
                <p className="text-lg text-blue-100 leading-relaxed">
                  We supply and allocate the right manpower in the right job category. 
                  We guarantee all the workers we supply.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <UsersIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Right Manpower</h3>
                <p className="text-blue-100">Exact workers as per your requirements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ChartBarIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Right Job Category</h3>
                <p className="text-blue-100">Perfect allocation in appropriate positions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">100% Guarantee</h3>
                <p className="text-blue-100">Full assurance on all supplied workers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
