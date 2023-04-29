import React, { createContext, useEffect, useState } from "react";
import { FaCreativeCommonsNcJp } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
      
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log('logged in user inside auth state observer', loggedUser);
      setUser(loggedUser);
      setLoading(false)
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = { user, createUser, signIn, profileUpdate, logOut, loading };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
