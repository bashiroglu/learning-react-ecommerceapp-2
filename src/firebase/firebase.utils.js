import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/* the firestore and auth automaticly will be attached keyword of firebase */

const firebaseConfig = {
  apiKey: 'AIzaSyALfZbtrPoPyU6OA6tbdxKO3jSRdToN4jQ',
  authDomain: 'e-commerce-61486.firebaseapp.com',
  databaseURL: 'https://e-commerce-61486.firebaseio.com',
  projectId: 'e-commerce-61486',
  storageBucket: 'e-commerce-61486.appspot.com',
  messagingSenderId: '712519234440',
  appId: '1:712519234440:web:ac37e4e43f949c35f0003d',
  measurementId: 'G-QS11R14QVG'
}; /* this is config file of firebase, it use to connect to our db  */
/* it was firebaseConfig in doc, so I changed it firebaseConfig this one, 
to avoid missunderstang with our own config fil */

firebase.initializeApp(firebaseConfig); /* this start process */

export const auth = firebase.auth(); /* we get funct of auth method and assign that to auth*/
export const firestore = firebase.firestore(); /* we get funct of firestore method and assign that to firestore*/

const provider = new firebase.auth.GoogleAuthProvider(); /*  almost the same wit others */
provider.setCustomParameters({
  prompt: 'select_account'
}); /* we add option object here, this option means open popup and allow user to choose his orher profile */
export const signInWithGoogle = () => auth.signInWithPopup(provider);/* this take provider and give us funct of signInWithGoogle */

export default firebase;
