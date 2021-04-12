import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import firebase from "firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function LogIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signInWithGoogle() {
    return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  function signout() {
    return firebase.auth().signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signInWithGoogle,
    LogIn,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
