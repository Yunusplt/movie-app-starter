//! context in ilk adimi create etmek.
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";

export const AuthContexx = createContext();
//todo bu context bize bir provider yapi sagliyor. context value larimizi gönderecegimiz yapilari sarmallamak icin.
//todo yani AuthContexx.Provider ile sarmalladigim kisilere value lar gönderebilirim.

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
        console.log(error);
    }
  };

  const values = {createUser}

  return <AuthContexx.Provider value={values}>{children}</AuthContexx.Provider>;
};

export default AuthContextProvider;

//todo bu code yapisi extract edildi. Context yapisini her yerde kullanabilmek icin App.js e gidecem ve orayi AuthContextProvider ile sarmallayacam...
