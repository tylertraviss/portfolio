import { useInView } from "framer-motion";
import { useRef } from "react";

export const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function useReveal(options?: { margin?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: (options?.margin ?? "-80px") as Parameters<typeof useInView>[1]["margin"],
  });
  return { ref, isInView };
}
