"use client";

import { motion } from "motion/react";

const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI Design", 
  "Node.js", "Figma", "Firebase", "PostgreSQL", "D3.js", "shadcn/ui",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI Design"
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-accent-purple/5 border-y border-white/5 overflow-hidden" id="skills">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mb-12 text-center relative z-10">
        <h2 className="text-xs uppercase tracking-[0.4em] text-accent-purple font-black">Core Stack & Tools</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className={`text-4xl md:text-6xl font-display font-black transition-all duration-500 cursor-default tracking-tighter hover:scale-110 ${
                skill === "TypeScript" ? "text-blue-400 opacity-40 hover:opacity-100" : 
                skill === "React" ? "text-cyan-400 opacity-40 hover:opacity-100" :
                skill === "Next.js" ? "text-white opacity-40 hover:opacity-100" :
                "text-white/10 hover:text-accent-pink"
              }`}
            >
              {skill}
            </div>
          ))}
        </motion.div>
        
        {/* Mirror for continuous flow */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 items-center absolute left-full"
        >
          {SKILLS.map((skill, index) => (
            <div 
              key={index + SKILLS.length}
              className={`text-4xl md:text-6xl font-display font-black transition-all duration-500 cursor-default tracking-tighter hover:scale-110 ${
                skill === "TypeScript" ? "text-blue-400 opacity-40 hover:opacity-100" : 
                skill === "React" ? "text-cyan-400 opacity-40 hover:opacity-100" :
                skill === "Next.js" ? "text-white opacity-40 hover:opacity-100" :
                "text-white/10 hover:text-accent-pink"
              }`}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Frontend", value: 95 },
          { label: "UX/UI Design", value: 85 },
          { label: "Backend", value: 70 },
          { label: "Testing", value: 65 },
        ].map((skill, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="space-y-4"
          >
            <div className="flex justify-between items-end">
              <span className="font-bold text-lg">{skill.label}</span>
              <span className="text-gray-400 text-sm">{skill.value}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-accent-purple to-accent-pink"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
