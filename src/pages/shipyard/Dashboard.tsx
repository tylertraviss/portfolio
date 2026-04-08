import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, BookOpen, ChevronDown, ChevronUp, Video, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";
import tylerHeadshot from "@/assets/tyler-headshot.png";

const BLOG_POSTS = [
  {
    title: "You're Using Claude Wrong",
    sub: "Most engineers treat AI like a search engine. Here's what changes when you don't.",
    href: "/youre-using-claude-wrong",
    internal: true,
  },
  {
    title: "The AI Architect Roadmap 2026",
    sub: "A practical breakdown of what it takes to design AI-native systems in the next wave.",
    href: "/ai-architect-roadmap-2026",
    internal: true,
  },
];

const SLACK_INVITE_URL = "https://join.slack.com/t/shipyard-tech/shared_invite/zt-3uolq13is-C1OiGgoT0fszRl8XIqm5jA";
const CALENDLY_URL = "https://calendly.com/tylertravis";

const COURSES = [
  {
    id: "social-software-engineer",
    title: "The Social Software Engineer",
    sub: "Your code gets you hired once. Your network gets you hired for life.",
    videos: 8,
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
    videos: 10,
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
    videos: 12,
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
    videos: 9,
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
    videos: 7,
    modules: [
      { title: "The Signal Problem", desc: "Why most portfolios fail to communicate seniority — and what hiring managers actually scan for." },
      { title: "Project Selection Strategy", desc: "Choosing work that shows breadth, depth, and business impact — not just syntax." },
      { title: "Writing About Technical Work for Non-Technical Readers", desc: "The skill most engineers skip: translating complexity into business value." },
      { title: "Case Studies Over Screenshots", desc: "How to document decisions, trade-offs, and outcomes — not just features." },
      { title: "The Portfolio Review Framework", desc: "A system for auditing your own work before a hiring manager does." },
    ],
  },
  {
    id: "from-ic-to-staff",
    title: "From IC to Staff Engineer",
    sub: "The promotion nobody prepares you for — and how to navigate it deliberately.",
    videos: 11,
    modules: [
      { title: "What Staff Actually Means", desc: "Why the title varies wildly by company and how to calibrate your expectations." },
      { title: "Expanding Your Scope Without Burning Out", desc: "Operating across teams without losing ownership of your own work." },
      { title: "Technical Leadership vs. Management", desc: "The difference between leading people and leading systems — and why both matter." },
      { title: "Writing Design Docs That Drive Decisions", desc: "How to frame proposals so teams align fast and stakeholders stay informed." },
      { title: "The Sponsorship Game", desc: "Why mentorship isn't enough — and how to find someone who will fight for you in the room." },
    ],
  },
  {
    id: "debugging-like-a-senior",
    title: "Debugging Like a Senior",
    sub: "Speed isn't the goal. Certainty is.",
    videos: 9,
    modules: [
      { title: "The Mental Model First", desc: "Why the best debuggers form hypotheses before touching the keyboard." },
      { title: "Reading Stack Traces Without Panic", desc: "Extracting signal from noise in error outputs across languages and runtimes." },
      { title: "Distributed System Failures Are Different", desc: "How to debug across services, networks, and async boundaries." },
      { title: "Reproducing the Unreproducible", desc: "Techniques for hunting down race conditions, flaky tests, and prod-only bugs." },
      { title: "Post-Mortems That Actually Prevent Recurrence", desc: "Writing blameless post-mortems that teams actually read and act on." },
    ],
  },
  {
    id: "breaking-in-without-a-target-school",
    title: "Breaking In Without a Target School",
    sub: "How to compete in a market that was designed to overlook you.",
    videos: 10,
    modules: [
      { title: "The Gatekeeping Is Real — Here's How It Works", desc: "ATS systems, recruiter screens, and the filters you need to know about." },
      { title: "Building Credibility Without a Brand Name Degree", desc: "Open source, side projects, writing, and the alternatives that actually move the needle." },
      { title: "Getting a Referral When You Know Nobody", desc: "The cold-to-warm pipeline — turning strangers into advocates." },
      { title: "Surviving the Technical Screen", desc: "Realistic prep strategy for LeetCode, system design, and take-home projects." },
      { title: "Negotiating Your First Offer (And Your Third)", desc: "What to say, what not to say, and why the first number is never the last." },
    ],
  },
  {
    id: "shipping-in-a-legacy-codebase",
    title: "Shipping in a Legacy Codebase",
    sub: "Most of the world's code is old. Learn to move fast inside it anyway.",
    videos: 8,
    modules: [
      { title: "Reading Code You Didn't Write", desc: "Techniques for building a mental model of an unfamiliar system quickly." },
      { title: "The Strangler Fig and Other Safe Refactors", desc: "Patterns for modernizing without rewriting — and without breaking production." },
      { title: "Testing Without a Test Suite", desc: "How to add coverage incrementally and make legacy code safe to change." },
      { title: "Managing Technical Debt Without Career Debt", desc: "When to fight for refactor time and how to frame it to non-technical stakeholders." },
      { title: "Migrating Databases Nobody Wants to Touch", desc: "Zero-downtime migration strategies for schemas that haven't changed in a decade." },
    ],
  },
  {
    id: "engineering-your-compensation",
    title: "Engineering Your Compensation",
    sub: "You optimized the algorithm. Now optimize your paycheck.",
    videos: 6,
    modules: [
      { title: "How Comp Bands Actually Work", desc: "Levels, bands, refresh cliffs, and the numbers your manager doesn't volunteer." },
      { title: "Timing Your Moves", desc: "When to stay, when to leave, and why the market rewards job-hoppers more than loyalty." },
      { title: "The Competing Offer Playbook", desc: "How to use competing offers ethically and effectively — without burning bridges." },
      { title: "Equity 101 for Engineers", desc: "ISOs vs RSUs, cliffs, vesting, strike prices, and what to actually value at a startup." },
      { title: "Remote, Hybrid, and Location-Based Pay", desc: "Navigating geographic pay adjustments and when to push back." },
    ],
  },
];

