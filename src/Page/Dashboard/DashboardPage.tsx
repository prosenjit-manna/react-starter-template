import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../Components/Header/HeaderComponent';
import SidebarComponent from './Components/Sidebar/SidebarComponent';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { Drawer } from '@mantine/core';

export default function DashboardPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = useViewportSize();

  return (
    <div className='flex'>
      {width > 768 && (
        <SidebarComponent />
      )}

      <Drawer opened={opened} onClose={close}>
        <SidebarComponent />
      </Drawer>
      
      <div className='w-full'>
        <HeaderComponent handleMobileDrawer={open} />
        <Outlet />
      </div>
    </div>
  );
}
