import { motion } from "framer-motion";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const skillGroups = [
  { label: "Languages",  items: ["Python", "Java", "C++", "C", "C#", "JavaScript", "TypeScript", "SQL", "Assembly", "REST API"] },
  { label: "Frameworks", items: ["React.js", "Flask", "Node.js", "Express.js", "TensorFlow", "OpenCV", "pandas", "Bootstrap"] },
  { label: "Tools",      items: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "Jira", "Asana", "Trello", "AWS", "Azure"] },
  { label: "AI",         items: ["Claude", "ChatGPT", "OpenAI API", "Cursor", "Lovable", "Prompt Engineering"] },
];

const SkillsSection = () => {
  return (
    <section className="section-padding border-t border-border" id="skills">
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
          Skills
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div key={group.label} variants={revealVariants} custom={i * 0.1}>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                {group.label}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {group.items.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
