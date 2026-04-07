import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";

const SLACK_INVITE_URL = "https://join.slack.com/t/stackingskillsgroup/shared_invite/zt-3uolq13is-C1OiGgoT0fszRl8XIqm5jA";

const COMMUNITY_PERKS = [
  { label: "Slack Community Access", sub: "6 channels: #ai-tools, #job-hunt, #code-review, #show-and-tell, #general-chat, #wins" },
  { label: "Weekly Blog Posts", sub: "AI tooling, fintech engineering, and breaking into the industry" },
  { label: "Direct Line to Tyler", sub: "Ask questions and get responses from someone in the field" },
  { label: "Paid 1:1 Mentorship", sub: "Book sessions for resume reviews, career advice, or code walkthroughs" },
];

const PREMIUM_PERKS = [
  { label: "Everything in Community", sub: "Full Slack, blog posts, direct line to Tyler", highlight: false },
  { label: "Founding Member Pricing", sub: "Lock in your rate forever as we grow", highlight: true },
  { label: "Exclusive Courses", sub: "AI-native dev, fintech, portfolio frameworks that land interviews", highlight: true },
  { label: "Priority 1:1 Advice", sub: "Your questions get answered first, every time", highlight: true },
  { label: "Discounted Mentorship", sub: "1:1 sessions at a reduced rate — exclusive to Premium", highlight: true },
];

type Tier = "community" | "premium";

interface FormProps {
  tier: Tier;
}

const TierForm = ({ tier }: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Name and email are required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }

    setLoading(true);
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({ name: name.trim(), email: email.trim(), page: `/stacking-skills/${tier}`, tier });
    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") { setIsReturning(true); setSubmitted(true); return; }
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-2 text-center">
        {tier === "community" ? (
          <>
            <p className="text-xl font-bold">{isReturning ? "Welcome back! 👋" : "You're in! 🎉"}</p>
            <p className="text-sm text-muted-foreground">{isReturning ? "Good to see you again." : "Click below to join the Slack."}</p>
            <a
              href={SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer"
              className="mt-1 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "hsl(var(--purple))" }}
            >
              Join on Slack
            </a>
          </>
        ) : (
          <>
            <p className="text-xl font-bold">{isReturning ? "Already on the list." : "You're on the list! 🚀"}</p>
            <p className="text-sm text-muted-foreground">
              {isReturning ? "We'll reach out when Premium launches." : "Founding member pricing locked in."}
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name</label>
        <input
          type="text" placeholder="Your name" value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          className="rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email" placeholder="you@example.com" value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className="rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit" disabled={loading}
        className="mt-1 rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ background: "hsl(var(--purple))" }}
      >
        {loading ? "..." : tier === "community" ? "Get Slack Invite" : "Join Waitlist"}
      </button>
    </form>
  );
};

const StackingSkills = () => {
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

      {/* Hero */}
      <section className="px-6 pb-24 pt-32 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              A community for software engineers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="mb-6 text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-foreground"
            >
              Stacking
              <br />
              <span style={{ color: "hsl(var(--purple))" }}>Skills.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Build with AI as a software engineer. Learn from someone who figured it out
              without a target school or Silicon Valley connections.
            </motion.p>
          </div>

          {/* Two cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="rounded-2xl border border-border bg-background p-8 shadow-sm"
            >
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-3">
                  <h2 className="text-2xl font-black tracking-tight text-foreground">Community</h2>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: "hsl(var(--purple))", color: "hsl(var(--purple))", background: "hsl(var(--purple-muted))" }}
                  >
                    Free
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Everything you need to connect, learn, and grow alongside other engineers.</p>
              </div>

              <ul className="mb-8 space-y-4">
                {COMMUNITY_PERKS.map((perk) => (
                  <li key={perk.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "hsl(var(--purple-muted))" }}>
                      <Check className="h-3 w-3" style={{ color: "hsl(var(--purple))" }} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{perk.label}</p>
                      <p className="text-xs text-muted-foreground">{perk.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <TierForm tier="community" />
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="rounded-2xl border bg-background p-8 shadow-lg"
              style={{ borderColor: "hsl(var(--purple))" }}
            >
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-3">
                  <h2 className="text-2xl font-black tracking-tight text-foreground">Premium</h2>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ background: "hsl(var(--purple))" }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">For engineers serious about accelerating their career with AI and real mentorship.</p>
              </div>

              <ul className="mb-8 space-y-4">
                {PREMIUM_PERKS.map((perk) => (
                  <li key={perk.label} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: perk.highlight ? "hsl(var(--purple))" : "hsl(var(--purple-muted))" }}
                    >
                      {perk.highlight
                        ? <Lock className="h-2.5 w-2.5 text-white" />
                        : <Check className="h-3 w-3" style={{ color: "hsl(var(--purple))" }} />
                      }
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{perk.label}</p>
                      <p className="text-xs text-muted-foreground">{perk.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6" style={{ borderColor: "hsl(var(--purple) / 0.2)" }}>
                <TierForm tier="premium" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-border px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
            Built by a software engineer who made his way from a rural community, to silicon valley.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StackingSkills;
