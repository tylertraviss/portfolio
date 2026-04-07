import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { track } from "@vercel/analytics/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-all md:px-12 lg:px-24 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : ""
        }`}
      >
        <a
          href="#home"
          className="text-sm font-medium tracking-widest text-foreground uppercase"
          onClick={() => track("nav_click", { label: "Home" })}
        >
          Tyler Travis
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => track("nav_click", { label: l.label })}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/stacking-skills"
            className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            style={{ background: "hsl(var(--purple))" }}
            onClick={() => track("nav_click", { label: "Join" })}
          >
            Join
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => { setMenuOpen(false); track("nav_click", { label: l.label }); }}
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/stacking-skills"
                className="inline-flex w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                style={{ background: "hsl(var(--purple))" }}
                onClick={() => { setMenuOpen(false); track("nav_click", { label: "Join" }); }}
              >
                Join
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
