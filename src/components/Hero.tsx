import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, TrendingUp, Code, Globe } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
          {/* Left Column - 55% */}
          <motion.div
            className="flex-1 md:w-[55%] md:max-w-[600px] text-center md:text-left md:pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Intro */}
            <p className="text-base text-muted-foreground mb-10">
              {t("Hi, my name is Mae.", "你好，我是梅家昊。")}
            </p>

            {/* Massive Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-extrabold text-foreground mb-8 leading-[1.05] uppercase tracking-tight">
              {t(
                "Building with data. Shipping with AI.",
                "用数据构建，用AI交付。"
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-[1.7] mb-10 max-w-[520px] mx-auto md:mx-0">
              {t(
                "I'm a bilingual (EN/CN) data analyst and AI product builder with an MBA and a background in international business, specializing in turning complex datasets into actionable insights.",
                "我是一名双语（中/英）数据分析师和AI产品构建者，拥有MBA学位和国际商务背景，擅长将复杂数据集转化为可执行洞察。"
              )}
            </p>

            {/* CTA Button */}
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-xl font-heading font-bold text-base hover:opacity-90 transition-all duration-300 shadow-[0_4px_12px_hsl(var(--primary)/0.3)] hover:scale-[1.02]"
            >
              {t("View My Work", "查看我的作品")}
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Right Column - 45% */}
          <motion.div
            className="flex-1 md:w-[45%] flex justify-center items-center relative"
            style={{ minHeight: 520 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Large decorative rounded rectangle */}
            <div className="absolute w-[300px] h-[380px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[500px] rounded-[32px] bg-primary/90 z-[1] translate-x-[10px] translate-y-[10px]" />

            {/* Photo - overlapping the shape */}
            <img
              src={headshot}
              alt="Mae Mei"
              className="relative z-[2] w-[280px] h-[360px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[480px] object-cover object-top rounded-[28px] border-[3px] border-foreground/80 translate-x-[-10px] translate-y-[-10px]"
            />

            {/* Floating badge - Name */}
            <motion.div
              className="absolute top-4 right-4 md:top-2 md:right-8 z-[3] bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-heading font-bold shadow-md flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Mae ✦
            </motion.div>

            {/* Floating icon - Chart (top-left) */}
            <motion.div
              className="absolute top-16 left-0 md:top-12 md:left-2 z-[3] w-[56px] h-[56px] rounded-2xl bg-secondary flex items-center justify-center shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={26} className="text-secondary-foreground" />
            </motion.div>

            {/* Floating icon - Code (bottom-right) */}
            <motion.div
              className="absolute bottom-20 right-0 md:bottom-16 md:right-4 z-[3] w-[56px] h-[56px] rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg border-2 border-primary"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Code size={24} />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              className="absolute bottom-6 right-6 md:bottom-4 md:right-8 z-[4] bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-heading font-semibold flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              {t("Open to opportunities", "开放机会中")}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
