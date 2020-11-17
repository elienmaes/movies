import React, { } from 'react';

import { Mostrecent } from '../components/movie';
import './HomePage.scss';

const MostrecentPage = ({ children }) => {
  return (
    <div className="page page--home">
      <section className="pt-4 pt-md-11 featured">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <Mostrecent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MostrecentPage;