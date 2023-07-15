import React from "react";
import {createContext} from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {app} from "../firebase/firebase.config";
import {useState} from "react";
import {useEffect} from "react";
//import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const gProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //useEffect(() => {
  //  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //    setUser(currentUser);
  //    console.log("current user", currentUser);
  //    if (currentUser) {
  //      axios
  //        .post("${import.meta.env.VITE_API_URL}/jwt", {
  //          email: currentUser?.email,
  //        })
  //        .then((data) => {
  //          console.log(data.data.token);
  //          localStorage.setItem("access-token", data.data.token);
  //          setLoading(false);
  //        });
  //    }
  //    else {
  //      localStorage.removeItem("access-token");
  //    }
  //  });

  //  return () => {
  //    return unsubscribe();
  //  };
  //}, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  //console.log(user);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    gProvider,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
