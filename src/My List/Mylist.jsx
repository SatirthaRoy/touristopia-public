import React, { useState } from 'react'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { MdCurrencyExchange } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import { Slide } from 'react-awesome-reveal';

const Mylist = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [spots, setSpots] = useState(data);

  if(data.length) {
    return (
      <div className='w-[95%] mx-auto mt-28 space-y-20 dark:text-white'>
        <Slide><h1 className='text-5xl md:text-7xl font-semibold text-center'>My List</h1></Slide>
        <div>
        <table className=' w-full text-sm md:text-lg'>
          <tr className='divide-x text-left text-sm md:text-lg'>
            <th>Spot Name</th>
            <th>Spot Information</th>
            <th className=''>Edit / Delete</th>
          </tr>
          {spots.map((spot, i) => {
            return (
              <>
                <tr key={i} className='divide-x'>
                  <td className='font-semibold'>{i+1}. {spot.spot_name}</td>
                  <td className='text-sm md:text-lg'>
                    <div className='flex gap-3 items-center'><MdCurrencyExchange className='text-blue-500' />{spot.cost}$</div>
                    <div className='flex gap-3 items-center'><FaPeopleGroup className='text-blue-500'/>{spot.visitors_per_year}</div>
                    <div className='flex gap-3 items-center'><FaCalendarDay className='text-blue-500'/>{spot.time}</div>
                  </td>
                  <td className='space-y-4'>
                    <button onClick={() => {
                      navigate(`/update/${spot._id}`)
                    }} className='p-2 md:p-4 rounded-xl text-xl md:text-4xl text-white bg-blue-400'><FaEdit/></button>
                    <br />
                    <button onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#FF2D00",
                        cancelButtonColor: "#07EE3B",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          axios.delete(`https://tourist-management-serverside.vercel.app/delete/${spot._id}`)
                          .then(res => {
                            console.log(res);
                            setSpots(spots.filter(s => s._id !== spot._id))
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            });
                          })
                        }
                      });
                    }} className='p-2 md:p-4 rounded-xl text-xl md:text-4xl text-white bg-red-500'><MdDeleteForever/></button>
                  </td>
                </tr>
              </>
            )
          })}
        </table>
          
        </div>
      </div>
    )
  }else {
    return <h1 className='text-center text-9xl mt-28 dark:text-white'>YOU HAVE NOT ADDED ANY SPOTS.</h1>
  }
}

export default Mylist