import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateToken, userLogout } from '../features/auth/authSlice';

const Navigation = () => {
    //const jwtToken=localStorage.getItem("jwt_token")
    const dispatch = useDispatch()
    const {token} = useSelector(store=>store.auth)
    
    const jwtToken=localStorage.getItem("jwt_token")
        useEffect(()=>{
        dispatch(updateToken(jwtToken))
    },[token])

    const onLogout = ()=>{
        dispatch(userLogout())
    }
  return (
    <>
        <ul className="menu">
                        <li>
                            <Link to="" className="active">Home</Link>
                            <ul className="submenu">
                                <li>
                                    <Link to="" className="active">Home One</Link>
                                </li>
                                <li>
                                    <Link to="">Home Two</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="">movies</Link>
                            <ul className="submenu">
                            <li>
                                <Link to="/movie-grid">Movie Grid</Link>
                            </li>
                            <li>
                                <Link to="/movie-list">Movie List</Link>
                            </li>
                            <li>
                                <Link to="/movie-details">Movie Details</Link>
                            </li>
                            <li>
                                <Link to="/movie-details-2">Movie Details 2</Link>
                            </li>
                            <li>
                                <Link to="/movie-ticket-plan">Movie Ticket Plan</Link>
                            </li>
                            <li>
                                <Link to="/movie-seat-plan">Movie Seat Plan</Link>
                            </li>
                            <li>
                                <Link to="/movie-checkout">Movie Checkout</Link>
                            </li>
                            <li>
                                <Link to="/popcorn">Movie Food</Link>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/#0">pages</Link>
                            <ul className="submenu">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/apps-download">Apps Download</Link>
                            </li>
                            <li>
                                <Link to="/sign-in">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/404">404</Link>
                            </li>
                            </ul>
                        </li>
                        
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                        <li>
                            <Link to="/#0">Languages</Link>
                            <ul className="submenu">
                                <li>
                                    <Link to="">English</Link>
                                </li>
                                <li>
                                    <Link to="">Hindi</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="header-button pr-0">
                            {
                                token?
                                <button 
                                    type="button" 
                                    style={{backgroundColor:"blueviolet",color:"white",borderRadius:"10px"}}
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                                : 
                                <Link to="/sign-up">join us</Link>
                            
                            }
                            
                        </li>
        </ul>
    </>
  )
}

export default Navigation;