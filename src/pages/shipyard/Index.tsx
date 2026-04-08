import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Lock, Zap, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

const COMMUNITY_PERKS = [
  { label: "Slack Community Access", sub: "6 channels: #ai-tools, #job-hunt, #code-review, #show-and-tell, #general-chat, #wins", disabled: false },
  { label: "Blog Posts", sub: "AI tooling, fintech engineering, and breaking into the industry", disabled: false },
  { label: "Direct Line to Tyler", sub: "Ask questions and get responses from someone in the field", disabled: false },
  { label: "1:1 Mentorship", sub: "Book sessions for resume reviews, career advice, or code walkthroughs — $150.00 + tax", disabled: true },
];

const PREMIUM_PERKS = [
  { label: "Everything in Community", sub: "Full Slack, blog posts, direct line to Tyler", disabled: false },
  { label: "Exclusive Courses", sub: "AI-native dev, fintech playbook, portfolio frameworks that land interviews", disabled: false },
  { label: "Discounted 1:1 Mentorship", sub: "1:1 sessions at a reduced rate — exclusive to Premium", disabled: true },
];

interface TierFormProps {
  tier: "community" | "premium";
  dark?: boolean;
}

const TierForm = ({ tier, dark }: TierFormProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSuccess = () => {
    sessionStorage.setItem("shipyard_tier", tier);
    navigate(`/shipyard/${tier}/success`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedName || !trimmedEmail) { setError("Name and email are required."); return; }
    if (trimmedName.length > 100) { setError("Name is too long."); return; }
    if (trimmedEmail.length > 254) { setError("Email is too long."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) { setError("Please enter a valid email."); return; }
    setLoading(true);
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({ name: trimmedName, email: trimmedEmail, page: `/shipyard/${tier}`, tier });
    setLoading(false);
    if (dbError) {
      if (dbError.code === "23505") {
        // Already signed up — look up their actual tier rather than assuming
        const { data: fnData } = await supabase.functions.invoke("check-member", {
          body: { email: trimmedEmail },
        });
        sessionStorage.setItem("shipyard_tier", fnData?.tier ?? tier);
        onSuccess();
        return;
      }
      setError("Something went wrong. Please try again.");
      return;
    }
    onSuccess();
  };

  const inputClass = `rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 transition-colors ${
    dark
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:ring-white/30"
      : "border-border bg-muted text-foreground focus:ring-primary"
  }`;

  const labelClass = `text-sm font-medium ${dark ? "text-white/70" : "text-foreground"}`;
  const errorClass = `text-sm ${dark ? "text-red-300" : "text-red-500"}`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Name</label>
        <input type="text" placeholder="Your name" value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className={labelClass}>Email</label>
        <input type="email" placeholder="you@example.com" value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className={inputClass}
        />
      </div>
      {error && <p className={errorClass}>{error}</p>}
      <button
        type="submit" disabled={loading}
        className="mt-1 rounded-lg py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
        style={
          dark
            ? { background: "hsl(var(--purple))", color: "white" }
            : { background: "hsl(var(--purple))", color: "white" }
        }
      >
        {loading ? "..." : tier === "community" ? "Join our Community" : "Reserve Founding Spot"}
      </button>
    </form>
  );
};

