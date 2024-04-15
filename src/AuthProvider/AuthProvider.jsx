import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import auth from "./firebase.config";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { updateProfile } from "firebase/auth/cordova";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  console.log(user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  function googleSignIn() {
    return signInWithPopup(auth, googleProvider);
  }

  function githubSignIn() {
    return signInWithPopup(auth, githubProvider);
  }

  function createUser(mail, pass) {
    return createUserWithEmailAndPassword(auth, mail, pass);
  }

  function signInUser(mail, pass) {
    return signInWithEmailAndPassword(auth, mail, pass);
  }

  function logOut() {
    return signOut(auth);
  }

  function updateProfileData(userObj) {
    return updateProfile(auth.currentUser, userObj);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    googleSignIn,
    githubSignIn,
    updateProfileData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
