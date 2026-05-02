import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import nestedCover from "@/assets/nested-app-screens-v2.png";
import gtcCover from "@/assets/gtc-explorer-network-cover.jpg";
import autoMarketingCover from "@/assets/auto-marketing-cover.jpg";
import flavorAiCover from "@/assets/flavor-ai-cover.jpg";
import subtrackerCover from "@/assets/subtracker-cover.jpg";
import interviewflowCover from "@/assets/interviewflow-cover.jpg";

interface ProjectRowProps {
  title: string;
  description: string;
  media: React.ReactNode;
  link?: string;
  linkLabel?: string;
  index: number;
}

const ProjectRow = ({ title, description, media, link, linkLabel, index }: ProjectRowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    <div className="border-t border-border" />
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1.4fr] gap-6 md:gap-10 py-10 md:py-14 items-start">
      {/* Col 1 — Title */}
      <h3 className="font-heading text-base font-bold tracking-tight">{title}</h3>

      {/* Col 2 — Description + Link */}
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{description}</p>
        {link && (
          <Link
            to={link}
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            {linkLabel || "View Details →"}
          </Link>
        )}
      </div>

      {/* Col 3 — Media */}
      <div className="rounded-lg overflow-hidden">{media}</div>
    </div>
  </motion.div>
);

