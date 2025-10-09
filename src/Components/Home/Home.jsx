import React from 'react';
import Hero from '../Hero/Hero';
import Info from '../Hero/Info';

import useCardData from '../../Hooks/useCardData';
import HomeCardsData from '../HomeCardsData/HomeCardsData';
import { NavLink } from 'react-router';
import { TrendingUp } from 'lucide-react';
import BuildApps from '../Hero/BuildApps';
import Spinar from '../Spinar/Spinar';



const Home = () => {
    const {data,loadding}=useCardData();
    
    
    const someData= data.slice(0,8)

    return (
    <div>
      { 
        loadding?  <Spinar></Spinar>
    :  <div className=" pb-4 bg-[#e9e9e9]">
        <BuildApps></BuildApps>
          <Hero></Hero>
      
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
      }
    </div>
    
      
    
    )
};

export default Home;