import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { login } from '../features/auth/authSlice';

const SignIn = () => {
    const [payload,setPayload] = useState({
        "identifier":null,
        "password":null,
    });
    const {emails, password} = useParams()
    let dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = (e)=>{
        
        e.preventDefault()
        //console.log(payload);
        dispatch(login(payload))
        alert("loggedIn successfully!");
        navigate('/')
    }
    let handleChange = (e)=>{
        console.log(e.target.value)
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        });
    }
  return (
    <>
        <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">hello</span>
                        <h2 className="title">welcome back</h2>
                        </div>
                        <form onSubmit={onLogin} className="account-form">
                            <div className="form-group">
                                <label htmlFor="email2">Email<span>*</span></label>
                                <input  type="email" name="identifier" value={payload.email} onChange={handleChange} placeholder="Enter Your Email" id="email2" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass3">Password<span>*</span></label>
                                <input name="password" value={payload.password} onChange={handleChange} type="password" placeholder="Password" id="pass3" required />
                            </div>
                            <div className="form-group checkgroup">
                                <input  type="checkbox" id="bal2" required defaultChecked />
                                <label htmlFor="bal2">remember password</label>
                                <a href="#0" className="forget-pass">Forget Password</a>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" defaultValue="log in" />
                            </div>
                        </form>
                        <div className="option">
                            Don't have an account? <Link to="/sign-up">sign up now</Link>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                            <li>
                                <a href="#0">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="active">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-google" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default SignIn