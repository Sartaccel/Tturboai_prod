import React from 'react';
import { useSEO } from '../hooks/useSEO';
import './ComingSoon.css';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import img from '../assets/img.png';
import ttlogo from '../assets/logo/TalentTurboNavbarLogo.png';

const ComingSoon = () => {

    // SEO Configuration
    useSEO({
        title: 'Talent Turbo - AI Powered Recruitment Platform Coming Soon',
        description: 'The future of hiring is here! AI-powered recruitment platform for candidates and recruiters. Smart hiring solutions with advanced AI technology. Join our waitlist for early access.',
        keywords: 'AI recruitment, talent acquisition, hiring platform, recruitment software, AI hiring, talent turbo, recruitment automation, smart hiring, candidate matching, recruiter tools, HR technology, talent management',
        author: 'Talent Turbo',
        robots: 'index, follow',
        url: 'https://talentturbo.us/',
        type: 'website',
        image: 'https://talentturbo.us/assets/img.png',
        siteName: 'Talent Turbo',
        twitterCard: 'summary_large_image',
        twitterSite: '@talentturbo',
        canonical: 'https://talentturbo.us/',
        structuredData: [
            {
                type: 'Organization',
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Talent Turbo",
                "url": "https://talentturbo.us",
                "logo": "https://talentturbo.us/assets/logo/TalentTurboNavbarLogo.png",
                "description": "AI-powered recruitment platform for candidates and recruiters. Smart hiring solutions with advanced AI technology.",
                "sameAs": [
                    "https://www.facebook.com/talentturbo",
                    "https://www.instagram.com/talent_turbo",
                    "https://www.linkedin.com/company/talent-turbo"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "contact@talentturbo.us"
                },
                "foundingDate": "2024",
                "industry": "HR Technology"
            },
            {
                type: 'WebSite',
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Talent Turbo",
                "url": "https://talentturbo.us",
                "description": "AI-powered recruitment platform coming soon",
                "publisher": {
                    "@type": "Organization",
                    "name": "Talent Turbo"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://talentturbo.us/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    });

    return (
        <>
            <div className="coming-soon min-vh-100 d-flex flex-column">
                <div className="coming-soon-hero d-block text-center pt-5">
                    
                    <div className="coming-soon-hero-content">
                        <img src={ttlogo} alt="Talent Turbo - AI Powered Recruitment Platform Logo" className="coming-soon-hero-logo" style={{ marginTop: '50px', width: '600px', height: 'auto', marginLeft: '40px' }} />
                        <p className="coming-soon-hero-subtitle fs-2 mb-0 fw-bold">Internet of Humans</p>
                    </div>
                </div>
                <div className="container my-auto">
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-5 mb-lg-0">
                            <h1
                                className="display-8 fw-bold mb-4 text-gradient"
                                style={{
                                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ff00cc, #585858)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundSize: '200% auto',
                                    animation: 'gradient 3s ease infinite',
                                    fontSize: '2.2rem'
                                }}
                            >
                                AI powered recruitment platform is coming soon<span className="dancing-dots"><span>.</span><span>.</span><span>.</span></span>
                            </h1>
                            <p className="display-6 mb-4 text-muted text-start" style={{ fontWeight: 400, fontSize: '1.8rem' }}>
                                The Future of Hiring, Accelerated AI-Powered Recruitment for Candidates & Recruiters. Smart Hiring Solutions.
                            </p>
                            <p className="display-6 mb-4 text-muted text-start" style={{ fontWeight: 400, fontSize: '1.5rem' }}>We're putting the final touches on a platform that will change how the world hires. Stay tuned for early access, sneak peeks, and exclusive launch offers.</p>

                            <div className="space-y-8">
                                <h3 className="bethefirst">
                                    Be the First to Know
                                </h3>

                                <div className="last-section">
                                    <div className="last-section-part">
                                        <h3 className="last-section-text">
                                            <a href="mailto:contact@talentturbo.us" className="last-section-text-link">Join the Waitlist</a> Get early access, product updates, and insider tips.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <p className="visit-website text-muted fw-bold">Visit our current website: <a href="https://www.talentturbo.us/" target="_blank" rel="noopener noreferrer" className="website-link fw-bold">www.talentturbo.us</a></p>
                        </div>
                        <div className="col-lg-4 text-end">
                            <img
                                src={img}
                                alt="AI-powered recruitment platform illustration showing intelligent talent matching and automated hiring processes"
                                className="img rounded-4 "
                                style={{ maxHeight: '500px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>


                        <div>
                            <div className="social-links">
                                <a href="https://www.facebook.com/talentturbo" className="text-decoration-none mx-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <Facebook size={24} />
                                </a>
                                <a href="https://www.instagram.com/talent_turbo?igsh=MXNjaTRmOGZpbHZr" className="text-decoration-none mx-2" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/9392206/admin/dashboard/" className="text-decoration-none mx-2" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="footer-content">
                        <p className="footer-text">
                            &copy; Talent Turbo. All Rights Reserved. Designed and developed by{' '}
                            <a href="https://enterkeysolutions.com/" className="footer-link" target="_blank" rel="noopener noreferrer">EnterKey Solutions</a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ComingSoon;