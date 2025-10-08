import React from 'react';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import HeroImg from '../../../public/assest/hero.png'
import Info from './Info';

const Hero = () => {
    return (
      <div className='text-center mx-auto flex justify-center pt-6'>
        <img src={HeroImg} alt="" srcset="" />
      </div>
     
    );
};

export default Hero;