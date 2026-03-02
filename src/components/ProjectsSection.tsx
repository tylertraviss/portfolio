import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "LoyaltyTickets",
    subtitle: "Concert Ticket Platform",
    description:
      "A concert ticket selling platform that uses Spotify API to reward biggest fans by giving them tickets first. Full-stack app with Go backend and Angular frontend, deployed on Railway.",
    tags: ["Go", "Angular", "Spotify API", "PostgreSQL", "Railway"],
  },
  {
    title: "Regression Testing Framework",
    subtitle: "Testing Suite",
    description:
      "Automated testing suite for the Google Homepage, showcasing logging, reporting, CI integration, and Pytest best practices.",
    tags: ["Python", "Pytest", "CI", "Logging", "Reporting"],
    github: "https://github.com/tylertraviss/Regression-Framework-Example",
  },
  {
    title: "CodeCompass",
    subtitle: "LeetCode AI Assistant",
    description:
      "AI-powered LeetCode assistant providing real-time solutions and explanations. Built with Python and Flask.",
    tags: ["Python", "Flask", "AI", "OpenAI API"],
    github: "https://github.com/tylertraviss/CodeCompass",
  },
  {
    title: "Eye Disease Classification",
    subtitle: "CNN-Based Retinal Analysis",
    description:
      "Deep learning model for retinal image analysis achieving 85% accuracy in disease classification.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/tylertraviss/EyeDiseaseClassification",
  },
  {
    title: "Talent Agency System",
    subtitle: "Client Management Tool",
    description:
      "Java-based client management application leveraging design patterns for scalable architecture.",
    tags: ["Java", "Design Patterns", "OOP"],
    github: "https://github.com/tylertraviss/TalentAgencySystem",
  },

  {
    title: "Student Audit Tracking System",
    subtitle: "Degree Planning Tool",
    description:
      "Helps students identify where they are in their engineering degree and plan their courseload for incoming years.",
    tags: ["Python", "MySQL", "SQLite", "HTML", "CSS"],
    github: "https://github.com/SWE4103-Team1/StudentTrackingSystem",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Projects</p>
        <h2 className="mb-16 font-display text-3xl text-foreground md:text-4xl">
          Things I've built
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mb-2 text-xs font-medium text-accent">{p.subtitle}</p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
