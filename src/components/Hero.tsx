"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "طراح UI/UX و توسعه‌دهنده فرانت‌اند";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[100px] animate-pulse delay-700" />

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
            سلام، من مصطفی هستم
          </motion.h2>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight">
            متخصص در خلق <br />
            <span className="text-gradient">تجربه‌های دیجیتال</span>
          </h1>

          <div className="h-8 md:h-12 mt-4">
            <p className="text-xl md:text-3xl text-gray-400 font-medium">
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
                مشاهده پروژه‌ها <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform scale-x-[-1]" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity" 
              />
            </Button>
            
            <button className="text-gray-400 hover:text-white transition-colors text-lg font-medium border-b-2 border-transparent hover:border-accent-pink pb-1">
              درباره من بیشتر بدانید
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
