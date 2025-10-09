import React from 'react';
import Img from '../../../public/assest/error-404.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
     <div>
           <div className=' py-5 flex justify-center '>
            <img src={Img} alt="" srcset="" />
           
            
        </div>
          <div className='flex justify-center my-4'>
            <NavLink to='/home' className='btn text-white text-xl py-6 text-center rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]'> Go Back</NavLink>
          </div>

     </div>
    );
};

export default ErrorPage;