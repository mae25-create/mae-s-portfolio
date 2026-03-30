import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import lasVegasAirport from "@/assets/las-vegas-airport.jpeg";
import cardinalsImg from "@/assets/cardinals-cover.png";
import energyMonsterImg from "@/assets/energy-monster-cover.png";
import gotCover from "@/assets/got-vs-hotd-cover.jpg";

const dataProjects = [
  {
    title: "LAS Flight Delay Prediction & Passenger Forecasting",
    description: "ML-driven classification model (XGBoost) to predict departure delays and SARIMA time-series model to forecast monthly passenger volumes at Harry Reid International Airport.",
    titleZh: "LAS航班延误预测与客流量预测",
    descriptionZh: "基于XGBoost的机器学习分类模型预测出发延误，SARIMA时间序列模型预测哈里·里德国际机场月度客流量。",
    tech: ["Python", "XGBoost", "SARIMA", "SQL", "Pandas"],
    image: lasVegasAirport,
    link: "/projects/data-analysis/flight-delay",
  },
  {
    title: "NFL Draft — Arizona Cardinals 2025",
    description: "ML models (XGBoost, Random Forest, Neural Network) predicting player success for the Arizona Cardinals' 2025 NFL Draft, combining production metrics (wAV, DrAV) and PFF performance grades.",
    titleZh: "NFL选秀 — 亚利桑那红雀队2025",
    descriptionZh: "机器学习模型（XGBoost、随机森林、神经网络）预测亚利桑那红雀队2025年NFL选秀球员成功概率，结合产出指标和PFF表现评分。",
    tech: ["Python", "XGBoost", "Random Forest", "Neural Network", "PFF Data"],
    image: cardinalsImg,
    link: "/projects/data-analysis/nfl-draft",
  },
  {
    title: "Retail Product Market Report",
    description: "Comprehensive evaluation of 1.39M+ retail products using BigQuery SQL and Python, analyzing sales performance, product quality, customer engagement, and market segmentation for strategic decision-making.",
    titleZh: "零售产品市场报告",
    descriptionZh: "使用BigQuery SQL和Python对139万+零售产品进行全面评估，分析销售表现、产品质量、客户参与度和市场细分。",
    tech: ["BigQuery SQL", "Python", "Google Colab", "Vanna.AI"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    link: "/projects/data-analysis/retail-analysis",
  },
  {
    title: "GTM Strategy: Power Bank Sharing in Japan",
    description: "Go-to-market analysis of Energy Monster's expansion from China to Japan, examining market readiness through smartphone penetration, mobile payments, credit systems, and cultural factors.",
    titleZh: "市场进入策略：日本共享充电宝市场",
    descriptionZh: "分析怪兽充电从中国拓展至日本的市场进入策略，从智能手机渗透率、移动支付、信用体系和文化因素评估市场准备度。",
    tech: ["Market Analysis", "TAM Estimation", "GTM Strategy"],
    image: energyMonsterImg,
    link: "/projects/data-analysis/energy-monster",
  },
  {
    title: "Game of Thrones vs. House of the Dragon — TV Data Analysis",
    description: "Visual analysis comparing two iconic HBO fantasy series using IMDb ratings, episode runtimes, cast data, and award nominations — presented as an interactive Tableau dashboard.",
    titleZh: "权力的游戏 vs. 龙之家族 — 电视数据分析",
    descriptionZh: "使用IMDb评分、剧集时长、演员数据和奖项提名，对比两部HBO标志性奇幻剧集的可视化分析——以Tableau交互式仪表板呈现。",
    tech: ["Tableau", "IMDb Data", "Data Visualization"],
    image: gotCover,
    link: "/projects/data-analysis/got-analysis",
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
                {project.link ? (
                  <Link to={project.link} className="text-sm font-medium text-primary hover:underline transition-colors">
                    {t("View Details →", "查看详情 →")}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("Coming Soon", "即将推出")}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisPage;
