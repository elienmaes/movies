import React, { } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


import { Category } from '../components/movie';

import './MoviesPage.scss';

const MoviesPage = ({ children }) => {

  return (
    <div className="page page--movie">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-12" id="top">
          <ul className="nav flex-column mt-4 ml-4">
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#romance"> {/* Use HashLink library to scroll to the element on the page with the id that matches the #hash-fragment in the link */}
                Romance
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#thriller">
                Thriller
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#action"  >
                Action
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#horror"  >
                Horror
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#comedy"  >
                Comedy
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#animation"  >
                Animation
            </Link>
            </li>
            <li className="nav-item mb-2">
              <Link activeclass="active" className="own_purple" to="/genres#drama" >
                Drama
            </Link>
            </li>
          </ul>
          <div className="m-4">
            <Link className="to-top__button" to="/genres#top">
              <i className="fas fa-arrow-alt-circle-up fa-3x own_purple"></i>
            </Link>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 col-12">
          <Category value={'Romance'} id={"romance"} /> {/* Set the id as a prop to merge with the component in Category.js  */}
          <Category value={'Thriller'} id={"thriller"} />
          <Category value={'Action'} id={"action"} />
          <Category value={'Horror'} id={"horror"} />
          <Category value={'Comedy'} id={"comedy"} />
          <Category value={'Animation'} id={"animation"} />
          <Category value={'Drama'} id={"drama"} />
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;