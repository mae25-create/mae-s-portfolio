import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Briefcase, BarChart3, Brain } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-lg italic text-muted-foreground mb-4">
              {t("Hi, my name is Mae (Jiahao) Mei", "你好，我是梅嘉豪 (Mae)")}
            </p>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 uppercase">
              {t("I TURN DATA INTO", "用数据驱动")}
              <br />
              <span className="text-primary">{t("BUSINESS", "商业")}</span>
              <br />
              {t("IMPACT.", "决策。")}
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              {t(
                "Business Analyst with cross-cultural expertise, blending MBA strategy with hands-on data analytics and AI product development.",
                "拥有跨文化背景的商业分析师，将MBA战略思维与数据分析和AI产品开发能力相结合。"
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t("Get in Touch", "联系我")}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground rounded-full font-heading font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {t("View Projects", "查看项目")}
              </a>
            </div>
          </motion.div>

          {/* Right decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background circle */}
              <div className="absolute inset-8 rounded-full bg-primary/20" />
              <div className="absolute inset-16 rounded-full bg-primary/30" />

              {/* Floating tags */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-8 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-lg"
              >
                <Briefcase className="inline w-4 h-4 mr-1" />
                MBA
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute top-1/3 left-0 bg-teal text-accent-foreground px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-lg"
              >
                <BarChart3 className="inline w-4 h-4 mr-1" />
                SQL & Python
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-16 right-4 bg-coral text-primary-foreground px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-lg"
              >
                <Brain className="inline w-4 h-4 mr-1" />
                AI Builder
              </motion.div>
              <motion.div
                animate={{ y: [4, -6, 4] }}
                transition={{ repeat: Infinity, duration: 3.2 }}
                className="absolute bottom-1/3 left-8 bg-foreground text-background px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-lg"
              >
                ✦ {t("Strategy", "战略")}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mt-16"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
