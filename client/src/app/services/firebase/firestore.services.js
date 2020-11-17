import React, { useContext } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({ children }) => {
  const { app } = useFirebase();
  const db = app.firestore();


  const getMovies = async () => {
    const query = await db.collection('movies').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const movies = await querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        price: '€ 2,99',
        ...doc.data()
      }
    });
    return movies;
  };

  const getMovie = async (id) => {
    const docRef = await db.collection('movies').doc(id);
    const docSnapshot = await docRef.get();
    return {
      uid: docSnapshot.id,
      ...docSnapshot.data()
    };
  };


  return (
    <FirestoreContext.Provider value={{ getMovies, getMovie }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};