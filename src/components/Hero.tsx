"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 15 * position} -${189 + i * 18}C-${
          380 - i * 15 * position
      } -${189 + i * 18} -${312 - i * 15 * position} ${216 - i * 18} ${
          152 - i * 15 * position
      } ${343 - i * 18}C${616 - i * 15 * position} ${470 - i * 18} ${
          684 - i * 15 * position
      } ${875 - i * 18} ${684 - i * 15 * position} ${875 - i * 18}`,
      color: `rgba(15,23,42,${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.1,
  }));

  return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
          <svg
              className="w-full h-full text-white/5"
              viewBox="0 0 696 316"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
          >
              <title>Background Paths</title>
              {paths.map((path) => (
                  <motion.path
                      key={path.id}
                      d={path.d}
                      stroke={path.id % 2 === 0 ? "var(--primary)" : "var(--accent-pink)"}
                      strokeWidth={path.width}
                      strokeOpacity={0.1 + path.id * 0.02}
                      initial={{ pathLength: 0.3, opacity: 0.6 }}
                      animate={{
                          pathLength: 1,
                          opacity: [0.2, 0.5, 0.2],
                          pathOffset: [0, 1, 0],
                      }}
                      transition={{
                          duration: 20 + Math.random() * 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                      }}
                  />
              ))}
          </svg>
      </div>
  );
}

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "UI/UX Designer & Frontend Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background Paths Animation */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Background blobs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-accent-purple tracking-widest uppercase mb-4"
          >
            Hi, I'm Mostafa Madadi
          </motion.h2>
          
          <h1 className="text-5xl md:text-8xl font-display font-black leading-tight tracking-tighter">
            CRAFTING <br />
            <span className="text-gradient">DIGITAL MAGIC</span>
          </h1>

          <div className="h-8 md:h-12 mt-4 flex justify-center items-center">
            <p className="text-xl md:text-3xl text-gray-400 font-medium font-display">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1 h-8 md:h-10 bg-accent-pink ml-2 align-middle"
              />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-accent-purple hover:bg-accent-purple/90 text-white rounded-full px-8 py-6 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity" 
              />
            </Button>
            
            <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium border-b-2 border-transparent hover:border-accent-pink pb-1">
              More about me
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white" />
      </motion.div>
    </section>
  );
}
