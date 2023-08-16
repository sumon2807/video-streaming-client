import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'
import Banner from '../../Home/Banner/Banner';


const NavBar = () => {
    return (
        <>
            <header className=' absolute top-0 left-0 w-full flex justify-between items-center text-white py-6 px-10 z-10'>
                <a href="#" className=' font-extrabold text-4xl space-x-1'>mOvex</a>
                <ul className='flex'>
                    <Link><li>Home</li></Link>
                    <Link><li>Adults</li></Link>
                    <Link><li>Kids</li></Link>
                    <Link><li>Trand</li></Link>
                    <Link><li>My Collection</li></Link>
                </ul>
                <div className='flex search relative w-[300px] h-[40px]'>
                    <input className=' absolute left-0 top-0 w-[100%] h-[100%] text-white bg-transparent border-b-2 rounded-lg pl-4' type="text" placeholder='Search' />
                    <FaSearch className='absolute top-2/4 -translate-y-2/4 right-3 text-white' />
                </div>
            </header>
            <Banner></Banner>
        </>
    );
};

export default NavBar;

