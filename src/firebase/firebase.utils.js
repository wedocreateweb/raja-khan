import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAqQfRBN6cVO2C3l-wiIyxbk-1D3LvtvqQ",
    authDomain: "raja-db.firebaseapp.com",
    projectId: "raja-db",
    storageBucket: "raja-db.appspot.com",
    messagingSenderId: "538345893996",
    appId: "1:538345893996:web:f9b20d877652510803a849",
    measurementId: "G-BFS2ZE7BTF"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;
    
    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;