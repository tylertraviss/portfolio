import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PremiumSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 z-50 px-6 py-5 md:px-12 lg:px-24 xl:px-32"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Tyler Travis
        </Link>
      </motion.div>

      <section className="flex min-h-screen flex-col items-start justify-center px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Premium — Waitlist Confirmed
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-6 text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            You're on
            <br />
            <span style={{ color: "hsl(var(--purple))" }}>the list.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            You've been successfully enrolled on the Premium waitlist for Shipyard.
            You'll be the first to know when we launch — and you'll be locked in at founding member pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mb-10 rounded-2xl border p-6"
            style={{ borderColor: "hsl(var(--purple) / 0.3)", background: "hsl(262 50% 12%)" }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/50">What you'll get at launch</p>
            <ul className="space-y-3">
              {[
                "Exclusive courses — AI-native development, fintech, portfolio frameworks",
                "Discounted 1:1 mentorship sessions with Tyler",
                "Full Community access — Slack, blog posts, direct line to Tyler",
                "Early access before Premium opens to the public",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "hsl(var(--purple))" }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/shipyard"
              className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "hsl(var(--purple))" }}
            >
              Back to Shipyard
            </Link>
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumSuccess;
