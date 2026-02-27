import { motion } from "framer-motion";
import tylerPhoto from "@/assets/tyler-photo.png";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "C", "C#", "JavaScript", "SQL", "Assembly"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Express.js", "Flask", "TensorFlow", "OpenCV", "pandas", "Bootstrap"],
  },
  {
    label: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "Jira", "Asana"],
  },
  {
    label: "AI Tools",
    items: ["ChatGPT", "Claude", "Cursor", "Lovable", "OpenAI API", "Prompt Engineering"],
  },
];

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
        <h2 className="mb-12 font-display text-3xl text-foreground md:text-4xl">
          A bit about me
        </h2>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
          <div className="space-y-5 text-muted-foreground leading-relaxed flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6 flex justify-center">
              <img
                src={tylerPhoto}
                alt="Tyler Travis"
                className="h-40 w-40 rounded-2xl object-cover shadow-md border border-border"
              />
            </div>
            <p>
              I'm a software engineer with a passion for building reliable, scalable systems.
              I've worked across fintech, healthcare, and gaming — from automated testing frameworks
              at QA Consultants to machine learning models at Breathe Biomedical.
            </p>
            <p>
              Currently, I'm a Software Product Manager at Fintex Inc., guiding discovery and delivery
              across three regulated financial platforms serving 2M+ daily users including Tangerine,
              BMO, and Aviso.
            </p>
            <p>
              I hold a B.Sc. in Software Engineering from the University of New Brunswick.
              Outside of tech, I've acted in CBC's Macy Murdoch, coached youth soccer, and organized the inaugural Microsoft AI Day.
            </p>
          </div>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-secondary-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
