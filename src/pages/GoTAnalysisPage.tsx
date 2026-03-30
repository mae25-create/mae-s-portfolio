import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import gotCover from "@/assets/got-vs-hotd-cover.jpg";

const GoTAnalysisPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link
          to="/projects/data-analysis"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t("Back to Data Analysis", "返回数据分析")}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TABLEAU", "IMDb DATA", "DATA VISUALIZATION"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t(
                  "Game of Thrones vs. House of the Dragon — TV Data Analysis",
                  "权力的游戏 vs. 龙之家族 — 电视数据分析"
                )}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "A comprehensive visual analysis comparing two iconic HBO fantasy series using IMDb ratings, episode data, cast information, and award nominations — built as an interactive Tableau dashboard.",
                  "使用IMDb评分、剧集数据、演员信息和奖项提名，全面对比两部标志性HBO奇幻剧集的可视化分析——以Tableau交互式仪表板呈现。"
                )}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src={gotCover}
                alt="GoT vs HotD Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Game of Thrones Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Game of Thrones — 8 Seasons Overview", "权力的游戏 — 8季概览")}
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: t("Seasons", "季数"), value: "8" },
              { label: t("Episodes", "集数"), value: "74" },
              { label: t("Cast", "演员"), value: "100" },
              { label: t("Roles", "角色"), value: "1,258" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
            <h3 className="font-heading text-xl font-semibold mb-4">
              {t("IMDb Ratings by Season", "各季IMDb评分")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      {t("Season", "季")}
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      {t("Year", "年份")}
                    </th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                      {t("Top Episode Rating", "最高集评分")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { season: 1, year: 2011, rating: "9.1" },
                    { season: 2, year: 2012, rating: "9.7" },
                    { season: 3, year: 2013, rating: "9.9" },
                    { season: 4, year: 2014, rating: "9.7" },
                    { season: 5, year: 2015, rating: "9.8" },
                    { season: 6, year: 2016, rating: "9.7" },
                    { season: 7, year: 2017, rating: "9.0" },
                    { season: 8, year: 2019, rating: "7.9" },
                  ].map((row) => (
                    <tr key={row.season} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">S{row.season}</td>
                      <td className="py-3 px-4">{row.year}</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-primary">{row.rating}</span>
                        <span className="text-muted-foreground">/10</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-4">
              {t("Award Nominations (2011–2022)", "奖项提名 (2011–2022)")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Game of Thrones received a staggering number of award nominations across its 8-season run, peaking in 2015 and 2019. The series became one of the most decorated TV shows in history, winning 59 Primetime Emmy Awards — a record for a drama series.",
                "《权力的游戏》在8季播出期间获得了大量奖项提名，2015年和2019年达到巅峰。该剧获得59座黄金时段艾美奖，成为史上获奖最多的剧情类剧集之一。"
              )}
            </p>
          </div>
        </motion.div>

        {/* House of the Dragon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t(
              "House of the Dragon — Season 1 Comparison",
              "龙之家族 — 第一季对比"
            )}
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: t("Season", "季数"), value: "1" },
              { label: t("Episodes", "集数"), value: "10" },
              { label: t("Cast", "演员"), value: "46" },
              { label: t("Roles", "角色"), value: "170" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                {t("Average Runtime Comparison", "平均时长对比")}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(
                  "GoT's average episode runtime grew significantly from Season 1 (57.2 min) to Season 8 (71.7 min), reflecting the increasing complexity and scale of the series. House of the Dragon Season 1 averaged around 62 minutes.",
                  "《权力的游戏》平均集时长从第1季（57.2分钟）显著增长至第8季（71.7分钟），反映出剧集日益增长的复杂性和规模。《龙之家族》第1季平均约62分钟。"
                )}
              </p>
              <div className="space-y-3">
                {[
                  { label: "GoT S1", value: 57.2, max: 72 },
                  { label: "GoT S8", value: 71.7, max: 72 },
                  { label: "HotD S1", value: 62, max: 72 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{row.label}</span>
                      <span className="text-muted-foreground">{row.value} min</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(row.value / row.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold mb-4">
                {t("Top 10 Characters (S1)", "前10角色出场 (S1)")}
              </h3>
              <ol className="space-y-2 text-sm">
                {[
                  "King Viserys I Targaryen",
                  "Prince Daemon Targaryen",
                  "Princess Rhaenyra Targaryen",
                  "Princess Rhaenys Targaryen",
                  "Ser Otto Hightower",
                  "Queen Alicent Hightower",
                  "Lord Corlys Velaryon",
                  "Lord Lyonel Strong",
                  "Ser Tyland Lannister",
                  "Ser Criston Cole",
                ].map((name, i) => (
                  <li key={name} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{name}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Key Insights", "关键发现")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t("Rating Decline in S8", "第8季评分骤降"),
                desc: t(
                  "GoT peaked at 9.9 in Season 3 but saw a dramatic drop to 7.9 in its final season — one of the most discussed quality declines in TV history.",
                  "《权力的游戏》在第3季达到9.9的评分巅峰，但最终季骤降至7.9——这成为电视史上最受关注的品质下滑之一。"
                ),
              },
              {
                title: t("HotD's Strong Debut", "龙之家族强势开场"),
                desc: t(
                  "House of the Dragon Season 1 performed comparably to early GoT seasons in IMDb ratings, suggesting strong audience reception despite the predecessor's divisive ending.",
                  "《龙之家族》第1季的IMDb评分与《权力的游戏》早期季度相当，表明尽管前作结局存在争议，观众接受度依然很高。"
                ),
              },
              {
                title: t("Award Dominance", "奖项统治"),
                desc: t(
                  "GoT amassed hundreds of nominations across 2011–2022, with 2015 and 2019 being peak years. HotD quickly earned nominations in its debut year.",
                  "《权力的游戏》在2011-2022年间累计获得数百项提名，2015和2019年为巅峰。《龙之家族》首播年即迅速获得提名。"
                ),
              },
            ].map((insight) => (
              <div
                key={insight.title}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {insight.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold mb-4">
              {t("Tools & Data Sources", "工具与数据源")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Tableau", "IMDb", "Data Visualization", "TV Analytics"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoTAnalysisPage;
