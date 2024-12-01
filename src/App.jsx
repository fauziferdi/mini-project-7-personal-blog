import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import DetailPage from "./pages/DetailPage";
import NewslatterPage from "./pages/NewsLatterPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/*" element={<DetailPage />} />
        <Route path="/newsletter" element={<NewslatterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
