import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const experiences = [
  {
    title: "Software Engineer",
    company: "SalesPatriot",
    period: "Jan 2026 – Present",
    bullets: [
      "Building and scaling core product features for a sales enablement platform.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Fintex Inc.",
    period: "Jan 2025 – Dec 2025",
    bullets: [
      "Guided discovery and delivery across three regulated financial services platforms (Tangerine, BMO, and Aviso), supporting products used by 2M+ active daily users and advisors across Canada.",
      "Oversaw and actively managed 2,000+ Jira artifacts, including user stories, bugs, test cases, and refinements, maintaining backlog integrity, traceability, and delivery readiness across multiple regulated workstreams.",
      "Transformed ambiguous, high-level ideas into clear, quantifiable user stories by asking the right discovery questions, defining negative and edge cases, and establishing explicit acceptance criteria.",
    ],
  },
  {
    title: "Software Engineer",
    company: "QA Consultants",
    period: "Jan 2024 – Dec 2024",
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
    bullets: [
      "Created an Agile sprint monitoring tool for the DaaS platform, used by 12+ teams to manage scope.",
      "Co-founded the TD AI Club, hosting monthly AI events that attracted 100+ members and built a community.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Breathe Biomedical",
    period: "May 2021 – Aug 2022",
    bullets: [
      "Established an organizational benchmark CNN model for machine learning prediction on lung cancer at 85% accuracy.",
      "Migrated 50% of system software from LabVIEW to C++, refactoring control logic for actuators, relays, and controllers into a high-performance framework.",
    ],
  },
];

const ExperienceSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding border-t border-border" id="experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.p
          variants={revealVariants}
          custom={0}
          className="mb-16 text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Experience
        </motion.p>

        <motion.div
          variants={revealVariants}
          custom={0.1}
          className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16"
        >
          {/* Left: company selector */}
          <div className="flex flex-row gap-4 overflow-x-auto md:flex-col md:gap-0 md:overflow-visible">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative flex-shrink-0 py-4 text-left md:border-t md:border-border"
              >
                {/* Active indicator */}
                <span
                  className={`absolute left-0 top-0 hidden h-full w-px bg-foreground transition-opacity md:block ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-opacity md:hidden ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />

                <p
                  className={`pl-0 text-sm font-medium transition-colors md:pl-4 ${
                    active === i
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {exp.company}
                </p>
                <p className={`pl-0 text-xs transition-colors md:pl-4 ${
                  active === i ? "text-muted-foreground" : "text-muted-foreground/40"
                }`}>
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {experiences[active].period}
                </p>
                <h3 className="mb-1 text-3xl font-black tracking-tight text-foreground md:text-4xl">
                  {experiences[active].company}
                </h3>
                <p className="mb-8 text-sm text-muted-foreground">
                  {experiences[active].title}
                </p>
                <ul className="space-y-3">
                  {experiences[active].bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: j * 0.07 }}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
