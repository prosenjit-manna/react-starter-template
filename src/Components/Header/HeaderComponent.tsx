/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Lib/Routes/Routes';
import { useAppDispatch } from '../../Lib/Store/hooks';
import { userSliceActions } from '../../Lib/Store/User/User.Slice';
import { useViewportSize } from '@mantine/hooks';
import { Burger, Button, Menu } from '@mantine/core';
import { FaUserLarge } from 'react-icons/fa6';

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
                  <Menu
                    shadow='md'
                    width={200}>
                    <Menu.Target>
                      <Button>
                        <FaUserLarge />
                      </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item onClick={logOut}>Logout</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
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
