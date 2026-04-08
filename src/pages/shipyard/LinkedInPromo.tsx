import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import { supabase } from "@/lib/supabase";

const LinkedInPromo = () => {
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
    const { error: dbError } = await supabase
      .from("email_gate_submissions")
      .insert({ name: name.trim(), email: email.trim(), page: "/shipyard/linkedin-promo", tier: "premium" });
    setLoading(false);
    if (dbError) {
      setError("Something went wrong. Please try again.");
      return;
    }
    sessionStorage.setItem("shipyard_tier", "premium");
    navigate("/shipyard/premium/success");
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
          to="/shipyard"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Shipyard
        </Link>
      </motion.div>

      <div className="flex min-h-screen items-center justify-center px-6 py-28">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left — copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "hsl(var(--purple-muted))" }}
              >
                <Zap className="h-3.5 w-3.5" style={{ color: "hsl(var(--purple))" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--purple))" }}>
                  LinkedIn Exclusive
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tighter text-foreground"
              >
                Premium.{" "}
                <span style={{ color: "hsl(var(--purple))" }}>On us.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="mb-8 text-base leading-relaxed text-muted-foreground"
              >
                For a limited time, 100 people from LinkedIn get full Premium access to Shipyard — completely free. Courses, mentorship access, and everything else when it drops.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {["#a78bfa", "#7c3aed", "#c4b5fd", "#6d28d9"].map((c, i) => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-background" style={{ background: c }} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">100 spots</span> — first come, first served
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl p-8"
              style={{ background: "hsl(262 50% 12%)" }}
            >
              <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(var(--purple))" }} />

              <div className="relative">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">Claim Your Spot</p>
                <h2 className="mb-1 text-2xl font-black tracking-tight text-white">You're almost in.</h2>
                <p className="mb-6 text-sm text-white/50">Enter your details to claim free Premium access.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-white/70">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setError(""); }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-white/70">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                    />
                  </div>

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 rounded-lg py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: "hsl(var(--purple))" }}
                  >
                    {loading ? "Claiming..." : "Claim Free Premium"}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-white/25">No credit card. No catch.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPromo;
