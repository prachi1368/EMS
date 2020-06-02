import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home.page';
import Products from './pages/products/products.page';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Home Page Route */}
        <Route path="/home" component={Home} />
        {/* Products Page Route */}
        <Route path="/products" component={Products} />
        {/* Redirect to /home/ when just domain is entered */}
        <Redirect
          exact
          from="/"
          to={{
            pathname: '/home/'
          }}
        />
        {/* When none routes match */}
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
