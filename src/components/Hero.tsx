import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Linkedin, Github, Mail, BarChart3, Code2, GraduationCap, Sparkles } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const floatAnimation = (delay: number, duration: number, y: number) => ({
  y: [0, -y, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
});

interface BadgeProps {
  icon: React.ElementType;
  label: string;
  variant: "teal" | "orange" | "burgundy";
  pos: string;
  delay: number;
  size: number;
}

const FloatingBadge = ({ icon: Icon, label, variant, pos, delay, size }: BadgeProps) => {
  const bgClass = variant === "orange" ? "bg-primary" : variant === "burgundy" ? "bg-destructive" : "bg-secondary";
  const iconSize = size >= 80 ? 22 : 16;
  const textSize = size >= 80 ? "text-[11px]" : "text-[9px]";
  return (
    <motion.div
      className={`absolute ${pos} z-20 flex flex-col items-center justify-center gap-1 ${bgClass} text-primary-foreground rounded-xl p-2`}
      style={{ width: size, height: size, boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }}
      animate={floatAnimation(delay, 2.8 + delay, 6)}
    >
      <Icon size={iconSize} />
      <span className={`${textSize} font-bold leading-tight text-center`}>{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mae-jiahao/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mae25-create", label: "GitHub" },
    { icon: Mail, href: "mailto:meijiahao219@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative overflow-hidden bg-background" style={{ minHeight: "90vh" }}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="flex flex-col gap-10 px-6 pt-28 pb-10
                     md:grid md:gap-[60px] md:px-[60px] md:pt-36 md:pb-20"
          style={{
            gridTemplateColumns: "55fr 45fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* TEXT */}
          <motion.div
            className="order-1 flex flex-col justify-center md:[grid-column:1] md:[grid-row:1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-[1.7] text-muted-foreground mb-6">
              {t(
                "Hi there! I'm Mae (Jiahao) Mei, a data analyst and AI builder.",
                "你好！我是梅家昊（Mae），一名数据分析师和AI构建者。"
              )}
            </p>
            <h1
              className="font-heading uppercase mb-8 text-foreground"
              style={{ fontSize: "clamp(28px, 3.8vw, 48px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-1px" }}
            >
              {t(
                <>AI-NATIVE.<br />ANALYZE FOR INSIGHTS.<br />BUILD TO SHIP.</>,
                <>AI原生。<br />分析洞察。<br />构建交付。</>
              )}
            </h1>


            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-semibold text-lg text-primary-foreground bg-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 shadow-lg"
              >
                {t("View My Projects", "查看我的作品")}
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-9 py-[14px] rounded-xl font-heading font-semibold text-lg bg-transparent text-secondary border-[3px] border-secondary transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
              >
                {t("Chat With Me", "和我聊天")}
              </a>
            </div>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            className="order-2 flex flex-col items-center relative md:[grid-column:2] md:[grid-row:1] md:items-center md:justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Organic wave blob */}
            <div className="absolute z-0 w-[340px] h-[340px] md:w-[380px] md:h-[380px]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -48%)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(36 100% 65%))",
                filter: "blur(1px)",
              }}
            />

            {/* Photo + badges */}
            <div className="relative" style={{ width: 300, height: 300 }}>
              <img
                src={headshot}
                alt="Mae Mei"
                className="w-[300px] h-[300px] object-cover object-top relative z-10"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)", borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
              />

              {/* Floating badges — no borders, varied sizes */}
              <FloatingBadge icon={BarChart3} label="Python & SQL" variant="teal" pos="top-[-30px] left-[-50px]" delay={0} size={80} />
              <FloatingBadge icon={Code2} label="Vibe Coding" variant="orange" pos="top-[-20px] right-[-35px]" delay={0.3} size={60} />
              <FloatingBadge icon={GraduationCap} label="MBA" variant="burgundy" pos="bottom-[-15px] left-[-40px]" delay={0.6} size={60} />
              <FloatingBadge icon={Sparkles} label="Tableau" variant="teal" pos="bottom-[-25px] right-[-45px]" delay={0.9} size={80} />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8 relative z-20">
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

          {/* DESCRIPTION — full width row 2 */}
          <motion.div
            className="order-3 md:[grid-column:1/-1] md:[grid-row:2] w-full text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-lg leading-[1.7] text-muted-foreground space-y-6">
              {t(
                <>
                  <p>I spent years in investment and strategy consulting, analyzing deals across markets and advising SMEs on global expansion. I learned to extract insights from complex data and translate them into growth strategies.</p>
                  <p>Now I do both: analyze what matters, build what works. Bilingual (EN/CN), bridging data and product, East and West.</p>
                </>,
                <>
                  <p>我在投资和战略咨询领域工作多年，分析跨市场交易，为中小企业提供全球扩张建议。我学会了如何从复杂数据中提取洞察，并将其转化为增长策略。</p>
                  <p>在AI时代，我意识到这种"从数据到决策"的能力可以更进一步：于是我开始用AI工具自学编程。现在我不再只是写策略报告，而是能把洞察变成可运行的产品。</p>
                  <p>现在我兼顾两者：帮助客户分析关键问题，构建有效方案。用双语（中英）连接数据与产品、东方与西方、战略思考与产品执行。</p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
