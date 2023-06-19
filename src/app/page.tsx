"use client";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Buffer from "./components/Buffer";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#031926] text-[#82C0CC]">
      <Navbar />
      <Landing />
      <Buffer />
      <About />
      <Footer />
    </div>
  );
}
