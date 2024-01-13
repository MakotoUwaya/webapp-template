import { Navigate, RouteObject } from 'react-router-dom';

import About from '@/about';
import Information from '@/information';

const baseUrl = 'webapp-template';

const routes: RouteObject[] = [
  {
    path: `${baseUrl}/`,
    element: <About />,
  },
  {
    path: `${baseUrl}/about`,
    element: <About />,
  },
  {
    path: `${baseUrl}/information`,
    element: <Information />,
  },
  {
    path: '*',
    element: <Navigate to={`${baseUrl}/`} />,
  },
];

export default routes;
