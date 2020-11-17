import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore, useShoppingCartContext } from '../../services';
import * as Routes from '../../routes';

import './MostRecent.scss';

const Mostrecent = () => {
  const [recentMovies, setRecentMovies] = useState();
  const { getMovies } = useFirestore();
  const { handlePurchase } = useShoppingCartContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setRecentMovies(data);

    }

    fetchData();
  }, [getMovies]);

  //only display movies from recent year
  return (
    <div className="d-flex flex-wrap align-items-stretch justify-content-between most-recent" >
      {!!recentMovies
        ? recentMovies.filter(movie => movie.Year == new Date().getFullYear()).map((movie) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-3" key={movie.uid}>
              <div className="card movie" data-id={movie.uid}>
                <picture className="card-img-top movie__picture">
                  {!!movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : <Fragment></Fragment>}
                </picture>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">{movie.provider}</h6>
                  <h5 className="card-title  text-truncate">{movie.Title}</h5>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <Link to={Routes.MOVIES_DETAIL.replace(':id', movie.uid)} className="btn btn-purple">Detail</Link>
                  <button onClick={() => handlePurchase(movie.uid, movie)} className="btn btn-purple ">Buy</button>
                </div>
              </div>
            </div>
          )
        })
        : <p>No movies.</p>
      }
    </div>

  );
}

export default Mostrecent;