/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import routes from '../../Lib/Routes/Routes';
import { useAppDispatch } from '../../Lib/Store/hooks';
import { userSliceActions } from '../../Lib/Store/User/User.Slice';
import { useViewportSize } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export default function HeaderComponent({
  handleMobileDrawer,
  sidebarOpened,
}: {
  handleMobileDrawer?: any;
  sidebarOpened?: boolean;
}) {
  const { width } = useViewportSize();

  const dispatch = useAppDispatch();

  function logOut() {
    dispatch(userSliceActions.logout());
  }

  return (
    <div>
      <nav className='bg-white   shadow '>
        <div className='mx-auto px-4 md:px-8'>
          <div className='flex items-center justify-between h-10 md:h-16'>
            <div className=' flex items-center'>
              <a
                className='flex-shrink-0'
                href='/'>
                <img
                  className='h-8 w-8'
                  src='https://loremflickr.com/200/100/logo'
                  alt='Workflow'
                />
              </a>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    className='text-gray-600  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium'
                    to={routes.login.path}>
                    Login
                  </Link>
                  <Link
                    className='text-gray-600  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium'
                    to={routes.register.path}>
                    Register
                  </Link>
                </div>
              </div>
            </div>
            {width > 767 && (
              <div className='block'>
                <div className='ml-4 flex items-center md:ml-6'>
                  <div className='ml-3 relative'>
                    <div className='relative inline-block text-left'>
                      <Popup
                        trigger={
                          <div>
                            <button
                              type='button'
                              className='  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500'
                              id='options-menu'>
                              <svg
                                width='20'
                                fill='currentColor'
                                height='20'
                                className='text-gray-800'
                                viewBox='0 0 1792 1792'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z'></path>
                              </svg>
                            </button>
                          </div>
                        }
                        position='bottom center'
                        on='hover'
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}>
                        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white  ring-1 ring-black ring-opacity-5'>
                          <div
                            className='py-1 '
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='options-menu'>
                            <Link
                              to={routes.dashboard.children.me.path}
                              className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 outline-none'
                              role='menuitem'>
                              <span className='flex flex-col'>
                                <span>Account</span>
                              </span>
                            </Link>
                            <button
                              onClick={logOut}
                              className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'>
                              Logout
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className='-mr-2 flex md:hidden'>
              <Burger
                opened={sidebarOpened || false}
                onClick={handleMobileDrawer}
              />
              
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              className='text-gray-600 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'>
              Home
            </a>
            <a
              className='text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'>
              Gallery
            </a>
            <a
              className='text-gray-600 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'>
              Content
            </a>
            <a
              className='text-gray-600 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              href='/#'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
