import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Product Manager",
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
    <section className="section-padding bg-card" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Experience</p>
        <h2 className="mb-16 font-display text-3xl text-foreground md:text-4xl">
          Where I've worked
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid gap-4 border-t border-border py-8 md:grid-cols-[200px_1fr]"
            >
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
