import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import CourtesyNavigation from './CourtesyNavigation';
import * as Routes from '../../routes';

import { useShoppingCartContext } from '../../services';

import './Header.scss';

const Header = ({ children }) => {
  const { displayItems } = useShoppingCartContext();





  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark own_purple navigation ">
        <h1 className="navbar-brand">
          <Link to={Routes.LANDING} className="logo__link"></Link>
        </h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto  flex-grow-1">
            <li className="nav-item">
              <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.GENRES} className="nav-link" activeClassName="active">Genres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.MOSTRECENT} className="nav-link" activeClassName="active">Most recent</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={Routes.MYFAVORITES} className="nav-link" activeClassName="active">My favorites</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Zoek" aria-label="Search" />
            <button className="btn mr-2 my-2 my-sm-0 bg-white" type="submit"><i className="fas fa-search"></i></button>
          </form>
          <div className="shopping">
            <Link to={Routes.CART} className="btn mx-5 my-2 my-sm-0 bg-white shopping"><i className="fas fa-shopping-cart own_purple">{displayItems}</i></Link>
          </div>
          <CourtesyNavigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