const MemberLoginModal = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Name and email are required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
    setLoading(true);
    const { data, error: fnError } = await supabase.functions.invoke("check-member", {
      body: { email: email.trim() },
    });
    setLoading(false);
    if (fnError || !data?.found) {
      setError("We couldn't find that email. Make sure you've joined as a member.");
      return;
    }
    sessionStorage.setItem("shipyard_tier", data.tier ?? "community");
    navigate("/shipyard/dashboard");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-2xl border border-border bg-background p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Member Access</p>
        <h2 className="mb-1 text-2xl font-black tracking-tight text-foreground">Welcome back.</h2>
        <p className="mb-6 text-sm text-muted-foreground">Enter the name and email you signed up with.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-foreground">Name</label>
            <input
              type="text" placeholder="Your name" value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              className="rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-foreground">Email</label>
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
            {loading ? "Checking..." : "Go to Dashboard"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const Shipyard = () => {
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {memberModalOpen && <MemberLoginModal onClose={() => setMemberModalOpen(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 lg:px-24 xl:px-32"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Tyler Travis
        </Link>
        <button
          onClick={() => setMemberModalOpen(true)}
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          Already a member?
        </button>
      </motion.div>

      {/* Hero */}
      <section className="flex min-h-screen flex-col justify-center px-6 pb-16 pt-32 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            A platform for software engineers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-6 text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            Ship<span style={{ color: "hsl(var(--purple))" }}>yard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mb-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Build with AI as a software engineer. Learn from someone who figured it out
            without a target school or Silicon Valley connections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mb-16 flex items-center gap-2"
          >
            <div className="flex -space-x-2">
              {["#7c3aed", "#8b5cf6", "#a78bfa"].map((c, i) => (
                <div key={i} className="h-7 w-7 rounded-full border-2 border-background" style={{ background: c }} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join 100+ engineers already building smarter with AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#plans"
              className="group relative inline-flex items-center text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              <span
                className="relative z-10 rounded-full px-8 py-3"
                style={{ background: "hsl(var(--purple))" }}
              >
                Join Now
              </span>
            </a>
            <button
              onClick={() => setMemberModalOpen(true)}
              className="rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Log in
            </button>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section id="plans" className="px-6 pb-24 pt-24 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">

            {/* Community card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight text-foreground">Community</h2>
                <span
                  className="rounded-full border px-3 py-1 text-xs font-semibold"
                  style={{ borderColor: "hsl(var(--purple))", color: "hsl(var(--purple))", background: "hsl(var(--purple-muted))" }}
                >
                  Free
                </span>
              </div>
              <p className="mb-8 text-sm text-muted-foreground">Connect, learn, and grow alongside engineers on the same path.</p>

              <ul className="mb-8 flex-1 space-y-4">
                {COMMUNITY_PERKS.map((perk) => (
                  <li key={perk.label} className={`flex items-start gap-3 ${perk.disabled ? "opacity-40" : ""}`}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: "hsl(var(--purple-muted))" }}>
                      {perk.disabled
                        ? <Lock className="h-2.5 w-2.5" style={{ color: "hsl(var(--purple))" }} />
                        : <Check className="h-3 w-3" style={{ color: "hsl(var(--purple))" }} />
                      }
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{perk.label}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{perk.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <TierForm tier="community" />
              </div>
            </motion.div>

            {/* Premium card — dark */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="relative flex flex-col overflow-hidden rounded-2xl p-8"
              style={{ background: "hsl(262 50% 12%)" }}
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{ background: "hsl(var(--purple))" }}
              />

              <div className="relative mb-1 flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight text-white">Premium</h2>
                <span className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "hsl(var(--purple))" }}>
                  <Zap className="h-3 w-3" /> Coming Soon
                </span>
              </div>
              <p className="relative mb-2 text-sm text-white/60">For engineers serious about accelerating their career.</p>

              {/* Pricing anchor */}
              <div className="relative mb-8 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">Early Access</span>
                <span className="text-sm text-white/40 line-through">Full Price</span>
                <span className="rounded-full px-2 py-0.5 text-xs font-semibold text-white" style={{ background: "hsl(var(--purple))" }}>
                  Founding rate
                </span>
              </div>

              <ul className="relative mb-8 flex-1 space-y-4">
                {PREMIUM_PERKS.map((perk) => (
                  <li key={perk.label} className={`flex items-start gap-3 ${perk.disabled ? "opacity-40" : ""}`}>
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: perk.disabled ? "rgba(255,255,255,0.1)" : "hsl(var(--purple))" }}
                    >
                      {perk.disabled
                        ? <Lock className="h-2.5 w-2.5 text-white/60" />
                        : <Check className="h-3 w-3 text-white" />
                      }
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{perk.label}</p>
                      <p className="text-xs leading-relaxed text-white/50">{perk.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative border-t border-white/10 pt-6">
                <TierForm tier="premium" dark />
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

export default Shipyard;
