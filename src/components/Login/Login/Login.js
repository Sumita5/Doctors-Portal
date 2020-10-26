import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import {Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form";
import LoginBG from '../../../images/loginBG.png';


const Login = () => {
    document.title = 'LOGIN'
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    // Login Registration Data-Start
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
    // Login Registration Data-End
    
    return (
        <div className="container login-bg">

            <div className="row h-75 d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <div className="card shadow border-0 py-4 px-3">
                        {isLoggedIn ?
                            <>
                                <h3 className='text-center text-solid font-weight-light mb-3'>Login Now</h3>
                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                    {errors.email && <span className="text-danger">* Required</span>}
                                    <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                    {errors.password && <span className="text-danger">* Required</span>}
                                    <Link className='text-brand bold d-block mt-3' onClick={() => setIsLoggedIn(!isLoggedIn)}>Create An account</Link>
                                    <button type='submit' className='btn btn-block btn-brand my-4'>Login</button>
                                </form>
                                
                            </>
                            :
                            <>
                                <h3 className='text-center text-solid font-weight-light mb-3'>Create Account</h3>
                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <input ref={register({ required: true })} name='name' placeholder='Name' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="text" />
                                    {errors.name && <span className="text-danger">* Required</span>}
                                    <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                    {errors.email && <span className="text-danger">* Required</span>}
                                    <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                    {errors.password && <span className="text-danger">* Required</span>}
                                    <Link className='text-brand bold d-block mt-3' onClick={() => setIsLoggedIn(!isLoggedIn)}>Already Have An Account?</Link>
                                    <button type='submit' className='btn btn-block btn-brand my-4'>Registration</button>
                                </form>
                                
                            </>
                        }
                        <div className="btn-group" role="group" aria-label="Basic example">
                                    <button className="btn text-brand" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign In</button>
                                    <button className="btn text-brand"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook Sign In</button>
                                </div>
                    </div>
                </div>
                <div className="offset-md-1 col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid mt-4" src={LoginBG} alt="" />
        </div>
            </div>
        </div>
    );
};

export default Login;