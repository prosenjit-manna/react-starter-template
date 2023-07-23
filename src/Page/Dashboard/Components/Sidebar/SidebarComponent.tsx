import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../../Lib/Routes/Routes';
import MenuLink from './MenuLink';
import { postRoutes } from 'Lib/Routes/PostRoutes';

export default function SidebarComponent() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-around'>
      <div className='w-72 h-screen'>
        <div className='flex items-center justify-start mx-6 mt-10'>
          <img
            className='h-8 w-8'
            src='https://loremflickr.com/200/100/logo'
            alt='Workflow'
          />
          <span className='text-gray-600  ml-4 text-2xl font-bold'>
            Tail-Kit
          </span>
        </div>
        <nav className='mt-10 px-6 '>
          <MenuLink
            text='Posts'
            activeMenuPaths={postRoutes.postMatchingPath}
            link={postRoutes.list.fullPath}
          />

          <Link
            className='hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600 rounded-lg '
            to={routes.dashboard.children.me.path}>
            <span className='mx-4 text-lg font-normal'>Profile</span>
          </Link>
          <MenuLink
            text='Logout'
            link={routes.logout.path}
          />
        </nav>
      </div>
    </div>
  );
}
