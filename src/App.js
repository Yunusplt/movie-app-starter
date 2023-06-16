import React from "react";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;


//todo Burada <AuthContextProvider ile sarmallanan hersey aslinda {children}  dir. yani children olarak AuthContext.js ye gönderilen AppRouter dir...