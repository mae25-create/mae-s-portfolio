import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import intelCover from "@/assets/intel-apec-cover.jpg";
import intelResults from "@/assets/intel-apec-results.jpg";
import intelPareto from "@/assets/intel-apec-pareto.jpg";
import intelRecs from "@/assets/intel-apec-recs.jpg";

const IntelApecPage = () => {
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
                {["LINEAR PROGRAMMING", "OPTIMIZATION", "FACEBOOK ADS", "EXCEL SOLVER"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-mono font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t(
                  "Intel Asia-Pacific: Facebook Media Plan Optimization",
                  "英特尔亚太区：Facebook媒体计划优化模型"
                )}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "A linear programming optimization model for Intel's Catch & Win campaign across 6 APAC markets, maximizing engagement (CTR) through optimal allocation of an $87,156 Facebook ad budget across Marketplace, Premium, and Mobile ad types.",
                  "为英特尔Catch & Win活动构建线性规划优化模型，覆盖6个亚太市场，通过优化$87,156 Facebook广告预算在Marketplace、Premium和Mobile三种广告类型间的分配，最大化互动效果（CTR）。"
                )}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={intelCover} alt="Intel APEC Campaign" className="w-full h-auto object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Campaign Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Campaign Overview", "活动概览")}
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: t("Total Budget", "总预算"), value: "$87,156" },
              { label: t("APAC Markets", "亚太市场"), value: "6" },
              { label: t("Ad Types", "广告类型"), value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "Intel's Catch & Win campaign promoted Ultrabooks across Indonesia, Korea, Malaysia, Pakistan, Philippines, and Singapore using three Facebook ad types: Marketplace, Premium, and Mobile Ads.",
                "英特尔Catch & Win活动通过三种Facebook广告类型（Marketplace、Premium和Mobile）在印尼、韩国、马来西亚、巴基斯坦、菲律宾和新加坡推广Ultrabook。"
              )}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {t("Decision Variables", "决策变量")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "18 variables (X_ij): impressions for ad type j in country i, where i = 6 countries and j = 3 ad types.",
                    "18个变量 (X_ij)：国家i中广告类型j的曝光量，i = 6个国家，j = 3种广告类型。"
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {t("Constraints", "约束条件")}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• {t("Budget ≤ $87,156", "预算 ≤ $87,156")}</li>
                  <li>• {t("Min impressions ≥ 75% of original per ad type", "最小曝光量 ≥ 原始值的75%（按广告类型）")}</li>
                  <li>• {t("Max impressions ≤ 125% of original total per country", "最大曝光量 ≤ 各国原始总量的125%")}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Optimization Results", "优化结果")}
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-heading font-bold text-primary">9,892,250</div>
              <p className="text-muted-foreground mt-1">{t("Total Clicks Achieved", "实现的总点击量")}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 text-muted-foreground font-medium">{t("Country", "国家")}</th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">Marketplace</th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">Premium</th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">Mobile</th>
                    <th className="text-right py-3 px-3 text-muted-foreground font-medium">{t("Total", "合计")}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { country: t("Indonesia", "印尼"), mp: "4.50M", pr: "2.63M", mo: "2.25M", total: "9.38M" },
                    { country: t("Korea", "韩国"), mp: "4.50M", pr: "5.79M", mo: "1.83M", total: "12.13M" },
                    { country: t("Malaysia", "马来西亚"), mp: "4.50M", pr: "2.78M", mo: "2.25M", total: "9.53M" },
                    { country: t("Pakistan", "巴基斯坦"), mp: "0.75M", pr: "0.53M", mo: "2.25M", total: "3.53M" },
                    { country: t("Philippines", "菲律宾"), mp: "4.50M", pr: "2.78M", mo: "2.25M", total: "9.53M" },
                    { country: t("Singapore", "新加坡"), mp: "1.50M", pr: "1.01M", mo: "2.25M", total: "4.76M" },
                  ].map((row) => (
                    <tr key={row.country} className="border-b border-border/50">
                      <td className="py-3 px-3 font-medium">{row.country}</td>
                      <td className="py-3 px-3 text-right">{row.mp}</td>
                      <td className="py-3 px-3 text-right">{row.pr}</td>
                      <td className="py-3 px-3 text-right">{row.mo}</td>
                      <td className="py-3 px-3 text-right font-semibold text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={intelResults} alt="Optimization Results" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={intelPareto} alt="Pareto Frontier" className="w-full h-auto object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Sensitivity Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Sensitivity Analysis", "敏感性分析")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t("Budget Shadow Price", "预算影子价格"),
                value: "187.45",
                desc: t(
                  "Each additional dollar in the budget yields ~187 more clicks — a remarkably high marginal return.",
                  "预算每增加1美元，可带来约187次额外点击——极高的边际回报。"
                ),
              },
              {
                title: t("Premium Ads (Singapore & Korea)", "Premium广告（新加坡与韩国）"),
                value: t("Highest ROI", "最高ROI"),
                desc: t(
                  "Premium ads in Singapore (reduced cost: -0.669) and Korea (at optimal) are the most effective channels.",
                  "新加坡Premium广告（降低成本：-0.669）和韩国Premium广告（最优水平）是最有效的渠道。"
                ),
              },
              {
                title: t("Mobile Ads", "Mobile广告"),
                value: t("Moderate ROI", "中等ROI"),
                desc: t(
                  "All Mobile Ads have a reduced cost of -0.074, less effective than Premium but still contributing positively.",
                  "所有Mobile广告的降低成本为-0.074，效果低于Premium但仍有正向贡献。"
                ),
              },
              {
                title: t("Korea — Binding Constraint", "韩国 — 约束瓶颈"),
                value: "0.0005",
                desc: t(
                  "Korea is at its maximum allowed impressions. Lifting the cap would unlock further engagement gains.",
                  "韩国已达到最大允许曝光量。提升上限将释放更多互动增长空间。"
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <div className="text-sm font-mono text-primary mb-1">{item.value}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Business Recommendations", "商业建议")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={intelRecs} alt="Business Recommendations" className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-4">
              {[
                t("Increase budget — every $1 yields ~187 incremental clicks", "增加预算——每1美元可带来约187次增量点击"),
                t("Prioritize Premium Ads in Korea & Singapore for highest ROI", "优先在韩国和新加坡投放Premium广告以获得最高ROI"),
                t("Focus on ad type optimization, not just volume", "注重广告类型优化，而非仅增加投放量"),
                t("Maintain Mobile Ads for reach but deprioritize in optimization", "保留Mobile广告扩展覆盖面，但优化优先级降低"),
                t("Lift Korea's impression cap to unlock further gains", "提升韩国曝光上限以释放更多增长"),
                t("Rebalance underutilized markets (Pakistan, Singapore)", "重新平衡利用不足的市场（巴基斯坦、新加坡）"),
                t("Monitor impression headroom in Philippines & Malaysia", "监控菲律宾和马来西亚的曝光增长空间"),
              ].map((rec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
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
              {t("Tools & Methods", "工具与方法")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Linear Programming", "Excel Solver", "Sensitivity Analysis", "Pareto Optimization", "Facebook Ads", "APAC Marketing"].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">{tool}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntelApecPage;
