"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/60 bg-gradient-to-t from-background via-background/95 to-background/80">
      {/* Animated aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="footer-aurora" />
      </div>

      <div className="relative z-10">
        <div className="container max-w-5xl py-12 md:py-14 text-center text-[11px] md:text-xs text-muted-foreground/80 flex flex-col items-center gap-2">
          <p>
            © {year} Abhishek Maurya. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-[11px]">
            Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
}
