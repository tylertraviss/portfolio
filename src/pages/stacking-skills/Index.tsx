import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

const SLACK_INVITE_URL = "https://join.slack.com/t/your-workspace/shared_invite/your-link";

type Tab = "community" | "premium";

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

  const handleTabChange = (t: Tab) => {
    setTab(t);
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Name and email are required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }

    setLoading(true);
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({
        name: name.trim(),
        email: email.trim(),
        role: tab === "community" ? "Community" : "Premium Waitlist",
        page: `/stacking-skills/${tab}`,
      });
    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") { setIsReturning(true); setSubmitted(true); return; }
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 z-50 px-6 py-5 md:px-12 lg:px-24 xl:px-32"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Tyler Travis
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-start justify-center px-6 pb-16 pt-24 md:px-12 lg:px-24 xl:px-32">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-16 md:flex-row md:items-center md:gap-12">

            {/* Left: text */}
            <div className="flex-1">
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
                className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-foreground"
              >
                Stacking
                <br />
                <span style={{ color: "hsl(var(--purple))" }}>Skills.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
              >
                Build with AI as a software engineer. Learn from someone who figured it out
                without a target school or Silicon Valley connections.
              </motion.p>
            </div>

            {/* Right: registration card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="w-full md:w-[360px] shrink-0"
            >
              <div className="rounded-2xl border border-border p-8">
                {/* Toggle */}
                <div className="mb-6 flex rounded-lg border border-border p-1">
                  {(["community", "premium"] as Tab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTabChange(t)}
                      className="flex-1 rounded-md py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                      style={
                        tab === t
                          ? { background: "hsl(var(--purple))", color: "white" }
                          : { color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      {t === "community" ? "Community" : "Premium"}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {tab === "community" ? (
                        <>
                          <p className="mb-2 text-xl font-black tracking-tight text-foreground">
                            {isReturning ? "Welcome back!" : "You're in."}
                          </p>
                          <p className="mb-6 text-sm text-muted-foreground">
                            {isReturning ? "Good to see you again." : "Click below to join the Slack."}
                          </p>
                          <a
                            href={SLACK_INVITE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ background: "hsl(var(--purple))" }}
                          >
                            Join on Slack
                          </a>
                        </>
                      ) : (
                        <>
                          <p className="mb-2 text-xl font-black tracking-tight text-foreground">
                            {isReturning ? "Already on the list." : "You're on the list."}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {isReturning
                              ? "We'll reach out when Premium launches."
                              : "Founding member pricing is yours when we launch."}
                          </p>
                        </>
                      )}
                    </motion.div>
                  ) : (
                    <motion.form
                      key={`form-${tab}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <p className="mb-1 text-sm font-semibold text-foreground">
                          {tab === "community" ? "Join the community — free." : "Reserve your spot."}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {tab === "community"
                            ? "Enter your details to get the Slack invite."
                            : "First to know when we launch. Founding member pricing."}
                        </p>
                      </div>

                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setError(""); }}
                        className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
                      />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground"
                      />

                      {error && <p className="text-xs text-red-500">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                        style={{ background: "hsl(var(--purple))" }}
                      >
                        {loading
                          ? "..."
                          : tab === "community"
                          ? "Get Slack Invite"
                          : "Join Waitlist"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>

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
