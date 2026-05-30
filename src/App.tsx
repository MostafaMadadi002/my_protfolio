/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";

export default function App() {
  return (
    <main dir="rtl" className="relative min-h-screen bg-background overflow-x-hidden selection:bg-accent-purple/30 selection:text-white font-sans text-right">
      {/* Background Dot Grid */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-tr from-accent-purple/5 via-transparent to-accent-pink/5 pointer-events-none z-0" />
      
      {/* Animated Cursor */}
      <CursorFollower />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full max-w-screen-2xl">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
