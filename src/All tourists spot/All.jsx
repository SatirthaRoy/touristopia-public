import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { MdCurrencyExchange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { Slide } from 'react-awesome-reveal';


const Card = ({spot}) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 dark:bg-[#030A1A] shadow-lg border border-white">
      <figure className='h-80'><img src={spot.img} alt="Shoes" className='object-cover size-full'/></figure>
      <div className="card-body">
        <h2 className="card-title">{spot.spot_name}</h2>
        <div className='divider'></div>
        <div className='flex flex-wrap'>
          <p className='flex items-center gap-4'><MdCurrencyExchange/>{spot.cost}$</p>
          <p className='flex items-center gap-4'><FaPeopleGroup/>{spot.visitors_per_year}</p>
          <p className='flex items-center gap-4'><FaCalendarDay/>{spot.time}</p>
        </div>
        <div className='divider'></div>
        <h3 className='font-bold'>For: {spot.season} season</h3>
        <div className="card-actions justify-center">
          <button onClick={() => navigate(`/spots/${spot._id}`)} className="btn bg-blue-500 hover:bg-blue-500 w-full text-white font-bold rounded-full">View Details</button>
        </div>
      </div>
    </div>
  )
}


const All = () => {
  let data = useLoaderData();
  let [spots, setSpots] = useState(data);
  console.log(spots);

  return (
    <div className='w-[95%] mx-auto space-y-28 dark:text-white'>
      <Slide><h1 className='text-7xl font-bold mt-24'>All Tourist's Spots</h1></Slide>
      <div className='flex gap-4 items-center'>
        <h1 className='text-3xl font-semibold'>Sort by:</h1>
        <select className='dark:text-black px-4 py-2 rounded-lg bg-gray-200' name="sort" id="" onChange={(e) => {
          console.log(e.target.value);
          if(e.target.value === 'ascending') {
            setSpots(data.toSorted((a,b) => a.cost - b.cost))
          } else {
            setSpots(data);
          }
        }}>
          <option value="none">Default</option>
          <option value="ascending">Cost</option>
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {spots.map((spot, i) => <Card key={i} spot={spot}/>)}
      </div>
    </div>
  )
}

export default All