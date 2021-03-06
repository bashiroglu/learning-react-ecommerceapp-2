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
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    /* we will give collections snapshop object to this, this will take 
    it and obtain data by doc.data method then create new object in 
    that object we also add routename by creating url from title of object and pass item to it */
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  /*  in here we use reduce to create object by giving it object as acc */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; /*  we say take this empty object and make a key from 
    title of element of arrays and assign that key the collection array */
  }, {});
};

export default firebase;
