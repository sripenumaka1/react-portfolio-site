import { useEffect } from 'react';

const SEO = ({ 
  title = 'Sri Penumaka - Web Designer & Frontend Developer',
  description = 'Portfolio showcasing web design and development projects by Sri Penumaka. Specializing in UI/UX design, responsive web development, and modern frontend technologies.',
  keywords = 'web design, frontend developer, UI/UX designer, React developer, portfolio, web development',
}) => {
  const siteTitle = 'Sri Penumaka Portfolio';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);

  }, [fullTitle, description, keywords]);

  return null; // This component doesn't render anything
};

export default SEO;

