"use client";

import { motion } from "motion/react";
import { Code2, Palette, Database, Layout, Sparkles, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SKILL_CATEGORIES = [
  {
    title: "Design",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/20",
    textColor: "text-pink-500",
    skills: ["Figma", "UI Design", "UX Research", "Design Systems", "Prototyping"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-primary/20 to-blue-500/20",
    textColor: "text-primary",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Back-end & Tools",
    icon: Database,
    color: "from-orange-500/20 to-amber-500/20",
    textColor: "text-orange-500",
    skills: ["Node.js", "Firebase", "PostgreSQL", "D3.js", "shadcn/ui"]
  }
];

const CORE_STACK = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export default function Skills() {
  return (
    <section className="relative py-24 bg-background" id="skills">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-black">Expertise & Skills</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
            My Creative <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Bridging the gap between ambitious design concepts and high-performance technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[32px] bg-gradient-to-br ${category.color} border border-border/50 backdrop-blur-md relative overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all`}
            >
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <category.icon className="w-24 h-24" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className={`p-3 rounded-2xl bg-white w-fit shadow-sm`}>
                  <category.icon className={`w-6 h-6 ${category.textColor}`} />
                </div>
                
                <h3 className="text-2xl font-display font-black">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-background/50 hover:bg-white text-foreground border-border/50 font-bold px-3 py-1 text-sm transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee fallback / Highlight Bar */}
        <div className="mt-16 py-8 border-y border-border/50 bg-card/20 backdrop-blur-sm px-4 overflow-hidden rounded-3xl">
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-6 justify-center">
            <Terminal className="w-4 h-4" />
            <span>Technologies I trust in production</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {CORE_STACK.map((tech) => (
              <motion.span 
                key={tech}
                whileHover={{ scale: 1.1, color: "var(--primary)" }}
                className="text-2xl md:text-3xl font-display font-black text-foreground/20 cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
