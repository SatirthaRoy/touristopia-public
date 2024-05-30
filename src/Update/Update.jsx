import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const Update = () => {
  const data = useLoaderData();
  const {id} = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      spot_name: form.spot_name.value,
      country: form.country_name.value.toLowerCase(),
      img: form.img_link.value,
      location: form.location.value,
      description: form.description.value,
      cost: form.avg_cost.value,
      season: form.seasonality.value,
      time: form.time.value,
      visitors_per_year: form.visitors.value
    }
    axios.patch(`https://tourist-management-serverside.vercel.app/update/${id}`, updatedData)
    .then(res => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Spot updated",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(-1);
    })
    .catch(e => console.log(e))
  }

  return (
    <div className='w-[95%] md:w-1/2 mx-auto space-y-20 mt-20 dark:text-white'>
      <h1 className='text-5xl md:text-7xl text-center font-semibold'>Update Form</h1>
      <form onSubmit={handleSubmit} className="space-y-7 border rounded-2xl p-5 shadow-xl">
        {/* spot name */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Spot Name:</h1>
          <input type="text" name="spot_name" defaultValue={data.spot_name} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter spot name"/>
        </label>
        {/* country name */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Country Name:</h1>
          <input type="text" name="country_name" defaultValue={data.country} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter country"/>
        </label>
        {/* image link */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Image link:</h1>
          <input type="text" name="img_link" defaultValue={data.img} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter image link"/>
        </label>
        {/* location */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Location:</h1>
          <input type="text" name="location" defaultValue={data.location} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter location"/>
        </label>
        {/* short description */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Description:</h1>
          <input type="text" name="description" defaultValue={data.description} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Short description"/>
        </label>
        {/* Average cost */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Avarage cost:</h1>
          <input type="number" name="avg_cost" defaultValue={data.cost} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Avarage cost"/>
        </label>
        {/* Seasonality */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Seasonality:</h1>
          <input type="text" name="seasonality" defaultValue={data.season} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Seasonality"/>
        </label>
        {/* Travel time */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Travel time:</h1>
          <input type="number" name="time" defaultValue={data.time} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Travel time in days"/>
        </label>
        {/* Visitors per year */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Visitors / year:</h1>
          <input type="number" name="visitors" defaultValue={data.visitors_per_year} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="visitors per year"/>
        </label>
  
        {/* add button */}
        
        <label className="grid grid-cols-3">
          <input type="submit" value='Update' className="col-span-3 box-content cursor-pointer text-lg font-semibold flex-1 px-6 py-3 bg-blue-400 text-white"/>
        </label>
        <label className="grid grid-cols-3">
          <input type="button" value='Cancel' onClick={() => navigate(-1)} className="col-span-3 box-content cursor-pointer text-lg font-semibold flex-1 px-6 py-3 bg-red-500 text-white"/>
        </label>
        
      </form>
    </div>
  )
}

export default Update