import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Brain, Target, Users, BarChart3, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

import cardinalsImg from "@/assets/cardinals-cover.png";
import nflPlayersDistribution from "@/assets/nfl-players-distribution.png";
import nflPffGradeTrend from "@/assets/nfl-pff-grade-trend.png";
import nflGlobalDraftTrend from "@/assets/nfl-global-draft-trend.png";
import nflPlayersRanking from "@/assets/nfl-players-ranking.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const draftPicks = [
  {
    round: "1st Round",
    roundZh: "第一轮",
    pick: "Pick 16",
    player: "Jacob Parrish",
    position: "CB",
    college: "Kansas State",
    attributes: ["Physical & Mental toughness", "Starter Potential", "High Upside"],
    attributesZh: ["身体和心理韧性", "首发潜力", "高上限"],
    metrics: { height: '5\'10" / 198 lbs', speed: "4.35s 40-yard", ras: "8.82/10 RAS", stats: "50 tackles, 1 INT, 8 PD" },
    salary: "$6.35M / 4yr (~$1.59M APY)",
    fit: ["Immediate impact in slot coverage", "Quick throws & slot matchups", "Strong tackling versatility"],
    fitZh: ["在槽位覆盖中即刻发挥影响", "快速传球和槽位对位", "强力擒抱多面手"],
  },
  {
    round: "2nd Round",
    roundZh: "第二轮",
    pick: "Pick 47",
    player: "Deone Walker",
    position: "DT",
    college: "Kentucky",
    attributes: ["Disruptive potential", "Size + wingspan to control gaps"],
    attributesZh: ["破坏力潜力", "身材+臂展控制间隙"],
    metrics: { height: '6\'7" / 331 lbs', speed: '25" vert / 8\'8" broad', ras: "", stats: "37 tackles, 1.5 sacks, 2 PBU" },
    salary: "$5.25M / 4yr (~$1.31M APY)",
    fit: ["Run wall in interior", "Frees EDGE rushers", "Starter potential, development ceiling"],
    fitZh: ["内线防守屏障", "释放边锋冲传手", "首发潜力，发展上限高"],
  },
  {
    round: "3rd Round",
    roundZh: "第三轮",
    pick: "Pick 78",
    player: "Quinshon Judkins",
    position: "RB",
    college: "Ohio State",
    attributes: ["Power Runner", "Strong decisiveness & quick acceleration"],
    attributesZh: ["力量型跑卫", "果断决策和快速加速"],
    metrics: { height: '6\'0" / 221 lbs', speed: "4.48s 40-yard", ras: "", stats: "194 carries, 1,060 yds, 14 TD" },
    salary: "$11.4M / 4yr (~$2.85M APY)",
    fit: ["Rushing depth & third-down asset", "Support QB & OL", "Well-suited for blocking schemes"],
    fitZh: ["冲跑深度和第三档资产", "支持四分卫和进攻锋线", "适合阻挡方案"],
  },
  {
    round: "4th Round",
    roundZh: "第四轮",
    pick: "Pick 115",
    player: "Nic Scourton",
    position: "EDGE",
    college: "Texas A&M",
    attributes: ["Disruptive Burst", "High Upside", "Advanced pass-rush toolbox"],
    attributesZh: ["爆发力破坏", "高上限", "高级冲传工具箱"],
    metrics: { height: '6\'4" / 285 lbs', speed: "", ras: "", stats: "14 TFL, 46 TFL yds, 12 games" },
    salary: "$8.81M / 4yr (~$2.2M APY)",
    fit: ["Interior disruptor", "Improve EPA on rushes", "Long-term defensive continuity"],
    fitZh: ["内线破坏者", "提升冲跑EPA", "长期防守连续性"],
  },
];

