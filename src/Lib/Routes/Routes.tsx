import { dashboardRoutes } from './DashboardRoutes';

export const routes = {
  home: {
    path: '/',
  },
  login: {
    path: '/login'
  },
  logout: {
    path: '/logout'
  },
  forgetPassword: {
    path: '/forget-password'
  },
  register: {
    path: '/register'
  },
  app: {
    path: '/app',

    children: {
      me: {
        path: '/app/me',
        fullPath: '/app/me'
      }
    }
  },
  dashboard: dashboardRoutes
};

export default routes;
