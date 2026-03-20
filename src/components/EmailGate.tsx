import { useState } from "react";

const ROLES = [
  "Student",
  "Software Engineer",
  "Recruiter",
  "Product Manager",
  "Designer",
  "Founder / Entrepreneur",
  "Researcher",
  "Other",
];

interface EmailGateProps {
  storageKey: string;
  children: React.ReactNode;
}

const EmailGate = ({ storageKey, children }: EmailGateProps) => {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(storageKey) === "true"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !role) {
      setError("All fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    localStorage.setItem(storageKey, "true");
    setUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-muted">
      {import.meta.env.DEV && (
        <button
          onClick={() => { localStorage.removeItem(storageKey); setUnlocked(false); }}
          className="fixed bottom-4 right-4 z-[100] rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground shadow hover:text-foreground transition-colors"
        >
          Reset gate (dev)
        </button>
      )}
      <div className={unlocked ? "" : "blur-sm pointer-events-none select-none"}>
        {children}
      </div>

      {!unlocked && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-10">
          <div className="bg-background rounded-2xl shadow-xl p-8 w-full max-w-sm mx-4">
            <h2 className="text-2xl font-bold mb-1">Tech Waits for Nobody</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Join a community of builders and thinkers keeping pace with modern tech.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="gate-name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="gate-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(""); }}
                  className="rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="gate-email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="gate-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Role</label>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => { setRole(r); setError(""); }}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                        role === r
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted text-muted-foreground hover:border-primary hover:text-foreground"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                className="mt-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailGate;
