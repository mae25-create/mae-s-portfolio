import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Brain,
  Briefcase,
  ChevronRight,
  CircleDollarSign,
  Heart,
  LineChart,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import nestedCover from "@/assets/nested-cover-v2.png";
import nestedAppScreens from "@/assets/nested-app-screens-v2.png";
import nestedDemoSignup from "@/assets/nested-demo-signup.jpg";
import nestedDemoProfile from "@/assets/nested-demo-profile.jpg";
import nestedDemoAssessment from "@/assets/nested-demo-assessment.jpg";
import nestedDemoPath from "@/assets/nested-demo-path.jpg";
import nestedDemoDashboard from "@/assets/nested-demo-dashboard.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const NestEdPage = () => {
  const { t } = useLanguage();

  const valuePillars = [
    {
      icon: Brain,
      title: t("AI-driven personalization", "AI驱动的个性化"),
      desc: t(
        "Self-assessment and recommendation algorithms adapt each parent’s learning path.",
        "通过自我评估与推荐算法，为每位家长匹配学习路径。"
      ),
    },
    {
      icon: BookOpen,
      title: t("Comprehensive curriculum", "综合课程体系"),
      desc: t(
        "Parenting skills, financial literacy, vocational training, and nutrition content in one journey.",
        "将育儿技能、金融素养、职业培训和营养内容整合为一条学习旅程。"
      ),
    },
    {
      icon: Smartphone,
      title: t("Accessible by design", "为可及性而设计"),
      desc: t(
        "A lightweight mobile app optimized for intermittent internet and low data consumption.",
        "轻量移动端体验，针对不稳定网络和低流量消耗优化。"
      ),
    },
    {
      icon: Heart,
      title: t("Transformative potential", "长期改变潜力"),
      desc: t(
        "From daily family dynamics to long-term economic stability for the next generation.",
        "从日常家庭互动延伸到下一代长期经济稳定。"
      ),
    },
  ];

  const demoSteps = [
    {
      title: t("1. Sign Up", "1. 注册"),
      desc: t(
        "Parents enter through a simple mobile onboarding flow with email, Google, or Facebook options.",
        "家长通过简单的移动端入口开始，可选择邮箱、Google 或 Facebook 注册。"
      ),
      image: nestedDemoSignup,
    },
    {
      title: t("2. Create a Profile", "2. 创建个人资料"),
      desc: t(
        "The app captures age, children, zip code, education level, employment status, and income range to personalize support.",
        "应用收集年龄、子女情况、邮编、教育程度、就业状态和收入区间，用于个性化支持。"
      ),
      image: nestedDemoProfile,
    },
    {
      title: t("3. Self-Assessment", "3. 自我评估"),
      desc: t(
        "Emotional state, concerns, mindset, and support needs become inputs for the AI recommendation layer.",
        "情绪、担忧、心态与支持需求会成为 AI 推荐层的输入。"
      ),
      image: nestedDemoAssessment,
    },
    {
      title: t("4. My Path", "4. 我的路径"),
      desc: t(
        "Personalized modules guide parents through financial education, parenting skills, nutrition, and career skills.",
        "个性化模块引导家长学习金融教育、育儿技能、营养知识和职业技能。"
      ),
      image: nestedDemoPath,
    },
    {
      title: t("5. Dashboard", "5. 仪表板"),
      desc: t(
        "Progress, tasks, categories, XP, and achievements turn learning into a repeatable habit.",
        "进度、任务、分类、经验值与成就系统将学习转化为持续习惯。"
      ),
      image: nestedDemoDashboard,
    },
  ];

  const businessModels = [
    {
      title: t("Government & NGO contracts", "政府与 NGO 合同"),
      desc: t(
        "Integrate NestEd into public education and workforce programs; license AI-powered training modules.",
        "将 NestEd 纳入公共教育与就业项目，并授权 AI 培训模块。"
      ),
    },
    {
      title: t("Corporate & fintech partnerships", "企业与金融科技合作"),
      desc: t(
        "Fund job-readiness courses, financial education, and microfinance tools through ESG and social funds.",
        "通过 ESG 与社会基金资助就业准备课程、金融教育和小额金融工具。"
      ),
    },
    {
      title: t("Data insights & API licensing", "数据洞察与 API 授权"),
      desc: t(
        "Offer anonymized impact reports and AI-powered skills-matching APIs for underserved hiring markets.",
        "提供匿名化影响力报告，以及面向欠服务招聘市场的 AI 技能匹配 API。"
      ),
    },
  ];

  const roadmap = [
    {
      version: "1.0",
      date: "Feb 2025",
      features: [t("Self-Assessment", "自我评估"), t("My Path", "我的路径"), t("My Progress", "我的进度")],
    },
    {
      version: "2.0",
      date: "Feb 2028",
      features: [t("Full authentication", "完整用户认证"), t("Gamification", "游戏化机制")],
    },
    {
      version: "3.0",
      date: t("Post launch", "上线后"),
      features: [t("Tutorial videos", "教程视频"), t("AI voice assistant", "AI 语音助手"), t("Follow-up surveys", "追踪问卷")],
    },
    {
      version: "4.0",
      date: t("Future", "未来"),
      features: [t("Interactive activities", "互动活动"), t("Continuous data optimization", "基于数据持续优化")],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link
          to="/projects/ai-products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t("Back to AI Products", "返回AI产品")}
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-[1fr_0.92fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {["SOCIAL IMPACT", "AI", "BRAZIL", "MVP"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-md text-xs font-mono font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-primary mb-3">
                {t("What determines a child’s future?", "什么决定一个孩子的未来？")}
              </p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-5">
                {t(
                  "NestEd — Breaking the poverty cycle through parent education",
                  "NestEd — 通过家长教育打破贫困循环"
                )}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-7">
                {t(
                  "NestEd empowers low-income parents in Brazil with AI-personalized learning, practical life skills, and a mobile-first support system for raising resilient learners.",
                  "NestEd 为巴西低收入家庭家长提供 AI 个性化学习、实用生活技能与移动端支持系统，帮助他们培养更有韧性的下一代。"
                )}
              </p>
              <div className="grid grid-cols-3 gap-3 max-w-xl">
                {[
                  { value: "9", label: t("generations to break poverty", "代才可能打破贫困") },
                  { value: "4M+", label: t("families lack access", "家庭缺乏资源") },
                  { value: "150K", label: t("target MAU", "目标月活") },
                ].map((stat) => (
                  <div key={stat.value} className="border border-border rounded-lg p-4 bg-card">
                    <div className="font-heading text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border bg-card">
              <img src={nestedCover} alt="NestEd pitch cover" className="w-full h-auto object-cover" />
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <p className="text-sm font-medium text-primary mb-3">{t("Problem", "问题")}</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {t("A family-level cycle that repeats across generations", "一个在家庭层面代际重复的循环")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Low-income mothers in Brazil face interconnected barriers: limited quality education, low child development support, restricted job opportunities, and poor living conditions. The beneficiaries are their children, who gain a better starting point when family dynamics and education improve.",
                  "巴西低收入母亲面临相互关联的障碍：优质教育不足、儿童发展支持有限、就业机会受限和生活条件较差。当家庭互动与教育能力得到提升，真正受益的是获得更好起点的孩子。"
                )}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Users, title: t("Who", "目标人群"), text: t("Mothers from low-income families in Brazil.", "巴西低收入家庭中的母亲。") },
                { icon: Heart, title: t("Beneficiaries", "受益者"), text: t("Children gaining advantages for their future.", "为未来获得优势的孩子。") },
                { icon: Target, title: t("Core belief", "核心信念"), text: t("Family dynamics and education are the strongest levers.", "家庭互动和教育是最有力的杠杆。") },
                { icon: LineChart, title: t("Market need", "市场需求"), text: t("47M TAM, 1.67M SAM, 154K initial SAM in Parelheiros-SP.", "47M TAM、1.67M SAM、Parelheiros-SP 首期 154K SAM。") },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-lg p-5">
                  <item.icon size={22} className="text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary mb-3">{t("Value Proposition", "价值主张")}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {t("From personalized learning to measurable social mobility", "从个性化学习到可衡量的社会流动")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuePillars.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6">
                <item.icon size={24} className="text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center mb-8">
            <div>
              <p className="text-sm font-medium text-primary mb-3">{t("Underlying Magic", "底层机制")}</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                {t("Assessment → Path → Recommendations → Gamification", "评估 → 路径 → 推荐 → 游戏化")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "The MVP turns personal context into actionable modules, then uses progress tracking and rewards to keep parents engaged long enough for behavior change.",
                  "MVP 将个人背景转化为可执行学习模块，再通过进度追踪与奖励机制维持参与度，让行为改变有机会发生。"
                )}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-border bg-card">
              <img src={nestedAppScreens} alt="NestEd app screen overview" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              t("Self-Assessment", "自我评估"),
              t("My Path", "我的路径"),
              t("Recommendation Algorithms", "推荐算法"),
              t("Gamification", "游戏化"),
            ].map((item, index) => (
              <div key={item} className="flex items-center justify-between bg-muted rounded-lg px-4 py-3 text-sm font-medium">
                <span>{item}</span>
                {index < 3 && <ChevronRight size={16} className="hidden md:block text-muted-foreground" />}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary mb-3">{t("MVP Demo Flow", "MVP 使用流程")}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {t("A five-step parent journey from signup to daily progress", "从注册到日常进步的五步家长旅程")}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                "The demo flow is preserved from the product instructions and reframed as a clear onboarding-to-engagement sequence.",
                "以下保留产品说明文档中的演示步骤，并将其整理为清晰的“入门—参与”流程。"
              )}
            </p>
          </div>
          <div className="space-y-6">
            {demoSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-5 md:gap-8 items-center bg-card border border-border rounded-lg p-4 md:p-6"
              >
                <div className="rounded-lg bg-muted overflow-hidden flex justify-center max-h-[420px]">
                  <img src={step.image} alt={step.title} className="w-auto max-h-[420px] object-contain" loading="lazy" />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary mb-2">
                    {t("Step", "步骤")} {index + 1}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary mb-3">{t("Business Model & GTM", "商业模式与市场进入")}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {t("Start with institutions, expand through community trust", "从机构合作切入，通过社区信任扩张")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {businessModels.map((model) => (
              <div key={model.title} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4 bg-card border border-border rounded-lg p-6">
            {[
              { label: t("Initial launch", "首发区域"), value: "Parelheiros-SP" },
              { label: t("SOM", "可获取市场"), value: "22K" },
              { label: t("SAM", "可服务市场"), value: "154K / 1.67M" },
              { label: t("Special edge", "差异化优势"), value: t("Offline + Brazilian Portuguese AI", "离线能力 + 巴葡 AI") },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <div className="font-heading text-lg font-bold text-primary">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <p className="text-sm font-medium text-primary mb-3">{t("Impact Economics", "影响力经济模型")}</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {t("USD 1.3M to change 150,000 lives", "用 130 万美元改变 15 万人的生活")}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { value: "$946K", label: t("Year-1 operating cost", "第一年运营成本") },
                  { value: "311%", label: t("social ROI", "社会投资回报") },
                  { value: "3 yrs", label: t("payback period", "回收期") },
                ].map((item) => (
                  <div key={item.value} className="bg-muted rounded-lg p-4">
                    <div className="font-heading text-2xl font-bold">{item.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold mb-5">{t("Success KPIs", "成功指标")}</h3>
              <div className="space-y-4">
                {[
                  { icon: Users, value: "150K", label: t("target monthly active users", "目标月活用户") },
                  { icon: Sparkles, value: "70%", label: t("retention target", "留存率目标") },
                  { icon: CircleDollarSign, value: "$480K+", label: t("parent income uplift by year 2", "第 2 年父母收入提升") },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="bg-muted rounded-lg p-3">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-xl font-bold">{item.value}</div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium text-primary mb-3">{t("Roadmap", "路线图")}</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              {t("A staged path from MVP to scalable impact platform", "从 MVP 到可扩展影响力平台的阶段路径")}
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {roadmap.map((phase) => (
              <div key={phase.version} className="bg-card border border-border rounded-lg p-6">
                <p className="text-xs font-mono text-primary mb-2">{phase.date}</p>
                <h3 className="font-heading text-xl font-bold mb-4">NestEd {phase.version}</h3>
                <ul className="space-y-2">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <BadgeCheck size={16} className="text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()}>
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
              <div>
                <p className="text-sm font-medium text-primary mb-3">{t("Team & Build", "团队与实现")}</p>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  {t("Designed for inclusive adoption", "为包容性采用而设计")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "NestEd combines product, AI, finance, impact partnerships, and local community outreach so parents feel supported rather than simply handed a digital tool.",
                    "NestEd 结合产品、AI、财务、影响力合作和本地社区触达，让家长感受到被支持，而不是只被交付一个数字工具。"
                  )}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Briefcase, label: t("Government programs", "政府项目") },
                  { icon: Heart, label: t("NGOs and social programs", "NGO 与社会项目") },
                  { icon: CircleDollarSign, label: t("Bank social institutes", "银行社会基金机构") },
                  { icon: Users, label: t("Local educators and community leaders", "本地教育者与社区领袖") },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-muted rounded-lg p-4">
                    <item.icon size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default NestEdPage;
