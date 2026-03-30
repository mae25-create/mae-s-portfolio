import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot-cutout.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-4">
              {t("Data Analyst → AI Product Builder", "数据分析师 → AI 产品构建者")}
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              {t("Hi, I'm", "你好，我是")}
              <br />
              <span className="text-primary">Mae Mei</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
              {t(
                "Building AI products that bridge markets. Turning data into decisions and ideas into products.",
                "构建连接市场的AI产品。将数据转化为决策，将想法转化为产品。"
              )}
            </p>
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              {t("View My Work", "查看我的作品")}
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-primary/15" />
              {/* Accent ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              {/* Photo */}
              <img
                src={headshot}
                alt="Mae Mei"
                className="relative z-10 w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
