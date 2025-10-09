
import React, { useState } from 'react';
import useCardData from '../../Hooks/useCardData';
import { Download, Star } from 'lucide-react';
import AllCards from './AllCards';
import { Search } from 'lucide-react';
import Spinar from '../Spinar/Spinar';

const AllCard = () => {
    const {data,loadding}=useCardData();
    const {title,ratingAvg,downloads,image,companyName}=data
    
    const [search , setsearch]=useState('')
    const trem = search.trim().toLocaleLowerCase()
    const mydata = trem? data.filter((proData)=>proData.companyName.toLocaleLowerCase().includes(trem)):data;
    // console.log(mydata);
    return (
        
<div>
  {
    loadding?<Spinar></Spinar>:<div className='bg-[#e9e9e9]'>

    
        <div className='flex justify-between py-3 px-4 py- items-center'>
            <p className='text-xl'>All App avibale ({mydata.length}/10)</p>

            {/* this is scarh */}
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Search" />
</label>


        </div>
     <div className='grid  mx-auto pb-4 gap-y-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-[#e9e9e9]'>
           {
            mydata.map((cardData)=> <AllCards key={cardData.id} cardData={cardData}></AllCards>)
        }

     </div>
</div>
        
  }
</div>
       
    );
};

export default AllCard;