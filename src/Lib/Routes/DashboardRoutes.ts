import { DefaultRoute } from './DefaultRoute.Interface';
import { postRoutes } from './PostRoutes';

export interface DashBoardRoutes {
  path: string;

  children: {
    me: DefaultRoute
    post: typeof postRoutes
  },
}
export const dashboardRoutes: DashBoardRoutes = {
  path: '/dashboard',

  children: {
    me: {
      path: 'me',
      fullPath: '/dashboard/me',
    },

    post: postRoutes
  },
};
