import { cn } from "@/lib/utils";

export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 z-0 pointer-events-none overflow-hidden", className)}>
      {/* Primary Purple Center Glow */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--primary), transparent 70%)`,
        }}
      />
      
      {/* Soft Yellow Ambient Glow (Top Left) */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] opacity-[0.05] dark:opacity-[0.1] rounded-full blur-[120px]"
        style={{
          backgroundColor: '#FFF991',
        }}
      />

      {/* Pink Ambient Glow (Bottom Right) */}
      <div
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] opacity-[0.05] dark:opacity-[0.1] rounded-full blur-[120px]"
        style={{
          backgroundColor: 'var(--accent-pink)',
        }}
      />
    </div>
  );
}
