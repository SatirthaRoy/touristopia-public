import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { contextData } from '../Shared/Provider';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [show, setShow] = useState(false);

  const {auth ,signUp, googleProvider, gitProvider, signInWithPop} = useContext(contextData);

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const [weakPass, setWeakPass] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if(regex.test(data.password)) {
      setWeakPass(false);
      signUp(data.email, data.password)
      .then(result => {
        console.log(result.user);
        updateProfile(auth.currentUser, {displayName: data.name, photoURL: data.photo});
        toast.success('succesfully registered', {
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
        navigate('/');
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
    } else {
      setWeakPass(true);
      toast.error('Weak Password', {
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
    }
    
  }

  const handleIconClick = (provider) => {
    signInWithPop(provider)
    .then(result => {
      console.log(result.user);
      toast.success('succesfully registered', {
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
      navigate('/');
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
  return  (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='dark:bg-black dark:text-white bg-white bg-opacity-50 px-6 py-10 rounded-3xl shadow-lg mt-16 flex flex-col gap-9 w-[98%] md:w-4/5 lg:w-1/2 mx-auto'>
      <input type='text' {...register("name",{required: true})} placeholder='Enter your name' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-500 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:border-b-4 transition-all'/>
      {errors.name && <span className='text-red-500'>This field is required</span>}

      {/* register your input into the hook by invoking the "register" function */}
      <input type='email' {...register("email",{required: true})} placeholder='Enter your email' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-500 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:border-b-4 transition-all'/>
      {errors.email && <span className='text-red-500'>This field is required</span>}

      <input type='text' {...register("photo",{required: true})} placeholder='Your photo URL' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-500 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:border-b-4 transition-all'/>
      {errors.photo && <span className='text-red-500'>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <div className='w-full relative'>
        <input type={show ? 'text' : 'password'} {...register("password", { required: true })} placeholder='Enter your password' className='text-blue-500 font-semibold text-lg md:text-2xl p-4 bg-gray-50 border-b border-blue-500 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:border-b-4 w-full transition-all'/>
        {show ? <FaEye className='absolute right-6 top-4 text-blue-500 size-8' onClick={() => setShow(!show)}/> : <FaEyeSlash className='absolute right-6 top-4 text-blue-500 size-8' onClick={() => setShow(!show)}/>}
      </div>
      
      {/* errors will return when field validation fails  */}
      {errors.password && <span className='text-red-500'>This field is required</span>}
      {weakPass && <span className='text-red-500'>Password must have an uppercase, a lowercase and be atleast 6 characters</span>}


      <input type="submit" value='Register' className='p-4 font-semibold bg-blue-500 text-white text-2xl rounded-full cursor-pointer'/>
      <div className='divider before:bg-blue-500 after:bg-blue-500 text-dark-para font-normal text-2xl'>OR</div>
      <div className='flex items-center justify-center gap-8'>
        <FcGoogle onClick={() => {handleIconClick(googleProvider)}} className='size-11 cursor-pointer'/>
        <FaGithub onClick={() => {handleIconClick(gitProvider)}} className='size-11 cursor-pointer'/>
      </div>
      <div className='divider before:bg-blue-500 after:bg-blue-500'></div>
      <p className='text-center text-dark-para text-lg md:text-2xl font-normal'>Have an account? <Link to='/login' className='text-blue-500 font-semibold cursor-pointer'>Login Now</Link></p>
    </form>
    </>
  )
}

export default Register