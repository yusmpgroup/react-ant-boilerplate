import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import { authSelector } from 'store/selectors';

const AuthRoute = ({ component: Component, render, ...rest }) => {
  const token = useSelector(authSelector).token;
  const fallback = ROUTES.LOGIN;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return <Redirect to={{ pathname: fallback }} />;
        }
        return Component ? <Component {...props} /> : render && render();
      }}
    />
  );
};

export default AuthRoute;
