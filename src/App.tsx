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
import { BackgroundGlow } from "./components/ui/background-glow";

export default function App() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary font-sans">
      {/* Background Layers */}
      <div className="fixed inset-0 dot-grid opacity-30 pointer-events-none z-0" />
      <BackgroundGlow />
      
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
