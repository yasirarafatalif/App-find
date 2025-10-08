import { Download, Star } from 'lucide-react';
import React from 'react';

const HomeCardsData = ({cardData}) => {
    // console.log(cardData);
    const {title,ratingAvg,downloads,image,companyName}=cardData
    return (
        <div className="card  bg-base-100 w-94  hover:scale-105 transition shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}:{companyName}</h2>
   
   
  </div>
   {/* <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
      <div>

      </div>
    </div> */}

    <div className='flex px-2 py-2 justify-between items-center'>
        <div className=''> <button className=" btn text-green-400 bg-gray-200 "> <Download/> {downloads} </button> </div>
             <div className=''> <button className=" btn text-blue-400 bg-gray-200 "> <Star/> {ratingAvg} </button> </div>

    </div>
</div>
    );
};

export default HomeCardsData;