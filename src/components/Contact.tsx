import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    { icon: Mail, label: "Email", value: "meijiahao219@gmail.com", href: "mailto:meijiahao219@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/mae-jiahao/", href: "https://linkedin.com/in/meijiahao" },
    { icon: Github, label: "GitHub", value: "https://github.com/mae25-create", href: "https://github.com/meijiahao" },
    { icon: MapPin, label: t("Location", "位置"), value: t("San Francisco Bay Area, USA｜Hangzhou, CN", "美国旧金山湾区｜中国杭州"), href: null },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t("Get In Touch", "联系我")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              "Currently seeking Technical PM and AI PM roles in the San Francisco Bay Area",
              "目前正在旧金山湾区寻找技术PM和AI PM相关职位"
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <Icon size={22} className="mx-auto mb-3 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium truncate">{item.value}</p>
              </motion.div>
            );
            return item.href ? (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("Name", "姓名")}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                placeholder={t("Email", "邮箱")}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <textarea
              rows={5}
              placeholder={t("Message", "留言")}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {t("Send Message", "发送消息")}
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
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
