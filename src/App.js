import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Announcement from "./components/Announcement";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CoursesPage from "./pages/CoursesPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Team from "./components/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import MusicAnimation from "./components/MusicAnimation"; // ✅ this already includes JSON

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#f9fafb" }} className="min-h-screen flex flex-col">
        <div style={{ backgroundColor: "#0ea5a4", color: "white", padding: "4px 0" }}>
          <Announcement />
        </div>

        <NavBar />

        {/* Optional: show animation */}
        {/* <MusicAnimation /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
