import React, { lazy } from 'react';

import { Crown } from 'components/Icons';
import { ROUTES } from 'config/routes';

const options = [
  {
    path: ROUTES.HOME_PAGE,
    component: lazy(() => import(/* webpackChunkName: "dashboard" */ 'pages/HomePage')),
    name: 'home',
    icon: <Crown />,
  },
];

export default options;
