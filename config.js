import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDItREryMPeL4hI_i0uMdMBNM64_xMkwIw",
    authDomain: "test-e2358.firebaseapp.com",
    projectId: "test-e2358",
    storageBucket: "test-e2358.appspot.com",
    messagingSenderId: "178636568248",
    appId: "1:178636568248:web:d1b79743a74eb7a7d3a64d",
    measurementId: "G-HC2PELGKLS"   
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };
