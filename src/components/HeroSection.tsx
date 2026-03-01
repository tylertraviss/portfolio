import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import tylerHeadshot from "@/assets/tyler-headshot.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden section-padding text-center" id="home">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl md:leading-[1.1]"
        >
          Building software that{" "}
          <span className="text-gradient">scales.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Software engineer & product thinker with experience across fintech, healthcare, 
          and AI — turning complex problems into elegant, reliable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:shadow-md"
          >
            Get In Touch
          </a>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-full bg-primary/15 blur-3xl md:block" />
            <img
              src={tylerHeadshot}
              alt="Tyler Travis headshot"
              className="relative z-10 h-64 w-64 rounded-[32px] object-cover shadow-2xl border border-border md:h-80 md:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
