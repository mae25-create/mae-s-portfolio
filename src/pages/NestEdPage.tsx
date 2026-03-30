import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, BookOpen, Brain, Heart, TrendingUp, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import nestedCover from "@/assets/nested-cover.jpg";
import nestedAppScreens from "@/assets/nested-app-screens.jpg";
import nestedSignup from "@/assets/nested-signup.jpg";
import nestedAssessment from "@/assets/nested-assessment.jpg";
import nestedMyPath from "@/assets/nested-my-path.jpg";
import nestedDashboard from "@/assets/nested-dashboard.jpg";

const NestEdPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link
          to="/projects/ai-products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t("Back to AI Products", "返回AI产品")}
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
                {["FLUTTERFLOW", "FIREBASE", "AI", "SOCIAL IMPACT"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-mono font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {t(
                  "NestEd — Breaking the Cycle of Poverty Through Education",
                  "NestEd — 通过教育打破贫困循环"
                )}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "An AI-powered mobile app empowering low-income parents in Brazil with parenting skills, financial literacy, nutrition guidance, and career development — built to break the intergenerational cycle of poverty.",
                  "一款AI驱动的移动应用，为巴西低收入家庭父母提供育儿技能、金融素养、营养指导和职业发展支持——旨在打破代际贫困循环。"
                )}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-primary" />
                  {t("150K target users", "目标用户15万")}
                </span>
                <span className="flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-primary" />
                  {t("311% Social ROI", "社会回报率311%")}
                </span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={nestedCover} alt="NestEd Cover" className="w-full h-auto object-cover" />
            </div>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("The Problem", "问题背景")}
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">9</div>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Generations needed to break the cycle of poverty in Brazil",
                    "在巴西打破贫困循环所需的代数"
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">4M+</div>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Low-income families lacking access to parenting & financial education",
                    "缺乏育儿和金融教育资源的低收入家庭"
                  )}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">47M</div>
                <p className="text-sm text-muted-foreground">
                  {t("Total Addressable Market (TAM)", "总可触达市场 (TAM)")}
                </p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "Low-income mothers in Brazil face a vicious cycle: limited education leads to poor living conditions, which limits their children's development, perpetuating poverty across generations. Our belief is that family dynamics and education are the most powerful tools to overcome this cycle.",
              "巴西低收入母亲面临恶性循环：有限的教育导致贫困的生活条件，进而限制子女发展，使贫困代代延续。我们相信，家庭互动和教育是打破这一循环最有力的工具。"
            )}
          </p>
        </motion.div>

        {/* Solution — Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Our Solution", "解决方案")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: Brain,
                title: t("AI-Driven", "AI驱动"),
                desc: t("Personalized learning paths powered by recommendation algorithms", "由推荐算法驱动的个性化学习路径"),
              },
              {
                icon: BookOpen,
                title: t("Comprehensive", "全面覆盖"),
                desc: t("Parenting, financial literacy, nutrition, and career skills", "育儿、金融素养、营养和职业技能"),
              },
              {
                icon: Smartphone,
                title: t("Accessible", "易于使用"),
                desc: t("Lightweight mobile app optimized for intermittent internet", "轻量级应用，为不稳定网络优化"),
              },
              {
                icon: Heart,
                title: t("Transformative", "变革性"),
                desc: t("Empowering parents to break the cycle for the next generation", "赋能父母，为下一代打破贫困循环"),
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <item.icon size={24} className="text-primary mb-3" />
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product — App Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("The Product — MVP App", "产品 — MVP应用")}
          </h2>
          <div className="rounded-xl overflow-hidden border border-border mb-8">
            <img src={nestedAppScreens} alt="NestEd App Screens" className="w-full h-auto object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t("1. Sign Up & Profile", "1. 注册与个人资料"),
                desc: t(
                  "Users create profiles with demographic info including education level, employment status, income range, and children's ages — enabling personalized content recommendations.",
                  "用户创建包含教育水平、就业状态、收入范围和子女年龄等信息的个人资料——实现个性化内容推荐。"
                ),
                image: nestedSignup,
              },
              {
                title: t("2. Self-Assessment", "2. 自我评估"),
                desc: t(
                  "Daily emotional and mindset check-ins help the AI understand each parent's current state and adapt learning recommendations accordingly.",
                  "每日情绪和心态签到帮助AI了解每位家长的当前状态，并相应调整学习推荐。"
                ),
                image: nestedAssessment,
              },
              {
                title: t("3. My Path — Learning Modules", "3. 我的路径 — 学习模块"),
                desc: t(
                  "Structured courses covering Financial Education, Parenting Skills, Nutrition Guide, and Career Skills — each with progress tracking and XP rewards.",
                  "涵盖金融教育、育儿技能、营养指南和职业技能的结构化课程——每门课程都有进度跟踪和经验值奖励。"
                ),
                image: nestedMyPath,
              },
              {
                title: t("4. Dashboard & Gamification", "4. 仪表板与游戏化"),
                desc: t(
                  "Task management, progress categories, achievement badges, streaks, and active challenges keep users engaged and motivated throughout their learning journey.",
                  "任务管理、进度分类、成就徽章、连续签到和活跃挑战让用户在整个学习过程中保持参与和动力。"
                ),
                image: nestedDashboard,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="h-64 overflow-hidden bg-muted flex items-center justify-center">
                  <img src={step.image} alt={step.title} className="h-full w-auto object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Business Model & GTM", "商业模式与市场进入")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: t("Government & NGO Contracts", "政府与NGO合同"),
                desc: t(
                  "Integrate NestEd into public education and workforce programs; license AI-powered training modules to social institutions.",
                  "将NestEd融入公共教育和就业项目；向社会机构授权AI培训模块。"
                ),
              },
              {
                title: t("Corporate & Fintech Partnerships", "企业与金融科技合作"),
                desc: t(
                  "Financial institutions invest through social funds; fintech partners fund job-readiness courses and microfinance tools.",
                  "金融机构通过社会基金投资；金融科技合作伙伴资助就业课程和小额金融工具。"
                ),
              },
              {
                title: t("Data Insights & API Licensing", "数据洞察与API授权"),
                desc: t(
                  "AI-powered skills-matching API for companies hiring in underserved areas; aggregated anonymized impact reports.",
                  "为在欠发达地区招聘的企业提供AI技能匹配API；汇总匿名影响力报告。"
                ),
              },
            ].map((model) => (
              <div key={model.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">{model.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>

          {/* GTM quick stats */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold mb-4">
              {t("Go-to-Market Strategy", "市场进入策略")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-heading font-bold text-primary">Parelheiros, SP</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("Initial launch community in São Paulo", "圣保罗首发社区")}
                </p>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary">22K → 154K</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("SOM to SAM growth trajectory", "SOM到SAM增长轨迹")}
                </p>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary">$905M</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("Global Parenting App Market (2030)", "全球育儿应用市场 (2030)")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Financial Projections", "财务预测")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("Year 1 Cost Analysis", "第一年成本分析")}
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: t("Initial Development", "初始开发"), value: "$610K" },
                  { label: t("Labor Costs", "人力成本"), value: "$254K" },
                  { label: t("Maintenance", "运维"), value: "$58K" },
                  { label: t("API & Content", "API与内容"), value: "$17K" },
                  { label: t("Support", "支持"), value: "$7K" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 flex justify-between font-semibold">
                  <span>{t("Total", "合计")}</span>
                  <span className="text-primary">$946K</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("Social ROI", "社会投资回报")}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">311%</div>
                  <p className="text-sm text-muted-foreground">{t("Return on Investment", "投资回报率")}</p>
                </div>
                <div>
                  <div className="text-lg font-semibold">$480K</div>
                  <p className="text-sm text-muted-foreground">{t("Parent income uplift (Year 2)", "父母收入提升（第2年）")}</p>
                </div>
                <div>
                  <div className="text-lg font-semibold">$1.4M–$4M</div>
                  <p className="text-sm text-muted-foreground">{t("Children's lifetime income impact (20-25 yrs)", "子女终身收入影响（20-25年）")}</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("Key KPIs", "核心指标")}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-heading font-bold">150K</div>
                  <p className="text-sm text-muted-foreground">{t("Target MAU", "目标月活跃用户")}</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold">70%</div>
                  <p className="text-sm text-muted-foreground">{t("Retention Rate Target", "目标留存率")}</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold">10K+</div>
                  <p className="text-sm text-muted-foreground">{t("Active users milestone", "活跃用户里程碑")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            {t("Product Roadmap", "产品路线图")}
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                version: "v1.0",
                features: [t("Self-Assessment", "自我评估"), t("My Path", "我的路径")],
                status: t("Completed", "已完成"),
              },
              {
                version: "v2.0",
                features: [t("User Auth", "用户认证"), t("My Progress & Gamification", "进度与游戏化")],
                status: t("In Progress", "进行中"),
              },
              {
                version: "v3.0",
                features: [t("Video Tutorials", "视频教程"), t("Interactive Activities", "互动活动")],
                status: t("Planned", "计划中"),
              },
              {
                version: "v4.0",
                features: [t("AI Voice Assistant", "AI语音助手"), t("Data-Driven Optimization", "数据驱动优化")],
                status: t("Future", "未来"),
              },
            ].map((phase, i) => (
              <div key={phase.version} className="bg-card border border-border rounded-xl p-6 relative">
                <div className="text-xs font-mono text-primary mb-2">{phase.status}</div>
                <h3 className="font-heading text-xl font-bold mb-3">NestEd {phase.version}</h3>
                <ul className="space-y-1.5">
                  {phase.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-muted-foreground z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold mb-4">
              {t("Tech Stack", "技术栈")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {["FlutterFlow", "Firebase", "Google Cloud", "AI/ML", "Android", "iOS"].map((tool) => (
                <span key={tool} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NestEdPage;
