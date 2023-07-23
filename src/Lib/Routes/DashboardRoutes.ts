import { DefaultRoute } from './DefaultRoute.Interface';

export interface DashBoardRoutes {
  path: string;

  children: {
    me: DefaultRoute
  },
}
export const dashboardRoutes: DashBoardRoutes = {
  path: '/dashboard',

  children: {
    me: {
      path: 'me',
      fullPath: '/dashboard/me',
    },
  },
};
