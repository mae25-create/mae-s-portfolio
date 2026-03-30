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
    className="px-1 rounded"
    style={{
      background: color === "yellow" ? "rgba(255, 255, 0, 0.3)" : "rgba(205, 220, 57, 0.4)",
    }}
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
    { icon: BarChart3, bg: "#1B4B5A", shadow: "rgba(27, 75, 90, 0.3)", delay: 0 },
    { icon: Code2, bg: "#FF8225", shadow: "rgba(255, 130, 37, 0.3)", delay: 0.3 },
    { icon: Globe, bg: "#B85A5A", shadow: "rgba(184, 90, 90, 0.3)", delay: 0.6 },
    { icon: Sparkles, bg: "white", shadow: "rgba(255, 130, 37, 0.2)", delay: 0.9, outline: true },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: "#F5EBE8", minHeight: "90vh" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-[60px] py-10 md:py-20">
        {/* 1. TOP BAR */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-20 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-heading uppercase text-center md:text-left"
            style={{
              fontSize: "clamp(42px, 8vw, 72px)",
              fontWeight: 900,
              color: "#000000",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            {t("MAE MEI", "梅家昊")}
          </h2>

          <div className="flex items-center gap-3">
            <img
              src={headshot}
              alt="Mae Mei"
              className="w-20 h-20 rounded-full object-cover object-top"
              style={{ border: "3px solid #FF8225" }}
            />
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-200 hover:scale-110"
                style={{ color: "#1B4B5A" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8225")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1B4B5A")}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* 2. MAIN CONTENT */}
        <motion.div
          className="text-center max-w-[900px] mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Intro with highlights */}
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#2A2A2A" }}>
            {t(
              <>
                Hi there! I'm Mae, a data analyst with{" "}
                <Highlight color="yellow">4 years</Highlight> of experience analyzing
                investment deals, now building AI products that bridge markets. My passion
                lies at the intersection of{" "}
                <Highlight color="green">design, business, and AI</Highlight>.
              </>,
              <>
                你好！我是Mae，一名拥有
                <Highlight color="yellow">4年</Highlight>
                投资分析经验的数据分析师，现专注于构建连接市场的AI产品。我的热情在于
                <Highlight color="green">设计、商业与AI</Highlight>
                的交汇处。
              </>
            )}
          </p>

          {/* MASSIVE HEADLINE */}
          <h1
            className="font-heading uppercase mb-8"
            style={{
              fontSize: "clamp(42px, 7vw, 84px)",
              fontWeight: 900,
              color: "#000000",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              textShadow: "2px 2px 0px rgba(255, 130, 37, 0.2)",
            }}
          >
            {t(
              <>
                I BUILD AI PRODUCTS
                <br />
                THAT BRIDGE MARKETS.
              </>,
              <>
                以数据构建产品
                <br />
                以AI连接市场
              </>
            )}
          </h1>

          {/* Description with left border */}
          <div
            className="max-w-[700px] mx-auto text-center mb-12 pl-5"
            style={{ borderLeft: "4px solid #FF8225" }}
          >
            <p className="text-xl leading-[1.7]" style={{ color: "#6B6B6B" }}>
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
          </div>
        </motion.div>

        {/* 3. DECORATIVE ICONS */}
        <motion.div
          className="flex justify-center items-center gap-4 md:gap-6 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {decorativeIcons.map(({ icon: Icon, bg, shadow, delay, outline }, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl"
              style={{
                background: bg,
                border: outline ? "3px solid #FF8225" : "none",
                boxShadow: `0 8px 24px ${shadow}`,
              }}
              animate={floatAnimation(delay, 2.5 + i * 0.3, 5)}
            >
              <Icon size={32} color={outline ? "#FF8225" : "white"} />
            </motion.div>
          ))}
        </motion.div>

        {/* 4. CTA BUTTONS */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href="#featured-projects"
            className="inline-flex items-center gap-2 px-12 py-[18px] rounded-xl font-heading font-semibold text-lg text-white transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto justify-center"
            style={{
              background: "#FF8225",
              boxShadow: "0 6px 20px rgba(255, 130, 37, 0.4)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E67320")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF8225")}
          >
            {t("View My Work", "查看我的作品")}
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-[45px] py-[15px] rounded-xl font-heading font-semibold text-lg bg-transparent transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              color: "#1B4B5A",
              border: "3px solid #1B4B5A",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1B4B5A";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1B4B5A";
            }}
          >
            {t("Download Resume", "下载简历")}
          </a>
        </motion.div>

        {/* 5. STATUS BADGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
            style={{
              background: "#0F6E56",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            ✅ {t("Available for PM roles", "开放产品经理岗位")}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
