import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, TrendingUp, Code, Globe } from "lucide-react";
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
              {t("👋 Hi, I'm Mae (Jiahao) Mei", "👋 你好，我是梅家昊")}
            </p>

            {/* Role Label */}
            <p className="text-sm uppercase tracking-[2px] font-heading font-semibold text-secondary mb-4">
              {t("DATA ANALYST → AI BUILDER", "数据分析师 → AI 产品构建者")}
            </p>

            {/* Massive Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[72px] font-bold text-foreground mb-6 leading-[1.1]">
              {t(
                "Building with data. Shipping with AI.",
                "用数据构建，用AI交付。"
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-[1.7] mb-10 max-w-[520px] mx-auto md:mx-0">
              {t(
                "I'm a bilingual (EN/CN) data analyst and AI product builder. With an MBA and a background in international business, I specialize in turning complex datasets into actionable insights and shipping AI-powered products that solve real problems.",
                "我是一名双语（中/英）数据分析师和AI产品构建者。拥有MBA学位和国际商务背景，擅长将复杂数据集转化为可执行洞察，并交付解决实际问题的AI驱动产品。"
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
              className="relative z-[2] w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover object-top rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] translate-x-[-10px] translate-y-[10px] border-muted border border-dashed"
            />

            {/* Floating icon - Chart (top-left) */}
            <motion.div
              className="absolute top-8 left-4 md:top-4 md:left-8 z-[3] w-[60px] h-[60px] rounded-xl bg-secondary flex items-center justify-center shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={28} className="text-secondary-foreground" />
            </motion.div>

            {/* Floating icon - Code (bottom-right) */}
            <motion.div
              className="absolute bottom-16 right-4 md:bottom-12 md:right-8 z-[3] w-[60px] h-[60px] rounded-xl bg-[#B85A5A] flex items-center justify-center shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Code size={28} className="text-white" />
            </motion.div>

            {/* Floating icon - Globe (middle-right) */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 z-[3] w-[50px] h-[50px] rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Globe size={22} className="text-primary" />
            </motion.div>

            {/* Status Badge */}
            <div className="absolute bottom-8 right-8 md:bottom-6 md:right-12 z-[4] bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-heading font-semibold flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("Open to opportunities", "开放机会中")}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
