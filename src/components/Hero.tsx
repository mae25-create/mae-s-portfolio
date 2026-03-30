import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-content mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Mae Mei
          </h1>
          <p className="font-heading text-xl md:text-2xl font-medium text-muted-foreground mb-4">
            {t("Data Analyst → AI Product Builder", "数据分析师 → AI 产品构建者")}
          </p>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
            {t(
              "Building AI products that bridge markets",
              "构建连接市场的AI产品"
            )}
          </p>
          <a
            href="#featured-projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            {t("View My Work", "查看我的作品")}
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-20"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
