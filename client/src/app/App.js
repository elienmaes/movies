import React, { } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider, ShoppingCartProvider } from './services';
import { RouteWithLayout } from './utilities';

import ScrollToTop from './components/ScrollToTop';
import { BaseLayout } from './layouts';
import { HomePage, SignInPage, MoviesPage, MovieDetailPage, FavoritesPage, MostrecentPage, CartPage } from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <ShoppingCartProvider>
              <Router basename={'/eindwerk-pgmgent-eliemaes1'}>
                <ScrollToTop />
                <Switch>
                  <RouteWithLayout exact path={Routes.LANDING} layout={BaseLayout} component={HomePage} />
                  <Redirect from={Routes.HOME} to={Routes.LANDING} />
                  <RouteWithLayout exact path={Routes.GENRES} layout={BaseLayout} component={MoviesPage} />
                  <RouteWithLayout exact path={Routes.MOSTRECENT} layout={BaseLayout} component={MostrecentPage} />
                  <RouteWithLayout exact path={Routes.MOVIES_DETAIL} layout={BaseLayout} component={MovieDetailPage} />
                  <RouteWithLayout exact path={Routes.MYFAVORITES} layout={BaseLayout} component={FavoritesPage} />
                  <RouteWithLayout exact path={Routes.CART} layout={BaseLayout} component={CartPage} />
                  <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={BaseLayout} component={SignInPage} />
                </Switch>
              </Router>
            </ShoppingCartProvider>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
