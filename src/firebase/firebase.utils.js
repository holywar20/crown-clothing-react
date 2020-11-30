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

if (!firebase.apps.length) {
	firebase.initializeApp( config );
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
	if( !userAuth ){ return; }

	const userRef = firestore.doc(`users/${userAuth.uid}` );
	const snapShot = await userRef.get();

	if( !snapShot.exists ){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName, email, createdAt , ...additionalData
			});
		} catch( err ) {
			console.log( 'Error creating user' , err.message );
		}
	}

	return userRef
}


// Google Authentication.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup( provider );
export default firebase;