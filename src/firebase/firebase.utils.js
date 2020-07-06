import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-P4eoPOBuicVT0SXKeT67kefw3TOsmUw",
    authDomain: "crwn-db-44dbb.firebaseapp.com",
    databaseURL: "https://crwn-db-44dbb.firebaseio.com",
    projectId: "crwn-db-44dbb",
    storageBucket: "crwn-db-44dbb.appspot.com",
    messagingSenderId: "552957303464",
    appId: "1:552957303464:web:4ba0b31b8ca0c89164009d",
    measurementId: "G-6J75MWE8GG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc (`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
    const { displayName, email } =userAuth;
    
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      })
       } catch(error){
      console.log('error creating user', error.message );
     }
    }

    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propt: 'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;