const NFLDraftPage = () => {
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
          {t("Back to Data Analysis Projects", "返回数据分析项目")}
        </Link>

        {/* Hero */}
        <motion.div {...fadeUp()} className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {t("Sports Analytics · 2025", "体育分析 · 2025")}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              {t(
                "Arizona Cardinals — 2025 NFL Draft Day",
                "亚利桑那红雀队 — 2025 NFL选秀日"
              )}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              {t(
                "Machine learning models for predicting player success, combined with strategic draft analysis covering team needs, historical trends, and optimal pick sequencing for the Arizona Cardinals.",
                "结合机器学习模型预测球员成功概率，以及战略选秀分析——涵盖球队需求、历史趋势和亚利桑那红雀队的最佳选秀顺序。"
              )}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "XGBoost", "Random Forest", "Neural Network", "kNN", "PFF Data"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={cardinalsImg}
              alt="Arizona Cardinals"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Team Overview */}
        <motion.section {...fadeUp(0.1)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Team Context & 2025 Objectives", "球队背景与2025目标")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: t("Playoff Push", "冲击季后赛"),
                desc: t("Build on coaching continuity under Jonathan Gannon (3rd season) with franchise QB Kyler Murray's full return.", "在Jonathan Gannon主教练（第三赛季）的带领下，随着核心四分卫Kyler Murray全面回归，冲击季后赛。"),
              },
              {
                icon: Shield,
                title: t("Defensive Growth", "防守提升"),
                desc: t("DVOA improved from 34th to 14th. Target CB, DT, DE positions to sustain trajectory and address 27th EPA allowed/rush.", "DVOA从第34名提升至第14名。瞄准CB、DT、DE位置以保持上升趋势，解决冲跑EPA允许排名第27的问题。"),
              },
              {
                icon: BarChart3,
                title: t("Offensive Consistency", "进攻稳定性"),
                desc: t("Address 6th worst EPA/dropback, prepare for RB transition post-James Conner, and establish offensive identity.", "解决EPA/后撤排名倒数第6的问题，准备James Conner之后的跑卫过渡，建立进攻体系。"),
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm">{title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ML Model: Success Definition */}
        <motion.section {...fadeUp(0.15)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Brain size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("ML Model: Defining Player Success", "机器学习模型：定义球员成功")}
            </h2>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                "A composite success metric was designed combining Production (wAV + DrAV) and Performance (PFF rookie + career grades), with position-specific weights to fairly evaluate players across different roles.",
                "设计了一个复合成功指标，结合产出（wAV + DrAV）和表现（PFF新秀+职业生涯评分），使用位置特定权重公平评估不同角色的球员。"
              )}
            </p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm text-center mb-6">
              <div className="mb-2">Success<sub>i</sub> = α<sub>i</sub> · Production<sub>i</sub> + β<sub>i</sub> · Performance<sub>i</sub></div>
              <div className="text-muted-foreground text-xs">
                {t("where Production = γ₁·wAV + γ₂·DrAV and Performance = δ₁·PFF_rookie + δ₂·PFF_career", "其中 Production = γ₁·wAV + γ₂·DrAV，Performance = δ₁·PFF_rookie + δ₂·PFF_career")}
              </div>
            </div>
            <img src="72995a52-e473-41b6-a532-33510693d14c.png" alt="Success Formula" className="w-full rounded-lg" />
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-heading font-semibold mb-4">
              {t("Model Training & Validation", "模型训练与验证")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t(
                "Multiple ML classifiers were trained and compared — kNN, Decision Tree, Random Forest, Neural Network, and XGBoost — optimizing for maximum recall to avoid missing high-potential players.",
                "训练并比较了多个机器学习分类器——kNN、决策树、随机森林、神经网络和XGBoost——优化最大召回率以避免遗漏高潜力球员。"
              )}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["kNN", "Decision Tree", "Random Forest", "Neural Network", "XGBoost"].map((model) => (
                <div key={model} className="text-center p-3 bg-muted rounded-lg">
                  <div className="text-xs font-medium">{model}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Draft Strategy */}
        <motion.section {...fadeUp(0.2)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Draft Strategy & Round Sequencing", "选秀策略与轮次排序")}
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { round: "1", pos: "CB", reason: t("Top priority, position scarcity, scheme dependent", "首要优先，位置稀缺，体系依赖") },
              { round: "2", pos: "DT", reason: t("Avoid position drop-off, strong fit, reinforce weak interior", "避免位置断层，强匹配，加强内线") },
              { round: "3", pos: "DE", reason: t("Fit defensive strategy, draft trend consistency, balanced roster", "符合防守策略，选秀趋势一致，阵容平衡") },
              { round: "4", pos: "RB", reason: t("Timing advantage, succession planning, offensive support", "时机优势，继任规划，进攻支持") },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">{item.round}</span>
                  <span className="font-heading font-bold text-lg">{item.pos}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Draft Picks */}
        <motion.section {...fadeUp(0.25)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Our Picks", "我们的选择")}
            </h2>
          </div>

          <div className="space-y-6">
            {draftPicks.map((pick, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="bg-muted px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-bold text-primary">{t(pick.round, pick.roundZh)}</span>
                    <span className="text-sm text-muted-foreground">{pick.pick}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{pick.salary}</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-heading text-xl font-semibold">{pick.player}</h3>
                    <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{pick.position}</span>
                    <span className="text-sm text-muted-foreground">— {pick.college}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        {t("Key Metrics", "关键数据")}
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(pick.metrics).filter(([, v]) => v).map(([key, val]) => (
                          <div key={key} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            <span className="text-muted-foreground">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        {t("Strategic Fit", "战略契合")}
                      </h4>
                      <div className="space-y-2">
                        {pick.fit.map((f, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            <span className="text-muted-foreground">{t(f, pick.fitZh[j])}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {(t(pick.attributes, pick.attributesZh) as string[]).map((attr, j) => (
                      <span key={j} className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium">{attr}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Analytics Dashboard */}
        <motion.section {...fadeUp(0.3)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Analytics & Trends", "分析与趋势")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={nflPlayersDistribution} alt="Cardinals Players Distribution" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={nflPffGradeTrend} alt="Rookie PFF Grade Trend" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={nflGlobalDraftTrend} alt="Global Draft Trend" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={nflPlayersRanking} alt="Successful Players Ranking" className="w-full" />
            </div>
          </div>
        </motion.section>

        {/* Back */}
        <motion.div {...fadeUp(0.35)} className="text-center">
          <Link
            to="/projects/data-analysis"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            {t("Back to Data Analysis Projects", "返回数据分析项目")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NFLDraftPage;