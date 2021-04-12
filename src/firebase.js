import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCgYOKOuH8AlRGxexWq2oCv4vBpHfZL01k",
  authDomain: "auth-development-1888f.firebaseapp.com",
  projectId: "auth-development-1888f",
  storageBucket: "auth-development-1888f.appspot.com",
  messagingSenderId: "834361534333",
  appId: "1:834361534333:web:61c1638c95e7322a898e14",
});

export const auth = app.auth();
export default app;
