import React, { useEffect, useState } from 'react';
import InstallImg from "../../../public/assest/App-Error.png";
import { Link, NavLink } from 'react-router';
import useNumberToMillion from '../../Hooks/useNumberToMillion';
import { ToastContainer, toast } from 'react-toastify';
import useCardData from '../../Hooks/useCardData';
import Spinar from '../Spinar/Spinar';



 
  const InstallApp = () => {
  const {loadding}=useCardData();
    
  const [install, setinstall]=useState([])
  const [sortOrder , setsortOrder]=useState('none')
  useEffect(()=>{
     const  loacalDataa=  JSON.parse(localStorage.getItem('add-to-cart'))
     if(loacalDataa) setinstall(loacalDataa);

  },[])
  const notify = () => toast("Successfully Uninstalled");


  const sortItem=(
    ()=>{
    if(sortOrder ==='price-asc'){
      return [...install].sort((a,b)=>a.downloads - b.downloads)
    } else if (sortOrder ==='price-desc'){
      return [...install].sort((a,b)=>b.downloads - a.downloads)
    }else{
      return install
    }
  }
  ) ()



    const handleRemove=(id)=>{
   const  loacalData=  JSON.parse(localStorage.getItem('add-to-cart'))

   let upDateList = loacalData.filter(p=> p.id!==id)
   setinstall(upDateList)
    
   localStorage.setItem('add-to-cart', JSON.stringify(upDateList))

  }
  
  
  const{formatDownloads}=useNumberToMillion()
    return (
      <div>
        {
          loadding?<Spinar></Spinar>:   <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
    
      <div >
        
        


       
        {
          install.length>0?( <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 flex items-center justify-center gap-3">
             {install.length>0?"Your Installed Apps":"Please Selected Apps"}
            
            {/* <AppLogo /> */}
          </h1>
          <p className="mt-3 text-gray-500">
            Explore All Trending Apps on the Market developed by us
           
          </p>
        </header>

        {/* Filter and Results Bar */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-indigo-500 font-semibold">{install.length} Apps Found</p>
         <select onChange={(e)=>setsortOrder(e.target.value)} defaultValue="Color scheme" className="select select-accent">
  <option disabled={true}>Sort By Size</option>
  <option value='none'>None</option>
  <option value='price-asc'>High-Low</option>
  <option value='price-desc' >Low-High</option>
</select>
        </div>

       <div  className="border-t border-gray-200">

       </div>

        {/* App List */}
        <div className="mt-6 space-y-4">
          {/* Single App Item Card */}
         {
          sortItem.map(p=> <div key={p.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between transition hover:shadow-md">
            
            {/* Left side: Icon and Details */}
            <div className="flex items-center gap-4">
              {/* App Icon */}
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex-shrink-0">
                {/* You can place the actual app icon image here */}
                <img src={p.image} alt="App Icon" className="w-full h-full object-cover rounded-xl" />
              </div>

              {/* App Info */}
              <div>
                <h2 className="font-semibold text-gray-900">
                  {p.title}
                </h2>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    {/* <ArrowDownTrayIcon className="w-4 h-4" /> */}
                    <span>{formatDownloads(p.downloads)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/* <StarIcon className="w-4 h-4 text-yellow-500" /> */}
                    <span>{p.ratingAvg}</span>
                  </div>
                  <span>{p.size} MB</span>
                </div>
              </div>
            </div>
           

            {/* Right side: Uninstall Button */}
         <div>
             <button onClick={()=>{
              handleRemove(p.id)
              notify()
             }} className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-sm hover:bg-green-600 transition-colors">
              Uninstall
              
            </button>
            
           
         </div>
            
          </div>)
          
         }
         
          
          {/* You can add more app items here */}
        </div>
      </div>):(<div className=' my-auto mx-auto '>
          <div className='flex  justify-center-safe'>
            <img className='mt-20' src={InstallImg} alt="" />
          </div>
        <div className='flex justify-center mt-10'>
            <Link to='/home' className='btn text-white text-xl py-6 text-center rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]'> Go Back</Link>
          </div>
        </div>)
        }
      </div>
    </div>
        }
        <ToastContainer /> 
      </div>

    );
};

export default InstallApp;