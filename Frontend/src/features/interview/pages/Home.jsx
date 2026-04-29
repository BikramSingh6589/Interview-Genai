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
                    <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                    <button onClick={async () => { await handleLogout(); navigate('/login'); }}>Sign Out</button>
                </nav>
                <div className='header-actions'>
                    <div className='search-bar'>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" placeholder="Search reports..." />
                    </div>
                    <button className='icon-btn'><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></button>
                    <button className='icon-btn'><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>
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
                    <div className='joined-stats'>
                        <div className='avatars'>
                            <img src="https://i.pravatar.cc/40?u=1" alt="user" />
                            <img src="https://i.pravatar.cc/40?u=2" alt="user" />
                            <img src="https://i.pravatar.cc/40?u=3" alt="user" />
                        </div>
                        <p>Joined by <strong>3,000+</strong> interns this semester</p>
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