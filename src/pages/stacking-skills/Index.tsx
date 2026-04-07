import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";

const SLACK_INVITE_URL = "https://join.slack.com/t/stackingskillsgroup/shared_invite/zt-3uolq13is-C1OiGgoT0fszRl8XIqm5jA";

type Tab = "community" | "premium";

const COMMUNITY_PERKS = [
  { label: "Slack Community Access", sub: "6 dedicated channels: #ai-tools, #job-hunt, #code-review, #show-and-tell, #general-chat, and #wins" },
  { label: "Weekly Blog Posts", sub: "Real insights on AI tooling, fintech engineering, and breaking into the industry" },
  { label: "Direct Line to Tyler", sub: "Ask questions in the community and get responses from someone actively working in the field" },
  { label: "#ai-tools", sub: "Prompts, Cursor workflows, and Claude setups that actually save hours" },
  { label: "#job-hunt", sub: "Resume reviews, referrals, live job postings, and interview prep" },
  { label: "#code-review", sub: "Drop your code, get honest feedback — no gatekeeping" },
];

const PREMIUM_PERKS = [
  { label: "Everything in Community", sub: "Full Slack access, blog posts, and direct line to Tyler", highlight: false },
  { label: "Founding Member Pricing", sub: "Lock in your price forever — never pays more as we grow", highlight: true },
  { label: "Exclusive Courses", sub: "AI-native development, breaking into fintech, portfolio frameworks that land interviews", highlight: true },
  { label: "Priority 1:1 Advice", sub: "Jump the queue — your questions get answered first, every time", highlight: true },
];

const StackingSkills = () => {
  const [tab, setTab] = useState<Tab>("community");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName(""); setEmail(""); setError(""); setSubmitted(false); setIsReturning(false);
  };

  const handleTabChange = (t: Tab) => { setTab(t); resetForm(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Name and email are required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }

    setLoading(true);
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({ name: name.trim(), email: email.trim(), page: `/stacking-skills/${tab}`, tier: tab });
    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") { setIsReturning(true); setSubmitted(true); return; }
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  const perks = tab === "community" ? COMMUNITY_PERKS : PREMIUM_PERKS;

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
      <section className="flex min-h-screen flex-col items-start justify-center px-6 pb-16 pt-24 md:px-12 lg:px-24 xl:px-32">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between md:gap-12">

            {/* Left */}
            <div className="flex-1 pt-2">
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
                className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-foreground"
              >
                Stacking
                <br />
                <span style={{ color: "hsl(var(--purple))" }}>Skills.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
              >
                Build with AI as a software engineer. Learn from someone who figured it out
                without a target school or Silicon Valley connections.
              </motion.p>
            </div>

            {/* Right: registration card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="w-full md:w-[520px] shrink-0"
            >
              <div className="rounded-2xl bg-background shadow-2xl border border-border overflow-hidden">

                {/* Toggle */}
                <div className="flex border-b border-border">
                  {(["community", "premium"] as Tab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTabChange(t)}
                      className="relative flex-1 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                      style={tab === t ? { color: "hsl(var(--purple))" } : { color: "hsl(var(--muted-foreground))" }}
                    >
                      {t === "community" ? "Community" : "Premium"}
                      {tab === t && (
                        <motion.span
                          layoutId="tab-indicator"
                          className="absolute bottom-0 left-0 h-0.5 w-full"
                          style={{ background: "hsl(var(--purple))" }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="p-8">
                  {/* Perks */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`perks-${tab}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mb-8"
                    >
                      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                        {tab === "community" ? "What's included — Free" : "What's included — Coming Soon"}
                      </p>
                      <ul className="space-y-3">
                        {perks.map((perk) => (
                          <li key={perk.label} className="flex items-start gap-3">
                            <span
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                              style={{
                                background: tab === "premium" && perk.highlight
                                  ? "hsl(var(--purple))"
                                  : "hsl(var(--purple-muted))",
                              }}
                            >
                              {tab === "premium" && !perk.highlight
                                ? <Check className="h-3 w-3" style={{ color: "hsl(var(--purple))" }} />
                                : tab === "premium"
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
                    </motion.div>
                  </AnimatePresence>

                  {/* Divider */}
                  <div className="mb-6 border-t border-border" />

                  {/* Form / Success */}
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center gap-3 py-4 text-center"
                      >
                        {tab === "community" ? (
                          <>
                            <p className="text-2xl font-bold">{isReturning ? "Welcome back! 👋" : "You're in! 🎉"}</p>
                            <p className="text-sm text-muted-foreground">{isReturning ? "Good to see you again." : "Click below to join the Slack."}</p>
                            <a
                              href={SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer"
                              className="mt-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                              style={{ background: "hsl(var(--purple))" }}
                            >
                              Join on Slack
                            </a>
                          </>
                        ) : (
                          <>
                            <p className="text-2xl font-bold">{isReturning ? "Already on the list." : "You're on the list! 🚀"}</p>
                            <p className="text-sm text-muted-foreground">
                              {isReturning ? "We'll reach out when Premium launches." : "Founding member pricing is yours when we launch."}
                            </p>
                          </>
                        )}
                      </motion.div>
                    ) : (
                      <motion.form
                        key={`form-${tab}`}
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                      >
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
                          {loading ? "..." : tab === "community" ? "Get Slack Invite" : "Join Waitlist"}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
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
