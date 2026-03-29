import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Sparkles } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Mae Studio",
      tag: "AI",
      tagColor: "bg-primary text-primary-foreground",
      description: t(
        "AI-powered personal portfolio platform built with modern web technologies. Features dynamic content generation and responsive design.",
        "基于AI驱动的个人作品集平台，采用现代Web技术构建，支持动态内容生成和响应式设计。"
      ),
      link: "#",
    },
    {
      title: t("Venture Capital Dashboard", "风险投资数据看板"),
      tag: "Data",
      tagColor: "bg-teal text-accent-foreground",
      description: t(
        "Internal analytics dashboard tracking 50+ portfolio companies, integrating financial metrics, market signals, and competitive intelligence.",
        "内部分析看板，追踪50+被投企业，整合财务指标、市场信号和竞争情报。"
      ),
      link: null,
    },
    {
      title: t("Gen-Z Consumer Insights", "Z世代消费洞察"),
      tag: "Strategy",
      tagColor: "bg-coral text-primary-foreground",
      description: t(
        "Data-driven market research analyzing 10K+ data points to uncover Gen-Z beverage consumption patterns for Monster Energy.",
        "数据驱动的市场研究，分析10,000+数据点，发掘Z世代饮料消费趋势。"
      ),
      link: null,
    },
    {
      title: t("SaaS GTM Strategy", "SaaS市场进入策略"),
      tag: "Business",
      tagColor: "bg-foreground text-background",
      description: t(
        "Go-to-market strategy design for a $2M ARR SaaS product, covering pricing, positioning, and channel strategy for SMB market entry.",
        "为年收入200万美元的SaaS产品设计GTM策略，涵盖定价、定位和渠道策略。"
      ),
      link: null,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            {t("Featured", "精选")}
            <span className="text-primary"> {t("Projects", "项目")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            {t(
              "A selection of projects spanning data analytics, AI, and strategic consulting.",
              "精选数据分析、AI和战略咨询相关项目。"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.tagColor}`}>
                  {p.tag}
                </span>
                {p.link && (
                  <a href={p.link} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
