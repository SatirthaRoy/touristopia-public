import React from 'react'
import Banner from './Banner/Banner'
import Spot from './Spot'
import { useLoaderData } from 'react-router-dom'
import Countries from './Countries'
import Gallery from './Gallery'
import Sponsors from './Sponsors'
import Footer from '../Shared/Footer'

const Home = () => {

  const spots = useLoaderData();


  return (
    <div className='mt-11 space-y-24 dark:text-white'>
      <Banner/>
      <Spot spots={spots}/>
      <Countries/>
      <Gallery/>
      <Sponsors/>
    </div>
  )
}

export default Home