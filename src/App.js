import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import { AppRoutes, Footer, Header } from "./pages/App";
import './i18n';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <section id="main-app" as="main">
          <AppRoutes />
        </section>
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
