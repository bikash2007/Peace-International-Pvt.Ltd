// pages/Gallery.js
import React, { useState } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryCategories = [
    {
      category: 'Office & Facilities',
      categoryNp: 'कार्यालय र सुविधाहरू',
      images: [
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.57_3a478bc5.jpg', 
          title: 'Peace International Office',
          titleNp: 'पीस इन्टरनेशनल कार्यालय',
          description: 'Our modern office facility in Kathmandu providing professional services',
          descriptionNp: 'काठमाडौंमा रहेको हाम्रो आधुनिक कार्यालय सुविधा'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.57_12c58271.jpg', 
          title: 'Reception Area',
          titleNp: 'रिसेप्शन क्षेत्र',
          description: 'Welcoming reception area for client consultations',
          descriptionNp: 'ग्राहक परामर्शका लागि स्वागत क्षेत्र'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.57_43ea4c1c.jpg', 
          title: 'Meeting Room',
          titleNp: 'बैठक कक्ष',
          description: 'Professional meeting spaces for client discussions',
          descriptionNp: 'ग्राहक छलफलका लागि व्यावसायिक बैठक स्थान'
        },
      ]
    },
    {
      category: 'Documentation & Processing',
      categoryNp: 'कागजात र प्रशोधन',
      images: [
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.57_89b90394.jpg', 
          title: 'Documentation Center',
          titleNp: 'कागजात केन्द्र',
          description: 'Dedicated area for visa and document processing',
          descriptionNp: 'भिसा र कागजात प्रशोधनका लागि समर्पित क्षेत्र'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.57_505a82d4.jpg', 
          title: 'Processing Department',
          titleNp: 'प्रशोधन विभाग',
          description: 'Professional document verification and processing facility',
          descriptionNp: 'व्यावसायिक कागजात प्रमाणीकरण र प्रशोधन सुविधा'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.58_975496c4.jpg', 
          title: 'Client Service Area',
          titleNp: 'ग्राहक सेवा क्षेत्र',
          description: 'Dedicated space for client assistance and guidance',
          descriptionNp: 'ग्राहक सहायता र मार्गदर्शनका लागि समर्पित स्थान'
        },
      ]
    },
    {
      category: 'Training & Orientation',
      categoryNp: 'प्रशिक्षण र अभिमुखीकरण',
      images: [
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.58_a0e9bb4f.jpg', 
          title: 'Training Hall',
          titleNp: 'प्रशिक्षण हल',
          description: 'Spacious training facility for worker orientation programs',
          descriptionNp: 'कामदार अभिमुखीकरण कार्यक्रमका लागि विशाल प्रशिक्षण सुविधा'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.58_d570c091.jpg', 
          title: 'Orientation Session',
          titleNp: 'अभिमुखीकरण सत्र',
          description: 'Workers receiving pre-departure orientation and training',
          descriptionNp: 'प्रस्थान पूर्व अभिमुखीकरण र प्रशिक्षण प्राप्त गर्दै कामदारहरू'
        },
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.59_e5dd7236.jpg', 
          title: 'Learning Environment',
          titleNp: 'सिकाइ वातावरण',
          description: 'Interactive learning space for skill development',
          descriptionNp: 'सीप विकासका लागि अन्तरक्रियात्मक सिकाइ स्थान'
        },
      ]
    },
    {
      category: 'Success Stories',
      categoryNp: 'सफलताका कथाहरू',
      images: [
        { 
          src: '/WhatsApp Image 2025-08-06 at 22.01.59_f1a4f452.jpg', 
          title: 'Successful Deployment',
          titleNp: 'सफल तैनाती',
          description: 'Workers successfully deployed to international destinations',
          descriptionNp: 'अन्तर्राष्ट्रिय गन्तव्यहरूमा सफलतापूर्वक तैनाथ कामदारहरू'
        },
        { 
          src: '/1.jpg', 
          title: 'Achievement Gallery',
          titleNp: 'उपलब्धि ग्यालरी',
          description: 'Celebrating our milestones and achievements',
          descriptionNp: 'हाम्रा माइलस्टोन र उपलब्धिहरूको उत्सव'
        },
        { 
          src: '/220.jpg', 
          title: 'Company Recognition',
          titleNp: 'कम्पनी मान्यता',
          description: 'Awards and recognition for excellence in service',
          descriptionNp: 'सेवामा उत्कृष्टताका लागि पुरस्कार र मान्यता'
        },
      ]
    }
  ];

  const allImages = galleryCategories.flatMap(category => 
    category.images.map(img => ({ 
      ...img, 
      category: category.category,
      categoryNp: category.categoryNp 
    }))
  );

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const handleImageError = (e) => {
    e.target.src = '/logo.png'; // Fallback to logo if image fails to load
  };

  return (
    <>
      <SEOHead
        title="Gallery - Peace International Office & Facilities Nepal | Success Stories"
        description="View Peace International's modern office facilities in Kathmandu, training centers, successful worker deployments, and achievements. See our journey in pictures."
        keywords="peace international gallery, recruitment agency office Nepal, training facilities, worker success stories, Kathmandu manpower office"
        canonicalUrl="/gallery"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section with Image Background */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.59_f1a4f452.jpg"
              alt="Peace International Gallery"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/95 via-[#004876]/90 to-[#1e3a8a]/85"></div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#004876]/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1e3a8a]/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
                <span className="mr-2">📸</span>
                Our Journey in Pictures
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Gallery | ग्यालरी
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
                Explore our facilities, success stories, and the journey of connecting Nepalese workers with global opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Categories */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#1B1948] mb-2">
                    {category.category}
                  </h2>
                  <p className="text-xl text-[#004876] mb-4">{category.categoryNp}</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#004876] to-[#1e3a8a] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.images.map((image, imageIndex) => {
                    const globalIndex = galleryCategories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.images.length, 0) + imageIndex;
                    
                    return (
                      <div
                        key={imageIndex}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-blue-100"
                        onClick={() => openModal({ ...image, categoryNp: category.categoryNp }, globalIndex)}
                      >
                        <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={handleImageError}
                          />
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#004876]/90 via-[#004876]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="font-bold text-xl mb-1">{image.title}</h3>
                            <p className="text-sm text-blue-100 mb-2">{image.titleNp}</p>
                            <p className="text-sm text-gray-200 mb-4">{image.description}</p>
                            
                            {/* View Button */}
                            <div className="mt-4">
                              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-lg hover:bg-white/30 transition-colors duration-200 border border-white/30">
                                <span className="mr-2">👁️</span>
                                View Full Image
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white text-xs font-medium rounded-full shadow-lg">
                            {category.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-blue-300 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-300 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onError={handleImageError}
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-[#1B1948]/90 to-[#004876]/90 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
                    <p className="text-lg text-blue-200 mb-2">{selectedImage.titleNp}</p>
                    <p className="text-gray-300 mb-3">{selectedImage.description}</p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white text-sm rounded-full">
                      {selectedImage.category} | {selectedImage.categoryNp}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">
                      {currentIndex + 1} of {allImages.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics with Image Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/WhatsApp Image 2025-08-06 at 22.01.57_89b90394.jpg"
              alt="Statistics Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1948]/90 via-[#004876]/85 to-[#1e3a8a]/90"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2 text-white">Our Journey in Numbers</h2>
              <p className="text-xl text-blue-100">हाम्रो यात्रा संख्यामा</p>
              <p className="text-lg text-blue-200 mt-2">Milestones that define our success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">2000+</div>
                <div className="text-blue-100">Workers Deployed</div>
                <div className="text-sm text-blue-200">कामदार तैनाथ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">5</div>
                <div className="text-blue-100">Countries Served</div>
                <div className="text-sm text-blue-200">सेवा गरिएका देशहरू</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">15+</div>
                <div className="text-blue-100">Years Experience</div>
                <div className="text-sm text-blue-200">वर्षको अनुभव</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2 text-white">98%</div>
                <div className="text-blue-100">Success Rate</div>
                <div className="text-sm text-blue-200">सफलता दर</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1B1948] mb-4">
              Want to Be Part of Our Success Story?
            </h2>
            <p className="text-xl text-[#004876] mb-2">हाम्रो सफलताको कथाको भाग बन्न चाहनुहुन्छ?</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Nepali workers who have successfully found employment abroad through Peace International
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/jobs"
                className="bg-gradient-to-r from-[#004876] to-[#1e3a8a] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                View Current Openings
              </a>
              <a
                href="#footer"
                className="border-2 border-[#004876] text-[#004876] px-8 py-3 rounded-xl font-semibold hover:bg-[#004876] hover:text-white transition-all duration-200 inline-flex items-center justify-center"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
