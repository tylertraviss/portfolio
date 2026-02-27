import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all md:px-12 lg:px-24 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : ""
      }`}
    >
      <a href="#home" className="font-display text-xl text-foreground">
        Tyler Travis
      </a>
      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
