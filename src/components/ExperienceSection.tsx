import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import tangerineVideo from "@/assets/tangerine-project.mp4";

type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: React.ReactNode[];
  video?: string;
};

const experiences: Experience[] = [
  {
    title: "Founder",
    company: "hiredquick.org",
    companyUrl: "https://www.hiredquick.org/",
    period: "Aug 2026 – Present",
    location: "San Francisco, CA",
    bullets: [
      <span>Founded <strong className="text-foreground">HiredQuick</strong>, a platform that helps candidates land startup roles by researching a company's unsolved problems and guiding them to ship a tailored portfolio project before they apply.</span>,
      <span>Built the research pipeline that mines job posts, engineering blogs, GitHub, and founder interviews across <strong className="text-foreground">2,200+ startups</strong> and <strong className="text-foreground">5,700+ open roles</strong> to surface concrete product gaps.</span>,
      <span>Shipped an AI-assisted build flow with code review, auto-generated pitch pages with live demos, personalized founder outreach, and a visual pipeline board tracking companies from research to conversation.</span>,
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Member365",
    companyUrl: "https://member365.com/",
    period: "Jul 2026 – Present",
    location: "San Francisco, CA",
    bullets: [
      <span>Built and maintained a scalable regression testing framework that safeguarded releases for a multi-tenant SaaS platform serving <strong className="text-foreground">400+ member organizations</strong> and <strong className="text-foreground">2M+ end users</strong>.</span>,
      <span>Designed and deployed AI-powered parallel support agents for Zendesk, automating ticket triage and resolution workflows to save <strong className="text-foreground">25+ engineering hours per week</strong>.</span>,
      <span>Integrated the regression suite into CI/CD pipelines as automated release gates, expanding end-to-end coverage across billing, events, and membership workflows to catch defects before production.</span>,
    ],
  },
  {
    title: "Software Engineer",
    company: "SalesPatriot",
    period: "Jan 2026 – Jul 2026",
    location: "San Francisco, CA",
    bullets: [
      <span>Engineering the core platform at SalesPatriot — an AI-powered OS for defense and aerospace suppliers that automates procurement workflows from RFQ discovery to proposal submission, supporting <strong className="text-foreground">$200M+</strong> in Pentagon orders processed through the platform.</span>,
      <span>Engineered procurement automation workflows — including proposal generation, compliance checks, and pricing recommendations — enabling clients to process government contracts up to <strong className="text-foreground">7× faster</strong>.</span>,
      <span>Developed integrations unifying fragmented systems (ERP, CRM, email, spreadsheets) into a centralized AI-native hub, driving <strong className="text-foreground">3.3× more supplier emails</strong> per day and <strong className="text-foreground">2.3× more vendor quotes</strong> per week.</span>,
    ],
  },
  {
    title: "Software Engineer",
    company: "Fintex Inc.",
    period: "Jan 2025 – Dec 2025",
    location: "Toronto, ON",
    video: tangerineVideo,
    bullets: [
      <span>Guided delivery on the Tangerine Mobile Banking app (<a href="https://apps.apple.com/ca/app/tangerine-mobile-banking/id847844097" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">iOS</a> / <a href="https://play.google.com/store/apps/details?id=ca.tangerine.clients.banking.app&hl=en_CA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">Android</a>), a top-rated Canadian banking app serving <strong className="text-foreground">2M+ active daily users</strong>.</span>,
      <span>Oversaw and actively managed <strong className="text-foreground">2,000+ Jira artifacts</strong>, including user stories, bugs, test cases, and refinements, maintaining backlog integrity, traceability, and delivery readiness across multiple regulated workstreams.</span>,
      "Transformed ambiguous, high-level ideas into clear, quantifiable user stories by asking the right discovery questions, defining negative and edge cases, and establishing explicit acceptance criteria.",
    ],
  },
  {
    title: "Software Engineer",
    company: "QA Consultants",
    period: "Jan 2024 – Dec 2024",
    location: "Toronto, ON",
    bullets: [
      "Built automated regression testing frameworks using Selenium and Pytest for high-stakes applications in healthcare, fintech, and gaming, significantly reducing time-to-market for critical feature releases.",
      "Delivered end-to-end test coverage for Liquidity Software's financial platform, identifying critical defects pre-release and contributing to a measurable reduction in production incidents and MTTR.",
      "Developed automated test suites for video game clients, covering gameplay logic, UI flows, and performance edge cases — enabling faster release cycles without sacrificing quality.",
      "Modularized common test functionality by applying DRY principles across business-critical workflows, reducing test maintenance overhead and improving long-term suite maintainability.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TD Bank",
    period: "Apr 2023 – Aug 2023",
    location: "Moncton, NB",
    bullets: [
      <span>Created an Agile sprint monitoring tool for the DaaS platform, used by <strong className="text-foreground">12+ teams</strong> to manage scope.</span>,
      <span>Co-founded the TD AI Club, hosting monthly AI events that attracted <strong className="text-foreground">100+ members</strong> and built a community.</span>,
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Breathe Biomedical",
    period: "May 2021 – Aug 2022",
    location: "Moncton, NB",
    bullets: [
      <span>Established an organizational benchmark CNN model for machine learning prediction on lung cancer at <strong className="text-foreground">85% accuracy</strong>.</span>,
      <span>Migrated <strong className="text-foreground">50%</strong> of system software from LabVIEW to C++, refactoring control logic for actuators, relays, and controllers into a high-performance framework.</span>,
    ],
  },
];

type EntryProps = {
  exp: Experience;
  index: number;
  onInView: (i: number) => void;
};

const ExperienceEntry = ({ exp, index, onInView }: EntryProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (inView) onInView(index);
  }, [inView, index, onInView]);

  return (
    <div ref={ref} className="flex min-h-screen items-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 32 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full ${exp.video ? "grid gap-10 md:grid-cols-[1fr_auto]" : ""}`}
      >
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            {exp.period} · {exp.location}
          </p>
          <h3 className="mb-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-muted-foreground"
              >
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
          </h3>
          <p className="mb-10 text-sm text-muted-foreground">{exp.title}</p>
          <ul className="max-w-xl space-y-4">
            {exp.bullets.map((b, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + j * 0.08 }}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                {b}
              </motion.li>
            ))}
          </ul>
        </div>

        {exp.video && (
          <div className="flex items-center justify-center md:justify-end">
            <motion.video
              src={exp.video}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-40 rounded-2xl border border-border shadow-lg lg:w-52"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleInView = useCallback((i: number) => setActive(i), []);

  return (
    <section ref={sectionRef} className="border-t border-border" id="experience">
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-0">
        <div className="md:grid md:grid-cols-[220px_1fr] md:gap-16">

          {/* Left: sticky timeline */}
          <div className="hidden md:block">
            <div className="sticky top-0 flex h-screen flex-col justify-center">
              <p className="mb-10 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Experience
              </p>
              <div className="relative">
                {/* Track line */}
                <div className="absolute left-[5px] top-0 h-full w-px bg-border" />
                {/* Progress line */}
                <motion.div
                  className="absolute left-[5px] top-0 w-px bg-foreground"
                  style={{ height: lineScaleY, transformOrigin: "top" }}
                />
                <div className="space-y-7">
                  {experiences.map((exp, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`relative z-10 flex-shrink-0 rounded-full border-2 transition-all duration-500 ${
                          i === active
                            ? "mt-[3px] h-3 w-3 border-foreground bg-foreground"
                            : i < active
                            ? "mt-[4px] h-[9px] w-[9px] border-foreground bg-foreground"
                            : "mt-[4px] h-[9px] w-[9px] border-border bg-background"
                        }`}
                      />
                      <div className="space-y-0.5">
                        <p className={`leading-tight font-semibold transition-all duration-300 ${
                          i === active
                            ? "text-base text-foreground"
                            : "text-xs text-muted-foreground"
                        }`}>
                          {exp.company}
                        </p>
                        <p className={`transition-all duration-300 ${
                          i === active ? "text-xs text-muted-foreground" : "text-[10px] text-muted-foreground/60"
                        }`}>
                          {exp.period}
                        </p>
                        <p className={`transition-all duration-300 ${
                          i === active ? "text-xs text-muted-foreground/70" : "text-[10px] text-muted-foreground/50"
                        }`}>
                          {exp.title}
                        </p>
                        <p className={`transition-all duration-300 ${
                          i === active ? "text-xs text-muted-foreground/60" : "text-[10px] text-muted-foreground/50"
                        }`}>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: section label */}
          <p className="pb-12 pt-16 text-xs font-medium uppercase tracking-widest text-muted-foreground md:hidden">
            Experience
          </p>

          {/* Right: scrolling entries */}
          <div>
            {experiences.map((exp, i) => (
              <ExperienceEntry
                key={i}
                exp={exp}
                index={i}
                onInView={handleInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
