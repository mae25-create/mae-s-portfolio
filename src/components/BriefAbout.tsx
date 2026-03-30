import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const BriefAbout = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {t(
              "I'm a bilingual (EN/CN) data analyst and AI product builder based in San Francisco. With an MBA and a background in international business, I specialize in turning complex datasets into actionable insights — and shipping AI-powered products that solve real problems.",
              "我是一名双语（中英）数据分析师和AI产品构建者，目前在旧金山。拥有MBA学位和国际商务背景，我专注于将复杂数据转化为可执行的洞察——并交付能解决实际问题的AI产品。"
            )}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
            {t(
              "My journey spans investment banking, venture capital, and strategy consulting, giving me a unique lens on how technology creates business value.",
              "我的经历涵盖投资银行、风险投资和战略咨询，让我对技术如何创造商业价值有独特的视角。"
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BriefAbout;
