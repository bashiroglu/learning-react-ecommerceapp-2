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
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);/* this create 
  first ref or id */

  const batch = firestore.batch();/* this batch file help us to not saving any 
  file in case of any proplem while saving *//* it comes from firestore  */
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();/* we create newDocRef for each
     object and set our obj to that ref (or id) */
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); /* this is async f. that is why we await */
};

export default firebase;
