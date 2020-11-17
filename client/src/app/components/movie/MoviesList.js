import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore, useShoppingCartContext } from '../../services';

import * as Routes from '../../routes';

import './MoviesList.scss';

const MoviesList = ({ genre }) => {
  const [movies, setMovies] = useState();
  const { getMovies } = useFirestore();
  const { handlePurchase } = useShoppingCartContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setMovies(data);
    }
    fetchData();
  }, [getMovies]);


  return (
    <div className="d-flex flex-wrap align-items-stretch justify-content-between movie-list">
      {!!movies
        ? movies.filter(movie => movie.Genre.split(',', 1) == genre).map((movie) => {
          return (
            <Fragment key={movie.uid}>
              <div className="card movie mr-3 my-5" data-id={movie.uid}>
                <picture className="card-img-top movie__picture">
                  {!!movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">{movie.provider}</h6>
                  <h5 className="card-title  text-truncate">{movie.Title}</h5>
                  <div className="d-flex justify-content-between">
                    <Link to={Routes.MOVIES_DETAIL.replace(':id', movie.uid)} className="btn btn-outline-purple">Detail</Link>
                    <button onClick={() => handlePurchase(movie.uid, movie)} className="btn btn-purple">Buy {movie.price}</button>
                  </div>
                </div>
              </div>
            </Fragment>
          )
        })
        : <p>No movies.</p>
      }
    </div>
  );
};

export default MoviesList;