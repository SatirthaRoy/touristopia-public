import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import { contextData } from '../Shared/Provider';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const {signIn, signInWithPop, googleProvider, gitProvider,} = useContext(contextData);

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
      console.log(result.user);
      toast.success('succesfully logged in', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      setError(null);
      if(location.state) {
        navigate(location.state);
      } else {
        navigate('/');
      }
    })
    .catch(e => {
      console.log('login error: ', e);
      setError(e);
    })
  }


  const handleIconClick = (provider) => {
    signInWithPop(provider)
    .then(result => {
      console.log(result.user);
      toast.success('succesfully logged in', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        if(location.state) {
          navigate(location.state);
        } else {
          navigate('/');
        }
    })
    .catch(e => {
      console.log('sign Up error: ', e);
      toast.error(e.message.split('/')[1].replaceAll(')', ''), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    })
  }

  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className='dark:bg-black dark:text-white bg-white bg-opacity-50 px-6 py-10 rounded-3xl shadow-lg mt-16 flex flex-col gap-9 w-[98%] md:w-4/5 lg:w-1/2 mx-auto'>
      {/* register your input into the hook by invoking the "register" function */}
      <input type='email' {...register("email",{required: true})} placeholder='Enter your email' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-300 placeholder:text-blue-300 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all'/>
      {errors.email && <span className='text-red-500'>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <div className='w-full relative'>
        <input type={show ? 'text' : 'password'} {...register("password", { required: true })} placeholder='Enter your password' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-400 placeholder:text-blue-300 focus:outline-none focus:border-blue-400 focus:border-b-4 w-full transition-all'/>
        {show ? <FaEye className='absolute right-6 top-4 text-blue-400 border-blue-400 size-8' onClick={() => setShow(!show)}/> : <FaEyeSlash className='absolute right-6 top-4 text-blue-400 border-blue-400 size-8' onClick={() => setShow(!show)}/>}
      </div>
      
      {/* errors will return when field validation fails  */}
      {errors.password && <span className='text-red-500'>This field is required</span>}
      {error && <span className='text-red-500'>{error.message.split('/')[1].replaceAll(')', '')}</span>}


      <input type="submit" value='Login' className='p-4 font-semibold bg-blue-500 text-white text-2xl rounded-full cursor-pointer'/>
      <div className='divider before:bg-blue-400 after:bg-blue-400 text-dark-para font-normal text-2xl'>OR</div>
      <div className='flex items-center justify-center gap-8'>
        <FcGoogle onClick={() => {handleIconClick(googleProvider)}} className='size-11 cursor-pointer'/>
        <FaGithub onClick={() => {handleIconClick(gitProvider)}} className='size-11 cursor-pointer'/>
      </div>
      <div className='divider before:bg-blue-400 after:bg-blue-400'></div>
      <p className='text-center text-dark-para text-lg md:text-2xl font-normal'>Don't have an account? <Link to='/register' className='text-blue-500 font-semibold cursor-pointer'>Register Now</Link></p>
    </form>
  )
}

export default Login

