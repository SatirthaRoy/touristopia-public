import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { MdCurrencyExchange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";

const Card = ({spot}) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 dark:bg-[#030A1A] border border-white shadow-lg">
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
        <h3 className='font-bold'>For: {spot.season}</h3>
        <div className="card-actions justify-center">
          <button onClick={() => navigate(`/spots/${spot._id}`)} className="btn bg-blue-500 hover:bg-blue-500 w-full text-white font-bold rounded-full">View Details</button>
        </div>
      </div>
    </div>
  )
}

const CountrySpots = () => {
  const {country} = useParams();
  const data = useLoaderData();
  return (
    <div className='w-[95%] mx-auto mt-16 space-y-32 dark:text-white'>
      <h1 className='text-5xl md:text-7xl font-semibold'>Spots of {country.replace(country[0], country[0].toUpperCase())}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((d, i) => <Card spot={d} key={i}/>)}
      </div>
    </div>
  )
}

export default CountrySpots