import React, { } from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import './Footer.scss';

const Footer = ({ children }) => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4 col-lg-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to={Routes.HOME} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.GENRES} className="nav-link">Genres</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.MOSTRECENT} className="nav-link">Meest recent</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.MYFAVORITES} className="nav-link">Mijn favorieten</Link>
              </li>
              <li className="nav-item">
                <Link to={Routes.AUTH_SIGN_IN} className="nav-link">Meld je aan</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/" className="nav-link">Audio & ondertiteling</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Genres</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Helpcenter</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Cookievoorkeuren</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Wetelijke bepalingen</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <ul className="nav flex-row d-flex justify-content-around">
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-facebook-square fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-github fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-twitter-square fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-linkedin fa-2x"></i></a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link"><i className="fab fa-instagram-square fa-2x"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-12 text-center mb-3">
            <div className="own_purple_hover">© 2020 Copyright - Elien Maes</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
