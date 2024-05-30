import React, { useContext, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { contextData } from './Provider';
import { FaUser } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav = () => {

  const {user, logOut, darkmode, setDarkmode} = useContext(contextData);
  const {contextSafe} = useGSAP();

  const profile = useRef();

  const links = <>
          <NavLink to='/'  className={({isActive}) => isActive ? 'text-green-500' : '' }><a>Home</a></NavLink>
          <NavLink to='/all-spots' className={({isActive}) => isActive ? 'text-green-500' : '' }><a>All Tourist Spots</a></NavLink>
          {user && <><NavLink to='/add' className={({isActive}) => isActive ? 'text-green-500' : '' }><a>Add Tourist Spots</a></NavLink>
          <NavLink to={`/mylist/${user.email}`} className={({isActive}) => isActive ? 'text-green-500' : '' }><a>My List</a></NavLink></>}
  </>

  const handleEnter = contextSafe(() => {
    console.log('entering');
    gsap.to(profile.current, {scale: 1, duration: .5, ease: 'power3.inOut'})

  })

  const handleLeave = contextSafe(() => {
    gsap.to(profile.current, {scale: 0, duration: .5, ease: 'power3.inOut'})
  })

  return (
    <div className="navbar dark:text-white mx-auto w-full md:w-[95%] pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="z-50 menu menu-sm dropdown-content mt-3 space-y-5 p-3 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="font-bold text-base md:text-3xl">Touristopia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-normal">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-1 md:space-x-4">
        <label className="swap swap-rotate">
    
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" onChange={(e) => setDarkmode(!darkmode)}/>
          
          {/* sun icon */}
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          
          {/* moon icon */}
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          
        </label>

        {user && <div className='relative'>
          <div className='rounded-full size-12 border' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={user.photoURL} alt="" className='size-full object-cover rounded-full'/>
          </div>
          <div ref={profile} className={`dark:bg-[#030A1A] dark:text-white user absolute scale-0 top-10 origin-top -right-1/2 p-3 rounded-lg border shadow-md space-y-4 z-10 bg-white`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <h1 className='font-semibold text-base flex items-center text-nowrap gap-4'><FaUser/> {user.displayName}</h1>
            <button onClick={() => {
              logOut()
              .then()
              .catch(e => {
                console.log('logout error: ', e);
              })
            }} className='w-full rounded-full p-2 text-white font-semibold bg-red-500'>Logout</button>
          </div>
        </div>}
          {!user && <><Link to='/login' className="btn bg-green-500 hover:bg-green-500 text-white text-xs py-1 px-2 md:py-2 md:px-4 md:text-base">Login</Link>
          <Link to='/register' className="btn bg-blue-500 hover:bg-blue-500 text-white text-xs py-1 px-2 md:py-2 md:px-4 md:text-base">Register</Link></>}
      </div>
    </div>
  )
}

export default Nav