import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import AccessibilityWidget from "./components/accessibilityWidget";
import "./assets/styles/App.scss";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <div className="portfolio">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="projects" element={<Projects />} />
          <Route path="Hobby" element={<Hobby />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      <AccessibilityWidget />
    </div>
  );
} else {
  console.error("Root element not found");
}
