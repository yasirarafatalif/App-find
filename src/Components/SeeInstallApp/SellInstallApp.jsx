import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useCardData from '../../Hooks/useCardData';
  import { ToastContainer, toast } from 'react-toastify';

import {  Download,  Star, ThumbsUp } from 'lucide-react';
import GraphCharts from './GraphCharts';

const SellInstallApp = () => {
  const installData = useCardData()
  const [click ,setclick]=useState(false);
  const { id } = useParams();
  const { data, loadding } = installData
     if (loadding) return <div className='flex justify-center my-auto items-center'>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  const cardData = data.find(p => String(p.id) === id)


  // console.log(cardData);
  const { image, title, companyName, downloads, ratingAvg, size, description, reviews, ratings } = cardData




  const notify = () => toast("Wow so easy!");


  const localstoregHandle=()=>{
   const  loacalData=  JSON.parse(localStorage.getItem('add-to-cart'))
   let updateList =[]
  
   
   if(loacalData){
    const isDubliacate = loacalData.find(p=>p.id===cardData.id)
    if(isDubliacate){
      return alert('sorry')
    }
    updateList=[...loacalData,cardData]
   }else{
    updateList.push(cardData)
   }
   localStorage.setItem('add-to-cart', JSON.stringify(updateList))

  }

  
  
  return (
    <section>
      <div className="bg-[#e9e9e9]  flex  justify-center flex-col p-4 font-sans">

        {/* The card itself */}
        <div className="bg-[#e9e9e9]   p-8 w-full flex flex-col md:flex-row gap-8">

          {/* Left Side: App Icon */}
          <div className="flex-shrink-0">
            <div className="w-58 h-58 bg-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
              {/* You can place your app icon image here */}
              <img src={image} alt="FLIP App Icon" className="w-full h-full object-cover rounded-3xl" />

            </div>
          </div>

          {/* Right Side: App Details */}
          <div className="flex-1 flex flex-col text-center md:text-left">

            {/* App Title */}
            <h1 className="text-4xl font-bold text-gray-800">
              {title}: {companyName}
            </h1>


            <p className="mt-2 text-gray-500">
              Developed by <a href="#" className="text-purple-600 hover:underline">productive.io</a>
            </p>


            <div className="border-t border-purple-300 my-6">

            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8 text-left">

              {/* Downloads */}
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Downloads</span>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-bold text-gray-900">{downloads}M</p>
                  
                  <Download className="h-10 w-7 text-gray-400"/>
                </div>
              </div>

              {/* Average Ratings */}
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Average Ratings</span>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-bold text-gray-900">{ratingAvg}</p>
                  
                  <Star className="h-10 w-8 text-purple-500"/>
                </div>
              </div>

              {/* Total Reviews */}
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase">Total Reviews</span>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-3xl font-bold text-gray-900">{reviews}K</p>
                  <ThumbsUp className="h-10 w-8 text-purple-500" />
                  
                </div>
              </div>
            </div>

            {/* Install Button */}
            <button onClick={()=> {
              notify()
              setclick(true)
              localstoregHandle()
            }} disabled={click} className="w-[300px] bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg mt-8 hover:bg-green-600 transition-colors duration-300">
              {click?"Installed": `Install Now (${size} MB)`}
            </button>
            <ToastContainer />



          </div>

        </div>
          <div className='border-b border-gray-400 '>
          

          </div>

          {/* this is garph cart section  */}


       <div className='space-x-3'>
        <h3 className='text-gray-500 text-4xl my-2'>Rtings </h3>
        <div className='h-96'>
          <GraphCharts ratings={ratings}></GraphCharts>
   

        </div>
    
       </div>




          {/* this is garph discription section  */}
          <div className='mx-5'>
            <h1 className='text-4xl text-gray-500 font-bold'>
              Discription
            </h1>
            <p className='text-gray-500'>
              {description}
            </p>
          </div>

      </div>

    </section>
  );
};

export default SellInstallApp;