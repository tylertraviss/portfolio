import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";
import Navbar from "@/components/Navbar";

const StackingSkills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="w-full max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            A community for software engineers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            Stacking
            <br />
            <span style={{ color: "hsl(var(--purple))" }}>Skills.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Build with AI as a software engineer. Learn from someone who figured it out
            without a target school or Silicon Valley connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <Link
              to="/stacking-skills/community"
              className="group relative inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest transition-colors"
              style={{ color: "hsl(var(--purple))" }}
            >
              <span className="relative z-10 px-4 py-2.5">Join Community — Free</span>
              <span
                className="absolute inset-0 scale-90 rounded-sm opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                style={{ border: "1px solid hsl(var(--purple))" }}
              />
            </Link>
            <Link
              to="/stacking-skills/premium"
              className="group relative inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative z-10 px-4 py-2.5">Premium — Waitlist</span>
              <span className="absolute inset-0 scale-90 rounded-sm border border-border opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:border-foreground" />
            </Link>
          </motion.div>
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

      {/* Tier cards */}
      <section className="border-t border-border px-6 py-24 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid gap-0 md:grid-cols-2">
            {/* Community */}
            <motion.div
              variants={revealVariants}
              custom={0}
              className="border border-border p-10 transition-colors hover:border-foreground"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Open to All
              </p>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-3xl font-black tracking-tight text-foreground">Community</h2>
                <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "hsl(var(--purple))", color: "hsl(var(--purple))", background: "hsl(var(--purple-muted))" }}>
                  Free
                </span>
              </div>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Connect with software engineers, share what you're building, get feedback, and grow alongside people on the same path.
              </p>
              <Link
                to="/stacking-skills/community"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest transition-colors"
                style={{ color: "hsl(var(--purple))" }}
              >
                Join for free <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={revealVariants}
              custom={0.1}
              className="border border-l-0 border-border p-10 transition-colors hover:border-foreground"
              style={{ borderLeftColor: "transparent" }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                For Members
              </p>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-3xl font-black tracking-tight text-foreground">Premium</h2>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ background: "hsl(var(--purple))" }}
                >
                  Coming Soon
                </span>
              </div>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Courses, frameworks, and resources built specifically for software engineers who want to build faster with AI tools.
              </p>
              <Link
                to="/stacking-skills/premium"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                Join waitlist <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
            Built by a software engineer who shipped at Fintex · TD Bank · Breathe Biomedical
          </p>
        </div>
      </section>
    </div>
  );
};

export default StackingSkills;
