
import React, { useState } from 'react';
import classnames from 'classnames';

import { useShoppingCartContext } from '../../services';
import './FavoriteFilm.scss';


const FavoriteFilm = () => {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('movieapp.likes')));
  const { handlePurchase } = useShoppingCartContext();

  const handleFavorite = (id) => {
    const arr = JSON.parse(localStorage.getItem('movieapp.likes'));
    let newLiked = arr.filter(item => item.id !== id); //remove unliked item from array of movies
    localStorage.setItem('movieapp.likes', JSON.stringify(newLiked));
    setFavorites(newLiked); //adding only movies that are liked to the local storage
  };

  const checkLiked = (id) => {
    const liked = JSON.parse(localStorage.getItem('movieapp.likes'));
    const newLiked = liked.filter(i => id === i.id); //Check if item is liked
    if (newLiked.length > 0) {
      return true;
    } else {
      return false;
    };
  };


  return (
    <div className="mb-5 row align-items-stretch">
      {
        !!favorites
          ? (favorites.map((favo, index) => {
            return (
              <div className="col-12 col-md-8 col-lg-6 col-xl-6 my-5" key={index}>
                <div className="card shadow-sm p-3 mb-5 rounded border-purple favorite" data-id={favo.movie.uid}>
                  <picture className="card-img-top movie__picture">
                    <img src={favo.movie.Poster} alt={favo.movie.Title} />
                  </picture>
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                      <h5 className="card-title title text-truncate font-weight-bolder own_purple">{favo.movie.Title}</h5>
                      <i onClick={() => handleFavorite(favo.id)} className={classnames('favorite', (checkLiked(favo.id)) ? "align-self-center fas fa-heart fa-2x own_purple" : "align-self-center far fa-heart fa-2x own_purple")}></i>
                    </div>
                    <div className="card-text own_purple">
                      <div className="pb-1 mt-2">{favo.movie.Year}</div>
                      <div className="pb-2">{favo.movie.Runtime}</div>
                      <div className="pb-3">
                        <span className="font-weight-bold ">Genre : </span>
                        {favo.movie.Genre}
                      </div>
                      <div className="pb-3 own_purple">
                        <span className="font-weight-bold">Actors : </span>
                        {favo.movie.Actors}
                      </div>
                    </div>
                    <p className="card-description pb-3 own_purple">
                      <span className="font-weight-bold ">Plot : </span>
                      {favo.movie.Plot}
                    </p>
                  </div>
                  <div>
                    <button onClick={() => handlePurchase(favo.id, favo.movie)} className="btn btn-purple ">Buy</button>
                  </div>
                </div>
              </div>
            )
          })
          )
          : <p>No favorite.</p>
      }
    </div>
  )
};

export default FavoriteFilm;