import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

// Replace with your actual never-expiring Slack invite link
const SLACK_INVITE_URL = "https://join.slack.com/t/stackingskillsgroup/shared_invite/zt-3uolq13is-C1OiGgoT0fszRl8XIqm5jA";

const Community = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({ name: name.trim(), email: email.trim(), role: "Community", page: "/stacking-skills/community" });

    setLoading(false);

    if (dbError) {
      if (dbError.code === "23505") {
        setIsReturning(true);
        setSubmitted(true);
        return;
      }
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

      <section className="px-6 pt-40 pb-32 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={revealVariants} custom={0}>
            <Link
              to="/stacking-skills"
              className="mb-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" /> Stacking Skills
            </Link>
          </motion.div>

          <motion.p
            variants={revealVariants}
            custom={0.05}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Open to All
          </motion.p>

          <motion.h1
            variants={revealVariants}
            custom={0.1}
            className="mb-6 text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            Community
          </motion.h1>

          <motion.p
            variants={revealVariants}
            custom={0.2}
            className="mb-12 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            A free Slack community for software engineers figuring it out — sharing what they're building, asking questions, and helping each other level up.
          </motion.p>

          {/* What's inside */}
          <motion.div
            variants={revealVariants}
            custom={0.25}
            className="mb-12 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
          >
            {[
              { channel: "#general", desc: "Introductions, random conversation, daily check-ins" },
              { channel: "#ai-tools", desc: "Prompts, workflows, and tools that actually save time" },
              { channel: "#job-hunt", desc: "Resume reviews, referrals, and interview prep" },
              { channel: "#show-and-tell", desc: "Share what you're building and get feedback" },
            ].map((item) => (
              <div key={item.channel} className="border-t border-border pt-4">
                <p className="mb-1 text-sm font-semibold text-foreground">{item.channel}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Form or success state */}
          <motion.div variants={revealVariants} custom={0.3}>
            {submitted ? (
              <div className="rounded-2xl border border-border p-8">
                {isReturning ? (
                  <>
                    <p className="mb-2 text-2xl font-black tracking-tight text-foreground">Welcome back!</p>
                    <p className="mb-6 text-sm text-muted-foreground">Good to see you again. Here's your Slack link.</p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 text-2xl font-black tracking-tight text-foreground">You're in.</p>
                    <p className="mb-6 text-sm text-muted-foreground">Click below to join the Slack community.</p>
                  </>
                )}
                <a
                  href={SLACK_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "hsl(var(--purple))" }}
                >
                  Join on Slack
                </a>
              </div>
            ) : (
              <div className="rounded-2xl border border-border p-8">
                <p className="mb-6 text-sm font-medium text-foreground">Enter your details to get the Slack invite.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setError(""); }}
                      className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none focus:ring-2 transition-colors"
                      style={{ "--tw-ring-color": "hsl(var(--purple))" } as React.CSSProperties}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      className="rounded-lg border border-border bg-muted px-3 py-2.5 text-sm outline-none focus:ring-2 transition-colors"
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: "hsl(var(--purple))" }}
                  >
                    {loading ? "Joining..." : "Get Slack Invite"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Community;
