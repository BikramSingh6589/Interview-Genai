import React from 'react'
import "../style/home.scss"
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'

const Home = () => {
    const navigate = useNavigate()
    const { handleLogout } = useAuth()

    return (
        <div className='landing-page'>
            {/* Header */}
            <header className='landing-header'>
                <div className='logo'>Lexicon AI</div>
                <nav>
                    <button className="active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Home</button>
                    <button onClick={() => {
                        const aboutSection = document.getElementById('about-section');
                        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }}>About</button>
                    <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                </nav>
                <div className='header-actions'>
                    <button 
                        onClick={async () => { await handleLogout(); navigate('/login'); }} 
                        style={{ 
                            background: 'transparent', 
                            border: '1px solid var(--border-color)', 
                            color: 'var(--text-primary)', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '0.5rem', 
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Sign Out
                    </button>
                    <button className='new-report-btn' onClick={() => navigate('/generate')}>New Report</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className='hero-section'>
                <div className='hero-content'>
                    <div className='ai-badge'><span className='sparkle'>✦</span> AI-POWERED ANALYSIS</div>
                    <h1>Transform your <span className='highlight'>Internship Experience</span> into compelling reports.</h1>
                    <p>Lexicon AI bridges the gap between your daily tasks and professional documentation. Upload your resume and JD to generate high-impact internship summaries in seconds.</p>
                    <div className='hero-buttons'>
                        <button className='btn-primary' onClick={() => navigate('/generate')}>Get Started <span>→</span></button>
                        <button className='btn-secondary'>View Sample</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <div className='image-card'>
                        <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000" alt="AI Analysis" />
                        <div className='status-tag'>
                            <span className='dot'></span> Report Status: <strong>Analysis Complete</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about-section" className="about-section" style={{ padding: '8rem 10%', background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className='ai-badge' style={{ marginBottom: '1.5rem', display: 'inline-flex', background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent-color)', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 'bold' }}>
                        <span className='sparkle' style={{ marginRight: '0.5rem' }}>🎯</span> OUR MISSION
                    </div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        Elevate Your Professional Narrative
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                        Lexicon AI is an intelligent career acceleration platform designed to translate your raw, unstructured work experience into highly polished, industry-standard documentation. We help you articulate your true value to recruiters, managers, and academic evaluators.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        <div style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🧠</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>Contextual AI Analysis</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We don't just summarize; our AI deeply analyzes your resume against target job descriptions to identify exact skill alignments and strategic gaps.</p>
                        </div>
                        <div style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>⚡</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>Instant Report Generation</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Transform days of drafting into seconds of processing. Instantly receive beautiful, comprehensive PDF reports highlighting your technical and behavioral strengths.</p>
                        </div>
                        <div style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', transition: 'transform 0.3s' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🚀</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: '700' }}>Actionable Insights</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Beyond summaries, we provide concrete, day-by-day preparation plans to help you close skill gaps and confidently ace your next technical interview.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className='how-it-works'>
                <h3>How Lexicon AI Works</h3>
                <p className='section-desc'>Our proprietary Analysis Engine processes your raw professional data to create industry-standard internship reports.</p>
                <div className='steps-grid'>
                    <div className='step-card'>
                        <div className='icon-box teal'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
                        <h4>Upload Inputs</h4>
                        <p>Provide your Resume and the Job Description. Our AI maps your actual work against required outcomes.</p>
                    </div>
                    <div className='step-card'>
                        <div className='icon-box dark'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
                        <h4>AI Context Map</h4>
                        <p>Lexicon identifies key achievements, technical skills, and professional growth metrics relevant to your field.</p>
                    </div>
                    <div className='step-card'>
                        <div className='icon-box light'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
                        <h4>Instant Report</h4>
                        <p>Receive a structured, professional summary ready for submission to academic supervisors or hiring managers.</p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className='benefits-section'>
                <div className='benefits-content'>
                    <h3>Unrivaled benefits for knowledge workers.</h3>
                    <p>Stop spending hours staring at a blank page. Let AI handle the heavy lifting of summarization while you focus on your career.</p>
                    <div className='benefit-item'>
                        <div className='check-icon'>✓</div>
                        <div>
                            <strong>Academic Compliance</strong>
                            <p>Reports formatted to meet standard university internship criteria.</p>
                        </div>
                    </div>
                    <div className='benefit-item'>
                        <div className='check-icon'>✓</div>
                        <div>
                            <strong>Keyword Optimization</strong>
                            <p>Automatically highlights the industry keywords that recruiters look for.</p>
                        </div>
                    </div>
                </div>
                <div className='benefits-cards'>
                    <div className='stat-card dark'>
                        <div className='stat-value'>98% Accuracy</div>
                        <p>Our models are fine-tuned on thousands of high-performing internship portfolios.</p>
                    </div>
                    <div className='stat-card light'>
                        <div className='stat-value'>5 Minute Turnaround</div>
                        <p>From raw files to a polished report in less time than it takes to brew a coffee.</p>
                    </div>
                    <div className='cta-card teal'>
                        <div className='cta-content'>
                            <h4>Ready to automate your reporting?</h4>
                            <p>Join the thousands of students and early-career professionals using Lexicon AI.</p>
                            <button className='btn-white' onClick={() => navigate('/generate')}>Start Your Free Report</button>
                        </div>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500" alt="Team" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='landing-footer'>
                <div className='footer-main'>
                    <div className='footer-brand'>
                        <div className='logo'>Lexicon AI</div>
                        <p>The intelligent bridge between experience and documentation. Designed for the next generation of knowledge workers.</p>
                    </div>
                    <div className='footer-links'>
                        <div>
                            <h5>Product</h5>
                            <a href="#">How it works</a>
                            <a href="#">Pricing</a>
                            <a href="#">Success Stories</a>
                            <a href="#">Documentation</a>
                        </div>
                        <div>
                            <h5>Company</h5>
                            <a href="#">About Us</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>© 2024 Lexicon AI Internship Solutions. All rights reserved.</p>
                    <div className='bottom-links'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Documentation</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home