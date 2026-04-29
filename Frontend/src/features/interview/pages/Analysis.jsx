import React, { useState, useRef } from 'react'
import "../style/analysis.scss"
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'

const Analysis = () => {
    const { handleLogout } = useAuth()

    const { loading, generateReport, reports } = useInterview()
    const [ jobDescription, setJobDescription ] = useState("")
    const [ selfDescription, setSelfDescription ] = useState("")
    const resumeInputRef = useRef()

    const navigate = useNavigate()

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[ 0 ]
        const data = await generateReport({ jobDescription, selfDescription, resumeFile })
        navigate(`/interview/${data._id}`)
    }

    if (loading) {
        return (
            <main className='loading-screen'>
                <div className="processing-container">
                    <div className="processing-header">
                        <div className="ai-badge">AI ENGINE ACTIVE</div>
                        <h1>Synthesizing Insights</h1>
                        <p>Lexicon AI is cross-referencing your credentials with professional benchmarks to generate a high-fidelity internship match report.</p>
                    </div>
                    
                    <div className="processing-card">
                        <div className="processing-animation">
                            <div className="sparkle-icon">✨</div>
                        </div>
                        
                        <div className="steps-list">
                            <div className="step completed">
                                <div className="step-status">✓</div>
                                <div className="step-content">
                                    <h3>Parsing Resume <span>Completed</span></h3>
                                    <p>Extracted education history, core skills, and professional experiences from PDF document.</p>
                                </div>
                            </div>
                            <div className="step running">
                                <div className="step-status">●</div>
                                <div className="step-content">
                                    <h3>Analyzing Job Description <span>Running</span></h3>
                                    <p>Identifying key semantic requirements and alignment with role responsibilities.</p>
                                    <div className="progress-bar"><div className="progress-fill" style={{width: '60%'}}></div></div>
                                </div>
                            </div>
                            <div className="step pending">
                                <div className="step-status"></div>
                                <div className="step-content">
                                    <h3>Generating Summary <span>Pending</span></h3>
                                    <p>Synthesizing match percentage and drafting AI-driven interview recommendations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="processing-footer">
                            <div className="recruiters">Trusted by 1.2k recruiters</div>
                            <div className="eta">Estimated time remaining: 12s</div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <div className='analysis-page'>
            <header className='analysis-header'>
                <div className="logo">Lexicon AI <span>Professional Intelligence</span></div>
                <div className="nav-links">
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={async () => { await handleLogout(); navigate('/login'); }}>Sign Out</button>
                    <button className="cta" onClick={() => navigate('/dashboard')}>Dashboard</button>
                </div>
            </header>

            <main className="analysis-main">
                <div className='page-title'>
                    <h1>Create Your Custom <span className='highlight'>Interview Plan</span></h1>
                    <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
                </div>

                <div className='content-grid'>
                    <div className='interview-card'>
                        <div className='interview-card__body'>
                            <div className="form-group">
                                <div className='panel'>
                                    <div className='panel__header'>
                                        <h2>Target Job Description</h2>
                                        <span className='badge badge--required'>Required</span>
                                    </div>
                                    <textarea
                                        onChange={(e) => { setJobDescription(e.target.value) }}
                                        className='panel__textarea'
                                        placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
                                        value={jobDescription}
                                    />
                                </div>

                                <div className='panel'>
                                    <div className='panel__header'>
                                        <h2>Your Professional Background</h2>
                                    </div>
                                    <div className='upload-section'>
                                        <label className='dropzone' htmlFor='resume'>
                                            <div className="icon-box">⤒</div>
                                            <div className='dropzone__title'>Click to upload or drag and drop</div>
                                            <div className='dropzone__subtitle'>PDF (Max 5MB)</div>
                                            <input ref={resumeInputRef} hidden type='file' id='resume' name='resume' accept='.pdf,.docx' />
                                        </label>
                                    </div>
                                    <div className='or-divider'><span>OR</span></div>
                                    <textarea
                                        onChange={(e) => { setSelfDescription(e.target.value) }}
                                        className='panel__textarea panel__textarea--short'
                                        placeholder="Briefly describe your experience, key skills, and years of experience..."
                                        value={selfDescription}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='interview-card__footer'>
                            <button onClick={handleGenerateReport} className='generate-btn'>
                                Generate My Interview Strategy →
                            </button>
                        </div>
                    </div>

                    {reports && reports.length > 0 && (
                        <div className='recent-reports-section'>
                            <div className='section-header'>
                                <h2>Recent Analysis Reports</h2>
                                <p>Your historical career data</p>
                            </div>
                            <div className='reports-list'>
                                {reports.map(report => (
                                    <div key={report._id} className='report-card' onClick={() => navigate(`/interview/${report._id}`)}>
                                        <div className='report-icon'>📄</div>
                                        <div className='report-info'>
                                            <h3>{report.jobDescription?.substring(0, 40) || 'Untitled Analysis'}...</h3>
                                            <p className='report-date'>{new Date(report.createdAt).toLocaleDateString()} • {report.technicalQuestions?.length || 0} Questions</p>
                                        </div>
                                        <div className='report-score'>{report.matchScore}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}


export default Analysis
