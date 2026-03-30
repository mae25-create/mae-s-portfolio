import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const dataProjects = [
  {
    title: "Venture Capital Portfolio Dashboard",
    description: "Internal analytics dashboard tracking 50+ portfolio companies, integrating financial metrics, market signals, and competitive intelligence across 6 sectors.",
    titleZh: "风险投资组合看板",
    descriptionZh: "内部分析看板，追踪50+被投企业，整合财务指标、市场信号和竞争情报。",
    tech: ["Python", "SQL", "Tableau", "Pandas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Gen-Z Consumer Insights Analysis",
    description: "Data-driven market research analyzing 10K+ data points to uncover Gen-Z beverage consumption patterns for Monster Energy's regional marketing strategy.",
    titleZh: "Z世代消费洞察分析",
    descriptionZh: "数据驱动的市场研究，分析10,000+数据点，发掘Z世代饮料消费趋势。",
    tech: ["Python", "SQL", "Power BI", "Excel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "SaaS GTM Strategy Model",
    description: "Go-to-market strategy and financial model for a $2M ARR SaaS product, covering pricing optimization, channel strategy, and SMB market segmentation.",
    titleZh: "SaaS市场进入策略模型",
    descriptionZh: "为年收入200万美元的SaaS产品建立GTM策略和财务模型。",
    tech: ["Excel", "SQL", "Tableau", "Python"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    title: "IPO Financial Due Diligence",
    description: "Comprehensive financial analysis and modeling for TMT sector IPO deals at CICC, covering valuation, comparable analysis, and market sizing.",
    titleZh: "IPO财务尽职调查",
    descriptionZh: "在中金公司为TMT行业IPO交易进行全面财务分析和建模。",
    tech: ["Excel", "VBA", "Bloomberg", "Capital IQ"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
];

const DataAnalysisPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} />
          {t("Back to Home", "返回首页")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t("Data Analysis Projects", "数据分析项目")}
          </h1>
          <p className="text-muted-foreground max-w-lg">
            {t(
              "A collection of data-driven projects spanning financial analysis, market research, and business intelligence.",
              "涵盖财务分析、市场研究和商业智能的数据驱动项目合集。"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {dataProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.title, project.titleZh)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {t(project.title, project.titleZh)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t(project.description, project.descriptionZh)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-medium text-primary hover:underline transition-colors">
                  {t("View Details →", "查看详情 →")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisPage;
