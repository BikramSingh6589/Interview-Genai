import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }

    return (
        <main>
            <div className="form-container">
                <div className="form-header">
                    <h1>Create Account</h1>
                    <p>Experience document intelligence at the speed of thought.</p>
                </div>

                <button className="google-btn">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                    Sign up with Google
                </button>

                <div className="divider">or continue with email</div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Full Name</label>
                        <div className="input-wrapper">
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text" id="username" name='username' placeholder='John Doe' required />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" id="email" name='email' placeholder='name@company.com' required />
                        </div>
                    </div>
                    
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    type="password" id="password" name='password' placeholder='••••••••' required />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <input
                                    type="password" id="confirmPassword" name='confirmPassword' placeholder='••••••••' required />
                            </div>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
                        </label>
                    </div>

                    <button className='button primary-button'>Create Account →</button>
                </form>

                <p className="footer-text">Already have an account? <Link to={"/login"}>Sign in</Link></p>
            </div>
        </main>
    )
}



export default Register