const CourseCard = ({ course, index, locked }: { course: typeof COURSES[0]; index: number; locked: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.06 }}
      className={`flex flex-col rounded-2xl border bg-background overflow-hidden ${locked ? "border-border opacity-60" : "border-border"}`}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: "hsl(var(--purple-muted))", color: "hsl(var(--purple))" }}
              >
                Coming Soon
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Video className="h-3 w-3" />
                {course.videos} videos
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{course.modules.length} modules</span>
            </div>
            <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">{course.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{course.sub}</p>
          </div>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border">
            <Lock className="h-4 w-4 text-muted-foreground" />
          </span>
        </div>

        {!locked && (
          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <BookOpen className="h-3 w-3" />
            {open ? "Hide" : "Preview"} Curriculum
            {open ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        )}
      </div>

      {!locked && open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
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

const BlogSection = () => (
  <div>
    <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Blog Posts</p>
    <div className="flex flex-col gap-3">
      {BLOG_POSTS.map((post, i) => (
        <motion.div
          key={post.href}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }}
        >
          {post.internal ? (
            <Link
              to={post.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <div>
                <p className="font-semibold text-foreground">{post.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{post.sub}</p>
              </div>
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            </Link>
          ) : (
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground/20"
            >
              <div>
                <p className="font-semibold text-foreground">{post.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{post.sub}</p>
              </div>
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const PremiumDashboard = () => (
  <div className="flex flex-col gap-16">
    {/* 1:1 Session */}
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="relative overflow-hidden rounded-2xl p-8"
      style={{ background: "hsl(262 50% 12%)" }}
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(var(--purple))" }} />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <img
          src={tylerHeadshot}
          alt="Tyler Travis"
          className="h-24 w-24 shrink-0 rounded-2xl object-cover md:h-32 md:w-32"
        />
        <div className="flex-1">
          <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ background: "hsl(var(--purple))" }}>
            Premium Exclusive
          </span>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white">Discounted 1:1 Session</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Book time with Tyler directly. Resume reviews, system design walkthroughs, career advice, or code reviews — at a rate exclusive to Premium members.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "hsl(var(--purple))" }}
          >
            <Calendar className="h-4 w-4" />
            Book a Session
          </a>
        </div>
      </div>
    </motion.div>

    {/* Blog posts */}
    <BlogSection />

    {/* Courses */}
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Courses</p>
      <p className="mb-6 text-sm text-muted-foreground">Coming soon — Premium members get first access when each drops.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {COURSES.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} locked={false} />
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground/50">More courses being added. Stay tuned via Slack.</p>
    </div>
  </div>
);

const CommunityDashboard = () => (
  <div className="flex flex-col gap-16">
    {/* Slack CTA */}
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="rounded-2xl border border-border bg-background p-8"
    >
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">Community</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">You're in the Slack.</h3>
      <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground max-w-lg">
        Connect with engineers, share what you're building, and get answers from people who've been there. Six channels — #ai-tools, #job-hunt, #code-review, #show-and-tell, #general-chat, and #wins.
      </p>
      <a
        href={SLACK_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: "hsl(var(--purple))" }}
      >
        Open Slack
      </a>
    </motion.div>

    {/* Blog posts */}
    <BlogSection />

    {/* 1:1 CTA — paid, no discount */}
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-8 md:flex-row md:items-center md:gap-10"
    >
      <img
        src={tylerHeadshot}
        alt="Tyler Travis"
        className="h-20 w-20 shrink-0 rounded-2xl object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-black tracking-tight text-foreground">Book a 1:1 Session</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Resume review, career advice, or a code walkthrough with Tyler directly.
        </p>
        <p className="mt-1 mb-5 text-sm text-muted-foreground">
          Community members pay full rate —{" "}
          <Link to="/shipyard" style={{ color: "hsl(var(--purple))" }} className="font-medium underline underline-offset-2 transition-opacity hover:opacity-80">
            upgrade to Premium for a discounted rate.
          </Link>
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "hsl(var(--purple))" }}
        >
          <Calendar className="h-4 w-4" />
          Book a Session
        </a>
      </div>
    </motion.div>

    {/* Locked courses teaser */}
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Courses</p>
      <p className="mb-6 text-sm text-muted-foreground">
        Courses are a Premium feature.{" "}
        <Link to="/shipyard" className="underline underline-offset-2 transition-colors hover:text-foreground">
          Upgrade to get first access.
        </Link>
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {COURSES.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} locked={true} />
        ))}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const tier = sessionStorage.getItem("shipyard_tier") ?? "community";
  const isPremium = tier === "premium";

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

      <div className="px-6 pb-24 pt-28 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            {isPremium ? "Premium Dashboard" : "Community Dashboard"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-4 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tighter text-foreground"
          >
            {isPremium ? (
              <>A lot more <span style={{ color: "hsl(var(--purple))" }}>on the way.</span></>
            ) : (
              <>Welcome to <span style={{ color: "hsl(var(--purple))" }}>Shipyard.</span></>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="mb-12 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {isPremium
              ? "You're a founding Premium member. Courses drop here first — plus discounted 1:1 access and everything below."
              : "You're a Community member. Access the Slack, read the blog, and book a session whenever you're ready."}
          </motion.p>

          {isPremium ? <PremiumDashboard /> : <CommunityDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
