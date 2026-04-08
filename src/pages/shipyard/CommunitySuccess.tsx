import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SLACK_INVITE_URL = "https://join.slack.com/t/shipyard-tech/shared_invite/zt-3uolq13is-C1OiGgoT0fszRl8XIqm5jA";

const CommunitySuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 z-50 px-6 py-5 md:px-12 lg:px-24 xl:px-32"
      >
        <Link to="/shipyard" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Shipyard
        </Link>
      </motion.div>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-12 lg:px-24 xl:px-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Community — Enrollment Confirmed
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-6 text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            You're in. <span style={{ color: "hsl(var(--purple))" }}>Welcome.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            You've been successfully enrolled as a Community member of Shipyard.
            Click below to join the Slack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mb-10 rounded-2xl border border-border p-6 text-left"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">What's next</p>
            <ul className="space-y-3">
              {[
                "Join the Slack and introduce yourself in #general-chat",
                "Check out #ai-tools for prompts and workflows worth bookmarking",
                "Drop your current project in #show-and-tell",
                "Use #job-hunt if you're on the market — the community has your back",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "hsl(var(--purple))" }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "hsl(var(--purple))" }}
            >
              Join on Slack
            </a>
            <Link
              to="/shipyard"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to Shipyard
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySuccess;
