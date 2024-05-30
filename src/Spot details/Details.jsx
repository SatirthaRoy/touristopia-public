import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Details = () => {
  const spot = useLoaderData();

  return (
    <div className='mx-auto w-[95%] mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 dark:text-white'>
      <div className='col-span-2 space-y-11 border-r p-4'>
        <h2 className='font-bold text-4xl underline'>{spot.spot_name}</h2>
        <img src={spot.img} alt="" className='object-cover rounded-3xl'/>
        <h2 className='font-bold text-4xl underline'>Description</h2>
        <p className='font-semibold text-lg'>{spot.description}</p>
      </div>
      <div className='col-span-1 p-4'>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Spot Name:</span> {spot.spot_name}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Country:</span> {spot.country.replace(spot.country[0], spot.country[0].toUpperCase())}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Location:</span> {spot.location}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Average Cost:</span> {spot.cost}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Seasonality:</span> {spot.season}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Travel Time:</span> {spot.time} days</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Visitors/year:</span> {spot.visitors_per_year}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Email:</span> {spot.email}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        <div>
          <p className='text-xl font-normal'><span className='font-semibold'>Name:</span> {spot.name}</p>
          <div className='divider dark:before:bg-white dark:after:bg-white'></div>
        </div>
        
      </div>
    </div>
  )
}

export default Details