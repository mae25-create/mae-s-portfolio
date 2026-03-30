import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Marquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden py-3" style={{ background: "#000" }}>
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="font-heading text-xl md:text-2xl font-black uppercase tracking-wider mx-8"
          style={{ color: "#CDDC39" }}
        >
          {text} •&nbsp;&nbsp;
        </span>
      ))}
    </motion.div>
  </div>
);

const dataProjects = [
  {
    title: "Venture Capital Portfolio Dashboard",
    titleZh: "风险投资组合看板",
    description: "Internal analytics dashboard tracking 50+ portfolio companies, integrating financial metrics, market signals, and competitive intelligence across 6 sectors.",
    descriptionZh: "内部分析看板，追踪50+被投企业，整合财务指标、市场信号和竞争情报。",
    tags: ["PYTHON", "SQL", "TABLEAU", "PANDAS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    to: "/projects/data-analysis",
  },
  {
    title: "Gen-Z Consumer Insights Analysis",
    titleZh: "Z世代消费洞察分析",
    description: "Data-driven market research analyzing 10K+ data points to uncover Gen-Z beverage consumption patterns for Monster Energy's regional marketing strategy.",
    descriptionZh: "数据驱动的市场研究，分析10,000+数据点，发掘Z世代饮料消费趋势。",
    tags: ["PYTHON", "POWER BI", "EXCEL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    to: "/projects/data-analysis",
  },
  {
    title: "SaaS GTM Strategy Model",
    titleZh: "SaaS市场进入策略模型",
    description: "Go-to-market strategy and financial model for a $2M ARR SaaS product, covering pricing optimization, channel strategy, and SMB market segmentation.",
    descriptionZh: "为年收入200万美元的SaaS产品建立GTM策略和财务模型。",
    tags: ["EXCEL", "SQL", "TABLEAU"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    to: "/projects/data-analysis",
  },
];

const FeaturedProjects = () => {
  const { t } = useLanguage();

  return (
    <section id="featured-projects" className="py-0">
      {/* Marquee Banner */}
      <Marquee
        text={t(
          "SELECTED WORKS • CASE STUDIES • DATA ANALYSIS • FEATURE PROJECTS",
          "精选作品 • 案例研究 • 数据分析 • 重点项目"
        )}
      />

      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t("Data Analysis Projects", "数据分析项目")}
          </h2>
          <p className="text-muted-foreground max-w-lg">
            {t(
              "A collection of data-driven projects spanning financial analysis, market research, and business intelligence.",
              "涵盖财务分析、市场研究和商业智能的数据驱动项目合集。"
            )}
          </p>
        </motion.div>

        {/* Stacked rows */}
        <div className="space-y-8">
          {dataProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={project.to}
                className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ background: "white" }}
              >
                {/* Image */}
                <div className="h-[240px] md:h-[320px] overflow-hidden" style={{ background: "#F5EBE8" }}>
                  <img
                    src={project.image}
                    alt={t(project.title, project.titleZh)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-medium tracking-wider"
                        style={{ color: "#666" }}
                      >
                        {tag}
                        {tag !== project.tags[project.tags.length - 1] && (
                          <span className="ml-2">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-heading text-2xl md:text-3xl font-black uppercase mb-4"
                    style={{ color: "#000", lineHeight: 1.1 }}
                  >
                    {t(project.title, project.titleZh)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t(project.description, project.descriptionZh)}
                  </p>
                  <span
                    className="text-sm font-mono font-semibold uppercase tracking-wider group-hover:underline"
                    style={{ color: "#000" }}
                  >
                    {t("VIEW CASE STUDY", "查看案例研究")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
