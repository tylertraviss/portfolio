import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const skillGroups = [
  { label: "Languages",  items: ["Python", "Java", "C++", "C", "C#", "JavaScript", "TypeScript", "SQL", "Assembly", "REST API"] },
  { label: "Frameworks", items: ["React.js", "Flask", "Node.js", "Express.js", "TensorFlow", "OpenCV", "pandas", "Bootstrap"] },
  { label: "Tools",      items: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "Jira", "Asana", "Trello", "AWS", "Azure"] },
  { label: "AI",         items: ["Claude", "ChatGPT", "OpenAI API", "Cursor", "Lovable", "Prompt Engineering"] },
];

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section-padding border-t border-border" id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-5xl"
      >
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">

          {/* Left: About */}
          <div className="space-y-6">
            <motion.p variants={revealVariants} custom={0} className="mb-10 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              About
            </motion.p>

            <motion.p variants={revealVariants} custom={0.1} className="text-lg leading-relaxed text-foreground md:text-xl">
              I'm a software engineer with a passion for building reliable, scalable systems
              that don't just work — they hold up under pressure.
            </motion.p>
            <motion.p variants={revealVariants} custom={0.2} className="text-base leading-relaxed text-muted-foreground">
              Over the past few years, I've worked across fintech, healthcare, and gaming — from designing
              automated testing frameworks at QA Consultants to developing machine learning models at
              Breathe Biomedical.
            </motion.p>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 overflow-hidden"
                >
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Currently at Fintex Inc., I guide discovery and delivery across three regulated financial
                    platforms serving 2M+ daily users, including Tangerine, BMO, and Aviso. I bridge the gap
                    between business and engineering — translating ambiguity into clear requirements and
                    ensuring what gets built is scalable, compliant, and resilient.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    B.Sc. Software Engineering, University of New Brunswick. Outside of tech: actor on CBC's
                    Macy Murdoch, 1,000+ hours coaching youth soccer, and co-organizer of the inaugural
                    Microsoft AI Day.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              variants={revealVariants}
              custom={0.3}
              onClick={() => setExpanded((e) => !e)}
              className="group relative inline-flex items-center text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative z-10 px-4 py-2.5">
                {expanded ? "Read Less" : "Read More"}
              </span>
              <span className="absolute inset-0 scale-90 rounded-sm border border-border opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:border-foreground" />
            </motion.button>
          </div>

          {/* Right: Skills */}
          <div>
            <motion.p variants={revealVariants} custom={0} className="mb-10 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Skills
            </motion.p>

            <div className="space-y-8">
              {skillGroups.map((group, i) => (
                <motion.div key={group.label} variants={revealVariants} custom={i * 0.1}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                    {group.label}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">
                    {group.items.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
