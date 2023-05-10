//1. Import area
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo, userSignUp } from '../features/auth/authSlice'
import Loader from './Loader'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
//2.definition area
const SignUp = () => {
    //2.1 Hooks area
    const[userData,setUserData]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""

    })
    const[count, setCount] = useState(0)
    const userInfo= useSelector((store) => store.auth)
    //console.log("userInfo----->", userInfo)
    const {loading, error, success, errorMsg} = userInfo

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
        const {email, password} = userData
        if(success){
            swal("Good job...!","Registered successfully", "success")
            setTimeout(()=>{
                navigate(`/sign-in/${email}/${password}`)
            }, 2000)
        }
        if (error){
            swal("Bad job...!",errorMsg, "error")
        }
    }, [count, error, success])
    
    //console.log('payload---->',payload)
    //2.2 function/method definition area
    const handleChage=(e)=>{

        // console.log('e.target.name------>',e.target.name)
        // console.log('e.target.value----->',e.target.value)
        const {name, value} = e.target

       // console.log(payload)
        setUserData((prevState)=> ({
            ...prevState, [name]:value
        }))
    }
    let submitData=()=>{
        const {password, confirmPassword} = userData
        if(password === confirmPassword){
            setCount((prevCount)=> prevCount+1)
        const {username, email, password} = userData
        // const {confirmPassword, ...datas} = userData
        // console.log("datas----->", datas,)
        const data = {
            "username": username,
            "email": email,
            "password": password
        }

        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        dispatch(userSignUp(options))
        }
        else{
            swal("Aww ....!","Password and Confirm password mismatch", "error")
        }
        
        //alert("data is Submitted")
        //console.log('To be submitted data------->',options)

    }
    console.log("count------->",count)
    //2.3 return statement
  return (
    <>
        {/* {console.log('userInfo----->',userInfo)}
        {console.log('payload----->',payload)} */}
        {}
        <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                            <span className="cate">welcome</span>
                            <h2 className="title">to Boleto </h2>
                        </div>
                        <form className="account-form">
                            <div className="form-group">
                                <label htmlFor="username">Username<span>*</span></label>
                                <input type="text" name="username" placeholder="Enter Your Username" id="username" onChange={handleChage} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email1">Email<span>*</span></label>
                                <input type="text" name="email" placeholder="Enter Your Email" id="email1" onChange={handleChage} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass1">Password<span>*</span></label>
                                <input type="password" name='password' placeholder="Password" id="pass1" onChange={handleChage} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass2">Confirm Password<span>*</span></label>
                                <input type="password" name='confirmPassword' placeholder="Password" id="pass2" onChange={handleChage} required />
                            </div>
                            <div className="form-group checkgroup">
                                <input type="checkbox" id="bal" required defaultChecked />
                                <label htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                            </div>
                            <div className="form-group text-center">
                                {/* <input type="button" onClick={submitData} value={loading? <Loader />:"Sign-up"} /> */}
                                <button type="button" onClick={submitData} >{loading? <Loader />:"Sign-up"}</button>
                            </div>
                        </form>
                        <div className="option">
                            Already have an account? <a href="sign-in.html">Login</a>
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

export default SignUp