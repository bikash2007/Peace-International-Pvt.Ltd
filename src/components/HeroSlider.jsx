// components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  const slides = [
    {
      id: 1,
      image: '/WhatsApp Image 2025-08-06 at 22.01.57_3a478bc5.jpg',
      fallbackImage: '/logo.png',
      title: 'विदेशी रोजगारका लागि नेपालको भरपर्दो साझेदार',
      titleEn: 'Nepal\'s Trusted Partner for Overseas Employment',
      description: 'मलेसिया, कतार, साउदी अरेबिया, दुबई र कुवेतमा सुरक्षित र राम्रो रोजगारी',
      descriptionEn: 'Secure and quality employment in Malaysia, Qatar, Saudi Arabia, Dubai & Kuwait',
      cta: 'अहिले नै आवेदन दिनुहोस्',
      ctaEn: 'Apply Now',
      ctaLink: '/jobs',
      ctaEnLink: '/jobs'
    },
    {
      id: 2,
      image: '/WhatsApp Image 2025-08-06 at 22.01.57_12c58271.jpg',
      fallbackImage: '/logo.png',
      title: 'व्यावसायिक प्रशिक्षण र मार्गदर्शन',
      titleEn: 'Professional Training & Guidance',
      description: 'विदेश जानु अघि आवश्यक प्रशिक्षण र सल्लाह सेवा',
      descriptionEn: 'Essential training and consultation services before going abroad',
      cta: 'थप जान्नुहोस्',
      ctaEn: 'Learn More',
      ctaLink: '/services',
      ctaEnLink: '/services'
    },
    {
      id: 3,
      image: '/WhatsApp Image 2025-08-06 at 22.01.57_43ea4c1c.jpg',
      fallbackImage: '/logo.png',
      title: 'सरकारी इजाजतपत्र प्राप्त',
      titleEn: 'Government Licensed Agency',
      description: 'वैदेशिक रोजगार विभाग, नेपाल सरकारबाट इजाजतपत्र प्राप्त',
      descriptionEn: 'Licensed by Department of Foreign Employment, Government of Nepal',
      cta: 'सम्पर्क गर्नुहोस्',
      ctaEn: 'Contact Us',
      ctaLink: '#footer',
      ctaEnLink: '#footer'
    },
    {
      id: 4,
      image: '/WhatsApp Image 2025-08-06 at 22.01.57_89b90394.jpg',
      fallbackImage: '/logo.png',
      title: '१५+ वर्षको अनुभव',
      titleEn: '15+ Years of Experience',
      description: '२००० भन्दा बढी कामदारहरूको सफल रोजगारी',
      descriptionEn: 'Successful employment of 2000+ workers',
      cta: 'हाम्रो सफलता हेर्नुहोस्',
      ctaEn: 'View Our Success',
      ctaLink: '/about',
      ctaEnLink: '/about'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleImageError = (slideId) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  const getImageSrc = (slide) => {
    return imageErrors[slide.id] ? slide.fallbackImage : slide.image;
  };

  // Handle both internal routing and anchor links
  const handleButtonClick = (link) => {
    if (link.startsWith('#')) {
      // Smooth scroll to footer or other sections
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Add CSS for animations */}
      <style jsx>{`
        .slide-transition {
          transition: opacity 0.8s ease-in-out;
        }
        
        .content-animate {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .content-animate-delay-1 {
          animation: slideInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .content-animate-delay-2 {
          animation: slideInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .background-image {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
        }
        
        .image-loading {
          background-color: #1e3a8a;
          background-image: linear-gradient(45deg, #1e3a8a 25%, #1d4ed8 25%, #1d4ed8 50%, #1e3a8a 50%, #1e3a8a 75%, #1d4ed8 75%, #1d4ed8);
          background-size: 40px 40px;
          animation: loading-stripes 1s linear infinite;
        }
        
        @keyframes loading-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }
      `}</style>

      <div 
        className="relative h-screen w-full overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Error Handling */}
            <div className="absolute inset-0">
              <img
                src={getImageSrc(slide)}
                alt={slide.titleEn}
                className="w-full h-full object-cover"
                onError={() => handleImageError(slide.id)}
                onLoad={() => console.log(`Image loaded: ${slide.image}`)}
                style={{ display: 'block' }}
              />
              
              {/* Fallback gradient background if no image */}
              <div 
                className={`absolute inset-0 background-image ${!getImageSrc(slide) ? 'image-loading' : ''}`}
                style={{
                  backgroundImage: `url(${getImageSrc(slide)})`,
                  opacity: getImageSrc(slide) ? 1 : 0
                }}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 via-[#1e40af]/70 to-[#1d4ed8]/60" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className={`mb-6 ${index === currentSlide ? 'content-animate' : ''}`}>
                    {/* Nepali Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    {/* English Title */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
                      {slide.titleEn}
                    </h2>
                  </div>

                  <div className={`mb-8 ${index === currentSlide ? 'content-animate-delay-1' : ''}`}>
                    {/* Nepali Description */}
                    <p className="text-lg md:text-xl text-gray-200 mb-3 leading-relaxed">
                      {slide.description}
                    </p>
                    {/* English Description */}
                    <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                      {slide.descriptionEn}
                    </p>
                  </div>

                  <div className={`flex flex-col sm:flex-row gap-4 ${index === currentSlide ? 'content-animate-delay-2' : ''}`}>
                    {/* Nepali CTA Button */}
                    {slide.ctaLink.startsWith('#') ? (
                      <button 
                        onClick={() => handleButtonClick(slide.ctaLink)}
                        className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 cursor-pointer inline-block text-center"
                      >
                        {slide.cta}
                      </button>
                    ) : (
                      <Link 
                        to={slide.ctaLink}
                        className="bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 inline-block text-center"
                      >
                        {slide.cta}
                      </Link>
                    )}

                    {/* English CTA Button */}
                    {slide.ctaEnLink.startsWith('#') ? (
                      <button 
                        onClick={() => handleButtonClick(slide.ctaEnLink)}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block text-center"
                      >
                        {slide.ctaEn}
                      </button>
                    ) : (
                      <Link 
                        to={slide.ctaEnLink}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 transform hover:scale-105 inline-block text-center"
                      >
                        {slide.ctaEn}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

       

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Remove Debug Info in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 z-20 bg-black/50 text-white p-2 rounded text-xs">
            Current Slide: {currentSlide + 1}/{slides.length}
            <br />
            Image: {slides[currentSlide]?.image}
            <br />
            Error: {imageErrors[slides[currentSlide]?.id] ? 'Yes' : 'No'}
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSlider;
