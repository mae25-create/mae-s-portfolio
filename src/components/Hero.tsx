import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Linkedin, Github, Mail, BarChart3, Code2, Globe, Sparkles } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const floatAnimation = (delay: number, duration: number, y: number) => ({
  y: [0, -y, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const Highlight = ({ children, color = "yellow" }: { children: React.ReactNode; color?: "yellow" | "green" }) => (
  <span
    className={`px-1 rounded ${
      color === "yellow" ? "bg-primary/20" : "bg-accent/20"
    }`}
  >
    {children}
  </span>
);

const Hero = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:mae@example.com", label: "Email" },
  ];

  const decorativeIcons = [
    { icon: BarChart3, variant: "secondary" as const, delay: 0, size: 56, pos: "top-[-20px] left-[-30px]" },
    { icon: Code2, variant: "primary" as const, delay: 0.3, size: 48, pos: "top-[10px] right-[-25px]" },
    { icon: Globe, variant: "destructive" as const, delay: 0.6, size: 44, pos: "bottom-[40px] left-[-35px]" },
    { icon: Sparkles, variant: "outline" as const, delay: 0.9, size: 40, pos: "bottom-[20px] right-[-20px]" },
  ];

  return (
    <section className="relative overflow-hidden bg-background" style={{ minHeight: "90vh" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] pt-28 md:pt-36 pb-10 md:pb-20">
        {/* TWO COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* LEFT SIDE - 2/3 */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small intro */}
            <p className="text-lg mb-6 leading-relaxed text-foreground">
              {t(
                <>
                  Hi there! I'm Mae, a data analyst with{" "}
                  <Highlight color="yellow">4 years</Highlight> of experience analyzing
                  investment deals, now building AI products that bridge markets.
                </>,
                <>
                  你好！我是Mae，一名拥有
                  <Highlight color="yellow">4年</Highlight>
                  投资分析经验的数据分析师，现专注于构建连接市场的AI产品。
                </>
              )}
            </p>

            {/* MASSIVE HEADLINE */}
            <h1
              className="font-heading uppercase mb-8 text-foreground"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-1px",
              }}
            >
              {t(
                <>
                  I BUILD AI
                  <br />
                  PRODUCTS THAT
                  <br />
                  BRIDGE MARKETS.
                </>,
                <>
                  以数据构建产品
                  <br />
                  以AI连接市场
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg leading-[1.7] mb-10 max-w-[550px] text-muted-foreground">
              {t(
                <>
                  Data analyst turned AI product builder. I spent{" "}
                  <Highlight color="yellow">4 years</Highlight> analyzing deals in
                  Shanghai, then taught myself to code and shipped{" "}
                  <Highlight color="green">5 AI products</Highlight> in 6 months.
                </>,
                <>
                  从数据分析师到AI产品构建者。我在上海花了
                  <Highlight color="yellow">4年</Highlight>
                  分析投资交易，随后自学编程，在6个月内交付了
                  <Highlight color="green">5个AI产品</Highlight>。
                </>
              )}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-semibold text-lg text-primary-foreground bg-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 shadow-lg"
              >
                {t("View My Work", "查看我的作品")}
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-9 py-[14px] rounded-xl font-heading font-semibold text-lg bg-transparent text-secondary border-[3px] border-secondary transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
              >
                {t("Download Resume", "下载简历")}
              </a>
            </div>

          </motion.div>

          {/* RIGHT SIDE - 1/3 Photo + Decorative */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative blob behind photo */}
            <div
              className="absolute rounded-3xl bg-primary/15"
              style={{
                width: "110%",
                height: "90%",
                top: "5%",
                left: "-5%",
                transform: "rotate(-3deg)",
              }}
            />

            {/* Photo - cutout style */}
            <div className="relative mb-6">
              <img
                src={headshot}
                alt="Mae Mei"
                className="w-56 h-56 md:w-64 md:h-64 object-cover object-top relative z-10"
                style={{
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))",
                }}
              />
              {/* Name badge */}
              <motion.div
                className="absolute -top-3 -right-3 z-20 px-4 py-1.5 rounded-full font-heading font-bold text-sm text-secondary-foreground bg-secondary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Mae
              </motion.div>
            </div>

            {/* Floating icon badges around photo */}
            {decorativeIcons.map(({ icon: Icon, variant, delay, size, pos }, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} flex items-center justify-center rounded-xl z-20 ${
                  variant === "primary" ? "bg-primary shadow-primary/30" :
                  variant === "secondary" ? "bg-secondary shadow-secondary/30" :
                  variant === "destructive" ? "bg-destructive shadow-destructive/30" :
                  "bg-card border-[3px] border-primary shadow-primary/20"
                } shadow-lg`}
                style={{ width: size, height: size }}
                animate={floatAnimation(delay, 2.5 + i * 0.3, 6)}
              >
                <Icon
                  size={size * 0.45}
                  className={variant === "outline" ? "text-primary" : "text-primary-foreground"}
                />
              </motion.div>
            ))}

            {/* Floating text badges */}
            <motion.span
              className="absolute top-[-10px] left-[40%] z-20 px-3 py-1.5 rounded-full text-xs font-bold text-secondary-foreground bg-secondary shadow-lg"
              animate={floatAnimation(0.2, 3, 5)}
            >
              Python & SQL
            </motion.span>
            <motion.span
              className="absolute bottom-[-5px] right-[5%] z-20 px-3 py-1.5 rounded-full text-xs font-bold text-primary-foreground bg-primary shadow-lg"
              animate={floatAnimation(0.5, 2.8, 4)}
            >
              Vibe Coding
            </motion.span>
            <motion.span
              className="absolute bottom-[60px] left-[-40px] z-20 px-3 py-1.5 rounded-full text-xs font-bold text-destructive-foreground bg-destructive shadow-lg"
              animate={floatAnimation(0.8, 3.2, 5)}
            >
              MBA
            </motion.span>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-card shadow-md transition-all duration-200 hover:scale-110 text-secondary hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
