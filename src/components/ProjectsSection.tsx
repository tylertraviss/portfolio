import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import { Github, Globe, Youtube } from "lucide-react";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const projects = [
  {
    title: "LoyaltyTickets",
    subtitle: "Concert Ticket Platform",
    description: "A concert ticket selling platform that uses Spotify API to reward biggest fans by giving them tickets first. Full-stack app with Go backend and Angular frontend, deployed on Railway.",
    tags: ["Go", "Angular", "Spotify API", "PostgreSQL", "Railway"],
    website: "https://loyaltytickets.ca/",
    youtube: "https://youtu.be/SZpT_vyZsFw?si=XNlv3K6Zdf1GB5_C",
  },
  {
    title: "Regression Testing Framework",
    subtitle: "Testing Suite",
    description: "Automated testing suite for the Google Homepage, showcasing logging, reporting, CI integration, and Pytest best practices.",
    tags: ["Python", "Pytest", "CI", "Logging"],
    github: "https://github.com/tylertraviss/Regression-Framework-Example",
    youtube: "https://youtu.be/gUGn0pKXp2A?si=-xLNQ0ovabM-_Oyb",
  },
  {
    title: "CodeCompass",
    subtitle: "LeetCode AI Assistant",
    description: "AI-powered LeetCode assistant providing real-time solutions and explanations. Built with Python and Flask.",
    tags: ["Python", "Flask", "AI", "OpenAI API"],
    github: "https://github.com/tylertraviss/CodeCompass",
    youtube: "https://youtu.be/qfDysjISc-I?si=OJe0008Tts3yZ6qu",
  },
  {
    title: "Eye Disease Classification",
    subtitle: "CNN-Based Retinal Analysis",
    description: "Deep learning model for retinal image analysis achieving 85% accuracy in disease classification.",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
    github: "https://github.com/tylertraviss/EyeDiseaseClassification",
  },
  {
    title: "Talent Agency System",
    subtitle: "Client Management Tool",
    description: "Java-based client management application leveraging design patterns for scalable architecture.",
    tags: ["Java", "Design Patterns", "OOP"],
    github: "https://github.com/tylertraviss/TalentAgencySystem",
  },
  {
    title: "Student Audit Tracking",
    subtitle: "Degree Planning Tool",
    description: "Helps students identify where they are in their engineering degree and plan their courseload for incoming years.",
    tags: ["Python", "MySQL", "SQLite", "HTML", "CSS"],
    github: "https://github.com/SWE4103-Team1/StudentTrackingSystem",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding border-t border-border" id="projects">
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
          Projects
        </motion.p>

        <div className="grid gap-0 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={revealVariants}
              custom={i * 0.08}
              className="group border-t border-border py-10 md:odd:pr-12 md:even:pl-12 md:even:border-l"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-muted-foreground md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.subtitle}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                      onClick={() => track("project_website_click", { title: p.title })}
                      aria-label={`${p.title} website`}>
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                  {p.youtube && (
                    <a href={p.youtube} target="_blank" rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                      onClick={() => track("project_youtube_click", { title: p.title })}
                      aria-label={`${p.title} demo`}>
                      <Youtube className="h-4 w-4" />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                      onClick={() => track("project_github_click", { title: p.title })}
                      aria-label={`${p.title} GitHub`}>
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <p className="text-xs text-muted-foreground/60">
                {p.tags.join(" · ")}
              </p>
            </motion.div>
          ))}
          <div className="col-span-2 border-t border-border" />
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
