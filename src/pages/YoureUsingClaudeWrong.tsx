import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-xl border border-border bg-muted px-5 py-4 text-sm leading-relaxed text-foreground font-mono">
    <code>{code.trim()}</code>
  </pre>
);

const BeforeAfter = ({
  before,
  after,
}: {
  before: string;
  after: string;
}) => (
  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-red-500/30 bg-red-500/5 px-5 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-400">Before</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{before}</p>
    </div>
    <div className="rounded-xl border border-green-500/30 bg-green-500/5 px-5 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-400">After</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{after}</p>
    </div>
  </div>
);

const YoureUsingClaudeWrong = () => (
    <div className="min-h-screen bg-background">

      {/* Nav */}
      <div className="mx-auto max-w-5xl px-6 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </a>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/10 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl"
          >
            You're Using{" "}
            <span className="text-gradient">Claude Wrong.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Most people treat Claude like a smarter Google — type a question, get an answer, repeat. There's a better way. Here's what actually changes how much you get out of it.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-3xl space-y-28 px-6 pb-32 pt-8">

        {/* 01 */}
        <motion.div {...fadeUp(0.1)} className="group">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">01</p>
          <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            What a Skill Actually Is
          </h2>
          <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            A Skill is a folder with a single file — <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">SKILL.md</code> — that tells Claude how to handle a specific task. It's not an app or a plugin. It's instructions Claude reads before responding so it behaves exactly the way you want, every time, without re-explaining yourself.
          </p>

          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">A real SKILL.md looks like this:</p>
            <CodeBlock code={`---
name: code-reviewer
description: Use this when the user asks to review, audit, or improve code quality. Covers readability, performance, and security.
---

# Code Review Skill

When reviewing code:
- Flag security vulnerabilities first
- Then performance issues
- Then readability improvements
- Always explain *why* something is a problem, not just that it is
- Suggest a fix for every issue you raise

Format: numbered list, grouped by severity.`} />
            <p className="text-sm text-muted-foreground">
              That's it. Drop that folder into Claude and it handles every code review the same way — no more inconsistent feedback, no more repeating your preferences.
            </p>

            <p className="text-sm font-medium text-foreground pt-4">You're not limited to one. Here's a real project setup with multiple Skills:</p>
            <CodeBlock code={`skills/
├── code-reviewer/
│   └── SKILL.md   ← "use when asked to review or audit code"
│
├── linkedin-post/
│   └── SKILL.md   ← "use when asked to write a LinkedIn post"
│
└── email-drafter/
    └── SKILL.md   ← "use when asked to draft a client-facing email"`} />
            <p className="text-sm text-muted-foreground">
              You zip the whole <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">skills/</code> folder and upload it once. Claude reads every SKILL.md and automatically picks the right one based on what you ask. Ask it to review code — <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">code-reviewer</code> fires. Ask it to write a post — <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">linkedin-post</code> fires. You don't have to tell it which to use. That's the whole point.
            </p>
          </div>
        </motion.div>

        {/* 02 */}
        <motion.div {...fadeUp(0.1)} className="group">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">02</p>
          <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            The #1 Mistake Everyone Makes
          </h2>
          <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            You're copy-pasting the same prompt over and over. Every new chat, you re-explain your tone, your format, your context. That's manual work a Skill would do for you automatically. Build it once. Use it forever.
          </p>

          <div className="space-y-4">
            <BeforeAfter
              before={`"Write a LinkedIn post about this topic. Keep it professional but conversational, no hashtags, under 200 words, end with a question to drive engagement, don't use bullet points..."`}
              after={`"Write a LinkedIn post about shipping my new side project."`}
            />
            <p className="text-sm text-muted-foreground">
              The second version works because a <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">linkedin-post</code> Skill already knows your format rules, your tone, your character limits. You stop prompting and start doing.
            </p>
          </div>
        </motion.div>

        {/* 03 */}
        <motion.div {...fadeUp(0.1)} className="group">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">03</p>
          <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            The Description Field Is Everything
          </h2>
          <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Most people write a vague description or skip it entirely. This is why their Skill never triggers. Claude reads the description to decide when to use the Skill — if it's vague, Claude won't know when to reach for it.
          </p>

          <div className="space-y-4">
            <BeforeAfter
              before={`description: helps with writing`}
              after={`description: Use this when the user asks to write, draft, revise, or improve a client-facing email. Applies professional tone, concise structure, and a clear call to action.`}
            />
            <p className="text-sm font-medium text-foreground mt-4">The pattern that works:</p>
            <CodeBlock code={`description: Use this when [specific trigger]. Covers [what it handles]. Applies [key behaviors].`} />
            <p className="text-sm text-muted-foreground">
              Specific triggers. Concrete scope. Claude needs to know not just what the Skill does — but exactly when to use it.
            </p>
          </div>
        </motion.div>

        {/* 04 */}
        <motion.div {...fadeUp(0.1)} className="group">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">04</p>
          <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Don't Dump Everything in One File
          </h2>
          <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            SKILL.md should be short — one page, two at most. The mistake is treating it like a documentation dump. Every edge case, every example, every exception crammed into one file. That tanks performance. Claude loads everything in SKILL.md upfront. Keep it lean and move the detail into reference files.
          </p>

          <div className="space-y-6">
            <BeforeAfter
              before={`One massive SKILL.md with 800 lines — tone guidelines, 20 examples, edge cases, fallback instructions, formatting rules, all in one place.`}
              after={`SKILL.md is 40 lines. It references /references/tone-guide.md and /references/examples.md which Claude only loads when needed.`}
            />

            <p className="text-sm font-medium text-foreground">Your folder structure should look like this:</p>
            <CodeBlock code={`my-skill/
├── SKILL.md          ← short, focused, triggers the skill
├── references/
│   ├── tone-guide.md    ← loaded when tone decisions are needed
│   └── examples.md      ← loaded when examples are needed
└── assets/
    └── template.md      ← loaded when generating output`} />
            <p className="text-sm text-muted-foreground">
              This is Progressive Disclosure — Claude gets the core behavior immediately and pulls in detail only when the task requires it. Faster, cleaner, and it actually scales as your Skill grows.
            </p>
          </div>
        </motion.div>

        {/* 05 */}
        <motion.div {...fadeUp(0.1)} className="group">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">05</p>
          <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Anthropic's Official Skills
          </h2>
          <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Anthropic ships a library of ready-made Skills you can use immediately or learn from. These are the real ones — open source, maintained by the team that built Claude. Download any of them, read how they're structured, and use them as a template for your own.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { name: "Algorithmic Art", slug: "algorithmic-art" },
              { name: "Brand Guidelines", slug: "brand-guidelines" },
              { name: "Canvas Design", slug: "canvas-design" },
              { name: "Claude API", slug: "claude-api" },
              { name: "Doc Co-authoring", slug: "doc-coauthoring" },
              { name: "DOCX", slug: "docx" },
              { name: "Frontend Design", slug: "frontend-design" },
              { name: "Internal Comms", slug: "internal-comms" },
              { name: "MCP Builder", slug: "mcp-builder" },
              { name: "PDF", slug: "pdf" },
              { name: "PPTX", slug: "pptx" },
              { name: "Skill Creator", slug: "skill-creator" },
              { name: "Slack GIF Creator", slug: "slack-gif-creator" },
              { name: "Theme Factory", slug: "theme-factory" },
              { name: "Web Artifacts Builder", slug: "web-artifacts-builder" },
              { name: "Webapp Testing", slug: "webapp-testing" },
              { name: "XLSX", slug: "xlsx" },
            ].map(({ name, slug }) => (
              <a
                key={slug}
                href={`https://github.com/anthropics/skills/blob/main/skills/${slug}/SKILL.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                {name}
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover/item:translate-x-1 group-hover/item:text-primary" />
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            The full repo is at{" "}
            <a
              href="https://github.com/anthropics/skills/tree/main/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              github.com/anthropics/skills
            </a>
            .
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Go Deeper
          </p>
          <h3 className="mb-3 font-display text-2xl text-foreground">
            The Complete Guide from Anthropic
          </h3>
          <p className="mb-6 text-muted-foreground">
            Everything above came from Anthropic's official Skills guide. If you want the full picture — file structure, testing, distribution — it's worth a read.
          </p>
          <a
            href="https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
          >
            Read the Full Guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </div>
);

export default YoureUsingClaudeWrong;
