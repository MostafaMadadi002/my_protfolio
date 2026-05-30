"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: y1 }} className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
            <Card className="relative overflow-hidden border-border/50 bg-card/40 backdrop-blur-md rounded-[32px] aspect-[3/4]">
              <img 
                src="/assets/user_uploaded_image_1780171624831.png" 
                alt="Mostafa Madadi" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </Card>
            
            {/* Floating stats card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-8 -left-8 md:-left-12 w-48 p-6 glass rounded-xl shadow-2xl z-20"
            >
              <div className="text-3xl font-display font-black text-primary">4+</div>
              <div className="text-sm text-muted-foreground font-bold">Years of Professional Experience</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
                Beyond <span className="text-primary">Code</span> & <span className="text-accent-pink">Design</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              I'm Mostafa Madadi, a UI/UX Designer and Frontend Developer dedicated to creating visually stunning and functionally seamless digital experiences. With a blend of artistic vision and technical precision, I bridge the gap between abstract ideas and interactive realities.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              Over the past few years, my primary focus has been on the React and Next.js ecosystems. I believe a great product shouldn't just work well—it should feel effortless and delightful to the user.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Location", value: "Kabul, Afghanistan" },
                { label: "Availability", value: "Freelance & Full-time" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xs text-primary uppercase tracking-widest font-black">{item.label}</div>
                  <div className="text-lg font-bold font-display">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
