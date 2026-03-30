import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Linkedin, Github, Mail, BarChart3, Code2, GraduationCap, Sparkles } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const floatAnimation = (delay: number, duration: number, y: number) => ({
  y: [0, -y, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const Highlight = ({ children, color = "yellow" }: { children: React.ReactNode; color?: "yellow" | "green" }) => (
  <span className={`px-1 rounded ${color === "yellow" ? "bg-primary/20" : "bg-accent/20"}`}>
    {children}
  </span>
);

interface BadgeProps {
  icon: React.ElementType;
  label: string;
  variant: "teal" | "orange" | "burgundy";
  pos: string;
  delay: number;
}

const FloatingBadge = ({ icon: Icon, label, variant, pos, delay }: BadgeProps) => {
  const bgClass = variant === "orange" ? "bg-primary" : variant === "burgundy" ? "bg-destructive" : "bg-secondary";
  return (
    <motion.div
      className={`absolute ${pos} z-20 flex flex-col items-center justify-center gap-1 ${bgClass} text-primary-foreground rounded-xl border-[3px] border-foreground p-3 shadow-lg`}
      style={{ width: 80, height: 80, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      animate={floatAnimation(delay, 2.8 + delay, 6)}
    >
      <Icon size={24} />
      <span className="text-[11px] font-bold leading-tight text-center">{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:mae@example.com", label: "Email" },
  ];

  return (
    <section className="relative overflow-hidden bg-background" style={{ minHeight: "90vh" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] pt-28 md:pt-36 pb-10 md:pb-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* LEFT SIDE - 2/3 */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 leading-relaxed text-foreground">
              {t(
                "Hi there! I'm Mae (Jiahao Mei), a data analyst and AI builder.",
                "你好！我是Mae（梅嘉豪），一名数据分析师和AI产品构建者。"
              )}
            </p>

            <h1
              className="font-heading uppercase mb-8 text-foreground"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1px" }}
            >
              {t(
                <>BUILDING WITH DATA.<br />SHIPPING WITH AI.</>,
                <>以数据洞察，<br />以AI交付。</>
              )}
            </h1>

            <div className="text-lg leading-[1.8] mb-10 max-w-[580px] text-muted-foreground space-y-4">
              {t(
                <>
                  <p>I spent years in investment and strategy consulting, analyzing deals across markets and advising SMEs on global expansion.</p>
                  <p>I learned to extract insights from complex data and translate them into growth strategies.</p>
                  <p>Now I do both: analyze what matters, build what works. Bilingual (EN/CN), bridging data and product, East and West.</p>
                </>,
                <>
                  <p>我在投资和战略咨询领域工作多年，分析跨市场交易，为中小企业提供全球扩张建议。</p>
                  <p>我学会了从复杂数据中提取洞察，并将其转化为增长策略。</p>
                  <p>现在我兼顾两者：分析关键问题，构建有效方案。双语（中英），连接数据与产品，东方与西方。</p>
                </>
              )}
            </div>

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

          {/* RIGHT SIDE - 1/3 */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Orange blob */}
            <div
              className="absolute bg-primary/80 rounded-[40%_60%_55%_45%/40%_45%_55%_60%]"
              style={{ width: "110%", height: "85%", top: "5%", left: "-5%", filter: "blur(2px)" }}
            />

            {/* Photo */}
            <div className="relative mb-6">
              <img
                src={headshot}
                alt="Mae Mei"
                className="w-56 h-56 md:w-64 md:h-64 object-cover object-top relative z-10"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))" }}
              />

              {/* Floating badges */}
              <FloatingBadge icon={BarChart3} label="Python & SQL" variant="teal" pos="top-[-30px] left-[-45px]" delay={0} />
              <FloatingBadge icon={Code2} label="Vibe Coding" variant="orange" pos="top-[-20px] right-[-45px]" delay={0.3} />
              <FloatingBadge icon={GraduationCap} label="MBA" variant="burgundy" pos="bottom-[20px] left-[-50px]" delay={0.6} />
              <FloatingBadge icon={Sparkles} label="Tableau" variant="teal" pos="bottom-[10px] right-[-40px]" delay={0.9} />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5 relative z-20">
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
