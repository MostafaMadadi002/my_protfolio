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

export default function App() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/30 selection:text-foreground font-sans">
      {/* Background Layer */}
      <div className="fixed inset-0 dot-grid opacity-50 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-background/50 pointer-events-none z-0" />
      
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
