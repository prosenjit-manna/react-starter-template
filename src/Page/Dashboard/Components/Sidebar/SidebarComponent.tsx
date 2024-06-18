import React from 'react';
import routes from 'Lib/Routes/Routes';
import MenuLink from './MenuLink';

export default function SidebarComponent() {
  return (
    <div 
      className='flex flex-col sm:flex-row sm:justify-around' 
      data-test-id="dashboard-sidebar">
      <div className='w-72 h-screen'>
        <div className='flex items-center justify-start mx-6 mt-10'>
          <img
            className='h-8 w-8'
            src='https://loremflickr.com/200/100/logo'
            alt='Workflow'
          />
          <span className='text-gray-600  ml-4 text-2xl font-bold'>
            React UI Kit
          </span>
        </div>
        <nav className='mt-10 px-6 '>

          <MenuLink
            text='Profile'
            activeMenuPaths={routes.dashboard.me.path}
            link={routes.dashboard.me.path}
          />

          <MenuLink
            text='Logout'
            link={routes.logout.path}
          />
          
        </nav>
      </div>
    </div>
  );
}
