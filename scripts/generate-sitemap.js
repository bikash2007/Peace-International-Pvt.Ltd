// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const generateSitemap = async () => {
  const siteUrl = "https://www.peaceintl.com.np"; // Replace with your actual domain

  const sitemap = new SitemapStream({ hostname: siteUrl });

  const pages = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/services", changefreq: "monthly", priority: 0.9 },
    { url: "/structure", changefreq: "yearly", priority: 0.6 },
    { url: "/gallery", changefreq: "monthly", priority: 0.7 },
    { url: "/information", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.9 },
  ];

  pages.forEach((page) => {
    sitemap.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap);
  const writeStream = createWriteStream(resolve("public/sitemap.xml"));
  writeStream.write(sitemapXML);
  writeStream.end();

  console.log("Sitemap generated successfully!");
};

generateSitemap().catch(console.error);
