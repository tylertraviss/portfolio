import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border-l-4 bg-muted/50 px-5 py-4 text-sm leading-relaxed text-muted-foreground" style={{ borderColor: "hsl(var(--purple))" }}>
    {children}
  </div>
);

const ClaudeBlock = ({ prompt, response }: { prompt: string; response: string }) => (
  <div className="space-y-2">
    <div className="rounded-xl border border-border bg-muted/30 px-5 py-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">My Prompt</p>
      <p className="text-sm leading-relaxed text-foreground font-mono">{prompt}</p>
    </div>
    <div className="rounded-xl border px-5 py-4" style={{ borderColor: "hsl(var(--purple) / 0.3)", background: "hsl(var(--purple-muted))" }}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--purple))" }}>Claude</p>
      <p className="text-sm leading-relaxed text-foreground">{response}</p>
    </div>
  </div>
);

const RebuildingLinkedInWithClaude = () => (
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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Building with AI
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl"
        >
          Rebuilding LinkedIn{" "}
          <span className="text-gradient">with Claude.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          I built an MVP of LinkedIn's core — profiles, connections, and a ranked feed — using Claude as my engineering partner. Here's exactly how the process worked, what surprised me, and what I'd do differently.
        </motion.p>
      </div>
    </section>

    {/* Body */}
    <section className="mx-auto max-w-3xl space-y-28 px-6 pb-32 pt-8">

      {/* Intro */}
      <motion.div {...fadeUp(0.1)}>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          LinkedIn is one of the most-used and most-complained-about platforms in software engineering. Every engineer has an opinion about what's wrong with it. So I decided to stop complaining and build an MVP — just the core — and use Claude to do it faster than I ever could alone.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          This isn't a post about AI replacing engineers. It's about what the workflow actually looks like when you use Claude as a genuine collaborator — not a code generator, but an architectural partner, a rubber duck that writes back, and occasionally the thing that saves you from a decision you'd regret at scale. No messaging, no posts, no notifications. Just the three features that make LinkedIn, LinkedIn.
        </p>
      </motion.div>

      {/* 01 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">01</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Starting with the Conversation, Not the Code
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The first thing I did wasn't open a code editor. I opened Claude and started a conversation about the product. Not the features — the <em>system</em>. What are the actual domains here? What does LinkedIn do at its core, stripped of the noise?
        </p>
        <div className="mb-8 space-y-4">
          <ClaudeBlock
            prompt="I want to rebuild the core of LinkedIn. Not the whole thing — the essential product. Help me decompose it into its real system boundaries, ignoring the bloat."
            response="At its core, LinkedIn is four things: Identity (who you are and what you've done), Graph (who knows who and how), Content (what people share and engage with), and Messaging (direct communication). Everything else — job listings, ads, learning — is a business layer on top of those four. If you nail the graph and identity systems, the rest follows. Where do you want to start?"
          />
        </div>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          That single response reframed the whole project. I'd been thinking about pages — profile page, feed page, messages page. Claude pulled me up to the domain level: <strong className="text-foreground">Identity, Graph, Content, Messaging.</strong> For this MVP, I'd build Identity, Graph, and just enough Content to power a ranked feed. Messaging was out of scope — and having a clear boundary early meant I never got distracted building toward it.
        </p>
        <Callout>
          The move that unlocked everything: treating Claude's first response as a draft, not an answer. I pushed back, refined, and iterated on the system design for two hours before I wrote a single file. That conversation saved me from three architecture mistakes I've made on previous projects.
        </Callout>
      </motion.div>

      {/* 02 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">02</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Data Model Was a Negotiation
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The graph is LinkedIn's hardest engineering problem. Connections, followers, degrees of separation — this is where naive models create performance nightmares at scale. I knew enough to be dangerous. Claude knew more.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          I started with what I thought was a reasonable schema. Claude told me it was wrong, and more importantly, explained exactly why it would fail at 100k users.
        </p>
        <div className="mb-8 space-y-4">
          <ClaudeBlock
            prompt="Here's my connections table: user_id_1, user_id_2, connected_at. What's wrong with this?"
            response="Two things: it can't express directionality — LinkedIn connections are mutual, but follows are one-way. You'll need both patterns. Second, querying 'who follows user X' requires a full table scan unless you index both columns separately. You also have no status column, which means you can't represent a pending connection request without a separate table. Here's a schema that handles all three cases cleanly..."
          />
        </div>
        <CodeBlock code={`-- What Claude recommended (simplified):
CREATE TABLE connections (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID NOT NULL REFERENCES users(id),
  addressee_id UUID NOT NULL REFERENCES users(id),
  status       TEXT NOT NULL CHECK (status IN ('pending','accepted','ignored','blocked')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT no_self_connect CHECK (requester_id != addressee_id),
  UNIQUE (requester_id, addressee_id)
);

-- Indexes for both traversal directions
CREATE INDEX idx_connections_requester ON connections(requester_id, status);
CREATE INDEX idx_connections_addressee ON connections(addressee_id, status);`} />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I wouldn't have added those indexes on day one. I would have added them in a panic when the first query timeout hit production. The conversation about data modeling with Claude took 45 minutes and saved me probably two weeks of future pain.
        </p>
      </motion.div>

      {/* 03 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">03</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Where Claude Is Actually Fast
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Once the architecture and data model were locked, implementation became the easiest part of this project. Not because the code wrote itself — but because Claude compresses the time between "I know what I need to build" and "it's built."
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Things that used to take me an afternoon: auth middleware, pagination utilities, API response envelopes, email templates, Supabase RLS policies. With Claude, these are 10-minute tasks. Not because I'm not thinking — I'm still reviewing and adjusting every output — but because I'm no longer starting from a blank file.
        </p>
        <div className="mb-8 space-y-4">
          <ClaudeBlock
            prompt="Write me cursor-based pagination for a PostgreSQL feed query. The feed is posts from users I follow, ordered by created_at desc. I want to be able to pass a cursor and get the next page."
            response="Cursor-based pagination with created_at is tricky because timestamps aren't guaranteed unique — two posts can have the same timestamp. The safe version encodes both created_at and id into the cursor, then uses a composite WHERE clause. Here's the query and the cursor encoding/decoding utilities..."
          />
        </div>
        <Callout>
          The pattern I settled into: I write the spec ("here's what this function needs to do, here are the edge cases"), Claude writes the first draft, I review and modify. We're usually at production-ready code in under 20 minutes for most features. The thinking is still mine. The typing is mostly Claude's.
        </Callout>
      </motion.div>

      {/* 04 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">04</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Feed Algorithm Problem — And Where Claude Got Stuck
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The feed is where things got interesting. LinkedIn's feed isn't chronological — it's ranked. Engagement, recency, relationship strength, content type. I wanted a simplified version of this: something smarter than raw recency, but not a full ML pipeline.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          This is where I learned Claude's actual limitation: it's excellent at concrete, well-specified problems. It gets fuzzy on product judgment. When I asked "what should my feed ranking algorithm prioritize?", I got a technically correct but ultimately useless answer. Five factors with equal weight. No opinion about what actually drives retention.
        </p>
        <div className="mb-8 space-y-4">
          <ClaudeBlock
            prompt="What should my feed ranking algorithm prioritize to drive engagement on a professional network?"
            response="You might consider: recency, relationship strength (first-degree vs second-degree), content type (original post vs share), engagement velocity (likes/comments in first hour), and content relevance to the viewer's industry. Each of these can be weighted based on your product goals."
          />
        </div>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Technically correct. Completely unhelpful. I had to bring my own product intuition here: people on a professional network want to see what their peers are building and thinking, not what's getting the most likes from strangers. So I weighted first-degree connections 3× over second-degree and original posts 2× over shares. Claude helped me implement that weighting cleanly — but the judgment was mine.
        </p>
        <Callout>
          Claude is a force multiplier for execution. It is not a substitute for product intuition. The engineers who'll win with AI tools are the ones who bring strong opinions about what to build and use Claude to build it faster — not the ones expecting Claude to tell them what to build.
        </Callout>
      </motion.div>

      {/* 05 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">05</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Testing: The Part AI Makes Easy That Nobody Talks About
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          I don't enjoy writing tests. I know they're valuable. I know they save me time in the long run. I still don't enjoy it. Claude changed this — not by making testing fun, but by making it fast enough that the friction disappeared.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          My workflow: write the feature, then paste the function into Claude with "write a test suite for this. Focus on edge cases and failure modes, not the happy path." The edge cases it generates are often things I wouldn't have thought of until they bit me in production.
        </p>
        <CodeBlock code={`// Claude-generated test cases for the follow() function
// I would have written the first two. Claude added the rest.

test("user can follow another user")
test("cannot follow yourself")
test("cannot follow the same user twice")          // <- I'd have caught this
test("follow fails if target user is blocked")      // <- probably would have missed this
test("follow fails if you have been blocked")       // <- definitely would have missed
test("follow count increments correctly")
test("follow is reflected in follower's feed")
test("unfollow removes posts from feed on next load") // <- edge case I'd have hit in prod`} />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          That last test case — the one about posts persisting in the feed after unfollow — would have been a live bug without this. It's a 45-second fix when you know about it. It's a confusing production incident when you don't.
        </p>
      </motion.div>

      {/* 06 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">06</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Uncomfortable Part Nobody Writes About
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Building with Claude is faster. It's also occasionally disorienting in a way I didn't expect: I shipped features I didn't fully understand. Not because Claude wrote bad code — the code was fine. But because it was code I hadn't written line by line, I sometimes found myself debugging something and realizing I needed to re-read it before I could reason about the failure.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          This is the discipline you have to develop: don't accept output you can't explain. If Claude writes something and you read it and think "yeah, looks right" without actually understanding it — you'll own that confusion during every future incident. Review everything. Ask it to explain the parts you don't understand. Treat every output like a PR from a very capable contractor who doesn't know your system as well as you do.
        </p>
        <Callout>
          The engineers who struggle with AI tools are the ones who use them to avoid thinking. The engineers who thrive are the ones who use them to think faster. The tool doesn't change the job — the job is still understanding your system deeply enough to maintain and evolve it. Claude just removes the grunt work between decisions.
        </Callout>
      </motion.div>

      {/* 07 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">07</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          What Actually Shipped
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Here's the honest accounting. The goal was an MVP — the three features that make LinkedIn worth using. In roughly a weekend of focused work, I shipped:
        </p>
        <ul className="mb-8 space-y-3">
          {[
            "User profiles with experience, skills, and bio — fully editable",
            "Bidirectional connections with pending/accepted/ignored states",
            "A ranked feed with first-degree connection weighting",
            "Text post creation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "hsl(var(--purple))" }} />
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          That's intentionally it. No messaging. No image uploads. No notifications. An MVP is a bet that you can validate your core idea before building everything around it. These four features are the bet.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Would I have shipped this alone in a weekend? No. Not even close. The honest multiplier estimate: Claude made me roughly 3–4× faster on implementation tasks. The thinking, the decisions, the debugging — that was still 100% me. But thinking without having to type every consequence of your thinking changes how much you can do in a weekend.
        </p>
      </motion.div>

      {/* 08 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">08</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          3 Things I'd Do Differently
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <div className="space-y-6">
          {[
            {
              num: "1",
              heading: "Spend more time on the data model before touching Claude.",
              body: "The data model conversation was the most valuable part of this project. I should have gone into it with a clearer hypothesis to stress-test rather than asking Claude to design it with me from scratch. The best use of Claude in architecture is as a devil's advocate on decisions you've already made — not as the one making the decisions."
            },
            {
              num: "2",
              heading: "Set context limits per conversation.",
              body: "Claude's context window is large but not infinite. By hour 6 of a single conversation, early architectural decisions had drifted out of context. I started fresh conversations for each major module and got dramatically better output. Treat each Claude conversation like a meeting with a specific agenda — not an open-ended working session that runs all day."
            },
            {
              num: "3",
              heading: "Review everything before it goes into a file.",
              body: "I pasted several Claude outputs directly without reading them fully, telling myself I'd review later. Later never came until something broke. My rule now: nothing goes into the codebase unless I can explain every line. Takes more time in the moment. Saves enormous time when things go wrong."
            }
          ].map(({ num, heading, body }) => (
            <div key={num} className="flex items-start gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "hsl(var(--purple))" }}>
                {num}
              </span>
              <div>
                <p className="font-semibold text-foreground">{heading}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div {...fadeUp(0.1)} className="group">
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Real Question Isn't "Can Claude Build This?"
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-8 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Every engineer I've talked to frames AI tools as a question of capability: can it do this? That's the wrong question. Claude can do most things. The question is whether <em>you</em> can direct it well enough to get to something worth shipping.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Rebuilding LinkedIn with Claude taught me that the value of an AI-native workflow isn't speed. It's leverage. When the bottleneck in your engineering is thinking — it removes the bottleneck of typing. When the bottleneck is judgment — it can't help you. You have to bring that yourself.
        </p>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          The engineers who win with these tools will be the ones who have strong opinions about systems, sharp product instincts, and the discipline to understand every line they ship — regardless of who wrote it. The tool is not the edge. Your judgment about how to use it is.
        </p>

        {/* 3 Things */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">If You Only Remember 3 Things</p>
          <div className="space-y-5">
            {[
              {
                num: "1",
                heading: "Use Claude for architecture conversations before writing code.",
                body: "The highest-leverage use of Claude in any project isn't generating code — it's stress-testing your design decisions before they're load-bearing. An hour of architectural conversation saves a week of refactoring."
              },
              {
                num: "2",
                heading: "Claude is an execution multiplier, not a judgment replacement.",
                body: "It's 3–4× faster on implementation tasks once you know what you're building. It has no opinion worth trusting about what you should build. Keep those roles separate."
              },
              {
                num: "3",
                heading: "Don't ship code you can't explain.",
                body: "The codebase is yours. Every line lives in your system and will break in your production environment. If you can't explain why Claude made a particular decision, ask until you can. That's not slowness — that's engineering."
              }
            ].map(({ num, heading, body }) => (
              <div key={num} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "hsl(var(--purple))" }}>
                  {num}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{heading}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.1)}
        className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
          Keep Building
        </p>
        <h3 className="mb-3 font-display text-2xl text-foreground">
          Build with engineers who actually ship.
        </h3>
        <p className="mb-6 text-muted-foreground">
          Shipyard is a community for engineers building real things with modern AI tools. Courses, 1:1 sessions, and a Slack for people who'd rather ship than debate.
        </p>
        <a
          href="/shipyard"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          style={{ background: "hsl(var(--purple))" }}
        >
          Join Shipyard
        </a>
      </motion.div>

    </section>
  </div>
);

export default RebuildingLinkedInWithClaude;
