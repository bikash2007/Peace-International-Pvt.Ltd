// src/components/SEOHead.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Peace International - Leading Manpower Recruitment Agency in Nepal",
  description = "Peace International Pvt. Ltd. - Your trusted partner for overseas employment. We provide skilled manpower to Malaysia, Qatar, Saudi Arabia, Dubai & Kuwait. Licensed by Government of Nepal.",
  keywords = "manpower recruitment Nepal, overseas jobs, foreign employment, jobs in Malaysia, Qatar jobs, Saudi Arabia employment, Dubai jobs, Kuwait careers",
  canonicalUrl,
  ogImage = "/logo.png",
  noIndex = false
}) => {
  const siteUrl = "https://www.peaceintl.com.np"; // Replace with your actual domain
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content="Peace International Pvt. Ltd." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Peace International" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#004876" />
      <meta name="msapplication-TileColor" content="#004876" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EmploymentAgency",
          "name": "Peace International Pvt. Ltd.",
          "description": description,
          "url": siteUrl,
          "logo": fullOgImage,
          "image": fullOgImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Maiti Marga, Pingalasthan-09",
            "addressLocality": "Goushala, Kathmandu",
            "addressCountry": "Nepal",
            "postalCode": "44600"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.704668",
            "longitude": "85.345112"
          },
          "telephone": "+977-5913706",
          "email": "pce.intlovs@yahoo.com",
          "areaServed": [
            {"@type": "Country", "name": "Malaysia"},
            {"@type": "Country", "name": "Qatar"},
            {"@type": "Country", "name": "Saudi Arabia"},
            {"@type": "Country", "name": "United Arab Emirates"},
            {"@type": "Country", "name": "Kuwait"}
          ],
          "serviceType": "Manpower Recruitment",
          "hasCredential": "Licensed by Department of Foreign Employment, Government of Nepal",
          "foundingDate": "2009",
          "sameAs": [
            "https://www.facebook.com/Peace-International-Pvt-Ltd-911842585602923/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
