import React, { useContext, useRef } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const LogIn = () => {


  const {LoggedIn, resetPassword  } = useContext(authContext)
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef()


  const from = location.state?.from?.pathname || '/';



  const handleReset = (e) => { 

    const email = emailRef.current.value;
    console.log (email);

    resetPassword (email)
    .then (() => { 

      toast.success('password reset email sent!')

      
    })
    .catch (err => {


      console.log (err)
     })







  }


  const handleLogIn = (event) => {



    event.preventDefault();


    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log (email, password);

    LoggedIn (email, password)
    .then (result => { 


      const logged = result.user;
      console.log (logged);
      navigate(from, { replace: true })

    })

    .catch (err => { 

      console.log (err);
    });
  }

  





    return (
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Log In now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Form className="card-body" onSubmit = {handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" ref={emailRef} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name = 'password' type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password? <button onClick={handleReset} className='btn-link'>
              Reset Your password
              </button></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p>New to here? <Link to = '/register' className='btn-link'>Create an account</Link></p>
      </Form>
    </div>
  </div>
</div>            
        </div>
    );
};

export default LogIn;