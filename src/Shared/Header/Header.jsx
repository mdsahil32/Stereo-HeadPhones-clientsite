import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navOption = <>
        <li><Link to={'/'}><p className='hover:bg-red-600 p-2 rounded'>Home</p></Link></li>
        <li><Link to={'/blog'}>
            <p className='hover:bg-red-600 p-2 rounded'>blog</p></Link></li>
    </>

    return (
        <div className="navbar fixed z-10 bg-black border-x-8 border-red-600">
            <div className="navbar-end z-10">
                <div className="dropdown mx-2">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <div className='md:mx-auto bg-black md:text-center'>
                    <h2 className='text-red-600 text-xl md:text-3xl py-3 uppercase  font-bold md:text-center'>Stereo HeadPhones</h2>
                </div>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-red-600  ">
                    {navOption}
                </ul>
            </div>
        </div>
    );
};

export default Header;