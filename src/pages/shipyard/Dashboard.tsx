import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const COURSES = [
  {
    id: "social-software-engineer",
    title: "The Social Software Engineer",
    sub: "Your code gets you hired once. Your network gets you hired for life.",
    status: "coming_soon",
    modules: [
      { title: "Why Engineers Underestimate Visibility", desc: "The invisible tax of being quietly brilliant — and how to fix it." },
      { title: "Building a Personal Brand Without Cringe", desc: "Authentic positioning for engineers who hate self-promotion." },
      { title: "LinkedIn, GitHub & X — Channels That Actually Convert", desc: "What to post, how often, and what to never say." },
      { title: "Cold Outreach That Doesn't Feel Cold", desc: "Frameworks for reaching engineers and hiring managers who don't know you exist." },
      { title: "Turning Conversations Into Opportunities", desc: "Moving from network to referrals, projects, and job offers." },
    ],
  },
  {
    id: "rethinking-system-design",
    title: "Rethinking System Design",
    sub: "Stop memorizing architectures. Start thinking in trade-offs.",
    status: "coming_soon",
    modules: [
      { title: "The Trade-Off Mindset", desc: "Every design decision is a negotiation between consistency, availability, and cost." },
      { title: "Designing for Failure First", desc: "Resilience patterns, graceful degradation, and why happy paths are a trap." },
      { title: "Data at Scale: Beyond the Single Database", desc: "Sharding, replication, CQRS, and when simpler is actually smarter." },
      { title: "Real-Time Systems Without the Chaos", desc: "WebSockets, event streams, and the hidden complexity of \"live\" data." },
      { title: "System Design Interviews: The Meta-Game", desc: "What interviewers actually want to hear — and how to drive the conversation." },
    ],
  },
  {
    id: "ai-native-developer",
    title: "The AI-Native Developer",
    sub: "Using Claude, Cursor, and modern tooling to 10× your output — without losing your craft.",
    status: "coming_soon",
    modules: [
      { title: "The Shift From Coder to Orchestrator", desc: "How to think in prompts, agents, and pipelines instead of lines of code." },
      { title: "Claude as a Coding Partner", desc: "Prompt patterns, context strategies, and getting production-ready output." },
      { title: "Building AI Features in Real Products", desc: "Streaming, tool use, RAG — applied to apps users actually pay for." },
      { title: "Agents, Loops, and When to Trust the Machine", desc: "Designing agentic workflows with the right amount of human-in-the-loop." },
      { title: "Shipping AI Responsibly", desc: "Evals, hallucination mitigation, and setting expectations with stakeholders." },
    ],
  },
  {
    id: "fintech-playbook",
    title: "The Fintech Playbook",
    sub: "Engineering money — compliance, precision, and the hidden rules of financial software.",
    status: "coming_soon",
    modules: [
      { title: "Money Is Not a Float", desc: "Decimal precision, rounding rules, and why financial bugs are career-ending." },
      { title: "Compliance Without a Law Degree", desc: "What engineers actually need to know about PCI, SOC 2, and audit trails." },
      { title: "Payments 101 for Engineers", desc: "How ACH, cards, and ledgers actually work under the hood." },
      { title: "Idempotency and the Double-Charge Problem", desc: "Building transaction systems that never charge twice, even when things go wrong." },
      { title: "Breaking Into Fintech as an Engineer", desc: "What companies look for, the interview landscape, and how to position your background." },
    ],
  },
  {
    id: "portfolio-frameworks",
    title: "Portfolio Frameworks That Land Interviews",
    sub: "Most portfolios look identical. Here's how to build one that gets callbacks.",
    status: "coming_soon",
    modules: [
      { title: "The Signal Problem", desc: "Why most portfolios fail to communicate seniority — and what hiring managers actually scan for." },
      { title: "Project Selection Strategy", desc: "Choosing work that shows breadth, depth, and business impact — not just syntax." },
      { title: "Writing About Technical Work for Non-Technical Readers", desc: "The skill most engineers skip: translating complexity into business value." },
      { title: "Case Studies Over Screenshots", desc: "How to document decisions, trade-offs, and outcomes — not just features." },
      { title: "The Portfolio Review Framework", desc: "A system for auditing your own work before a hiring manager does." },
    ],
  },
];

const CourseCard = ({ course, index }: { course: typeof COURSES[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.08 }}
      className="rounded-2xl border border-border bg-background overflow-hidden"
    >
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: "hsl(var(--purple-muted))", color: "hsl(var(--purple))" }}
              >
                Coming Soon
              </span>
            </div>
            <h3 className="mt-2 text-lg font-black tracking-tight text-foreground">{course.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{course.sub}</p>
          </div>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border">
            <Lock className="h-4 w-4 text-muted-foreground" />
          </span>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <BookOpen className="h-3 w-3" />
          {open ? "Hide" : "Preview"} Curriculum
          {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border"
        >
          <ul className="divide-y divide-border">
            {course.modules.map((mod, i) => (
              <li key={mod.title} className="flex items-start gap-4 px-6 py-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[10px] font-bold text-muted-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{mod.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{mod.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
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

      <div className="px-6 pb-24 pt-28 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Member Dashboard
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-4 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            A lot more <span style={{ color: "hsl(var(--purple))" }}>on the way.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-12 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Courses are being built for Shipyard members. Preview the curriculum below — founding members get first access when each drops.
          </motion.p>

          {/* Course cards */}
          <div className="flex flex-col gap-4">
            {COURSES.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 text-center text-xs text-muted-foreground/50"
          >
            More courses being added. Stay tuned via Slack.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