const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative cursor-pointer group aspect-video"
      onMouseEnter={() => {
        videoRef.current?.play();
        setPlaying(true);
      }}
      onMouseLeave={() => {
        videoRef.current?.pause();
        setPlaying(false);
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover rounded-lg"
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 rounded-lg transition-opacity">
          <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center">
            <Play size={20} className="text-foreground ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
};

const AIProductsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          {t("Back to Home", "返回首页")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-3">
            {t("AI Products", "AI 产品")}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
            {t(
              "A curated collection of AI-powered products and rapid prototypes, spanning social impact, market intelligence, and cross-cultural communication.",
              "AI驱动的产品与快速原型合集，涵盖社会影响、市场情报和跨文化沟通。"
            )}
          </p>
        </motion.div>

        {/* Project 1 — NestEd */}
        <ProjectRow
          index={0}
          title={t("NestEd — Breaking the Cycle", "NestEd — 打破贫困循环")}
          description={t(
            "AI-powered mobile app empowering low-income parents in Brazil with parenting skills, financial literacy, nutrition, and career development.\n\nBuilt with FlutterFlow and Firebase. Designed for social impact at scale.",
            "AI驱动的移动应用，为巴西低收入家庭父母提供育儿技能、金融素养、营养和职业发展支持。\n\n使用 FlutterFlow 和 Firebase 构建，专注于规模化社会影响。"
          )}
          link="/projects/ai-products/nested"
          linkLabel={t("View Details →", "查看详情 →")}
          media={
            <img
              src={nestedCover}
              alt="NestEd App"
              className="w-full h-full object-cover rounded-lg aspect-video"
              loading="lazy"
            />
          }
        />

        {/* Project 2 — GTC Explorer */}
        <ProjectRow
          index={1}
          title={t(
            "GTC Explorer — NVIDIA GTC 2026",
            "GTC Explorer — 英伟达 GTC 2026"
          )}
          description={t(
            "Interactive exhibitor industry map for NVIDIA GTC 2026. Visualizes 61 companies across 12 sectors in a dynamic network graph.\n\nHover to explore connections, click to reveal company details. Built for rapid conference intelligence gathering.",
            "英伟达 GTC 2026 参展商行业地图。以动态网络图展示12个行业的61家公司。\n\n悬停探索连接关系，点击查看公司详情。为快速会议情报收集而构建。"
          )}
          media={
            <VideoPlayer
              src="/videos/gtc-exhibitor-map.mp4"
              poster={gtcCover}
            />
          }
        />

        {/* Project 3 — Auto Marketing Agent */}
        <ProjectRow
          index={2}
          title={t("Auto Marketing Agent", "智能营销代理")}
          description={t(
            "AI-powered marketing automation agent that streamlines campaign creation end-to-end. Generates tailored marketing strategies, audience segmentation, ad copy, and visual content — all through a conversational AI interface.\n\nFrom market research to content calendar planning, the agent automates repetitive marketing workflows and delivers actionable insights in real time.",
            "AI驱动的营销自动化代理，端到端简化营销活动创建流程。通过对话式AI界面生成定制营销策略、受众细分、广告文案和视觉内容。\n\n从市场调研到内容日历规划，该代理自动化重复性营销工作流程，并实时提供可操作的洞察。"
          )}
          media={
            <VideoPlayer
              src="/videos/auto-marketing-agent-demo.mp4"
              poster={autoMarketingCover}
            />
          }
        />

        {/* Project 4 — Flavor AI */}
        <ProjectRow
          index={3}
          title={t("Flavor AI — Smart Taste Explorer", "Flavor AI — 智能风味探索")}
          description={t(
            "AI-powered flavor profiling application that maps personal taste preferences and generates tailored recipe recommendations. Features interactive ingredient relationship graphs, nutritional breakdowns, and seasonal flavor trend analysis.\n\nCombines computer vision for food recognition with NLP-driven taste modeling to deliver a personalized culinary discovery experience.",
            "AI驱动的风味分析应用，绘制个人口味偏好图谱并生成定制食谱推荐。具备交互式食材关系图、营养成分分析和季节性风味趋势洞察。\n\n结合计算机视觉食物识别与NLP驱动的口味建模，打造个性化美食探索体验。"
          )}
          media={
            <VideoPlayer
              src="/videos/flavor-ai-demo.mp4"
              poster={flavorAiCover}
            />
          }
        />

        {/* Project 5 — SubTracker */}
        <ProjectRow
          index={4}
          title={t("SubTracker — Manage All Your Subscriptions", "SubTracker — 订阅管理助手")}
          description={t(
            "All-in-one subscription management app that consolidates recurring payments — streaming, SaaS, memberships — into a single, clear dashboard. Tracks renewal dates, categorizes expenses, and surfaces unused subscriptions to help users cut hidden costs.\n\nFeatures smart renewal reminders, monthly and annual spend visualizations, and a calendar view of upcoming charges. Built to give users full visibility and control over their digital subscription footprint.",
            "一站式订阅管理应用，将流媒体、SaaS、会员等所有周期性付款整合到清晰的仪表板中。追踪续订日期、分类支出，并识别未使用的订阅，帮助用户削减隐形开支。\n\n具备智能续订提醒、月度与年度支出可视化，以及即将扣费的日历视图。让用户全面掌控数字订阅足迹。"
          )}
          media={
            <VideoPlayer
              src="/videos/subtracker-demo.mp4"
              poster={subtrackerCover}
            />
          }
        />

        {/* Project 6 — InterviewFlow */}
        <ProjectRow
          index={5}
          title={t("InterviewFlow — Customized Interview Assistant", "InterviewFlow — 定制化面试助手")}
          description={t(
            "AI-powered interview preparation assistant that personalizes mock interviews based on each candidate's target role, industry, and experience level. Generates tailored question sets, evaluates responses in real time, and delivers structured feedback on content, clarity, and delivery.\n\nFeatures resume-aware question generation, behavioral and technical interview modes, and progress tracking across sessions — helping candidates build confidence and refine their answers before the real interview.",
            "AI驱动的面试准备助手，根据候选人的目标职位、行业和经验水平定制模拟面试。生成个性化问题集，实时评估回答，并对内容、清晰度和表达方式提供结构化反馈。\n\n具备简历感知的问题生成、行为面试与技术面试模式，以及多轮会话进度追踪——帮助候选人在真实面试前建立信心并打磨答案。"
          )}
          media={
            <VideoPlayer
              src="/videos/interviewflow-demo.mp4"
              poster={interviewflowCover}
            />
          }
        />

        <div className="border-t border-border" />
      </div>
    </div>
  );
};

export default AIProductsPage;
