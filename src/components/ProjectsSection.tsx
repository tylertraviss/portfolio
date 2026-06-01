import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import { Github, Globe, Youtube } from "lucide-react";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  website?: string;
  youtube?: string;
  github?: string;
};

const featured: Project[] = [
  {
    title: "Gen Z Banking App",
    subtitle: "Full-Stack Mobile Banking",
    description: "Full-stack banking app built using Claude Code, Gemini, and Google Stitch — demonstrating AI-assisted development across a complete mobile banking experience.",
    tags: ["TypeScript", "React Native", "Claude Code", "Gemini", "Google Stitch"],
    github: "https://github.com/tylertraviss/gen-z-banking-app",
    youtube: "https://www.youtube.com/watch?v=WpC8qQv3zo8",
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
    title: "J&P Kitchen & Bath",
    subtitle: "Renovation & Design Studio",
    description: "Website for a Scarborough-based renovation studio serving the GTA, featuring a curated intake form to capture client design vision and drive insights for custom kitchen, bath, and living space projects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "UX"],
    website: "https://jandpkitchens.com/",
  },
];

const other: Project[] = [
  {
    title: "LoyaltyTickets",
    subtitle: "Concert Ticket Platform",
    description: "A concert ticket selling platform that uses Spotify API to reward biggest fans by giving them tickets first. Full-stack app with Go backend and Angular frontend, deployed on Railway.",
    tags: ["Go", "Angular", "Spotify API", "PostgreSQL", "Railway"],
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

const Links = ({ p, iconSize = "h-4 w-4" }: { p: Project; iconSize?: string }) => (
  <div className="flex shrink-0 items-center gap-3 text-muted-foreground">
    {p.website && (
      <a href={p.website} target="_blank" rel="noopener noreferrer"
        className="transition-colors hover:text-foreground"
        onClick={() => track("project_website_click", { title: p.title })}
        aria-label={`${p.title} website`}>
        <Globe className={iconSize} />
      </a>
    )}
    {p.youtube && (
      <a href={p.youtube} target="_blank" rel="noopener noreferrer"
        className="transition-colors hover:text-foreground"
        onClick={() => track("project_youtube_click", { title: p.title })}
        aria-label={`${p.title} demo`}>
        <Youtube className={iconSize} />
      </a>
    )}
    {p.github && (
      <a href={p.github} target="_blank" rel="noopener noreferrer"
        className="transition-colors hover:text-foreground"
        onClick={() => track("project_github_click", { title: p.title })}
        aria-label={`${p.title} GitHub`}>
        <Github className={iconSize} />
      </a>
    )}
  </div>
);

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

        {/* Featured: first card full-width, next two side by side */}
        <div className="mb-0 grid grid-cols-1 md:grid-cols-2">
          {/* First featured — full width */}
          <motion.div
            variants={revealVariants}
            custom={0.05}
            className="group col-span-1 border-t border-border py-10 md:col-span-2 md:py-14"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {featured[0].subtitle}
                </p>
                <h3 className="text-3xl font-black tracking-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-4xl lg:text-5xl">
                  {featured[0].title}
                </h3>
              </div>
              <Links p={featured[0]} iconSize="h-5 w-5" />
            </div>
            <p className="mb-6 mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {featured[0].description}
            </p>
            <p className="text-xs text-muted-foreground/60">
              {featured[0].tags.join(" · ")}
            </p>
          </motion.div>

          {/* Second and third featured — side by side */}
          {featured.slice(1).map((p, i) => (
            <motion.div
              key={i}
              variants={revealVariants}
              custom={(i + 1) * 0.08}
              className={`group border-t border-border py-10 md:py-12 ${
                i === 0 ? "md:pr-12" : "md:border-l md:pl-12"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.subtitle}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight text-foreground transition-colors group-hover:text-muted-foreground md:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <Links p={p} />
              </div>
              <p className="mb-5 mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <p className="text-xs text-muted-foreground/60">
                {p.tags.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider + "More projects" label */}
        <motion.div
          variants={revealVariants}
          custom={0.3}
          className="flex items-center gap-6 border-t border-border py-8"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
            More
          </p>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Compact list for remaining projects */}
        <div>
          {other.map((p, i) => (
            <motion.div
              key={i}
              variants={revealVariants}
              custom={0.32 + i * 0.05}
              className="group flex items-center justify-between gap-6 border-b border-border py-4"
            >
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-muted-foreground">
                    {p.title}
                  </h3>
                  <p className="hidden text-xs text-muted-foreground/50 md:block">
                    {p.subtitle}
                  </p>
                </div>
                <p className="mt-0.5 hidden text-xs text-muted-foreground/50 sm:block">
                  {p.tags.join(" · ")}
                </p>
              </div>
              <Links p={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
