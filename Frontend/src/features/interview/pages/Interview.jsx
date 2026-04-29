import React, { useState, useEffect } from 'react'
import '../style/interview.scss'
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate, useParams, Link } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'

// ── Sub-components ────────────────────────────────────────────────────────────
const QuestionCard = ({ item, index }) => {
    const [ open, setOpen ] = useState(false)
    return (
        <div className={`q-card-premium ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
            <div className='q-card-header'>
                <div className='q-number'>0{index + 1}</div>
                <div className='q-text'>{item.question}</div>
                <div className='q-toggle'>{open ? '−' : '+'}</div>
            </div>
            {open && (
                <div className='q-card-body'>
                    <div className='q-section'>
                        <label>AI INTENTION</label>
                        <p>{item.intention}</p>
                    </div>
                    <div className='q-section'>
                        <label>MODEL ANSWER</label>
                        <p>{item.answer}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const Interview = () => {
    const { report, getReportById, loading, getResumePdf } = useInterview()
    const { handleLogout } = useAuth()
    const { interviewId } = useParams()
    const navigate = useNavigate()
    const [ activeTab, setActiveTab ] = useState('overview')

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        }
    }, [ interviewId ])

    const onLogout = async () => {
        await handleLogout()
        navigate('/login')
    }

    if (loading || !report) {
        return (
            <main className='loading-screen'>
                <div className='loader-box'>
                    <div className='spinner'></div>
                    <h1>Analyzing Data...</h1>
                </div>
            </main>
        )
    }

    return (
        <div className='portal-layout'>
            {/* Download FAB */}
            <button className='download-fab' onClick={() => getResumePdf(interviewId)} title="Download Full Report">
                <span className='icon'>↓</span>
                <span className='text'>Download PDF</span>
            </button>

            {/* Sidebar */}
            <aside className='portal-sidebar'>
                <div className='sidebar-brand'>
                    <div className='logo-box'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path></svg>
                    </div>
                    <div>
                        <h2>Lexicon AI</h2>
                        <p>PREMIUM SUITE</p>
                    </div>
                </div>

                <nav className='sidebar-nav'>
                    <button onClick={() => navigate('/')}><span className='icon'>⊞</span> Home</button>
                    <div className='nav-divider'>ANALYTICS</div>
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}><span className='icon'>📄</span> Executive Overview</button>
                    <button className={activeTab === 'technical' ? 'active highlighted' : 'highlighted'} onClick={() => setActiveTab('technical')}><span className='icon'>⚙️</span> Technical Prep</button>
                    <button className={activeTab === 'behavioral' ? 'active highlighted' : 'highlighted'} onClick={() => setActiveTab('behavioral')}><span className='icon'>💬</span> Behavioral Guide</button>
                </nav>

                <div className='sidebar-footer'>
                    <button className='upload-btn' onClick={() => navigate('/generate')}><span className='icon'>⤒</span> New Analysis</button>
                    <div className='footer-links'>
                        <button onClick={onLogout} className='logout-link'><span className='icon'>⤶</span> Sign Out</button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className='portal-main'>
                <div className='report-container-wide'>
                    {activeTab === 'overview' && (
                        <div className='overview-grid'>
                            <div className='overview-left'>
                                <section className='report-section'>
                                    <div className='section-title'>Executive Summary</div>
                                    <div className='summary-card-premium'>
                                        <div className='quote-mark'>“</div>
                                        <p>Based on our AI cross-referencing, your profile demonstrates a <strong>{report.matchScore}% core competency alignment</strong> with the stated job requirements. We've synthesized a custom roadmap focusing on your strengths in technical architecture and situational leadership.</p>
                                    </div>
                                </section>

                                <section className='report-section'>
                                    <div className='section-title'>Identified Skill Gaps</div>
                                    <div className='gap-grid-premium'>
                                        {report.skillGaps?.map((gap, i) => (
                                            <div key={i} className='gap-card-premium'>
                                                <div className='gap-badge'>{gap.severity}</div>
                                                <h3>{gap.skill}</h3>
                                                <p>Recommended focus area for technical deep-dive.</p>
                                            </div>
                                        )) || <p>No major gaps found.</p>}
                                    </div>
                                </section>
                            </div>

                            <div className='overview-right'>
                                <section className='confidence-card-premium large'>
                                    <div className='conf-visual'>
                                        <svg viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#139682" strokeWidth="8" strokeDasharray={`${report.matchScore * 2.82}, 282`} transform="rotate(-90 50 50)" strokeLinecap="round" />
                                        </svg>
                                        <div className='conf-text'>
                                            <span className='value'>{report.matchScore}%</span>
                                            <span className='label'>MATCH</span>
                                        </div>
                                    </div>
                                    <div className='conf-details'>
                                        <h3>AI Confidence Score</h3>
                                        <p>Derived from semantic analysis of {report.technicalQuestions?.length + report.behavioralQuestions?.length} data points.</p>
                                    </div>
                                </section>

                                <section className='readiness-card'>
                                    <div className='section-title'>Readiness Metrics</div>
                                    <div className='metrics-stack'>
                                        <div className='metric-item'>
                                            <div className='metric-label'><span>Technical Depth</span> <span>85%</span></div>
                                            <div className='metric-bar'><div className='fill' style={{width: '85%'}}></div></div>
                                        </div>
                                        <div className='metric-item'>
                                            <div className='metric-label'><span>Communication</span> <span>92%</span></div>
                                            <div className='metric-bar'><div className='fill' style={{width: '92%'}}></div></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}

                    {activeTab === 'technical' && (
                        <div className='questions-view-wide'>
                            <div className='view-banner technical'>
                                <div className='banner-content'>
                                    <h2>Technical Deep Dive</h2>
                                    <p>Comprehensive technical challenges designed to test your core engineering principles.</p>
                                </div>
                                <div className='banner-icon'>⚙️</div>
                            </div>
                            <div className='q-grid-premium'>
                                {report.technicalQuestions?.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'behavioral' && (
                        <div className='questions-view-wide'>
                            <div className='view-banner behavioral'>
                                <div className='banner-content'>
                                    <h2>Behavioral Leadership</h2>
                                    <p>Situational assessments to evaluate cultural fit, soft skills, and leadership potential.</p>
                                </div>
                                <div className='banner-icon'>💬</div>
                            </div>
                            <div className='q-grid-premium'>
                                {report.behavioralQuestions?.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}
                            </div>
                        </div>
                    )}

                    <footer className='portal-footer-wide'>
                        <div className='footer-content'>
                            <p>© 2024 Lexicon AI Intelligence. All rights reserved.</p>
                            <div className='footer-meta'>
                                <span>Ref: {interviewId.toUpperCase()}</span>
                                <span>Status: Verified</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default Interview