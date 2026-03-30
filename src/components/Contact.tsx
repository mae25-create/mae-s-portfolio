import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";


const XIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const XiaohongshuIcon = () => (
  <svg viewBox="0 0 200 200" width="28" height="28">
    <rect x="0" y="0" width="200" height="200" rx="36" fill="currentColor"/>
    <text x="100" y="108" textAnchor="middle" dominantBaseline="central" fill="var(--xhs-text, #FAFAFA)" fontSize="72" fontWeight="900" fontFamily="'Heiti SC','SimHei','Microsoft YaHei',sans-serif" letterSpacing="-2">小红书</text>
  </svg>
);
const WechatIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05a6.127 6.127 0 01-.253-1.734c0-3.74 3.568-6.768 7.967-6.768.26 0 .514.015.764.04C17.143 4.684 13.336 2.188 8.691 2.188zm7.875 7.572c-3.868 0-7.004 2.634-7.004 5.884 0 3.249 3.136 5.884 7.004 5.884.752 0 1.488-.098 2.19-.287a.648.648 0 01.54.074l1.47.858a.243.243 0 00.124.04.222.222 0 00.22-.223c0-.054-.022-.108-.036-.161l-.3-1.14a.444.444 0 01.161-.502c1.418-1.04 2.325-2.586 2.325-4.297-.002-3.592-3.137-6.13-6.694-6.13z"/></svg>
);

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mae-jiahao/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mae25-create", label: "GitHub" },
    { icon: XIcon, href: "https://x.com", label: "X" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: XiaohongshuIcon, href: "https://xiaohongshu.com", label: "小红书" },
    { icon: WechatIcon, href: "#", label: "WeChat" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="mx-auto px-6 md:px-[60px] py-[40px] md:py-[80px]" style={{ maxWidth: 900 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[60px]"
        >
          <h2 className="font-heading text-[42px] md:text-[56px] font-bold text-foreground mb-6">
            {t("Get In Touch", "联系我")}
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-muted-foreground max-w-[700px] mx-auto">
            {t(
              "Let's leverage AI and data to build products that bridge markets and transform cross-border commerce together.",
              "让我们一起利用AI和数据构建连接市场、变革跨境商业的产品。"
            )}
          </p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-[18px] flex-wrap">
            <Mail size={24} className="text-primary" />
            <span className="text-muted-foreground">{t("Email me at:", "邮件联系：")}</span>
            <a
              href="mailto:meijiahao219@gmail.com"
              className="font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              meijiahao219@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-12"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-border/40 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon size={28} />
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[16px] flex-wrap">
            <MapPin size={20} className="text-primary" />
            <span className="text-muted-foreground">Location:</span>
            <span className="text-foreground">
              {t("San Francisco Bay Area, USA｜Hangzhou, CN", "美国旧金山湾区｜中国杭州")}
            </span>
          </div>
        </motion.div>

      </div>

      {/* Footer - full width */}
      <div className="max-w-content mx-auto px-6">
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2026 Mae (Jiahao) Mei. {t("All rights reserved.", "保留所有权利。")}</p>
          <p className="mt-2 md:mt-0">
            {t("Built with", "由")} ♥ {t("and data", "和数据构建")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
