import { motion } from "framer-motion";
import tylerHeadshot from "@/assets/tyler-headshot.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-24 xl:px-32"
      id="home"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between">

          {/* Left: all text content */}
          <div className="flex flex-col justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              Software Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground"
            >
              Tyler
              <br />
              Travis.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Building reliable, scalable systems across fintech, healthcare, and AI.
              Turning complexity into software teams can confidently ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="mt-10 flex items-center gap-8"
            >
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors"
              >
                <span className="relative z-10 px-4 py-2.5">View Work</span>
                <span className="absolute inset-0 scale-90 rounded-sm border border-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative z-10 px-4 py-2.5">Get in Touch</span>
                <span className="absolute inset-0 scale-90 rounded-sm border border-border opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:border-foreground" />
              </a>
            </motion.div>
          </div>

          {/* Right: photo — stretches to match left column height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden shrink-0 md:flex"
          >
            <img
              src={tylerHeadshot}
              alt="Tyler Travis"
              className="h-full w-64 rounded-2xl object-cover xl:w-80"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 xl:left-32 flex items-center gap-3"
      >
        <div className="h-px w-12 bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
