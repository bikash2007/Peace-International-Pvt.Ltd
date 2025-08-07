// pages/Structure.js
import React from 'react';
import { 
  UserIcon,
  BuildingOfficeIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Structure = () => {
  const organizationData = {
    managingDirector: {
      title: 'MANAGING DIRECTOR',
      level: 1,
      color: 'from-[#1B1948] to-[#004876]',
      icon: BuildingOfficeIcon
    },
    director: {
      title: 'DIRECTOR',
      level: 2,
      color: 'from-[#004876] to-[#1e3a8a]',
      icon: UserIcon
    },
    advisors: [
      {
        title: 'LEGAL ADVISOR',
        level: 3,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: ShieldCheckIcon
      },
      {
        title: 'AUDITOR',
        level: 3,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: ChartBarIcon
      }
    ],
    departmentHeads: [
      {
        title: 'MARKETING DIRECTOR',
        level: 4,
        color: 'from-[#004876] to-[#1B1948]',
        icon: GlobeAltIcon
      },
      {
        title: 'IN CHARGE',
        level: 4,
        color: 'from-[#004876] to-[#1B1948]',
        icon: CogIcon
      },
      {
        title: 'FINANCE MANAGER',
        level: 4,
        color: 'from-[#004876] to-[#1B1948]',
        icon: CurrencyDollarIcon
      }
    ],
    middleManagement: [
      {
        title: 'PUBLIC RELATION MANAGER',
        level: 5,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: UsersIcon
      },
      {
        title: 'LABOR REPRESENTATIVES',
        level: 5,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: UserIcon
      },
      {
        title: 'EMBASSY REPRESENTATIVES',
        level: 5,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: GlobeAltIcon
      },
      {
        title: 'ACCOUNT ASSISTANT',
        level: 5,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: ComputerDesktopIcon
      }
    ],
    associates: [
      {
        title: 'DEPARTURE ASSOCIATES',
        level: 6,
        color: 'from-[#004876] to-[#1e3a8a]',
        icon: DocumentTextIcon
      },
      {
        title: 'DOCUMENTATION ASSOCIATES',
        level: 6,
        color: 'from-[#004876] to-[#1e3a8a]',
        icon: ClipboardDocumentCheckIcon
      },
      {
        title: 'TICKETING ASSOCIATES',
        level: 6,
        color: 'from-[#004876] to-[#1e3a8a]',
        icon: DocumentTextIcon
      }
    ],
    receptionist: {
      title: 'RECEPTIONIST',
      level: 7,
      color: 'from-[#1B1948] to-[#004876]',
      icon: UserIcon
    },
    supportStaff: [
      {
        title: 'OFFICE GIRL',
        level: 8,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: UserIcon
      },
      {
        title: 'SECURITY GUARD',
        level: 8,
        color: 'from-[#1e3a8a] to-[#004876]',
        icon: ShieldCheckIcon
      }
    ]
  };

  const departments = [
    {
      icon: GlobeAltIcon,
      name: 'Marketing Department',
      head: 'Marketing Director',
      description: 'Handles marketing strategies, client acquisition, and business development.',
      responsibilities: [
        'Client Relationship Management',
        'Market Research and Analysis',
        'Brand Promotion and Marketing',
        'Business Development',
        'Strategic Planning'
      ]
    },
    {
      icon: CurrencyDollarIcon,
      name: 'Finance Department',
      head: 'Finance Manager',
      description: 'Manages financial operations, accounting, and budget planning.',
      responsibilities: [
        'Financial Planning and Analysis',
        'Budget Management',
        'Accounting and Bookkeeping',
        'Cost Control and Monitoring',
        'Financial Reporting'
      ]
    },
    {
      icon: DocumentTextIcon,
      name: 'Documentation Department',
      head: 'Documentation Associates',
      description: 'Handles all documentation processes for worker deployment.',
      responsibilities: [
        'Visa Processing',
        'Work Permit Applications',
        'Medical Documentation',
        'Contract Preparation',
        'Legal Documentation'
      ]
    },
    {
      icon: UsersIcon,
      name: 'Public Relations',
      head: 'PR Manager',
      description: 'Manages public relations and communication with stakeholders.',
      responsibilities: [
        'Stakeholder Communication',
        'Media Relations',
        'Public Image Management',
        'Crisis Communication',
        'Community Relations'
      ]
    }
  ];

  const PositionCard = ({ position, isCenter = false }) => {
    const IconComponent = position.icon;
    return (
      <div className={`relative ${isCenter ? 'mx-auto' : ''}`}>
        <div className={`bg-gradient-to-r ${position.color} rounded-lg shadow-lg p-4 text-white text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[200px] border border-white/20`}>
          <IconComponent className="h-6 w-6 mx-auto mb-2" />
          <h3 className="font-semibold text-sm">{position.title}</h3>
        </div>
      </div>
    );
  };

  const ConnectionLine = ({ vertical = false, className = "" }) => (
    <div className={`${vertical ? 'w-0.5 h-8' : 'h-0.5 w-8'} bg-[#004876]/30 ${className}`}></div>
  );

  return (
    <>
      <SEOHead 
        title="Organizational Structure - Peace International Nepal | Our Team & Management"
        description="Meet Peace International's experienced team and organizational structure. Professional management, specialized departments for documentation, training, and recruitment services."
        keywords="peace international team, recruitment agency management Nepal, organizational structure, manpower company team, employment agency staff"
        canonicalUrl="/structure"
      />
   
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.58_975496c4.jpg"
              alt="Peace International Office"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <BuildingOfficeIcon className="h-4 w-4 mr-2" />
                Organizational Hierarchy
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Organizational Structure
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Well-organized structure ensuring efficient operations and quality service delivery
              </p>
            </div>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Hierarchy Chart</h2>
              <p className="text-xl text-gray-600">
                Our leadership and management structure
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              {/* Level 1: Managing Director */}
              <div className="flex flex-col items-center">
                <PositionCard position={organizationData.managingDirector} isCenter />
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 2: Director */}
              <div className="flex flex-col items-center">
                <PositionCard position={organizationData.director} isCenter />
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 3: Legal Advisor & Auditor */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-8">
                  <PositionCard position={organizationData.advisors[0]} />
                  <ConnectionLine />
                  <ConnectionLine />
                  <PositionCard position={organizationData.advisors[1]} />
                </div>
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 4: Department Heads */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-6">
                  {organizationData.departmentHeads.map((head, index) => (
                    <React.Fragment key={index}>
                      <PositionCard position={head} />
                      {index < organizationData.departmentHeads.length - 1 && <ConnectionLine />}
                    </React.Fragment>
                  ))}
                </div>
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 5: Middle Management */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-4 flex-wrap justify-center gap-4">
                  {organizationData.middleManagement.map((manager, index) => (
                    <PositionCard key={index} position={manager} />
                  ))}
                </div>
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 6: Associates */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-6">
                  {organizationData.associates.map((associate, index) => (
                    <React.Fragment key={index}>
                      <PositionCard position={associate} />
                      {index < organizationData.associates.length - 1 && <ConnectionLine />}
                    </React.Fragment>
                  ))}
                </div>
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 7: Receptionist */}
              <div className="flex flex-col items-center">
                <PositionCard position={organizationData.receptionist} isCenter />
                <ConnectionLine vertical className="mt-4" />
              </div>

              {/* Level 8: Support Staff */}
              <div className="flex items-center space-x-8">
                {organizationData.supportStaff.map((staff, index) => (
                  <React.Fragment key={index}>
                    <PositionCard position={staff} />
                    {index < organizationData.supportStaff.length - 1 && <ConnectionLine />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B1948] mb-4">Key Departments</h2>
              <p className="text-xl text-gray-600">
                Specialized departments working together for operational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[#004876] to-[#1e3a8a] rounded-xl p-4 mr-6">
                      <dept.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#1B1948]">{dept.name}</h3>
                      <p className="text-[#004876] font-medium">Head: {dept.head}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  <h4 className="font-semibold text-[#1B1948] mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {dept.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#004876] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Philosophy */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1B1948] mb-6">Management Philosophy</h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Our organizational structure is designed to ensure efficient service delivery 
                    and maintain the highest standards in manpower recruitment. Each level of 
                    management has clearly defined roles and responsibilities.
                  </p>
                  <p>
                    The hierarchical structure allows for effective decision-making, proper 
                    supervision, and seamless communication across all departments. This 
                    ensures that our clients receive professional service while our workers 
                    are properly supported throughout their employment journey.
                  </p>
                  <p>
                    From documentation to departure, every aspect of the recruitment process 
                    is handled by specialized teams under experienced leadership, ensuring 
                    quality and compliance at every step.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-[#1B1948] mb-6 text-center">Organizational Principles</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🎯', title: 'Clear Hierarchy', desc: 'Well-defined reporting structure' },
                    { icon: '🤝', title: 'Team Collaboration', desc: 'Cross-departmental cooperation' },
                    { icon: '📊', title: 'Performance Focus', desc: 'Results-oriented approach' },
                    { icon: '🔄', title: 'Continuous Improvement', desc: 'Regular process optimization' },
                    { icon: '👥', title: 'Professional Development', desc: 'Staff training and growth' },
                    { icon: '⚡', title: 'Efficient Operations', desc: 'Streamlined workflows' }
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-blue-100 transition-all duration-200 border border-blue-100">
                      <span className="text-2xl mr-4">{principle.icon}</span>
                      <div>
                        <h4 className="font-semibold text-[#004876]">{principle.title}</h4>
                        <p className="text-gray-600 text-sm">{principle.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1B1948] mb-4">
                हाम्रो टोली | Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Dedicated professionals committed to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.58_a0e9bb4f.jpg"
                    alt="Management Team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">Management Team</h3>
                  <p className="text-gray-600">Experienced leadership guiding our operations</p>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.59_e5dd7236.jpg"
                    alt="Operations Team"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">Operations Team</h3>
                  <p className="text-gray-600">Ensuring smooth daily operations</p>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-08-06 at 22.01.57_89b90394.jpg"
                    alt="Support Staff"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#004876] mb-2">Support Staff</h3>
                  <p className="text-gray-600">Dedicated support for all stakeholders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics with Image Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_3a478bc5.jpg"
              alt="Team Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Team Strength</h2>
              <p className="text-xl text-blue-100">
                Dedicated professionals ensuring quality service delivery
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">15+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">8</div>
                <div className="text-blue-100">Departments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">5</div>
                <div className="text-blue-100">Management Levels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">100%</div>
                <div className="text-blue-100">Professional Service</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Structure;
