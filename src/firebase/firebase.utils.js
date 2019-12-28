import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALfZbtrPoPyU6OA6tbdxKO3jSRdToN4jQ',
  authDomain: 'e-commerce-61486.firebaseapp.com',
  databaseURL: 'https://e-commerce-61486.firebaseio.com',
  projectId: 'e-commerce-61486',
  storageBucket: 'e-commerce-61486.appspot.com',
  messagingSenderId: '712519234440',
  appId: '1:712519234440:web:ac37e4e43f949c35f0003d',
  measurementId: 'G-QS11R14QVG'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  /* if there is no user object we return immedately  */
  if (!userAuth) return;
  /* this is doc reference */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /* and This is where we get snapshot bject */
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    /* if tehre is not snapshot object with this uid we want to create */
    const { displayName, email } = userAuth;
    const createdAt = new Date(); /*  we get the time to store  */
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('we could not create user', error.message);
    }
  }

  return userRef;
};

export default firebase;
