import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import { useShoppingCartContext } from '../../services';

const CartList = ({ }) => {
  const { handleRemove } = useShoppingCartContext();

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('movieapp.purchase')) || []);


  return (
    <div>
      <div>
        {!!cart
          ? cart.map(product => {
            return (
              <div className="container" key={product.id}>
                <div className="row my-3">
                  <div className="col-4 col-md-6 col-lg-6">
                    <div className="font-weight-bold">Product</div>
                  </div>
                  <div className="col-4 col-md-2 col-lg-2">
                    <div className="font-weight-bold">Price</div>
                  </div>
                  <div className="col-4 col-md-2 col-lg-2">
                    <div className="font-weight-bold">Total</div>
                  </div>
                  <div className="col-12 col-md-2 col-lg-2">
                    <div></div>
                  </div>
                </div>
                <div className="row mobile">
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="media mb-5">
                      <img className="media-object" src={product.movie.Poster} alt={product.movie.Title} />
                      <div className="media-body">
                        <h4 className="media-heading mx-3"> <Link to={Routes.MOVIES_DETAIL.replace(':id', product.id)} className="own_purple">{product.movie.Title}</Link></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-2 col-lg-2">
                    <div>€ 2.99</div>
                  </div>
                  <div className="col-4 col-md-2 col-lg-2">
                    <div>€ 2.99</div>
                  </div>
                  <div className="col-4 col-md-2 col-lg-2">
                    <button onClick={() => handleRemove(product.id, setCart)} className="btn btn-danger remove">
                      <span className="glyphicon glyphicon-remove"></span>
                  Remove
                </button>
                  </div>
                </div>
              </div>
            )
          })
          :
          <p className="text-center own_purple my-5">No items in your shopping cart yet</p>
        }
      </div>
      <div className="container">
        <table className="table table-hover total" >
          <thead>
            <tr>
              <td className="whitespace">   </td>
              <td className="whitespace">   </td>
              <td className="whitespace">   </td>
              <td><h3>Total</h3></td>
              <td className="text-right"><h3><strong className="d-flex">€ {!!cart ? parseFloat(cart.length * 2.99).toFixed(2) : <p className="ml-1">0</p>}</strong></h3></td>
            </tr>
            <tr>
              <td className="whitespace">   </td>
              <td className="whitespace">   </td>
              <td className="whitespace">   </td>
              <td>
                <button className="btn btn-outline-purple">
                  <span className="glyphicon glyphicon-shopping-cart"></span>
                  <Link to={Routes.GENRES} className="own_purple">Continue Shopping</Link>
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-purple">
                  Checkout
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
};

export default CartList;