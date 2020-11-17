import React, { } from 'react';


import { FavoriteFilm } from '../components/movie';
import './HomePage.scss';

const FavoritesPage = ({ children }) => {


  return (
    <div className="page page--home">
      <section className="pt-4 pt-md-11 featured">
        <div className="container">
          <div className="row">
            <FavoriteFilm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;