import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Left Column - 55% */}
          <motion.div
            className="flex-1 md:w-[55%] md:max-w-[600px] text-center md:text-left md:pr-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Intro Label */}
            <p className="text-base font-body font-medium tracking-wide text-primary mb-6">
              {t("👋 Hi, my name is Mae (Jiahao) Mei", "👋 你好，我是梅家昊")}
            </p>

            {/* Role Label */}
            <p className="text-sm uppercase tracking-[2px] font-heading font-semibold text-secondary mb-4">
              {t("DATA ANALYST → AI BUILDER", "数据分析师 → AI 产品构建者")}
            </p>

            {/* Massive Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-bold mb-6 leading-[1.1] whitespace-pre-line" style={{ color: '#F5EBE8' }}>
              {t(
                "Building with data.\nShipping with AI.",
                "以数据构建。\n以AI交付。"
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-[1.7] mb-10 max-w-[520px] mx-auto md:mx-0 whitespace-pre-line">
              {t(
                "I'm a strategy analyst and AI product builder with a background in international business. \nI specialize in turning complex datasets into actionable insights and shipping AI-powered products that solve real-world problems.",
                "我是一名具有国际业务背景的战略分析师和 AI 产品构建者。\n我专注于将复杂的数据集转化为可操作的洞察，并交付解决现实世界问题的 AI 驱动产品。"
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#featured-projects"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl font-heading font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-[0_4px_12px_hsl(var(--primary)/0.3)] hover:scale-[1.02]"
              >
                {t("View My Work", "查看我的作品")}
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-[38px] py-[14px] bg-transparent text-secondary border-2 border-secondary rounded-xl font-heading font-semibold text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                {t("Download Resume", "下载简历")}
              </a>
            </div>
          </motion.div>

          {/* Right Column - 45% */}
          <motion.div
            className="flex-1 md:w-[45%] flex justify-center items-center relative"
            style={{ minHeight: 500 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Large decorative blob */}
            <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-primary/90 z-[1]" />

            {/* Photo */}
            <img
              src={headshot}
              alt="Mae Mei"
              className="relative z-[2] w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover object-top rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] translate-x-[-10px] translate-y-[10px]"
            />

            {/* Badge - MBA (top-left) */}
            <motion.div
              className="absolute top-[15%] left-[5%] md:top-[12%] md:left-[3%] z-[3] px-4 py-2 rounded-xl text-sm font-heading font-semibold shadow-lg text-white"
              style={{ background: '#1A2CA3' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🎓 MBA
            </motion.div>

            {/* Badge - Consultant (top-right) */}
            <motion.div
              className="absolute top-[10%] right-[5%] md:top-[8%] md:right-[5%] z-[3] px-4 py-2 rounded-xl text-sm font-heading font-semibold shadow-lg text-white"
              style={{ background: '#FF8225' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              💼 Consultant
            </motion.div>

            {/* Badge - Investor (middle-left) */}
            <motion.div
              className="absolute top-[48%] -left-[8%] md:-left-[5%] z-[3] px-4 py-2 rounded-xl text-sm font-heading font-semibold shadow-lg text-white"
              style={{ background: '#1A2CA3' }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              📈 Investor
            </motion.div>

            {/* Badge - Python & SQL (bottom-left) */}
            <motion.div
              className="absolute bottom-[18%] left-[2%] md:bottom-[15%] md:left-[5%] z-[3] px-4 py-2 rounded-xl text-sm font-heading font-semibold shadow-lg text-white"
              style={{ background: '#B43F3F' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            >
              🐍 Python & SQL
            </motion.div>

            {/* Badge - Vibe Coding (bottom-right) */}
            <motion.div
              className="absolute bottom-[12%] right-[3%] md:bottom-[10%] md:right-[8%] z-[3] px-4 py-2 rounded-xl text-sm font-heading font-semibold shadow-lg text-white"
              style={{ background: '#FF8225' }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              ✨ Vibe Coding
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
