import React, { lazy } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

const ComponentsSample = lazy(() => import('./pages/ComponentsSample'));
const DialogButton = lazy(() => import('./pages/DialogButton'));
const Main = lazy(() => import('./pages/Main'));
const Notfound = lazy(() => import('./pages/Notfound'));
const Title = lazy(() => import('./pages/Title'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: 'btn', element: <DialogButton /> },
      { path: 'comp', element: <ComponentsSample /> },
      { path: '404', element: <Notfound /> },
      { path: '/', element: <Title /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
