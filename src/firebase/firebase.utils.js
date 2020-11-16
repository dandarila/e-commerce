import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB72y8kgevC3NDYSKGc03opI5Tn2f1Z4o0",
  authDomain: "crown-db-e7950.firebaseapp.com",
  databaseURL: "https://crown-db-e7950.firebaseio.com",
  projectId: "crown-db-e7950",
  storageBucket: "crown-db-e7950.appspot.com",
  messagingSenderId: "6342585412",
  appId: "1:6342585412:web:e857d7651ab57b803c6011",
  measurementId: "G-0VS7855HK2"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try { 
      await userRef.set({
        displayName,
        email, 
        createdAt, 
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

