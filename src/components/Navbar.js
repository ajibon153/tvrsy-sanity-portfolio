import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Navbar() {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex items-center '>
          <NavLink
            to='/'
            activeClassName='text-white'
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
          >
            Aji
          </NavLink>
          <NavLink
            to='/post'
            className='inflex-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-200 '
            activeClassName='text-red-100 bg-red-700'
          >
            Blog Post
          </NavLink>
          <NavLink
            to='/project'
            className='inflex-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-200 '
            activeClassName='text-red-100 bg-red-700'
          >
            Project
          </NavLink>
          <NavLink
            to='/about'
            className='inflex-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-green-200 '
            activeClassName='text-red-100 bg-red-700'
          >
            About
          </NavLink>
        </nav>
        <div className='inline-flex py-3 py-3 my-6'>
          <SocialIcon
            url='https://www.instagram.com/ajibon153/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.facebook.com/adji.anshierudcd/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/aji-muhammad-fauji-90737715a/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
