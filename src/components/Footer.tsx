"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 text-center space-y-6">
        <div className="text-xl font-display font-black tracking-tighter">
          MOSTAFA<span className="text-accent-purple">.DEV</span>
        </div>
        <p className="text-gray-500 text-sm max-w-sm mx-auto font-medium">
          Designed and built with ❤️ in 2024. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
