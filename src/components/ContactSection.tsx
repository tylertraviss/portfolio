import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import { Linkedin, Github } from "lucide-react";
import { revealVariants, staggerContainer } from "@/hooks/useTextReveal";

const ContactSection = () => {
  return (
    <section className="section-padding border-t border-border" id="contact">
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
          Contact
        </motion.p>

        <motion.h2
          variants={revealVariants}
          custom={0.1}
          className="mb-10 text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter text-foreground"
        >
          Let's work
          <br />
          together.
        </motion.h2>

        <motion.div variants={revealVariants} custom={0.25} className="mb-20">
          <a
            href="mailto:tylertravisrhs@gmail.com"
            className="text-lg font-medium text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-foreground hover:decoration-foreground"
            onClick={() => track("contact_click", { type: "email" })}
          >
            tylertravisrhs@gmail.com
          </a>
        </motion.div>

        <motion.div variants={revealVariants} custom={0.35} className="flex items-center gap-8 border-t border-border pt-10">
          <a
            href="https://www.linkedin.com/in/tylercarmantravis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => track("contact_click", { type: "linkedin" })}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/tylertraviss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => track("contact_click", { type: "github" })}
          >
            <Github className="h-4 w-4" />
          </a>
          <span className="ml-auto text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} Tyler Travis
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
