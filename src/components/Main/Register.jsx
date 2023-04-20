import React, { useContext, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import { FaEyeSlash, FaGithub, FaGoogle, FaRegEye } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {

  const { user, createRegister, googleLoged } = useContext(authContext)
  const [showPassword, setShowPassword] = useState(false)







  console.log(user)



  const handleRegister = (event) => {

    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.password2.value;


    if (password !== passwordConfirmation) {


      toast.error('Password do not match')
      return;
    }




    if (! /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
      toast.error('Password should have Minimum eight characters, at least one letter, one number and one special character')

      return





    }


    console.log(email, password);

    createRegister(email, password)
      .then((result) => {

        const registered = result.user;

        console.log(registered)

        toast.success('Congratulations! You are now member of Al  Hurbar')




      })
      .catch(err => {


        console.log(err)
      });






  }


  const handleGoogle = () => {


    googleLoged()
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);



      })

      .catch(err => {

        console.log(err);
      })




  }






  return (
    <div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className='relative'>


                  <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" >




                  </input>

                  {

                    showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} className='absolute mr-auto left-48 top-5'></FaEyeSlash> : <FaRegEye onClick={() => setShowPassword(true)} className='absolute mr-auto left-48 top-5'></FaRegEye>
                  }

                </div>

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className='relative'>


                  <input name='password2' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" >



                  </input>


                  {

                    showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} className='absolute mr-auto left-48 top-5'></FaEyeSlash> : <FaRegEye onClick={() => setShowPassword(true)} className='absolute mr-auto left-48 top-5'></FaRegEye>
                  }                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <div>
                <button onClick={handleGoogle} className='btn btn-outline  flex justify-center items-center space-x-2 my-5'>
                  <h2>Continue with google</h2>

                  <FaGoogle></FaGoogle>
                </button>

                <button className='btn btn-outline  flex justify-center items-center space-x-2'>
                  <h2>Continue with Github</h2>

                  <FaGithub />
                </button>




              </div>

              <p>Already have an account? <Link to='/Login' className='btn-link'>Log In</Link></p>
            </Form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;