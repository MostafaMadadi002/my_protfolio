"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "اپلیکیشن مدیریت تسک هوشمند",
    description: "یک سیستم مدیریت پروژه با استفاده از هوش مصنوعی برای اولویت‌بندی تسک‌ها.",
    category: "React",
    image: "https://picsum.photos/seed/task/800/600",
    tags: ["React", "Node.js", "Gemini API", "Tailwind"],
  },
  {
    id: "2",
    title: "رابط کاربری صرافی ارز دیجیتال",
    description: "طراحی و توسعه داشبورد معاملاتی با سرعت بالا و چارت‌های real-time.",
    category: "UIUX",
    image: "https://picsum.photos/seed/crypto/800/600",
    tags: ["Figma", "TypeScript", "Recharts"],
  },
  {
    id: "3",
    title: "پلتفرم آموزشی آنلاین",
    description: "سیستم کامل مشاهده دوره‌ها و آزمون‌های آنلاین با تجربه کاربری روان.",
    category: "Mobile",
    image: "https://picsum.photos/seed/edu/800/600",
    tags: ["Next.js", "React Native", "Firebase"],
  },
  {
    id: "4",
    title: "داشبورد آنالیتیکس پیشرفته",
    description: "بصری‌سازی داده‌های پیچیده کسب‌وکار به صورت ساده و کاربردی.",
    category: "React",
    image: "https://picsum.photos/seed/data/800/600",
    tags: ["React", "D3.js", "Tailwind"],
  },
  {
    id: "5",
    title: "برندینگ استودیو خلاق",
    description: "هویت بصری و وب‌سایت پورتفولیو برای یک تیم طراحی بین‌المللی.",
    category: "UIUX",
    image: "https://picsum.photos/seed/design/800/600",
    tags: ["UI Design", "Visual Identity", "Animations"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'React' | 'UIUX' | 'Mobile'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section className="py-32" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              پروژه‌های <span className="text-accent-pink">منتخب</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              تعدادی از بهترین کارهای من که ترکیبی از چالش‌های فنی و خلاقیت هستند.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'React', 'UIUX', 'Mobile'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  filter === cat 
                    ? 'bg-accent-purple border-accent-purple text-white' 
                    : 'border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                {cat === 'All' ? 'همه' : cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02, rotate: "1deg" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card className="group relative overflow-hidden bg-white/5 border-white/10 hover:border-accent-purple/50 transition-all duration-500 rounded-2xl h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="p-3 bg-accent-purple rounded-full text-white hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-accent-purple/10 text-accent-purple border-accent-purple/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
