import React from 'react'

const Gallery = () => {
  return (
    <div className='mx-auto w-[95%] space-y-8'>
      <h1 className='text-5xl md:text-7xl text-center font-bold'>Gallery</h1>
      <p className='text-lg font-normal text-center'>Here are some moments our travelers captured.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Playa_Maya%2C_Ko_Phi_Phi%2C_Tailandia%2C_2013-08-19%2C_DD_10.JPG/1200px-Playa_Maya%2C_Ko_Phi_Phi%2C_Tailandia%2C_2013-08-19%2C_DD_10.JPG" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div>
          <img src="https://theglobalwizards.com/wp-content/uploads/2018/10/Batu-Caves-Stairs-Kuala-Lumpur-Malaysia.jpg" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1223269800/photo/deers-having-food.jpg?s=612x612&w=0&k=20&c=QTgIDPu8xzrKh_zrPkQafqq4Kfg-Gk1SgnAiLiQYO9M=" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div>
          <img src="https://cdn.britannica.com/84/148284-050-88EB5026/Taman-Negara-National-Park-Peninsular-Malaysia.jpg" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
        <div>
          <img src="https://www.malaymail.com/malaymail/uploads/images/2023/11/05/160896.JPG?v=1713421860" alt="" className='size-full object-cover rounded-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default Gallery