
import React, { useState } from 'react';
import useCardData from '../../Hooks/useCardData';
import { Download, Star } from 'lucide-react';
import AllCards from './AllCards';
import { Search } from 'lucide-react';
import Spinar from '../Spinar/Spinar';
import { Link } from 'react-router';

const AllCard = () => {
    const {data,loadding}=useCardData();
    const {title,ratingAvg,downloads,image,companyName}=data
    const [searchLoading, setSearchLoading] = useState(false);

    const [search , setsearch]=useState('')
    const trem = search.trim().toLocaleLowerCase()
    const mydata = trem? data.filter((proData)=>proData.companyName.toLocaleLowerCase().includes(trem)):data;
 
   
    return (
        
<div>
  {
    loadding?<Spinar></Spinar>:<div className='bg-[#e9e9e9]'>

    
        <div className='flex justify-between py-3 px-4 py- items-center'>
            <p className='text-xl'>All App avibale ({mydata.length}/50)</p>

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
  <input
  type="search"
  value={search}
  onChange={(e) => {
    setsearch(e.target.value);
    setSearchLoading(true); 
    setTimeout(() => setSearchLoading(false), 700); 
  }}
  placeholder="Search"
/>
</label>


        </div>
    <div>
  {
    searchLoading ? (
      
        <Spinar />
      
    ) : mydata.length === 0 ? (
      <div className='mx-auto flex flex-col gap-4 items-center justify-center bg-[#e9e9e9] min-h-screen'>
        <h3 className='text-6xl text-gray-600'>No Apps Found</h3>
        <Link to='/home' className='btn mt-5 text-white px-5 rounded-[4px] text-xl text-center bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]'>
          Go Back
        </Link>
      </div>
    ) : (
      <div className='grid mx-auto pb-4 gap-y-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-[#e9e9e9]'>
        {mydata.map((cardData) => (
          <AllCards key={cardData.id} cardData={cardData} />
        ))}
      </div>
    )
  }
</div>

</div>
        
  }
</div>
       
    );
};

export default AllCard;