import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Card = ({country}) => {

  const card = useRef();
  const para = useRef();
  const heading = useRef();
  const img = useRef();

  const {contextSafe} = useGSAP();

  const handleEnter = contextSafe(() => {
    console.log('entered');
    gsap.to(para.current, {opacity:1 ,y: 0, duration: .4, ease: 'power3.inOut'})
    gsap.to(img.current, {height: '150%', width: '150%'})
  })

  const handleLeave = contextSafe(() => {
    gsap.to(para.current, {opacity:0 ,y: 100, duration: .4, ease: 'power3.inOut'})
    gsap.to(img.current, {height: '100%', width: '100%'})
  })

  useEffect(() => {
    gsap.set(para.current, {opacity: 0, y: 100})
  })

  return (
    <Link to={`/country/${country.country_name.toLowerCase()}`} className='cursor-pointer z-10'>
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} ref={card} className='relative overflow-hidden bg-gradient-to-b from-[#0000008C] to-transparent rounded-2xl h-full'>
        <div className='size-full flex justify-center items-center absolute -z-10 rounded-2xl'>
          <img ref={img} src={country.image} alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div className='p-5 flex flex-col gap-6 h-full'>
          <h1 ref={heading} className='heading text-white font-bold text-3xl'>{country.country_name}</h1>
          <p ref={para} className='pointer-events-none para text-white font-normal text-base flex-grow'>{country.description}</p>
        </div>

      </div>
    </Link>
  )
}

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://tourist-management-serverside.vercel.app/countries')
    .then(res => setCountries(res.data))
  }, [])

  return (
    <div className='w-[95%] mx-auto mt-20 space-y-6'>
      <h1 className='text-5xl md:text-7xl text-center font-bold'>Countries</h1>
      <p className='text-center font-normal text-lg'>Select your desire country to travel your dream place.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {countries.map((c, i) => <Card country={c} key={i}/>)}
      </div>
    </div>
  )
}

export default Countries