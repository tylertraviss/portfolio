import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-primary/30 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-foreground">
    {children}
  </div>
);

const SectionDivider = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-4">
    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{number}</span>
    <div className="h-px flex-1 bg-border" />
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
  </div>
);

const BlogHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Tyler Travis
        </a>

        <motion.p
          animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 4 }}
          transition={{ duration: 0.2 }}
          className="hidden max-w-xs truncate text-sm font-medium text-foreground md:block"
        >
          Junior Devs Are Finished. Here's the AI-Architect Roadmap.
        </motion.p>

        <a
          href="https://www.youtube.com/@tylertraviss"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-80"
        >
          Watch on YouTube
        </a>
      </div>
    </motion.header>
  );
};

const AIArchitectRoadmap = () => (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/10 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Opinion · Career · 2026
          </motion.p>

          {/* Fear stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex flex-wrap justify-center gap-3"
          >
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              80% entry-level rejection rates
            </span>
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
              AI agents close junior tickets 10× faster
            </span>
          </motion.div>

          {/* Fear headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl"
          >
            You're not losing to other engineers.{" "}
            <span className="text-gradient">You're losing to an API call.</span>
          </motion.h1>

          {/* Divider with pivot */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mx-auto mb-6 h-px w-16 origin-center bg-border"
          />

          {/* Reframe */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-3 font-display text-2xl tracking-tight text-foreground md:text-3xl"
          >
            Good. Use that fear.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
            className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            The engineers who get replaced aren't the ones who felt the shift coming —
            they're the ones who didn't change how they thought about their job.
            Shift the mindset, and what the industry is desperately looking for right now
            is exactly what you can become.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.84 }}
            className="mt-4 mx-auto max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I'm going to walk you through the <span className="font-semibold text-foreground">AI-Architect Stack</span> — the four-layer skillset
            that defines what the industry actually needs right now: Systems Thinking, AI-Native
            Development, Product Intuition, and Taste. Each one builds on the last.
            Skip a layer and you're just a more expensive prompt engineer.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl space-y-24 px-6 pb-32 pt-4">

        {/* Act 1 — Validate the fear */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <SectionDivider number="Act I" label="The Fear Is Earned" />
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            The human compiler is dead
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            For fifteen years, the entry-level dev job had a simple value proposition: junior
            developers convert tickets into syntax. Product says build X, junior dev builds X.
            That exchange made sense when humans were the only option.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            AI agents now complete that same loop ten times faster, at a fraction of the cost,
            without sick days or Slack messages. The math isn't cruel — it's just math.
            Companies didn't stop building software. They stopped needing a team of four to do
            what one engineer with the right setup can now ship alone.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The interview process has already adjusted. Four to five rounds are now standard.
            System design questions have crept into every stage — including junior roles. AI is
            explicitly allowed in interviews now, which means the bar isn't <em>what you can write</em>.
            It's <em>what you can architect</em>.
          </p>
          <Callout>
            Mechanical coding jobs are genuinely disappearing. Acknowledging that isn't doom —
            it's the prerequisite for doing something about it.
          </Callout>
        </motion.div>

        {/* Act 2 — The reframe */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <SectionDivider number="Act II" label="The Reframe" />
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            AI can execute. It cannot judge.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Here's what every senior engineer already knows that most junior developers haven't
            internalized yet: writing code was never the hard part. Knowing <em>what</em> to write,
            <em> why</em> this approach over that one, <em>when</em> to push back on a spec — that's
            the job. The rest was always overhead.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            AI is exceptional overhead. It autocompletes boilerplate, recalls syntax, generates tests,
            writes documentation. What it cannot do is bring judgment to an ambiguous problem. It can't
            tell you that the feature you've been asked to build is the wrong feature. It can't weigh a
            technical tradeoff against a business constraint it doesn't understand. It can't sense that
            a design is brittle before the incident proves it.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            That gap — between execution and judgment — is where the AI-Architect lives. And it's a
            skill set you can build deliberately. Here's the four-layer stack.
          </p>
        </motion.div>

        {/* Act 3 — The roadmap */}
        <motion.div {...fadeUp(0.1)} className="space-y-10">
          <SectionDivider number="Act III" label="The Roadmap" />
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Layer 1</p>
            <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              Systems Thinking
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              You can't architect what you can't model. Before you write a single line — or prompt a
              single model — you need to be able to decompose a system into its data flows, contracts,
              failure modes, and tradeoffs. This isn't an advanced skill. It's the foundation every
              other layer depends on.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              The practical version looks like this: when a ticket arrives, your first output isn't
              code. It's a one-paragraph spec. What does this system receive, what does it return,
              what can break, what are the constraints? That thinking is what separates a junior dev
              from someone who directs AI effectively — and it's trainable.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              The{" "}
              <a
                href="https://github.com/affaan-m/everything-claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                everything-claude-code repo
              </a>{" "}
              (128k+ stars) makes this concrete. The <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">rules/common/</code> directory —
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"> coding-style.md</code>,
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"> performance.md</code>,
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"> agents.md</code> — aren't tips. They're
              constitutional rules that govern how every agent in the system behaves. Writing them
              is an act of systems thinking. You're not solving a problem; you're defining a system
              that solves a class of problems.
            </p>
            <Callout>
              The AI-Architect doesn't write rules once. They define a system that <em>enforces</em> rules
              automatically — across every task, every agent, every session.
            </Callout>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Layer 2</p>
            <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              AI-Native Development
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              AI-native development isn't using Copilot to autocomplete. It's building a repeatable
              pipeline where AI handles execution and you handle judgment — consistently, at scale.
              The pipeline in the repo looks like this:
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  cmd: "/plan",
                  desc: "The planner agent generates a full implementation blueprint — PRD, architecture, task list — before a single line of code is written. You review and approve the plan. Then you execute it.",
                },
                {
                  cmd: "/tdd",
                  desc: "The tdd-guide agent enforces write-tests-first. 80% coverage is baked into the workflow as a hard requirement, not a suggestion. You don't decide whether to write tests — the system decides for you.",
                },
                {
                  cmd: "/code-review",
                  desc: "The code-reviewer agent checks quality, maintainability, and security on every change. Not occasionally. Every time. The bar doesn't drop when you're moving fast.",
                },
                {
                  cmd: "/security-scan",
                  desc: "AgentShield runs 1,282 tests across 102 rules — OWASP Top 10, injection patterns, exposed secrets. This runs before anything ships.",
                },
              ].map(({ cmd, desc }) => (
                <div key={cmd} className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                  <code className="text-sm font-mono font-semibold text-primary">{cmd}</code>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              You didn't write any of that code. You defined the spec, reviewed the output, and the
              system enforced quality at every step. The hooks layer goes further — hooks auto-fire
              on tool events. Try to commit a <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">console.log</code> into
              production TypeScript and a hook warns you before it reaches the branch. Quality becomes
              structural, not aspirational.
            </p>
            <Callout>
              The point isn't that AI writes your code. It's that you've built a system where
              substandard output physically cannot ship without being caught. That's a different
              level of engineering than most teams operate at.
            </Callout>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Layer 3</p>
            <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              Product Intuition
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              The leverage point was never code quality — it was always building the right thing.
              An engineer who can't connect their technical decisions to business outcomes is a
              cost center. An engineer who can is irreplaceable.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              The repo operationalizes this through CLAUDE.md files — the product context layer.
              The <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">examples/saas-nextjs-CLAUDE.md</code> is a
              real-world reference config for a Next.js + Supabase + Stripe SaaS. It reads like a PM
              wrote it: what the product is, who it's for, which tradeoffs were made, what's off-limits.
              Every agent in the system reads that file before it acts.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              The two-instance kickoff pattern takes this further. Instance 1 is a scaffolding agent:
              it lays the project structure, sets up configs, bootstraps the stack. Instance 2 is a deep
              research agent: connected to all services, it creates the PRD and compiles architecture
              diagrams. One solo engineer, functioning like a two-person founding team.
            </p>
            <Callout>
              The AI-Architect writes CLAUDE.md files the way a PM writes a PRD. That document
              becomes the product intuition the entire system operates from.
            </Callout>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Layer 4</p>
            <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
              Taste
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              Taste is the ability to look at a system design, a UX flow, an API surface — and know
              it's wrong before you can articulate why. It takes time to build. You build it by reading
              code you didn't write, studying systems you didn't design, and making enough decisions to
              develop an intuition for what ages well and what doesn't.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              In the AI-Architect context, taste shows up in model routing. The repo's model table:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { model: "Haiku", use: "File exploration, simple edits, writing docs — lightweight, frequent calls" },
                { model: "Sonnet", use: "Multi-file implementation, PR reviews, 90% of real engineering tasks" },
                { model: "Opus", use: "Complex architecture decisions, security analysis, deep debugging" },
              ].map(({ model, use }) => (
                <div key={model} className="flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                  <code className="mt-0.5 shrink-0 rounded bg-primary/10 px-2 py-0.5 text-xs font-mono font-semibold text-primary">
                    {model}
                  </code>
                  <p className="text-sm leading-relaxed text-muted-foreground">{use}</p>
                </div>
              ))}
            </div>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              A junior dev uses Opus for everything and burns their budget. An AI-Architect routes
              intelligently. The same principle applies to context management: compact at logical
              breakpoints, not when auto-triggered at 95%. Taste applies everywhere — including
              how you manage the model you're working with.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The repo gives you a head start. These are patterns refined over ten months of daily
              use building real products. Read the code, understand the choices, adapt it to your
              context. That's how taste gets built faster.
            </p>
          </div>
        </motion.div>

        {/* Claude section */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <SectionDivider number="Applied" label="Maximizing Claude" />
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            How to use Claude at the AI-Architect level
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Most engineers use Claude like a faster Stack Overflow — paste an error, get an answer,
            move on. That's not leverage. That's just faster Googling. The gap between that and
            AI-Architect-level usage is significant, and it's mostly about how you structure the
            relationship between your thinking and Claude's output.
          </p>
          <div className="space-y-4">
            {[
              {
                label: "Build Skills, not prompt habits.",
                body: "Stop retyping your preferences every session. A Skill is a small instruction file that tells Claude exactly how to handle a specific task — your code review criteria, your PR format, your debugging approach. Write it once. It fires automatically every time. This is the difference between prompting Claude and programming Claude.",
              },
              {
                label: "Spec before you generate.",
                body: "The quality of Claude's output is a direct function of your input quality. Before you ask Claude to build anything, write a tight spec: what it does, what it receives, what it returns, what can fail. Two minutes of precise thinking saves twenty minutes of correction.",
              },
              {
                label: "Review like a senior engineer would review you.",
                body: "Claude is fast. It's also confidently wrong in ways that reach production. Don't ask 'does it compile' — ask 'is this the right approach, are edge cases covered, is this going to be a maintenance problem in six months.' The engineers with the worst incidents are the ones who trusted output blindly.",
              },
              {
                label: "Run agentic loops, not one-shot prompts.",
                body: "The real unlock is handing Claude a complete task with full context: write the code, write the tests, check its own output, fix the failures. That loop — with quality gates baked in — is what makes one engineer 4× as productive. One-shot prompting is table stakes, not leverage.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="rounded-xl border border-border bg-card px-5 py-5 shadow-sm">
                <p className="mb-2 font-medium text-foreground">{label}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <Callout>
            I wrote a full breakdown of Skills, agentic loops, and the description patterns that
            actually trigger —{" "}
            <a
              href="/youre-using-claude-wrong"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              You're Using Claude Wrong
            </a>
            . If this section landed, that post goes deeper on the mechanics.
          </Callout>
        </motion.div>

        {/* Closing */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <SectionDivider number="Close" label="The Window" />
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Every layer compounds. Skip one and you're just a more expensive prompt engineer.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The engineers who win aren't the ones who know the most syntax. They're the ones thinking
            at a higher level than the model they're using. Systems thinking, AI-native pipelines,
            product intuition, taste — each layer multiplies the one below it.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The window to build this is real, but it isn't infinite. The engineers who figure this out
            in the next twelve months will define the default expectations for the next decade.
            Everyone after that is catching up.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            One action: fork{" "}
            <a
              href="https://github.com/affaan-m/everything-claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              the repo
            </a>
            . Drop it in your current project. Run <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">/plan</code> on
            your next feature before you write a single line. That's the rep that counts.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Watch the Full Walkthrough
          </p>
          <h3 className="mb-3 font-display text-2xl text-foreground">
            See the repo in action
          </h3>
          <p className="mb-6 text-muted-foreground">
            The video walks every layer of the stack hands-on — opening the repo, running the
            pipeline, showing exactly how each tool fires. If the post gave you the framework,
            the video gives you the visual.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://www.youtube.com/@tylertraviss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
            >
              Watch on YouTube
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/youre-using-claude-wrong"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              Also read: You're Using Claude Wrong
            </a>
          </div>
        </motion.div>

      </article>
    </div>
);

export default AIArchitectRoadmap;
