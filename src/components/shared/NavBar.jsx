import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import './shared.css';

const NavBar = () => {
  return (
    <>
      <header className="">
        <section className="bg-black h-15 flex relative">
          <span className='font-bold ml-5 uppercase p-6 text-gray-300 w-1/3'>
            <div className=""> <Link to="/">Logo </Link></div>
          </span>
          <ol role="list" className='w-1/3 text-gray-300 flex space-x-10 p-6 ml-10'>
            <li className='liss font-black'> <Link to="/"> Todo </Link> </li>
            <li className='liss'><NavLink to="/categoria/frutas">Frutas </NavLink></li>
            <li className='liss'> <NavLink to="/categoria/verduras">Verduras </NavLink></li>
            <li className='liss'><NavLink to="/categoria/abarrotes">Abarrotes </NavLink></li>
          </ol>
          <div className='cart-widget absolute top-0 right-0  mt-5 w-1/3'>
            <CartWidget />
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
