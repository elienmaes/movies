import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import fetch from 'node-fetch';
import { moviesTitle } from './data_movies/moviestitle';
import { movieapiConfig } from './config';
import Proxy from './Proxy';

//seeding the database with new movies
(async () => {

  let collectionRef = db.collection('movies');

  // Create a Movie and spread the content of the the movie together with timestamps to the database
  const createMovie = (movie) => {
    console.log(movie);

    const data = {
      ...movie,
      price: (2 + Math.random() * 4),
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  // Create movies via promises (async)
  const createMovies = async () => {
    const promises = [];
    for (let i = 0; i < moviesTitle.length; i++) {
      const title = moviesTitle[i].replace(' ', '+');
      const movieURL = `${movieapiConfig.URL}${title}`;
      promises.push(createMovie(await Proxy.fetchDataFromApi(movieURL)));
    }
    return await Promise.all(promises);
  };

  await createMovies();

})();

//output: seeding in database works but only the getTimestamp data.
