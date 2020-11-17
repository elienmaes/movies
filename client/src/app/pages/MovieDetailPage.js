import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { MovieDetail } from '../components/movie';
import { useFirestore } from '../services';

const MovieDetailPage = ({ children }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { getMovie } = useFirestore();


  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getMovie(id);
      setMovie(data);
    };

    if (!movie) {
      fetchData();
    }
  }, []); //For running an effect once, pass in an empty array

  return (
    <div className="page page--detailmovie">
      <div className="container">
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetailPage;