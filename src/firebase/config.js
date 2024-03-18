import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeJcn70_Bcbq7vFwGIxgn7x5wWzwrMGpw",
    authDomain: "umusic-123.firebaseapp.com",
    projectId: "umusic-123",
    storageBucket: "umusic-123.appspot.com",
    messagingSenderId: "508375324858",
    appId: "1:508375324858:web:92477079c8be1b22b08a83",
    measurementId: "G-EF0N4N4RXV"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }