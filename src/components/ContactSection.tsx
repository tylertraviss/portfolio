import { motion } from "framer-motion";
import { track } from "@vercel/analytics/react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-card" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h2 className="mb-6 font-display text-4xl text-foreground md:text-5xl">
          Let's work together
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          I'm currently open to new opportunities. Whether you have a question, a project idea,
          or just want to say hello — my inbox is always open.
        </p>

        <a
          href="mailto:tylertravisrhs@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-80"
          onClick={() => track("contact_click", { type: "say_hello" })}
        >
          <Mail className="h-4 w-4" />
          Say Hello
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-16 flex justify-center gap-6">
          <a
            href="mailto:tylertravisrhs@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => track("contact_click", { type: "email_icon" })}
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tylercarmantravis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => track("contact_click", { type: "linkedin" })}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/tylertraviss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => track("contact_click", { type: "github" })}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          Built with React & Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
