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
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#2A2A2A" }}>
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
              className="font-heading uppercase mb-8"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 900,
                color: "#000000",
                lineHeight: 1.05,
                letterSpacing: "-1px",
                textShadow: "2px 2px 0px rgba(255, 130, 37, 0.2)",
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
            <p className="text-lg leading-[1.7] mb-10 max-w-[550px]" style={{ color: "#6B6B6B" }}>
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
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-semibold text-lg text-white transition-all duration-300 hover:scale-[1.03]"
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
                className="inline-flex items-center gap-2 px-9 py-[14px] rounded-xl font-heading font-semibold text-lg bg-transparent transition-all duration-300"
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
            </div>

            {/* STATUS BADGE */}
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: "#0F6E56",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              ✅ {t("Available for PM roles", "开放产品经理岗位")}
            </span>
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
              className="absolute rounded-3xl"
              style={{
                width: "110%",
                height: "90%",
                top: "5%",
                left: "-5%",
                background: "linear-gradient(135deg, #FF8225 0%, #FFB574 100%)",
                opacity: 0.15,
                transform: "rotate(-3deg)",
              }}
            />

            {/* Photo */}
            <div className="relative mb-6">
              <img
                src={headshot}
                alt="Mae Mei"
                className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover object-top relative z-10"
                style={{
                  border: "4px solid #FF8225",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                }}
              />
              {/* Name badge */}
              <motion.div
                className="absolute -top-3 -right-3 z-20 px-4 py-1.5 rounded-full font-heading font-bold text-sm text-white"
                style={{ background: "#1B4B5A" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Mae
              </motion.div>
            </div>

            {/* Decorative Icons around photo */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {decorativeIcons.map(({ icon: Icon, bg, shadow, delay, outline }, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl"
                  style={{
                    background: bg,
                    border: outline ? "3px solid #FF8225" : "none",
                    boxShadow: `0 6px 18px ${shadow}`,
                  }}
                  animate={floatAnimation(delay, 2.5 + i * 0.3, 5)}
                >
                  <Icon size={24} color={outline ? "#FF8225" : "white"} />
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
