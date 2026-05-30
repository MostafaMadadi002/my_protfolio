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
            <div className="absolute -inset-4 bg-accent-purple/20 rounded-2xl blur-2xl" />
            <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm rounded-[32px] aspect-[3/4]">
              <img 
                src="/src/assets/images/professional_profile_portrait_1780171192831.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </Card>
            
            {/* Floating stats card */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-8 -right-8 w-48 p-6 glass rounded-xl shadow-2xl z-20"
            >
              <div className="text-3xl font-display font-bold text-accent-pink">+4</div>
              <div className="text-sm text-gray-400">سال تجربه حرفه‌ای</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                داستانی فراتر از <br />
                <span className="text-accent-purple">کد و طراحی</span>
              </h2>
              <div className="w-20 h-1 bg-accent-pink rounded-full" />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              من مصطفی مددی هستم، یک طراح و توسعه‌دهنده متعهد به خلق رابط‌های کاربری چشم‌نواز و تجربه‌های دیجیتال بدون نقص. با ترکیبی از هنر طراحی و دقت فنی، پل میان ایده‌ها و واقعیت‌های تعاملی را می‌سازم.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              تمرکز اصلی من در سال‌های اخیر بر روی اکوسیستم React و Next.js بوده است. من معتقدم که یک محصول فوق‌العاده نه تنها باید خوب کار کند، بلکه باید احساس خوبی هم به کاربر منتقل کند.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "موقعیت", value: "تهران، ایران" },
                { label: "همکاری", value: "فریلنس و تمام‌وقت" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-sm text-accent-purple uppercase tracking-wider font-semibold">{item.label}</div>
                  <div className="text-lg font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
