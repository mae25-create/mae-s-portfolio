import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { lang, toggle, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLink = (href: string, label: string) => {
    if (isHome && href.startsWith("#")) {
      return (
        <a
          key={href}
          href={href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          {label}
        </a>
      );
    }
    if (href.startsWith("#")) {
      return (
        <Link
          key={href}
          to={`/${href}`}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          {label}
        </Link>
      );
    }
    return null;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-md"
      } border-b border-border`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="font-heading text-xl font-bold tracking-tight"
        >
          Mae<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* My Projects Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t("My Projects", "过往项目")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {projectsOpen && (
              <div className="absolute top-full mt-2 left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                <Link
                  to="/projects/data-analysis"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {t("Data Analysis Projects", "数据分析项目")}
                </Link>
                <Link
                  to="/projects/ai-products"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {t("AI Products", "AI 产品")}
                </Link>
              </div>
            )}
          </div>

          {navLink("#experience", t("Work Experience", "工作经历"))}
          {navLink("#about", t("About", "关于我"))}
          {navLink("#contact", t("Contact", "联系我"))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-full border border-border text-xs font-semibold hover:bg-muted transition-colors duration-300"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:bg-muted transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-full border border-border text-xs font-semibold"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2">
            {t("My Projects", "过往项目")}
          </p>
          <Link
            to="/projects/data-analysis"
            onClick={() => setOpen(false)}
            className="block pl-4 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("Data Analysis Projects", "数据分析项目")}
          </Link>
          <Link
            to="/projects/ai-products"
            onClick={() => setOpen(false)}
            className="block pl-4 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("AI Products", "AI 产品")}
          </Link>
          <a href="#experience" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
            {t("Work Experience", "经历")}
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
            {t("About", "关于")}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
            {t("Contact", "联系")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
