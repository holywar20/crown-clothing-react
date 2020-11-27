import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAGzro4Dc0xlmrcaxEdVFb9NgkfRHZnem8",
	authDomain: "crown-db-bd767.firebaseapp.com",
	databaseURL: "https://crown-db-bd767.firebaseio.com",
	projectId: "crown-db-bd767",
	storageBucket: "crown-db-bd767.appspot.com",
	messagingSenderId: "91707612519",
	appId: "1:91707612519:web:db7e43f35ceab11339a3c2",
	measurementId: "G-YQ5E6LW4JT"
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication.

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup( provider );
export default firebase;