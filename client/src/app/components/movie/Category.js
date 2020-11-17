//Setting categories to choose from

import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList';


const Category = ({ value, id }) => {
  const [genre, setGenre] = useState();

  useEffect(() => {
    setGenre(value);
  }, [])

  return ( //display every list of movies whitin the right genre
    <div className="mb-5" id={id}> {/* id that matches the category for the scroll */}
      <div className="badge badge-purple mt-4 p-3 vw-100 text-left" >{genre}</div>
      <MoviesList genre={genre} />
    </div>
  )
};

export default Category;