import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import { ROUTES } from 'config/routes';
import Page from 'components/Layout/Page';
import AuthRoute from 'components/Routes/AuthRoute';

const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ 'pages/HomePage'));
const Login = loadable(() => import(/* webpackChunkName: "HomePage" */ 'pages/Login'));

const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Page>
        <AuthRoute exact path={ROUTES.HOME_PAGE} component={HomePage} />
      </Page>
    </Switch>
  );
};

export default Router;
