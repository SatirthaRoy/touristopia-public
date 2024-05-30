import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




const Card = ({spot}) => {

  const card = useRef();
  const para = useRef();
  const heading = useRef();
  const img = useRef();

  const {contextSafe} = useGSAP();

  const handleEnter = contextSafe(() => {
    console.log('entered');
    gsap.to(para.current, {opacity:1 ,y: 0, duration: .4, ease: 'power3.inOut'})
    gsap.to(heading.current, {y: 0, duration: .4, ease: 'power3.inOut'})
    gsap.to(img.current, {height: '150%', width: '150%'})
  })

  const handleLeave = contextSafe(() => {
    gsap.to(para.current, {opacity:0 ,y: 100, duration: .4, ease: 'power3.inOut'})
    gsap.to(heading.current, {y: card.current.getBoundingClientRect().height/2 - 30, duration: .4, ease: 'power3.inOut'})
    gsap.to(img.current, {height: '100%', width: '100%'})
  })

  useEffect(() => {
    gsap.set(para.current, {opacity: 0, y: 100})
    gsap.set(heading.current, {y: card.current.getBoundingClientRect().height/2 - 30})
  })

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} ref={card} className='overflow-y-hidden card relative bg-gradient-to-b from-[#0000008C] to-transparent rounded-2xl'>
      <div className='size-full flex justify-center items-center absolute -z-10 rounded-2xl'>
        <img ref={img} src={spot.img} alt="" className='size-full object-cover rounded-2xl'/>
      </div>
      <div className='p-5 flex flex-col gap-6 h-full'>
        <h1 ref={heading} className='text-white font-bold text-3xl'>{spot.spot_name}</h1>
        <p ref={para} className='pointer-events-none para text-white font-normal text-base flex-grow'>{spot.description}</p>
        <Link to={`/spots/${spot._id}`} className='bg-blue-500 text-white font-bold text-center p-3 rounded-full'>View Details</Link>
      </div>

    </div>
  )
}

const Spot = ({spots}) => {
  const six_spots = spots.length > 6 ? spots.slice(0, 6) : spots;
  console.log(six_spots);
  return (
    <div className='w-[95%] mx-auto space-y-10'>
      <h1 className='text-5xl md:text-7xl text-center font-bold'>Tourists Spots</h1>
      <p className='text-center font-normal text-lg'>Discover breathtaking destinations with our Tourist Spot section, where we showcase the world's most captivating locations waiting to be explored. From iconic landmarks to hidden gems, each spot is carefully curated to offer unforgettable experiences for travelers of all interests. Immerse yourself in the rich history and culture of ancient cities, unwind on pristine beaches with crystal-clear waters, or embark on thrilling adventures in scenic natural landscapes.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {six_spots.map((spot, i) => {
          return <Card spot={spot} key={i}/>
        })}
      </div>
      <div className='flex justify-center items-center'><button className='bg-green-400 text-white text-lg p-5 rounded-full font-semibold'><Link to='/all-spots'>See All Spots</Link></button></div>
      
    </div>
  )
}

export default Spot