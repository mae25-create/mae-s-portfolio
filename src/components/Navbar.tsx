import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, toggle, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t("About", "关于") },
    { href: "#experience", label: t("Experience", "工作经历") },
    { href: "#projects", label: t("Projects", "项目") },
    { href: "#skills", label: t("Skills", "技能") },
    { href: "#contact", label: t("Contact", "联系") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">
          Mae<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="ml-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
