import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

/**
 * Each word lights up as the paragraph scrolls through the viewport.
 * Words wrapped in *asterisks* are highlighted in gold italics.
 */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(/\s+/).filter(Boolean);
  const plain = text.replace(/\*/g, "");
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)} aria-label={plain}>
      {words.map((w, i) => {
        const start = i / words.length;
        const isHi = /\*/.test(w);
        return (
          <span key={i} aria-hidden="true" className={cn(isHi && "font-accent italic text-gold-light")}>
            <Word word={w.replace(/\*/g, "")} progress={scrollYProgress} range={[start, Math.min(1, start + 1.5 / words.length)]} />
          </span>
        );
      })}
    </p>
  );
}
