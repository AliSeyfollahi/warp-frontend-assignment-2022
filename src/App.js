import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import { AppRoutes, Footer, Header } from "./pages/App";
import './i18n';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <section id="main-app" as="main">
        <AppRoutes />
      </section>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
