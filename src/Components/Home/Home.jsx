import React from 'react';
import Hero from '../Hero/Hero';
import Info from '../Hero/Info';

import useCardData from '../../Hooks/useCardData';
import HomeCardsData from '../HomeCardsData/HomeCardsData';
import { NavLink } from 'react-router';
import { TrendingUp } from 'lucide-react';


const Home = () => {
    const {data,loadding}=useCardData();
    
    // console.log(data);
    const someData= data.slice(0,8)
    if (loadding) return <p>Loading...</p>;
    
    
    
    return (
      <div className=" pb-4 bg-[#e9e9e9]">
          <Hero></Hero>
        {/* <Info className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl -translate-y-1/2 z-20" ></Info> */}
        <Info></Info>



       <div className=" py-16 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold text-[#2f276d] flex items-center gap-2">
        Trending Apps
        <TrendingUp className="w-8 h-8 text-[#7d5cff]" />
      </h2>
      <p className="text-gray-500 mt-3 text-lg">
        Explore All Trending Apps on the Market developed by us
      </p>
    </div>

        
        

   


        <div className='grid  my-4 gap-y-4 grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4'>
          {
          someData.map(cardData=> <HomeCardsData key={cardData.id} cardData={cardData} ></HomeCardsData> )
          }
           
        </div>
        <div className='text-center my-6'> 
          <NavLink to='/card' className='btn text-white px-5 rounded-[4px] text-xl text-center bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]'> Show All  </NavLink>

        </div>

        
        
      </div>
    
      
    
    )
};

export default Home;