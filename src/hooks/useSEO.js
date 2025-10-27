import { useEffect } from 'react';

// Custom SEO hook for React 19 compatibility
export const useSEO = (config) => {
  useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = config.title;
    }

    // Helper function to set meta tag
    const setMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Helper function to set link tag
    const setLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }

      link.setAttribute('href', href);
    };

    // Helper function to set structured data
    const setStructuredData = (data) => {
      let script = document.querySelector(`script[type="application/ld+json"]#${data.type}`);

      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = data.type;
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(data);
    };

    // Set meta tags
    if (config.description) {
      setMetaTag('description', config.description);
      setMetaTag('og:description', config.description, true);
      setMetaTag('twitter:description', config.description, true);
    }

    if (config.keywords) {
      setMetaTag('keywords', config.keywords);
    }

    if (config.author) {
      setMetaTag('author', config.author);
    }

    if (config.robots) {
      setMetaTag('robots', config.robots);
    }

    // Open Graph tags
    if (config.url) {
      setMetaTag('og:url', config.url, true);
    }

    if (config.type) {
      setMetaTag('og:type', config.type, true);
    }

    if (config.image) {
      setMetaTag('og:image', config.image, true);
      setMetaTag('twitter:image', config.image, true);
    }

    if (config.siteName) {
      setMetaTag('og:site_name', config.siteName, true);
    }

    // Twitter Card tags
    if (config.twitterCard) {
      setMetaTag('twitter:card', config.twitterCard, true);
    }

    if (config.twitterSite) {
      setMetaTag('twitter:site', config.twitterSite, true);
    }

    // Canonical URL
    if (config.canonical) {
      setLinkTag('canonical', config.canonical);
    }

    // Set structured data if provided
    if (config.structuredData) {
      if (Array.isArray(config.structuredData)) {
        config.structuredData.forEach(data => setStructuredData(data));
      } else {
        setStructuredData(config.structuredData);
      }
    }

    // Cleanup function
    return () => {
      // Optional: Clean up meta tags on unmount
      // This is usually not necessary for SEO
    };
  }, [config]);
};
