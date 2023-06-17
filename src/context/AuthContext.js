//! context in ilk adimi create etmek.
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContexx = createContext();
//todo bu context bize bir provider yapi sagliyor. context value larimizi gönderecegimiz yapilari sarmallamak icin.
//todo yani AuthContexx.Provider ile sarmalladigim kisilere value lar gönderebilirim.

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver();
  }, []);

  //!##############################################################
  const createUser = async (email, password, displayName) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      toastSuccessNotify("Registered successfully");
      navigate("/");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
      console.log(error);
    }
  };
  //!##############################################################
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email, password) => {
    try {
      //todo mevcut kullanicinin giris yapabilmesi icin kullanilan firebase methodu.
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Logged in successfully");
      navigate("/");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  //!################################################################
  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully");
  };
  //!################################################################

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        console.log(user);
      } else {
        setCurrentUser(false);
      }
    });
  };
  console.log(currentUser);
  //!################################################################
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        toastSuccessNotify("Logged in successfuly");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //!################################################################

  const values = { createUser, signIn, logOut, signUpProvider, currentUser };

  return <AuthContexx.Provider value={values}>{children}</AuthContexx.Provider>;
};

export default AuthContextProvider;

//todo bu code yapisi extract edildi. Context yapisini her yerde kullanabilmek icin App.js e gidecem ve orayi AuthContextProvider ile sarmallayacam...
