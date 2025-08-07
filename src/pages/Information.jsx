// pages/Information.js
import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  PaperAirplaneIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Information = () => {
  const [activeProcess, setActiveProcess] = useState('general');

  const requiredDocuments = [
    { name: 'Original demand letter', required: true },
    { name: 'Employment contract (Service Contract)', required: true },
    { name: 'Power of Attorney', required: true },
    { name: 'Authorization letter to Ministry of Labour', required: true },
    { name: 'Visa Slip/Government approval', required: true },
    { name: 'Company Registration (C.R) copy', required: true },
    { name: 'Affidavit/Sworn Statement (Malaysia only)', required: false },
    { name: 'Agreement between companies', required: true },
    { name: 'Form 24, 29', required: true },
    { name: 'Company profile', required: true },
    { name: 'Guarantee Paper Visa copy/NOC', required: true }
  ];

  const generalProcedures = [
    {
      step: 1,
      title: 'PLACEMENT OF ORDER AND DOCUMENT',
      description: 'Client shall place the necessary documents such as Notary Public or other documents as mentioned in requirements.',
      icon: DocumentTextIcon,
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      step: 2,
      title: 'SUBMISSION FOR PRE-PERMISSION LETTER',
      description: 'Apply for pre-permission letter from Department of Labor for further worker selection procedures.',
      icon: ClipboardDocumentListIcon,
      color: 'from-[#1e3a8a] to-[#004876]'
    },
    {
      step: 3,
      title: 'ADVERTISEMENT',
      description: 'Peace International advertises job vacancy in daily newspapers. Time limit of 7 to 15 days given for applications.',
      icon: GlobeAltIcon,
      color: 'from-[#1B1948] to-[#004876]'
    },
    {
      step: 4,
      title: 'WORKER SCREENING/INTERVIEW',
      description: 'Screening for physically and mentally fit, active, sincere, honest workers with good English and relevant experience.',
      icon: UserGroupIcon,
      color: 'from-[#004876] to-[#1B1948]'
    },
    {
      step: 5,
      title: 'PRE-MEDICAL EXAMINATION',
      description: 'Medical examination in authorized medical centers. Online reports sent to employer for visa procedures.',
      icon: ShieldCheckIcon,
      color: 'from-[#1e3a8a] to-[#1B1948]'
    },
    {
      step: 6,
      title: 'VISA ISSUANCE AND STAMPING',
      description: 'After sending candidate documents, visa is issued and stamping procedure completed.',
      icon: DocumentTextIcon,
      color: 'from-[#1B1948] to-[#1e3a8a]'
    },
    {
      step: 7,
      title: 'TRAINING, ORIENTATION AND RE-MEDICAL',
      description: 'Special training classes, orientation about country rules, and re-medical examination.',
      icon: AcademicCapIcon,
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      step: 8,
      title: 'FINAL-PERMISSION LETTER',
      description: 'Submit for final permission letter from Department of Labor. Deployment paperwork completed.',
      icon: CheckCircleIcon,
      color: 'from-[#1e3a8a] to-[#004876]'
    },
    {
      step: 9,
      title: 'DEPARTURE',
      description: 'Departure date decided and informed. Schedule provided 3 days before departure with all arrangements.',
      icon: PaperAirplaneIcon,
      color: 'from-[#1B1948] to-[#004876]'
    },
    {
      step: 10,
      title: 'CLEARANCE',
      description: 'Getting update on workers pickup and sending to company.',
      icon: CheckCircleIcon,
      color: 'from-[#004876] to-[#1B1948]'
    },
    {
      step: 11,
      title: 'ONGOING WELFARE MONITORING',
      description: 'Regular updates on worker wellbeing and ensuring promised work conditions are met.',
      icon: ShieldCheckIcon,
      color: 'from-[#1e3a8a] to-[#1B1948]'
    }
  ];

  const saudiProcedures = [
    {
      step: 1,
      title: 'WAKALA AND OTHER DOCUMENTS',
      description: 'Client provides E-wakala and legal documents after attestations from Chamber of Commerce & MOFA of Saudi Arabia.',
      icon: DocumentTextIcon,
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      step: 2,
      title: 'SELECTION PROCEDURES',
      description: 'Worker screening for physically and mentally fit candidates with required qualifications and experience.',
      icon: UserGroupIcon,
      color: 'from-[#1B1948] to-[#004876]'
    },
    {
      step: 3,
      title: 'MOFA NUMBER',
      description: 'Obtaining MOFA number from Saudi Government website (www.enjazit.com.sa) - Peace International is authorized.',
      icon: GlobeAltIcon,
      color: 'from-[#1e3a8a] to-[#004876]'
    },
    {
      step: 4,
      title: 'MEDICAL EXAMINATION',
      description: 'Medical examination at GAMCA Nepal & approved medical centers. Takes about 3 working days.',
      icon: ShieldCheckIcon,
      color: 'from-[#004876] to-[#1B1948]'
    },
    {
      step: 5,
      title: 'SUBMISSION FOR VISA',
      description: 'Medical reports, passports, E-Wakala submitted to Saudi Embassy Consulate in Dhaka, Bangladesh.',
      icon: DocumentTextIcon,
      color: 'from-[#1B1948] to-[#1e3a8a]'
    },
    {
      step: 6,
      title: 'TRAINING AND ORIENTATION',
      description: 'Training classes and orientation about Saudi Arabia rules, regulations, and cultural guidelines.',
      icon: AcademicCapIcon,
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      step: 7,
      title: 'FINAL-PERMISSION LETTER',
      description: 'Submit for final permission letter from Department of Labor after completing all requirements.',
      icon: CheckCircleIcon,
      color: 'from-[#1e3a8a] to-[#1B1948]'
    },
    {
      step: 8,
      title: 'DEPARTURE',
      description: 'Departure arrangements and schedule provided 3 days in advance for employer preparations.',
      icon: PaperAirplaneIcon,
      color: 'from-[#1B1948] to-[#004876]'
    },
    {
      step: 9,
      title: 'CLEARANCE',
      description: 'Update on worker pickup and transfer to company with all necessary coordination.',
      icon: CheckCircleIcon,
      color: 'from-[#004876] to-[#1e3a8a]'
    },
    {
      step: 10,
      title: 'WELFARE MONITORING',
      description: 'Continuous monitoring of worker satisfaction and ensuring promised employment conditions.',
      icon: ShieldCheckIcon,
      color: 'from-[#1e3a8a] to-[#004876]'
    }
  ];

  const screeningCriteria = [
    { icon: '💪', title: 'Physically Fit', description: 'Strong and healthy for required work' },
    { icon: '🧠', title: 'Mentally Fit', description: 'Psychologically prepared for overseas work' },
    { icon: '⚡', title: 'Active & Energetic', description: 'Enthusiastic and hardworking attitude' },
    { icon: '🤝', title: 'Sincere & Honest', description: 'Trustworthy and reliable character' },
    { icon: '💬', title: 'English Proficiency', description: 'Good speaking and understanding skills' },
    { icon: '🎓', title: 'Qualified & Experienced', description: 'Relevant education and work experience' },
    { icon: '✅', title: 'Clean Record', description: 'No criminal background or violations' },
    { icon: '🎯', title: 'Client Requirements', description: 'Meeting specific employer needs' }
  ];

  return (
    <>
      <SEOHead
        title="Recruitment Process Information - Peace International Nepal | Step-by-Step Guide"
        description="Complete recruitment process guide by Peace International Nepal. Step-by-step procedures for overseas employment, document requirements, visa processing for Malaysia, Qatar, Saudi Arabia, Dubai, Kuwait."
        keywords="recruitment process Nepal, overseas job process, visa application process, employment procedure Nepal, manpower recruitment steps, document requirements overseas jobs"
        canonicalUrl="/information"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.58_d570c091.jpg"
              alt="Recruitment Process"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <InformationCircleIcon className="h-4 w-4 mr-2" />
                Complete Recruitment Information
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Recruitment Procedures
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Comprehensive step-by-step guide to our professional recruitment process
              </p>
            </div>
          </div>
        </section>

        {/* Process Selection */}
        <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50 sticky top-0 z-40 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveProcess('general')}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProcess === 'general'
                    ? 'bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-700 hover:bg-[#004876]/10 hover:text-[#004876] shadow-md border border-blue-100'
                }`}
              >
                <GlobeAltIcon className="h-5 w-5 mr-2" />
                General Process
              </button>
              <button
                onClick={() => setActiveProcess('saudi')}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProcess === 'saudi'
                    ? 'bg-gradient-to-r from-[#1B1948] to-[#004876] text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-700 hover:bg-[#1B1948]/10 hover:text-[#1B1948] shadow-md border border-blue-100'
                }`}
              >
                <StarIcon className="h-5 w-5 mr-2" />
                Saudi Arabia Process
              </button>
              <button
                onClick={() => setActiveProcess('requirements')}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeProcess === 'requirements'
                    ? 'bg-gradient-to-r from-[#1e3a8a] to-[#004876] text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-gray-700 hover:bg-[#1e3a8a]/10 hover:text-[#1e3a8a] shadow-md border border-blue-100'
                }`}
              >
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                Document Requirements
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* General Process */}
            {activeProcess === 'general' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">General Recruitment Process</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive 11-step recruitment procedure ensuring quality placements
                  </p>
                </div>
                
                <div className="space-y-8">
                  {generalProcedures.map((procedure, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#004876]"
                    >
                      <div className="flex items-start">
                        <div className={`bg-gradient-to-r ${procedure.color} rounded-xl p-4 mr-6 flex-shrink-0`}>
                          <procedure.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span className="bg-[#004876]/10 text-[#004876] px-3 py-1 rounded-full text-sm font-bold mr-4">
                              Step {procedure.step}
                            </span>
                            <h3 className="text-xl font-semibold text-[#1B1948]">{procedure.title}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{procedure.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saudi Process */}
            {activeProcess === 'saudi' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Saudi Arabia Visa Process</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Specialized recruitment process for Kingdom of Saudi Arabia with unique requirements
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <StarIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-green-900">Special Authorization</h3>
                  </div>
                  <p className="text-green-800 text-lg leading-relaxed mb-4">
                    Peace International is authorized for Saudi Arabia recruitment with username and password 
                    to access www.enjazit.com.sa - the official Saudi Government visa application portal.
                  </p>
                  <p className="text-green-700 font-medium">
                    Note: Only manpower companies with Entry Card from Saudi Embassy in Dhaka are eligible 
                    for visa submission.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {saudiProcedures.map((procedure, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-[#1B1948]"
                    >
                      <div className="flex items-start">
                        <div className={`bg-gradient-to-r ${procedure.color} rounded-xl p-4 mr-6 flex-shrink-0`}>
                          <procedure.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <span className="bg-[#1B1948]/10 text-[#1B1948] px-3 py-1 rounded-full text-sm font-bold mr-4">
                              Step {procedure.step}
                            </span>
                            <h3 className="text-xl font-semibold text-[#004876]">{procedure.title}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{procedure.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {activeProcess === 'requirements' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Document Requirements</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Complete list of documents required from clients for recruitment permission
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 mb-8 border-l-4 border-yellow-500">
                  <div className="flex items-center mb-4">
                    <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-900">Important Note</h3>
                  </div>
                  <p className="text-yellow-800 text-lg leading-relaxed">
                    All documents should be attested and well stamped with Certified True Copy (CTC) chop, 
                    foreign affairs chops, and other necessary attestations where required.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-[#1B1948] mb-6 flex items-center">
                      <DocumentTextIcon className="h-8 w-8 text-[#004876] mr-3" />
                      Required Documents
                    </h3>
                    <div className="space-y-4">
                      {requiredDocuments.map((doc, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircleIcon className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${doc.required ? 'text-green-500' : 'text-yellow-500'}`} />
                          <div>
                            <span className="text-gray-700">{doc.name}</span>
                            {!doc.required && <span className="text-yellow-600 text-sm ml-2">(Conditional)</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-[#1B1948] mb-6 flex items-center">
                      <UserGroupIcon className="h-8 w-8 text-[#1e3a8a] mr-3" />
                      Worker Screening Criteria
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {screeningCriteria.map((criteria, index) => (
                        <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-200 border border-blue-100">
                          <div className="text-3xl mb-2">{criteria.icon}</div>
                          <h4 className="font-semibold text-[#004876] text-sm mb-1">{criteria.title}</h4>
                          <p className="text-gray-600 text-xs">{criteria.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-4">Why Choose Our Process?</h2>
              <p className="text-lg text-gray-600">
                Professional, transparent, and government-compliant recruitment procedures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="bg-[#004876]/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-[#004876]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Government Approved</h3>
                <p className="text-gray-600 text-sm">All procedures follow Nepal Department of Labor guidelines</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-green-100">
                <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">Thorough screening and medical examination process</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="bg-[#1e3a8a]/10 rounded-full p-4 w-fit mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Timely Process</h3>
                <p className="text-gray-600 text-sm">Efficient timeline with regular updates and communication</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-amber-100">
                <div className="bg-amber-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#1B1948] mb-2">Training & Orientation</h3>
                <p className="text-gray-600 text-sm">Comprehensive preparation for overseas employment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA with Image Background */}
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.58_a0e9bb4f.jpg"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start the Recruitment Process?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to begin your manpower recruitment journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#footer"
                className="bg-white text-[#004876] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Recruitment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 inline-flex items-center justify-center"
              >
                View Our Services
                <GlobeAltIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Information;
