import axios from "axios";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { contextData } from "../Shared/Provider";

const Addspots = () => {

  const {user} = useContext(contextData);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const spot_data = {
      spot_name: form.spot_name.value,
      country: form.country_name.value.toLowerCase(),
      img: form.img_link.value,
      location: form.location.value,
      description: form.description.value,
      cost: form.avg_cost.value,
      season: form.seasonality.value,
      time: form.time.value,
      visitors_per_year: form.visitors.value,
      email: form.email.value,
      name: form.name.value
    }

    console.log(spot_data);
    axios.post('https://tourist-management-serverside.vercel.app/spots', spot_data)
    .then(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tour spot added",
        showConfirmButton: true,
        timer: 1500
      });
      console.log(res);
      form.reset();
    })
  }

  return (
    <div className='mt-40 w-[95%] md:w-[80%] lg:w-1/2 mx-auto border rounded-3xl p-6 dark:text-white'>
      <h1 className="text-center font-bold text-5xl md:text-7xl my-14">Spots Adding Form</h1>
      <form onSubmit={handleSubmit} className="space-y-7">
        {/* spot name */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Spot Name:</h1>
          <input type="text" name="spot_name" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter spot name"/>
        </label>
        {/* country name */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Country Name:</h1>
          <input type="text" name="country_name" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter country"/>
        </label>
        {/* image link */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Image link:</h1>
          <input type="text" name="img_link" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter image link"/>
        </label>
        {/* location */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Location:</h1>
          <input type="text" name="location" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter location"/>
        </label>
        {/* short description */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Description:</h1>
          <input type="text" name="description" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Short description"/>
        </label>
        {/* Average cost */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Avarage cost:</h1>
          <input type="number" name="avg_cost" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Avarage cost"/>
        </label>
        {/* Seasonality */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Seasonality:</h1>
          <input type="text" name="seasonality" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Seasonality"/>
        </label>
        {/* Travel time */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Travel time:</h1>
          <input type="number" name="time" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Travel time in days"/>
        </label>
        {/* Visitors per year */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">Visitors / year:</h1>
          <input type="number" name="visitors" className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="visitors per year"/>
        </label>
        {/* email */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">User email:</h1>
          <input type="email" name="email" defaultValue={user?.email} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter your email"/>
        </label>
        {/* name */}
        <label className="grid grid-cols-3"><h1 className="flex items-center text-base md:text-xl font-bold">User name:</h1>
          <input type="text" name="name" defaultValue={user?.displayName} className="dark:text-black dark:placeholder:text-blue-400 box-content col-span-2 text-lg font-semibold flex-1 p-4 bg-gray-50 border-b border-blue-200 placeholder:text-blue-200 focus:outline-none focus:border-blue-400 focus:border-b-4 transition-all" placeholder="Enter your name"/>
        </label>
        {/* add button */}
        
        <label className="grid grid-cols-3">
          <input type="submit" value='Add' className="col-span-3 box-content cursor-pointer text-lg font-semibold flex-1 px-6 py-3 bg-blue-400 text-white"/>
        </label>
        

        
      </form>
    </div>
  )
}

export default Addspots