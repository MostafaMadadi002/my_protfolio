"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 text-center space-y-6">
        <div className="text-xl font-display font-bold">
          مصطفی<span className="text-accent-purple">.مددی</span>
        </div>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          طراحی و توسعه داده شده با ❤️ در سال ۲۰۲۴. تمامی حقوق محفوظ است.
        </p>
        <div className="flex justify-center gap-6 text-gray-500 text-xs">
          <a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a>
          <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
        </div>
      </div>
    </footer>
  );
}
