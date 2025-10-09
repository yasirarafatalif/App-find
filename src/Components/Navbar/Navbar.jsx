import React from 'react';
import {  Link, Links, NavLink } from 'react-router';
import LogoImg from '../../../public/assest/logo.png'
import { Search, Heart, Menu,House, Apple, Download, Github } from "lucide-react";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li><NavLink to='/home' className='btn btn-outline'>
        <House/>
        Home</NavLink></li>
    
      
      <li><NavLink to='/card' className='btn btn-outline'>
        <Apple/>
        App</NavLink></li>
      <li><NavLink to='/install' className='btn btn-outline'><Download/> Installng</NavLink></li>
      </ul>
    </div>
    

    {/* this is logo section */}
 <Link to='/home'>
   <div className='flex items-center gap-2'>
        <img src={LogoImg} width='40px ' height='40px' alt="" />
        <h1 className="text-xl font-bold text-blue-300">HERO.IO</h1>
        
    </div></Link>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal gap-2 px-1">
      <li><NavLink to='/home' className='btn btn-outline'>
        <House/>
        Home</NavLink></li>
    
      
      <li><NavLink to='/card' className='btn btn-outline'>
        <Apple/>
        App</NavLink></li>
      <li><NavLink to='/install' className='btn btn-outline'><Download/> Installng</NavLink></li>
     
 
      
    </ul>
  </div>
  <div className="navbar-end">
   {/* <Links>Contribute</Links> */}
   <NavLink to='https://github.com/yasiralif' className='btn text-white rounded-[4px] bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]'><Github/> Contribute</NavLink>
  </div>
</div>
    );
};

export default Navbar;