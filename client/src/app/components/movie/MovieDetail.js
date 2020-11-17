import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useShoppingCartContext } from '../../services';
import * as Routes from '../../routes';
import classnames from 'classnames';

import './MovieDetail.scss';

//DETAILPAGE: contains all the information of the selected movie
const MovieDetail = ({ movie }) => {
  console.log(movie);
  const [likes, setLikes] = useState(JSON.parse(localStorage.getItem('movieapp.likes')) || []);
  const [like, setLike] = useState(false);
  const { handlePurchase } = useShoppingCartContext();

  useEffect(() => {
    localStorage.setItem('movieapp.likes', JSON.stringify(likes));
  }, [likes]);

  const handleLike = (ev) => {
    const l = !like;
    if (l) {
      addLike(movie.uid);
    } else {
      removeLike(movie.uid);
    }
    setLike(l);
  }
  const addLike = (movieId) => {
    setLikes([
      ...likes,
      {
        id: movieId,
        movie: movie,
        createdAt: new Date().getTime(),
      }
    ]);
  };
  const removeLike = (movieId) => {
    setLikes(likes.filter(movie => movie.id !== movieId));
  }

  return (
    <Fragment>
      <div className="mt-3"><Link to={Routes.GENRES} className="btn btn-purple"><i className="fas fa-long-arrow-alt-left pr-2"></i>Back</Link></div>
      <div className="row align-items-stretch movie">
        {!!movie
          ?
          (
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 my-5" key={movie.uid}>
              <div className="card shadow-sm p-3 mb-5 bg-transparent rounded border-purple movie" data-id={movie.uid}>
                <picture className="card-img-top movie__picture">
                  {!!movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <h5 className="card-title title text-truncate font-weight-bolder own_purple">{movie.Title}</h5>
                    <i onClick={handleLike} className={classnames('like', (like) ? "align-self-center fas fa-heart fa-2x own_purple" : "align-self-center far fa-heart fa-2x own_purple")}></i>       {/* classnames library: ternary expression to set the heart full when clicked */}
                  </div>
                  <div className="card-text">
                    <div className="pb-1 mt-2">{movie.Year}</div>
                    <div className="pb-2">{movie.Runtime}</div>
                    <div className="pb-3">
                      <span className="font-weight-bold own_purple">Genre : </span>
                      {movie.Genre}
                    </div>
                    <div className="pb-3">
                      <span className="font-weight-bold own_purple">Actors : </span>
                      {movie.Actors}
                    </div>
                  </div>
                  <p className="card-description pb-3">
                    <span className="font-weight-bold own_purple">Plot : </span>
                    {movie.Plot}
                  </p>
                  <button onClick={() => handlePurchase(movie.uid, movie)} className="btn btn-purple">Buy</button>
                </div>
              </div>
            </div>
          )
          : <p>No movie.</p>
        }
      </div>
    </Fragment>
  )
};

export default MovieDetail;