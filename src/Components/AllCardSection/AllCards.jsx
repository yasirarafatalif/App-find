import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AllCards = ({cardData}) => {
    return (
        <Link to={`/apps/${cardData.id}`}>
        <div>
            <div className="card  bg-base-100 w-94  hover:scale-105 transition shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={cardData.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{cardData.title}:{cardData.companyName}</h2>
   
   
  </div>
 

    <div className='flex px-2 py-2 justify-between items-center'>
        <div className=''> <button className=" btn text-green-400 bg-gray-200 "> <Download/> {cardData.downloads} </button> </div>
             <div className=''> <button className=" btn text-blue-400 bg-gray-200 "> <Star/> {cardData.ratingAvg} </button> </div>

    </div>
</div>
            
        </div>
        </Link>
    );
};

export default AllCards;