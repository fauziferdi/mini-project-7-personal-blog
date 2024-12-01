import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
const Home = lazy(() => import("./pages/Home"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const NewslatterPage = lazy(() => import("./pages/NewsLatterPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog/*" element={<DetailPage />} />
          <Route path="/newsletter" element={<NewslatterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <FooterComponent />
    </Router>
  );
}

export default App;
