import React, { useEffect, useState } from 'react';

const InstallApp = () => {
  const [install, setinstall]=useState([])
  const [sortOrder , setsortOrder]=useState('none')
  useEffect(()=>{
     const  loacalDataa=  JSON.parse(localStorage.getItem('add-to-cart'))
     if(loacalDataa) setinstall(loacalDataa);

  },[])


  const sortItem=(
    ()=>{
    if(sortOrder ==='price-asc'){
      return [...install].sort((a,b)=>a.size - b.size)
    } else if (sortOrder ==='price-desc'){
      return [...install].sort((a,b)=>b.size - a.size)
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
    return (
   <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
    
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
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
         <select defaultValue="Color scheme" className="select select-accent">
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
                    <span>{p.downloads}M</span>
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
            <button onClick={()=>handleRemove(p.id)} className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-sm hover:bg-green-600 transition-colors">
              Uninstall
            </button> 
            
          </div>)
          
         }
         
          
          {/* You can add more app items here */}
        </div>
      </div>
    </div>
    );
};

export default InstallApp;