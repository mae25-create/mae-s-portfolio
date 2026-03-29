import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t("Let's Work", "一起")}
            <span className="text-primary"> {t("Together", "合作")}</span>
          </h2>
          <p className="text-background/70 mb-10 text-lg">
            {t(
              "I'm actively seeking Business Analyst, Strategy Consultant, or Product roles. Let's connect!",
              "我正在积极寻找商业分析师、战略咨询或产品相关岗位，期待与您联系！"
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:meijiahao@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              {t("Email Me", "发送邮件")}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-background/30 rounded-full font-heading font-semibold text-sm hover:bg-background/10 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-background/30 rounded-full font-heading font-semibold text-sm hover:bg-background/10 transition-colors"
            >
              <Phone size={16} />
              {t("Call Me", "电话联系")}
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
          <p>© 2025 Jiahao (Mae) Mei. {t("All rights reserved.", "保留所有权利。")}</p>
          <p className="mt-2 md:mt-0">
            {t("Built with", "由")} ♥ {t("and data", "和数据构建")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
