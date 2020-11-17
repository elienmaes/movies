import React, { } from 'react';

import './HomePage.scss';
import slideshow_1 from '../assets/slideshow_1.png';
import slideshow_2 from '../assets/slideshow_2.png';
import slideshow_3 from '../assets/slideshow_3.png';
import slideshow_4 from '../assets/slideshow_4.png';

const HomePage = ({ children }) => {


  return (
    <div className="page page--home">
      <section className="pt-4 pt-md-11 featured">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 mx-auto my-5">
              <h1 className="text-center">Welcome</h1>
              <p className="text-center my-2">Here you can find a quick tour to get you started</p>
            </div>
            <div className="col-12 col-md-12 col-lg-12 mx-auto">
              <div id="carouselExampleCaptions" className="carousel slide shadow  mb-2 bg-white rounded" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={slideshow_1} className="d-block w-100" alt="guided tour" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Genres Page</h5>
                      <p>In this page you can select the genre to view te optional movies.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={slideshow_2} className="d-block w-100" alt="guided tour" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Detail Page</h5>
                      <p>Click on the 'detail' button to retrieve more information about the movie.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={slideshow_3} className="d-block w-100" alt="guided tour" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Most Recent Page</h5>
                      <p>Find out which movies are from this year.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={slideshow_4} className="d-block w-100" alt="guided tour" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Shopping Cart Page</h5>
                      <p>See which movies you like to purchase to watch.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <i className="fas fa-angle-left fa-2x" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <i className="fas fa-angle-right fa-2x" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;