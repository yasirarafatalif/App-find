import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import useNumberToMillion from '../../Hooks/useNumberToMillion';

const AllCards = ({cardData}) => {
  const{formatDownloads}=useNumberToMillion()
  const {id,companyName,title,downloads,ratingAvg,image,ratings}=cardData
  
    return (
        <Link to={`/apps/${id}`}>
        <div>
            <div className="card  bg-base-100 w-94   hover:scale-105 transition shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}:{companyName}</h2>
   
   
  </div>
 

    <div className='flex px-2 py-2 justify-between items-center'>
        <div className=''> <button className=" btn text-green-400 bg-gray-200 "> <Download/> {formatDownloads(downloads)} </button> </div>
             <div className=''> <button className=" btn text-blue-400 bg-gray-200 "> <Star/> {ratingAvg} </button> </div>

    </div>
</div>
            
        </div>
        </Link>
    );
};

export default AllCards;