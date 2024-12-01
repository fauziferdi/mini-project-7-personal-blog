import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import DetailPage from "./pages/DetailPage";
import NewslatterPage from "./pages/NewsLatterPage";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/blog/*" element={<DetailPage />} />
        <Route path="/newsletter" element={<NewslatterPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
