import React, { useState } from 'react';


import CartList from '../components/movie/CartList';

import './CartPage.scss';

const CartPage = ({ children }) => {


  return (
    <div className="page page--cart" >
      <CartList />
    </div>
  )
};

export default CartPage;