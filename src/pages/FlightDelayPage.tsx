import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, BarChart3, Brain, TrendingUp, DollarSign, Shield, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";

import modelComparisonImg from "@/assets/las-model-comparison.png";
import passengerForecastImg from "@/assets/las-passenger-forecast.png";
import avgDelayCarrierImg from "@/assets/las-avg-delay-carrier.png";
import monthlyFlightsDelaysImg from "@/assets/las-monthly-flights-delays.png";
import correlationMatrixImg from "@/assets/las-correlation-matrix.png";
import weatherCorrelationImg from "@/assets/las-weather-correlation.png";
import delayVsDistanceImg from "@/assets/las-delay-vs-distance.png";
import decisionTreeImg from "@/assets/las-decision-tree.png";
import monthlyVolumeImg from "@/assets/las-monthly-volume.png";
import monthlyVolumeYearlyImg from "@/assets/las-monthly-volume-yearly.png";
import avgMonthlyPassengersImg from "@/assets/las-avg-monthly-passengers.png";
import top10RoutesYearlyImg from "@/assets/las-top10-routes-yearly.png";
import top10RoutesMonthlyImg from "@/assets/las-top10-routes-monthly.png";
import residualsDiagnosticsImg from "@/assets/las-residuals-diagnostics.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const FlightDelayPage = () => {
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
        <motion.div {...fadeUp()} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Plane size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {t("Business Report · 2025", "商业报告 · 2025")}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t(
              "LAS Flight Delay Prediction & Passenger Forecasting",
              "拉斯维加斯机场航班延误预测与客流量预测"
            )}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {t(
              "Leveraging predictive analytics to enhance operational efficiency and revenue at Harry Reid International Airport (LAS). Two advanced ML models projecting $12–18M in incremental annual revenue.",
              "利用预测分析提升哈里·里德国际机场（LAS）的运营效率和收入。两个高级机器学习模型预计每年可创造1200万至1800万美元的增量收入。"
            )}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Python", "XGBoost", "SARIMA", "SQL", "Pandas", "Matplotlib"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.section {...fadeUp(0.1)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Executive Summary", "执行摘要")}
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                "This report presents two advanced analytics solutions for Harry Reid International Airport (LAS): a machine-learning classification model to predict departure delays, and a time-series forecasting model to project monthly passenger volumes (June 2025 – May 2026).",
                "本报告为哈里·里德国际机场（LAS）提出了两个高级分析解决方案：一个预测出发延误的机器学习分类模型，以及一个预测月度客流量的时间序列预测模型（2025年6月至2026年5月）。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "These models unlock strategic opportunities to optimize gate assignments, enhance retail revenue through targeted interventions, and improve operational planning and resource allocation.",
                "这些模型为优化登机口分配、通过精准干预提升零售收入以及改善运营规划和资源配置提供了战略机遇。"
              )}
            </p>
          </div>
        </motion.section>

        {/* Flight Delay Prediction Model */}
        <motion.section {...fadeUp(0.15)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Brain size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Flight Delay Prediction Model", "航班延误预测模型")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("Objective", "目标")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Predict delays (15+ mins late) for arrivals and departures at LAS.",
                  "预测LAS机场进出港航班延误（延误15分钟以上）。"
                )}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("Algorithm & Features", "算法与特征")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "An XGBoost classifier leverages carriers, historical delay patterns, route and distance, peak-hour congestion, and weather proxies.",
                  "XGBoost分类器利用航空公司、历史延误模式、航线和距离、高峰时段拥堵和天气代理特征。"
                )}
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
            <h3 className="font-heading font-semibold mb-4">{t("Model Performance", "模型性能")}</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t(
                "The model demonstrates robust discrimination and balanced precision-recall trade-off, enabling reliable identification of high-risk flights.",
                "模型展现出稳健的判别能力和平衡的精准率-召回率权衡，能够可靠识别高风险航班。"
              )}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Recall", value: "80.9%" },
                { label: "Accuracy", value: "55.7%" },
                { label: "Precision", value: "39.4%" },
              ].map((metric) => (
                <div key={metric.label} className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Model Comparison Chart */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 pb-2">
              <h3 className="font-heading font-semibold">
                {t("Model Performance Comparison", "模型性能对比")}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {t("Comparison across kNN, Decision Tree, Random Forest, XGBoost, and Neural Network", "kNN、决策树、随机森林、XGBoost和神经网络的对比")}
              </p>
            </div>
            <img src={modelComparisonImg} alt="Model Performance Comparison" className="w-full" />
          </div>
        </motion.section>

        {/* Delay Prediction Recommendations */}
        <motion.section {...fadeUp(0.2)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Delay Prediction Recommendations", "延误预测建议")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: t("Carrier Performance Program", "航空公司绩效计划"),
                desc: t(
                  "Negotiate on-time service agreements with underperforming carriers (JetBlue B6 >32% delay, vs Delta DL ~22%), tying gate-use priority to improvements.",
                  "与表现不佳的航空公司谈判准点服务协议（捷蓝B6延误率>32%，对比达美DL约22%），将登机口优先权与改进挂钩。"
                ),
              },
              {
                icon: Brain,
                title: t("Predictive Tools in Operations", "运营中的预测工具"),
                desc: t(
                  "Integrate delay-risk alerts into the Airport Operations Center dashboard to trigger dynamic gate reassignments during peak hours (July and March).",
                  "将延误风险预警整合到机场运营中心仪表板，在高峰时段（7月和3月）触发动态登机口重新分配。"
                ),
              },
              {
                icon: RefreshCw,
                title: t("Ground-Handling Optimization", "地面处理优化"),
                desc: t(
                  "Reengineer ramp workflows with just-in-time pushback crews and real-time taxiway-occupancy monitoring to reduce bottlenecks.",
                  "通过即时推出机组和实时滑行道占用监控重新设计坡道工作流程，减少瓶颈。"
                ),
              },
              {
                icon: Shield,
                title: t("Continuous Learning Loop", "持续学习循环"),
                desc: t(
                  "Automate monthly retraining with latest operational data. Quarterly Analytics Governance committee to adjust probability thresholds.",
                  "使用最新运营数据自动月度重新训练。季度分析治理委员会调整概率阈值。"
                ),
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

        {/* Flight Delay Overview */}
        <motion.section {...fadeUp(0.22)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Flight Delay Overview", "航班延误概览")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Average Departure and Arrival Delay by Carrier", "各航空公司平均出发与到达延误")}
                </h3>
              </div>
              <img src={avgDelayCarrierImg} alt="Average Delay by Carrier" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Monthly Total Flights vs. Delayed Flights at LAS", "LAS月度总航班 vs 延误航班")}
                </h3>
              </div>
              <img src={monthlyFlightsDelaysImg} alt="Monthly Flights vs Delays" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Correlation Matrix", "相关性矩阵")}
                </h3>
              </div>
              <img src={correlationMatrixImg} alt="Correlation Matrix" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Weather Features and Weather Delay Correlation", "天气特征与天气延误相关性")}
                </h3>
              </div>
              <img src={weatherCorrelationImg} alt="Weather Correlation" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden md:col-span-2">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Delay vs. Distance", "延误与距离关系")}
                </h3>
              </div>
              <img src={delayVsDistanceImg} alt="Delay vs Distance" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden md:col-span-2">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Decision Tree Visualization", "决策树可视化")}
                </h3>
              </div>
              <img src={decisionTreeImg} alt="Decision Tree" className="w-full" />
            </div>
          </div>
        </motion.section>

        {/* Passenger Forecasting */}
        <motion.section {...fadeUp(0.25)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Passenger Forecasting Model", "客流量预测模型")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("Objective", "目标")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Forecast monthly passenger volumes at LAS for June 2025 – May 2026.",
                  "预测LAS机场2025年6月至2026年5月的月度客流量。"
                )}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("Algorithm", "算法")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Seasonal ARIMA (SARIMA(1,1,1)(0,1,1)[12]) with differencing, seasonal MA terms, and low-order ARIMA components.",
                  "季节性ARIMA（SARIMA(1,1,1)(0,1,1)[12]），包含差分、季节性MA项和低阶ARIMA分量。"
                )}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
            <h3 className="font-heading font-semibold mb-2">{t("Performance", "性能")}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "On a validation window, the 95% prediction intervals captured 93% of observed values, demonstrating reliable point forecasts and robust uncertainty quantification.",
                "在验证窗口中，95%预测区间覆盖了93%的观测值，展示了可靠的点预测和稳健的不确定性量化。"
              )}
            </p>
          </div>

          {/* Forecast Chart */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 pb-2">
              <h3 className="font-heading font-semibold">
                {t("LAS Airport Passenger Forecast (June 2025 – May 2026)", "LAS机场客流量预测（2025年6月 - 2026年5月）")}
              </h3>
            </div>
            <img src={passengerForecastImg} alt="Passenger Forecast" className="w-full" />
          </div>
        </motion.section>

        {/* Passenger Volume Trends Overview */}
        <motion.section {...fadeUp(0.3)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Passenger Volume Trends Overview", "客流量趋势概览")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Monthly Passengers Volume Over Time", "月度客流量变化趋势")}
                </h3>
              </div>
              <img src={monthlyVolumeImg} alt="Monthly Passengers Volume Over Time" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Monthly Passengers Volume per Year", "各年月度客流量对比")}
                </h3>
              </div>
              <img src={monthlyVolumeYearlyImg} alt="Monthly Passengers Volume per Year" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Average Monthly Passengers in LAS", "LAS月均客流量")}
                </h3>
              </div>
              <img src={avgMonthlyPassengersImg} alt="Average Monthly Passengers" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Passenger Trends for Top 10 Routes to LAS", "LAS前10大航线客流趋势")}
                </h3>
              </div>
              <img src={top10RoutesYearlyImg} alt="Top 10 Routes Yearly Trends" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Monthly Passenger Trends for Top 10 Routes (2022–2024)", "前10大航线月度客流趋势（2022-2024）")}
                </h3>
              </div>
              <img src={top10RoutesMonthlyImg} alt="Top 10 Routes Monthly Trends" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Residuals Diagnostics", "残差诊断")}
                </h3>
              </div>
              <img src={residualsDiagnosticsImg} alt="Residuals Diagnostics" className="w-full" />
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp(0.35)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Value Proposition", "价值主张")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: t("Cost Savings", "成本节约"),
                value: "$6M",
                desc: t(
                  "Delays mitigated proactively can save up to $6M annually in ground handling costs.",
                  "主动缓解延误每年可节省高达600万美元的地面处理成本。"
                ),
              },
              {
                icon: TrendingUp,
                title: t("Revenue Growth", "收入增长"),
                value: "$8M",
                desc: t(
                  "Enhanced passenger experience drives ancillary revenues—retail, parking, and advertising.",
                  "提升旅客体验驱动辅助收入——零售、停车和广告。"
                ),
              },
              {
                icon: Shield,
                title: t("Strategic Agility", "战略敏捷性"),
                value: "85%",
                desc: t(
                  "Data-driven planning fosters resilience against demand fluctuations and supports long-term capital decisions.",
                  "数据驱动的规划增强了对需求波动的韧性，支持长期资本决策。"
                ),
              },
            ].map(({ icon: Icon, title, value, desc }, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">{value}</div>
                <h3 className="font-heading font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FlightDelayPage;
