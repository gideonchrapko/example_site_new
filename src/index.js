import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import Client from 'shopify-buy';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './Store';
import persistor from './persistStore';

import './styles/shopify.css';
import "./styles/index.css";

const client = Client.buildClient({
  storefrontAccessToken: 'a416f71ae0b8cea01da02b110f7af961',
  domain: 'schweiz-foundry.myshopify.com'
});

store.dispatch({type: 'CLIENT_CREATED', payload: client});
// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then((res) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
});

client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
});

client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
});

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={customHistory}>
        <Route
          component={({ history }) => {
            window.appHistory = history;
            return <App />;
          }}
        />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
  );
