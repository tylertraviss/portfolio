import { motion } from "framer-motion";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const experiences = [
  {
    title: "Software Engineer",
    company: "Fintex Inc.",
    period: "Mar 2025 – Present",
    bullets: [
      "Guiding discovery and delivery across three regulated financial platforms (Tangerine, BMO, Aviso) supporting 2M+ daily users.",
      "Managing 2,000+ Jira artifacts maintaining backlog integrity and delivery readiness.",
      "Transforming ambiguous ideas into quantifiable user stories with explicit acceptance criteria.",
    ],
  },
  {
    title: "Software Engineer",
    company: "QA Consultants",
    period: "May 2024 – Mar 2025",
    bullets: [
      "Built automated testing frameworks for healthcare, fintech, and gaming, accelerating CI pipelines.",
      "Modularized common functionality with DRY principles, reducing technical debt significantly.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TD Bank",
    period: "Apr 2023 – Aug 2023",
    bullets: [
      "Created an Agile sprint monitoring tool for the DaaS platform used by 12+ teams.",
      "Co-founded the TD AI Club, hosting events that attracted 100+ members.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Breathe Biomedical",
    period: "May 2021 – Aug 2022",
    bullets: [
      "Established a benchmark CNN model for lung cancer prediction at 85% accuracy.",
      "Migrated 50% of system software from LabView to C++ for high-performance control logic.",
    ],
  },
];

const ExperienceSection = () => {
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

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={revealVariants}
              custom={i * 0.1}
              className="group grid gap-6 border-t border-border py-10 md:grid-cols-[1fr_3fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{exp.period}</p>
              </div>
              <div>
                <h3 className="mb-1 text-2xl font-bold text-foreground md:text-3xl">
                  {exp.company}
                </h3>
                <p className="mb-5 text-sm text-muted-foreground">{exp.title}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
