import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import store from './Store';
import Cart from './shopify/Cart';
import Nav from './Nav';

import RthreeF from "./pages/RthreeF";
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Welcome from './pages/Welcome';

class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
    });
  }
  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'});
  }
  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'});
  }

  render() {
    const state = store.getState(); // state from redux store
      return (
      <div>
        <Nav handleCartOpen={this.handleCartOpen}/>
        <Cart
          checkout={state.checkout}
          isCartOpen={state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/Home" exact component={RthreeF} />
          <Route path="/" exact component={Welcome} />
          <Route path="/shop" component={Shop} />
          <Route path="/gallery" component={Gallery} />
        </Switch> 
        <div style={{ bottom: "0", position: "fixed", textAlign: "center", width: "100vw" }}>
            <h6>© 2018 West Coast Customs. | All Rights Reserved | Made With ♥ In SoCal</h6>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(App);