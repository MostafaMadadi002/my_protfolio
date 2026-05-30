"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
                Let's Build <br />
                <span className="text-gradient">Something Iconic</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Have a project in mind? Let's connect and transform your vision into a digital masterpiece.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "mostafamadadi.1382@gmail.com" },
                { icon: MapPin, label: "Location", value: "Kabul, Afghanistan" },
                { icon: Phone, label: "Phone", value: "+93 784 345 123" },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-bold font-display">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-pink hover:bg-accent-pink/10 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-10 bg-white/5 border-white/10 backdrop-blur-xl rounded-[32px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <Input 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 focus:border-accent-purple transition-all h-14 rounded-xl font-bold font-display" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                  <Input 
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="hello@example.com" 
                    className="bg-white/5 border-white/10 focus:border-accent-purple transition-all h-14 rounded-xl font-bold font-display" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Message</label>
                  <Textarea 
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    placeholder="Tell me about your project..." 
                    className="bg-white/5 border-white/10 focus:border-accent-purple transition-all min-h-[160px] rounded-xl font-bold font-display" 
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white h-14 rounded-xl transition-all group font-black uppercase tracking-widest"
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : isSent ? (
                    "Message Received!"
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 -translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
