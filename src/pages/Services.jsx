// pages/Services.js
import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  CurrencyDollarIcon,
  ClockIcon,
  HomeIcon,
  TruckIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const [activeTab, setActiveTab] = useState('terms');

  const termsAndConditions = [
    {
      icon: CurrencyDollarIcon,
      title: 'SERVICE CHARGE',
      description: 'Service charge includes the cost of Labor department procedure, medical examination, insurance, orientation, visa stamping etc. This charge is payable by the employer. Payment shall be done under mutual understanding. Following the labor law of Nepal, we follow the free visa and free ticket system and make sure workers are done free recruitment. There won\'t be any charges against the law.'
    },
    {
      icon: TruckIcon,
      title: 'TRAVELING EXPENSES',
      description: 'The travelling expenses from Kathmandu, Nepal to destination country and the return ticket upon completion of working contract shall be borne by the employer. Ticket or cost of ticket will be payable by the Employer.'
    },
    {
      icon: ClockIcon,
      title: 'DURATION OF CONTRACT',
      description: 'Minimum 2 years (this contract may be extended by the employer consent)'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'SALARY',
      description: 'Employee basic salary is declared by the government of respective country. Therefore it shall be according to the labor law and varies from country to country as well as profession to profession. Salary also varies from Employer to employer. Employer may pay the salary according to the company rule but this rule won\'t be against the rule of government.'
    },
    {
      icon: ClockIcon,
      title: 'PROBATION PERIOD',
      description: 'Three months from date of arrival in the country'
    },
    {
      icon: ClockIcon,
      title: 'WORKING HOURS',
      description: '8 hrs/per day and 6 days per week'
    },
    {
      icon: HomeIcon,
      title: 'ACCOMMODATION',
      description: 'The employer provides free accommodation to the workers'
    },
    {
      icon: TruckIcon,
      title: 'TRANSPORTATION',
      description: 'Provided by the employer free of cost'
    },
    {
      icon: HomeIcon,
      title: 'FOOD',
      description: 'Provided by the employer'
    },
    {
      icon: ClockIcon,
      title: 'OVERTIME',
      description: 'According to Labour laws and as per the rule of the company'
    },
    {
      icon: ClockIcon,
      title: 'ANNUAL LEAVE',
      description: 'In accordance with the labor laws. Minimum 21 days/year'
    },
    {
      icon: ShieldCheckIcon,
      title: 'MEDICAL INSURANCE',
      description: 'Provided by Employer'
    },
    {
      icon: ShieldCheckIcon,
      title: 'OTHER BENEFITS AND INSURANCE',
      description: 'Will be in accordance with the labour laws of the respective country'
    }
  ];

  const rulesRegulations = [
    'The Employee is not allowed to engage in any employment with other individual, organization or institution and shall not carry or do business during the period of his Contract.',
    'His family or friends shall not accompany the Employee.',
    'The Employee shall not conduct any misconduct and breach of any rules and regulation of the company regarding discipline and work.',
    'The Employee shall not commit crime during his stay in respective countries.',
    'The Employee shall not participate in any political activities and activities of those related with Trade Union, or instigate others to commit such acts.',
    'The Employee shall not collect any money from any fellow worker by force or coercion for whatever reason.',
    'The Employee shall not engage in any romance relationship and/or marry and/or intent to marry any citizenship holder of respective country in the period of his/her Contract.',
    'The Employee shall strictly follow the Company\'s rules and regulations necessarily imposed by the employer\'s management.',
    'Employee should not breach any restrictions.',
    'Employee should not be absence from the work for more than two (02) consecutive working days without reasonable explanation.',
    'Should not do any falsification or destructions of records.',
    'Should not report to work while under influence of liquor or drugs or should take liquor or any form of drugs in the factory.',
    'Should not theft or dishonesty, in connection with the business or property of the company. Should not do any willful damage of company\'s property.',
    'Should not fight or assault, whether provoked or otherwise.',
    'Should not conduct which is likely to endanger the safety of another person.',
    'Should not threaten, intimidate and coercing to cause physical harm or injury to any member of the staff or his family.',
    'Should not demand, accept or offer bribes or illegal gratification of any kind.'
  ];

  const employerResponsibilities = [
    {
      title: 'AIRPORT CLEARANCE',
      description: 'Upon receiving final flight update, employer should arrange for the timely receiving of the workers from the respective country\'s airport. Untimely may lead to worker return from the airport.'
    },
    {
      title: 'UPDATE',
      description: 'Employer shall update upon receiving the workers from airport.'
    },
    {
      title: 'ADVANCE',
      description: 'Each worker should be benefited from the advance payment upon arrival to the company for their own use. This advance payment can be deduction from the month salary of the worker.'
    },
    {
      title: 'ACCOMMODATION',
      description: 'Employer shall arrange for the proper hostel or accommodation with furnished housing and also the water and electricity facilities.'
    },
    {
      title: 'SECURITY',
      description: 'Employer shall ensure the proper security system for the workers in the hostel/living place and working places. Especially in case of female workers, security system should not be undervalued.'
    },
    {
      title: 'SALARY',
      description: 'Salary should be as per the agreement and make sure that the salary of every working month is paid on time with no delays.'
    },
    {
      title: 'BEING UPDATED',
      description: 'Employer should check on the validity of passport, residence permit/work permit/visa renewal/employment visa of the workers time to time and should do the necessary renewals before the time limit expires.'
    },
    {
      title: 'TREATMENT',
      description: 'In case of any sickness/accident, it will be the responsibility of the Employer to do the proper treatment of the worker.'
    },
    {
      title: 'PROBLEM',
      description: 'In case of any problem, employer shall inform us for any assistance needed. It is major responsibility of the employer to settle the problem with no delays.'
    },
    {
      title: 'AGREEMENT',
      description: 'Employer shall follow all the terms of agreement signed between the employer and the workers. Make sure both the party do not go beyond the agreement.'
    }
  ];

  const tabs = [
    { id: 'terms', name: 'Terms & Conditions', icon: DocumentTextIcon },
    { id: 'rules', name: 'Rules & Regulations', icon: ExclamationTriangleIcon },
    { id: 'responsibilities', name: 'Employer Responsibilities', icon: UserGroupIcon }
  ];

  return (
    <>
      <SEOHead
        title="Manpower Recruitment Services Nepal | Peace International Terms & Conditions"
        description="Complete manpower recruitment services by Peace International Nepal. Skilled & semi-skilled workers for Malaysia, Qatar, Saudi Arabia, Dubai, Kuwait. Free visa, accommodation, medical insurance."
        keywords="manpower recruitment services Nepal, overseas job services, visa processing Nepal, worker training Nepal, employment terms conditions, recruitment agency services"
        canonicalUrl="/services"
      />
   
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_12c58271.jpg"
              alt="Peace International Services"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <ClipboardDocumentCheckIcon className="h-4 w-4 mr-2" />
                Complete Service Guidelines
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Services, Terms & Responsibilities
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Comprehensive guidelines ensuring transparent and professional recruitment services
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50 sticky top-0 z-40 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white shadow-lg transform -translate-y-1'
                      : 'bg-white text-gray-700 hover:bg-[#004876]/10 hover:text-[#004876] shadow-md border border-blue-100'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Terms & Conditions */}
            {activeTab === 'terms' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Terms & Conditions</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive terms ensuring fair and transparent recruitment process
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {termsAndConditions.map((term, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                    >
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-br from-[#004876] to-[#1e3a8a] rounded-xl p-3 mr-4">
                          <term.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#1B1948]">{term.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{term.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules & Regulations */}
            {activeTab === 'rules' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Rules & Regulations</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Important guidelines that all workers must strictly follow during their employment
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border-l-4 border-amber-500">
                  <div className="flex items-center mb-4">
                    <ExclamationTriangleIcon className="h-8 w-8 text-amber-600 mr-3" />
                    <h3 className="text-2xl font-bold text-amber-900">Important Notice</h3>
                  </div>
                  <p className="text-amber-800 text-lg leading-relaxed">
                    Different countries have different rules and regulations. Rules and regulations vary from 
                    countries to countries, company to company as well as employer to employer. Workers should 
                    strictly follow these rules and regulations to stand as good and obedient workers.
                  </p>
                  <p className="text-amber-800 text-lg leading-relaxed mt-4">
                    <strong>Peace International makes sure that our workers do not go beyond the below rules 
                    and regulations as well as the terms and conditions. We guarantee on our workers.</strong>
                  </p>
                </div>

                <div className="grid gap-4">
                  {rulesRegulations.map((rule, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#004876]"
                    >
                      <div className="flex items-start">
                        <div className="bg-[#004876]/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                          <span className="text-[#004876] font-bold text-sm">{String.fromCharCode(97 + index)}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{rule}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 mt-8 border-l-4 border-yellow-500">
                  <div className="flex items-center mb-4">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-3" />
                    <h3 className="text-xl font-bold text-yellow-900">Violation Consequences</h3>
                  </div>
                  <p className="text-yellow-800 leading-relaxed">
                    The violation of above rules and regulations may result in termination or dismissal of contract. 
                    Therefore, Peace International conducts special classes and programs from experts to test the 
                    mental status of workers so that none of our workers breach the rules and regulations.
                  </p>
                </div>
              </div>
            )}

            {/* Employer Responsibilities */}
            {activeTab === 'responsibilities' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Employer Responsibilities</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Key responsibilities that employers must fulfill to ensure worker welfare and compliance
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {employerResponsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                    >
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br from-[#1B1948] to-[#004876] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#1B1948]">{responsibility.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-4">Key Service Highlights</h2>
              <p className="text-lg text-gray-600">
                What makes our service terms transparent and worker-friendly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Free Recruitment</h3>
                <p className="text-gray-600 text-sm">Following Nepal's labor law with free visa and ticket system</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="bg-[#004876]/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-[#004876]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Full Insurance</h3>
                <p className="text-gray-600 text-sm">Comprehensive medical insurance provided by employer</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="bg-[#1e3a8a]/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <HomeIcon className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Free Accommodation</h3>
                <p className="text-gray-600 text-sm">Housing, food, and transportation provided at no cost</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-amber-100">
                <div className="bg-amber-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Fair Working Hours</h3>
                <p className="text-gray-600 text-sm">8 hours/day, 6 days/week with 21 days annual leave</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA with Image Background */}
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_43ea4c1c.jpg"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Have Questions About Our Terms?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our team is ready to clarify any doubts about our services and terms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#footer"
                className="bg-white text-[#004876] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Contact Us
                <InformationCircleIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/about"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Learn More About Us
                <GlobeAltIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
