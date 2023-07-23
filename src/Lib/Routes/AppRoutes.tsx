import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthGuard } from '../Guards/AuthGuard';
import routes from './Routes';

const NotFound = React.lazy(() => import('Page/NotFoundPage'));
const IndexPage = React.lazy(() => import('Page/Index'));
const AppPage = React.lazy(() => import('Page/AppPage'));

import { AuthRoutes } from 'Page/Auth/AuthRoutes';
import { PostRoutes } from 'Page/Dashboard/Post/PostRoutes';

const DashboardPage = React.lazy(() => import('Page/Dashboard/DashboardPage'));
const ProfilePage = React.lazy(() => import('Page/Profile/ProfilePage'));

export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={routes.home.path} element={<IndexPage />} />

          <Route path={routes.app.path} element={<AppPage />}>
            <Route path={routes.app.children.me.path} element={<AuthGuard />}>
              <Route path={routes.app.children.me.path} element={<ProfilePage />} />
            </Route>
          </Route>

          <Route path={routes.dashboard.path} element={<DashboardPage />}>
            <Route path={routes.dashboard.children.me.path} element={<ProfilePage />} />
            {PostRoutes}
          </Route>
          

          {AuthRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
