'use client';
import React from 'react';
import HomeCarousel from '../../components/carousel/HomeCarousel';
import Navbar from '../../components/bar/Navbar'
import HeroSlider from '../../components/slider/HeroSlider';
import { motion } from "framer-motion";
import Homefooter from '../../components/footer/Homefooter';


export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#111] text-white"
      >
      <Navbar/>
      <HeroSlider/>
    <div className="bg-[#0d1117] min-h-screen">
      <div className='py-0 px-13'>
      <HomeCarousel
        heading="Because You Watched Eternal Sunshine" movieIds={[2,6,5,3,7,4,8]}
      />
      <HomeCarousel
        heading="Top 10 in India Today"
        movieIds={[18,33,29,31,34,30,35,19,32,36]}
        variant="top10"
      />
      <HomeCarousel
        heading="Recently Added" movieIds={[18,19,29,30,31,32,33]}
        variant="new"
      />
      <HomeCarousel
        heading="Tv Series"  movieIds={[4,21,22,37,39,40,42]} type="tvShow"
      />
      </div>
    <Homefooter/>
    </div>
    
    </motion.div>
  )
}