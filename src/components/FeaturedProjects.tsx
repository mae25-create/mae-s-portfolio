import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import lasVegasAirport from "@/assets/las-vegas-airport.jpeg";
import cardinalsImg from "@/assets/cardinals-cover.png";
import gotCover from "@/assets/got-vs-hotd-cover.jpg";

const Marquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden py-3 bg-foreground">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="font-heading text-xl md:text-2xl font-black uppercase tracking-wider mx-8 text-primary"
        >
          {text} •&nbsp;&nbsp;
        </span>
      ))}
    </motion.div>
  </div>
);

const dataProjects = [
  {
    title: "LAS Flight Delay Prediction & Passenger Forecasting",
    titleZh: "LAS航班延误预测与客流量预测",
    description: "ML-driven classification model (XGBoost) to predict departure delays and SARIMA time-series model to forecast monthly passenger volumes at Harry Reid International Airport.",
    descriptionZh: "基于XGBoost的机器学习分类模型预测出发延误，SARIMA时间序列模型预测哈里·里德国际机场月度客流量。",
    tags: ["PYTHON", "XGBOOST", "SARIMA", "SQL", "PANDAS"],
    image: lasVegasAirport,
    to: "/projects/data-analysis/flight-delay",
  },
  {
    title: "NFL Draft — Arizona Cardinals 2025",
    titleZh: "NFL选秀 — 亚利桑那红雀队2025",
    description: "ML models (XGBoost, Random Forest, Neural Network) predicting player success for the Arizona Cardinals' 2025 NFL Draft, combining production metrics and PFF performance grades.",
    descriptionZh: "机器学习模型预测亚利桑那红雀队2025年NFL选秀球员成功概率，结合产出指标和PFF表现评分。",
    tags: ["PYTHON", "XGBOOST", "RANDOM FOREST", "PFF DATA"],
    image: cardinalsImg,
    to: "/projects/data-analysis/nfl-draft",
  },
  {
    title: "Retail Product Market Report",
    titleZh: "零售产品市场报告",
    description: "Comprehensive evaluation of 1.39M+ retail products using BigQuery SQL and Python, analyzing sales performance, customer engagement, and market segmentation.",
    descriptionZh: "使用BigQuery SQL和Python对139万+零售产品进行全面评估，分析销售表现、客户参与度和市场细分。",
    tags: ["BIGQUERY SQL", "PYTHON", "GOOGLE COLAB", "VANNA.AI"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    to: "/projects/data-analysis/retail-analysis",
  },
  {
    title: "Game of Thrones vs. House of the Dragon — TV Data Analysis",
    titleZh: "权力的游戏 vs. 龙之家族 — 电视数据分析",
    description: "Visual analysis comparing two iconic HBO fantasy series using IMDb ratings, episode runtimes, cast data, and award nominations via Tableau.",
    descriptionZh: "使用IMDb评分、剧集时长、演员数据和奖项提名，通过Tableau对比两部HBO奇幻剧集的可视化分析。",
    tags: ["TABLEAU", "IMDb DATA", "DATA VISUALIZATION"],
    image: gotCover,
    to: "/projects/data-analysis/got-analysis",
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
              "A collection of real-world projects spanning data analysis, market research, and business intelligence.",
              "涵盖数据分析、市场研究和商业智能的真实世界项目合集。"
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
                className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="h-[240px] md:h-[320px] overflow-hidden bg-muted">
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
                        className="text-xs font-mono font-medium tracking-wider text-muted-foreground"
                      >
                        {tag}
                        {tag !== project.tags[project.tags.length - 1] && (
                          <span className="ml-2">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-heading text-2xl md:text-3xl font-black uppercase mb-4 text-foreground"
                    style={{ lineHeight: 1.1 }}
                  >
                    {t(project.title, project.titleZh)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t(project.description, project.descriptionZh)}
                  </p>
                  <span className="text-sm font-mono font-semibold uppercase tracking-wider text-foreground group-hover:underline">
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
