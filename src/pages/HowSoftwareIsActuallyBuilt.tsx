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

const Mistake = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-red-400">Common Mistake</p>
    {children}
  </div>
);

const Senior = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-green-500/20 bg-green-500/5 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-green-400">What Senior Engineers Do</p>
    {children}
  </div>
);

const HowSoftwareIsActuallyBuilt = () => (
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
          Engineering Fundamentals
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl"
        >
          How Software Is{" "}
          <span className="text-gradient">Actually Built.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          From idea to scalable system. Nobody teaches you this in tutorials. Here's what actually happens between "let's build it" and "it's in production."
        </motion.p>
      </div>
    </section>

    {/* Body */}
    <section className="mx-auto max-w-3xl space-y-28 px-6 pb-32 pt-8">

      {/* Intro */}
      <motion.div {...fadeUp(0.1)}>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We'll use the same example throughout this whole piece: you're building a professional network platform — think LinkedIn, but built the right way, by engineers who actually understand what they're building. Each step will ground out in something concrete. No abstract theory. No academic diagrams. Just what it actually looks like when good engineers work.
        </p>
      </motion.div>

      {/* 01 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">01</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          System Decomposition — Break It Before You Build It
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Before a single line of code gets written, you need to understand what you're actually building. Not features — <em>systems</em>. System decomposition is the practice of breaking a complex product into its component parts and understanding how they relate to each other.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          For a LinkedIn-like platform, that looks like this: you've got <strong className="text-foreground">identity</strong> (who are you, what are your credentials), <strong className="text-foreground">connections</strong> (who knows who), <strong className="text-foreground">content</strong> (posts, comments, reactions), <strong className="text-foreground">messaging</strong> (direct communication), <strong className="text-foreground">notifications</strong> (the glue that keeps people coming back), and <strong className="text-foreground">search/discovery</strong> (how you find anyone). Each of these is a bounded domain with its own data, rules, and behavior.
        </p>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>Jumping straight to "what pages do we need?" Pages are outputs, not architecture. Building your system around screens means you'll redesign your backend every time the product evolves.</p>
          </Mistake>
          <Senior>
            <p>Map the domains first — the nouns and verbs of the system — before you think about UI. A well-decomposed system can support completely different UIs without touching the backend. That's the point.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: draw your system decomposition as a rough diagram on a whiteboard (or a napkin). Circle each domain. Draw arrows for dependencies. If there are more than 3 arrows between two circles, that's a design smell — those things might actually be one domain, or you have a coupling problem.
        </Callout>
      </motion.div>

      {/* 02 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">02</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Requirements → Technical Specs — Translate Business Into Constraints
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          A requirement is not a technical spec. "Users should be able to connect with each other" is a requirement. A technical spec answers: what does "connect" mean in the database, what are the states (pending, accepted, blocked), who can initiate, what are the rate limits, what happens to the data if one user deletes their account?
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          This translation is where most projects go sideways. Not because engineers can't code — but because they start coding before the requirements are precise enough to code against.
        </p>
        <div className="space-y-4 mb-8">
          <CodeBlock code={`// Requirement:
// "Users can follow each other and see their content."

// Technical Spec:
// - Follow is unidirectional (not mutual like a connection)
// - States: following | not_following (no pending state)
// - Max follows per user: 5,000 (LinkedIn-style limit)
// - Feed: ordered by recency, paginated (cursor-based, not offset)
// - On unfollow: posts remain visible in feed until next refresh
// - Deleted users: follows are soft-deleted, not cascaded`} />
        </div>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>Writing "the system should be fast and scalable." That's not a spec. It's a wish. Specs have numbers: p99 latency under 200ms, support 10k concurrent users, feed loads in under 1s on a 4G connection.</p>
          </Mistake>
          <Senior>
            <p>Turn every ambiguous requirement into a question with a specific answer. Then write the answer down. That document becomes your acceptance criteria, your test cases, and your contract with the business.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: for every feature, ask "what does failure look like?" If the answer is "the user sees an error," that's a spec: what error, when, and what can they do next? Failure paths are 80% of real engineering work.
        </Callout>
      </motion.div>

      {/* 03 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">03</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Data Modeling — Your Schema Is Your Architecture
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Your data model is the most consequential decision you'll make. Get it wrong and you'll feel the pain for years — in slow queries, ugly workarounds, and migrations nobody wants to write. Get it right and the rest of the system falls into place naturally.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          For the connections feature of our platform, the naive model is two columns: <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">user_id_1</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">user_id_2</code>. The correct model is directional: <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">follower_id</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">following_id</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">status</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">created_at</code>. The difference? The naive model can't express "user A follows user B but B doesn't follow back." That's a real state in a real professional network.
        </p>
        <CodeBlock code={`-- Naive: can't express directionality or state
CREATE TABLE connections (
  user_id_1 UUID,
  user_id_2 UUID
);

-- Correct: expressive, queryable, extendable
CREATE TABLE follows (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL REFERENCES users(id),
  following_id UUID NOT NULL REFERENCES users(id),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT no_self_follow CHECK (follower_id != following_id),
  UNIQUE (follower_id, following_id)
);

CREATE INDEX idx_follows_follower ON follows(follower_id);
CREATE INDEX idx_follows_following ON follows(following_id);`} />
        <div className="space-y-4 mt-8 mb-8">
          <Mistake>
            <p>Skipping indexes "until we need them." By the time you need them, you have production data you can't afford to lock while you build the index. Design your access patterns first, build your indexes with the table.</p>
          </Mistake>
          <Senior>
            <p>Write your most common queries before you finalize your schema. If a query is awkward, your schema is wrong. The schema should make the queries obvious.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: every many-to-many relationship is a table in disguise. Stop storing arrays of IDs in columns. You'll need to query those relationships eventually, and you can't index a JSON array.
        </Callout>
      </motion.div>

      {/* 04 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">04</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Architecture Design — Choose Boring Technology
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Architecture is about decisions — specifically, which decisions are hard to reverse. Infrastructure choices, communication patterns between services, storage engines. Everything else is details you can change later. These you can't.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          For a professional network, the answer for most teams is a monolith with clear internal boundaries. Not microservices. Not serverless. A well-structured monolith with a Postgres database, a job queue for async work, and a CDN for media. Boring. Proven. Survivable by a team of three.
        </p>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>Designing for scale you don't have. Microservices add latency, operational overhead, distributed transaction complexity, and cross-service debugging hell. LinkedIn didn't start with microservices. They extracted them after they had scale that demanded it.</p>
          </Mistake>
          <Senior>
            <p>Start with the simplest architecture that could possibly work. Optimize for developer speed and operational simplicity. You can extract services later — you can't easily un-extract them. The best architecture is the one your team can actually operate at 2am when something breaks.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: before choosing a technology, ask "what does a 3am incident look like with this?" If the answer involves reading three different dashboards across two cloud providers with custom tooling nobody else on the team has used — that's your answer.
        </Callout>
      </motion.div>

      {/* 05 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">05</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          API & Interface Design — Your API Is a Product
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Your API is the contract between your backend and anything that consumes it — mobile apps, web clients, third parties, your future self. Bad APIs don't just frustrate developers; they calcify. You can't change a public API without breaking callers. Design it deliberately.
        </p>
        <CodeBlock code={`// WRONG: leaking implementation details
GET /getUsersByConnectionStatusFromMainFeedTable?uid=123&conn=1

// RIGHT: resource-oriented, clean, versioned
GET /v1/users/:id/feed
GET /v1/users/:id/connections
GET /v1/users/:id/connections/:connectionId

// Response envelope — always consistent
{
  "data": [...],
  "meta": {
    "total": 142,
    "cursor": "eyJpZCI6MTIzfQ==",
    "has_more": true
  },
  "error": null
}`} />
        <div className="space-y-4 mt-8 mb-8">
          <Mistake>
            <p>Designing APIs around what the current UI needs. "The profile page needs name, avatar, follower count, and recent posts in one call" is a UI requirement. If you build an API endpoint for it, you'll have 40 purpose-built endpoints within a year and a mess no new engineer can understand.</p>
          </Mistake>
          <Senior>
            <p>Design resource-oriented APIs. Let the client compose what it needs. Use GraphQL or a BFF (Backend for Frontend) pattern if composition is complex. Keep your core API clean and composable — don't let UI requirements pollute it.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: write your API documentation before you write the implementation. If you can't explain the endpoint in two sentences, the design is wrong. Docs-first design surfaces bad abstractions before they're in production.
        </Callout>
      </motion.div>

      {/* 06 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">06</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Implementation — Slow Is Smooth, Smooth Is Fast
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Most developers treat implementation as the main event. Senior engineers know it's the tail end of a process that mostly happened before the keyboard came out. By the time you're writing code, the hard decisions are made. Implementation is largely execution.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          That said, implementation has its own discipline. Small commits. Meaningful names. Functions that do one thing. Code that reads like English. Not because it's pretty — because the person debugging it at midnight might be you.
        </p>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>Writing 500-line functions because "it's faster." It's faster now. It'll cost you a week when something breaks in that function in six months and you can't figure out which of the 12 things it does is the problem.</p>
          </Mistake>
          <Senior>
            <p>Name everything for what it does, not what it is. <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">getUserConnections()</code> is fine. <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">getActiveConnectionsForFeedSortedByRecency(userId, limit)</code> tells you the business logic from the function name. Write code that explains itself. Comments describe why, not what.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: before you ship any feature, ask yourself — "if I left this job tomorrow, could the next person maintain this?" That's your bar. Not cleverness. Maintainability. That's what senior means.
        </Callout>
      </motion.div>

      {/* 07 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">07</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Testing — The Code You Write to Trust Your Code
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Tests are not about coverage percentages. They're about confidence. The question a test suite should answer is: "can I deploy this change without waking someone up?" If the answer is yes, your tests are working. If you're still scared every deploy, they're not.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          The right testing pyramid for a system like ours: lots of unit tests for business logic (follow/unfollow rules, feed ranking, notification triggers), integration tests for database interactions and API contracts, and a handful of end-to-end tests for critical paths (sign up, post, connect, message).
        </p>
        <CodeBlock code={`// Unit: fast, isolated, tests logic
test("cannot follow yourself", () => {
  expect(() => follow(userId, userId)).toThrow("cannot follow yourself");
});

// Integration: tests against a real DB
test("follow creates a record and updates follower count", async () => {
  await follow(userA.id, userB.id);
  const count = await getFollowerCount(userB.id);
  expect(count).toBe(1);
});

// E2E: tests the whole system, run on CI
test("user can sign up, create a post, and have it appear in followers' feeds", async () => {
  // ... playwright or similar
});`} />
        <div className="space-y-4 mt-8 mb-8">
          <Mistake>
            <p>Testing the happy path and calling it done. "The follow button works" is the easy test. "Following someone who just deleted their account" is the test that actually matters. Edge cases and failure modes are where bugs live.</p>
          </Mistake>
          <Senior>
            <p>Write tests for the contracts, not the implementation. If you're testing that a private function returns a specific format, you'll be rewriting tests every time you refactor. Test the behavior from the outside. That's what your users experience.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: when a bug reaches production, write the test that would have caught it before you fix the bug. Now you have a regression test and a failing baseline. Fix the code, watch the test go green. That's the discipline.
        </Callout>
      </motion.div>

      {/* 08 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">08</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Deployment & Infrastructure — Ship It Like You Mean It
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Deployment isn't the finish line — it's the starting gun. The goal isn't to ship code; it's to ship value to users with confidence you can roll back if something goes wrong. Your deployment pipeline should make this feel boring, not terrifying.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          At minimum: CI runs on every pull request (tests + lint + build), CD deploys to a staging environment on merge to main, production deploys are manual triggers with a one-click rollback. Add feature flags when teams get larger and you need to separate deployment from release.
        </p>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>SSH-ing into a server and running <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">git pull</code>. You've done it. We've all done it. The problem is it's not repeatable, not auditable, and not survivable. Manual deploys are fine until they're not, and then they're catastrophic.</p>
          </Mistake>
          <Senior>
            <p>Automate everything that can be automated. A deploy should be a button press or a merge. Your infrastructure should be code (Terraform, Pulumi, whatever). If your environment only exists in someone's head, it doesn't exist. It's a liability.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: deploy to production on your first day at a new company if you can. Not a big feature — a one-line change. It forces you to understand the whole pipeline before you need it under pressure. Learning the blast radius when the stakes are low is a gift.
        </Callout>
      </motion.div>

      {/* 09 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">09</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          Scaling & Optimization — Measure First, Optimize Second
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Most "performance improvements" that engineers spend time on are invisible to users. The actual performance problems are almost always in three places: N+1 database queries, missing indexes, and synchronous operations that should be async.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          On our platform, the feed is the performance battlefield. Generating a personalized feed for a user means querying everyone they follow, getting recent posts, ranking them, and returning paginated results — fast. The naive approach queries the database per follow. With 500 follows, that's 500 queries per feed load. The right approach: a single query with JOINs and a cursor, plus a cache layer (Redis) for the feed of heavy users.
        </p>
        <CodeBlock code={`-- Naive: N+1 hell
SELECT * FROM follows WHERE follower_id = $userId;
-- Then for each follow:
SELECT * FROM posts WHERE author_id = $followingId LIMIT 10;

-- Correct: single query with JOIN + cursor pagination
SELECT p.*, u.name, u.avatar_url
FROM posts p
JOIN follows f ON f.following_id = p.author_id
JOIN users u ON u.id = p.author_id
WHERE f.follower_id = $userId
  AND p.created_at < $cursor
ORDER BY p.created_at DESC
LIMIT 20;`} />
        <div className="space-y-4 mt-8 mb-8">
          <Mistake>
            <p>Caching everything preemptively. Caches are invalidation problems in disguise. Add caching when you can prove a query is slow and called frequently. Not before.</p>
          </Mistake>
          <Senior>
            <p>Profile before you optimize. EXPLAIN ANALYZE your slow queries. Look at your APM. Find the actual bottleneck. Optimizing the wrong thing is worse than not optimizing at all — it adds complexity with no user benefit.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: the fastest query is the one you don't make. Before adding caching, ask: can I redesign the data model so this query doesn't need to happen? Denormalization at the right layer eliminates entire classes of performance problems.
        </Callout>
      </motion.div>

      {/* 10 */}
      <motion.div {...fadeUp(0.1)} className="group">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">10</p>
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Iteration Loop — You're Never Done
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Software isn't built in one pass. It's evolved. The system you design on day one will be wrong in ways you can't predict. Users will use your product differently than you expected. Scale will expose assumptions you didn't know you were making. Third-party APIs will change. Requirements will change. The business will change.
        </p>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          The engineers who build lasting systems aren't the ones who got the design right the first time. They're the ones who built systems that were easy to change — and then actually changed them when the evidence demanded it.
        </p>
        <div className="space-y-4 mb-8">
          <Mistake>
            <p>Treating the original architecture as sacred. Sunk cost thinking destroys products. If the data shows that your feed ranking model isn't driving retention, you don't refactor around it — you replace it. The code serves the users, not the other way around.</p>
          </Mistake>
          <Senior>
            <p>Instrument everything from day one. Not just errors — behavior. How many users complete onboarding? Where do they drop off? What does a retained user look like at day 7? You can't iterate toward product-market fit if you're flying blind. Data is the feedback loop.</p>
          </Senior>
        </div>
        <Callout>
          The insider move: every six months, look at your codebase and ask "what would I do differently if I was starting today?" Then rank those answers by impact and start a refactor queue. Not everything gets refactored. But the ones that block growth — those get done.
        </Callout>
      </motion.div>

      {/* Conclusion */}
      <motion.div {...fadeUp(0.1)} className="group">
        <h2 className="mb-5 font-display text-3xl tracking-tight text-foreground md:text-4xl">
          The Mindset Shift That Changes Everything
        </h2>
        <div className="h-px w-12 bg-primary/40 mb-8 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Junior engineers think about features. Senior engineers think about systems. That's it. That's the whole difference. A feature is a thing the product does. A system is the set of structures, constraints, and processes that let the product evolve over time without collapsing.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The ten steps in this post aren't a waterfall process. They're a mental model. You'll compress them, skip some, revisit others. But knowing they exist — and understanding what decision each one is really making — is what separates engineers who build things that last from engineers who build things that work until they don't.
        </p>
        <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
          The goal was never to write code. The goal is to build a system where the next decision is easier than the last one. That's what senior looks like.
        </p>

        {/* 3 Things */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">If You Only Remember 3 Things</p>
          <div className="space-y-5">
            {[
              {
                num: "1",
                heading: "Design your data model before you write a line of code.",
                body: "Everything downstream — queries, APIs, performance — depends on this decision. Getting it wrong costs 10× more to fix later than it does to get right now."
              },
              {
                num: "2",
                heading: "Boring technology is a feature, not a limitation.",
                body: "The best architecture is the one your team can operate, debug, and extend. Postgres, a job queue, and a monolith have taken companies to billions in revenue. Reach for complexity only when simpler stops working."
              },
              {
                num: "3",
                heading: "Systems are optimized for change, not perfection.",
                body: "The code you ship today will be wrong in ways you can't see yet. Build for changeability: small functions, clear interfaces, tests that describe behavior. The engineers who succeed are the ones whose code is easy to improve."
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
          Learn with engineers who get it.
        </h3>
        <p className="mb-6 text-muted-foreground">
          Shipyard is a community for software engineers building real things with modern tools. Courses, 1:1 sessions, and a Slack full of people who think the same way you do.
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

export default HowSoftwareIsActuallyBuilt;
