import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages */

// import About from "./pages/About/AboutPage";
// import Services from "./pages/Service/ServicesPage";
import BookPage from "./components/Books/BookPage";

// import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />}></Route>
    //   <Route exact path="/" element={<BookPage />}></Route>
    // </Routes>
    <BookPage/>
  );
}

export default App;
