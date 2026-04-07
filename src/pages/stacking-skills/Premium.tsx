import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const COMING_SOON = [
  {
    title: "AI-Native Development",
    desc: "How to use Claude, Cursor, and LLMs as actual force multipliers — not just autocomplete.",
  },
  {
    title: "Breaking Into Fintech",
    desc: "Regulated environments, backlog management, and how to get hired at a financial platform.",
  },
  {
    title: "From Intern to Engineer",
    desc: "The real difference between internship work and production-grade software.",
  },
  {
    title: "Building a Portfolio That Lands Interviews",
    desc: "What recruiters actually look for and how to make your work visible.",
  },
];

const Premium = () => {
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
      .insert({ name: name.trim(), email: email.trim(), role: "Premium Waitlist", page: "/stacking-skills/premium" });

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
            Coming Soon
          </motion.p>

          <motion.h1
            variants={revealVariants}
            custom={0.1}
            className="mb-6 text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            Premium
          </motion.h1>

          <motion.p
            variants={revealVariants}
            custom={0.2}
            className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Courses, frameworks, and resources for software engineers who want to build faster with AI tools — taught by someone in the trenches.
          </motion.p>

          <motion.p
            variants={revealVariants}
            custom={0.25}
            className="mb-12 text-sm leading-relaxed text-muted-foreground"
          >
            Early access spots are limited. Join the waitlist and you'll be first to know when we launch — and locked in at the founding member price.
          </motion.p>

          {/* What's coming */}
          <motion.div
            variants={revealVariants}
            custom={0.3}
            className="mb-12 border-t border-border pt-10"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">What's inside</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {COMING_SOON.map((item, i) => (
                <div key={i} className="border-t border-border pt-4">
                  <p className="mb-1 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Waitlist form */}
          <motion.div variants={revealVariants} custom={0.35}>
            {submitted ? (
              <div className="rounded-2xl border border-border p-8">
                {isReturning ? (
                  <>
                    <p className="mb-2 text-2xl font-black tracking-tight text-foreground">Already on the list.</p>
                    <p className="text-sm text-muted-foreground">You'll hear from us when Premium launches. Thanks for the support.</p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 text-2xl font-black tracking-tight text-foreground">You're on the list.</p>
                    <p className="text-sm text-muted-foreground">We'll reach out when Premium launches. Founding member pricing is yours.</p>
                  </>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-border p-8">
                <p className="mb-2 text-sm font-medium text-foreground">Reserve your spot.</p>
                <p className="mb-6 text-xs text-muted-foreground">No spam. One email when we launch.</p>
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
                    {loading ? "Joining..." : "Join Waitlist"}
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

export default Premium;
