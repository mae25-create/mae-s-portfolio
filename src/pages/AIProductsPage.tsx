import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import nestedCover from "@/assets/nested-cover.jpg";

const aiProducts = [
  {
    title: "NestEd — Breaking the Cycle",
    description: "AI-powered mobile app empowering low-income parents in Brazil with parenting skills, financial literacy, nutrition, and career development. Built with FlutterFlow and Firebase.",
    titleZh: "NestEd — 打破贫困循环",
    descriptionZh: "AI驱动的移动应用，为巴西低收入家庭父母提供育儿、金融素养、营养和职业发展支持。使用FlutterFlow和Firebase构建。",
    tech: ["FlutterFlow", "Firebase", "AI/ML", "Social Impact"],
    image: nestedCover,
    link: "/projects/ai-products/nested",
    hasDemo: true,
  },
  {
    title: "Avanti",
    description: "AI-powered content creation assistant that helps creators produce high-quality multilingual content at scale. Features smart templates and audience analytics.",
    titleZh: "Avanti",
    descriptionZh: "AI驱动的内容创作助手，帮助创作者高效生产多语言优质内容。支持智能模板和受众分析。",
    tech: ["React", "TypeScript", "Claude API", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    hasDemo: true,
  },
  {
    title: "Mae Studio",
    description: "AI-powered personal portfolio platform built with modern web technologies. Dynamic content generation, bilingual support, and responsive design.",
    titleZh: "Mae Studio",
    descriptionZh: "AI驱动的个人作品集平台，支持动态内容生成、双语切换和响应式设计。",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    hasDemo: true,
  },
  {
    title: "Smart Resume Parser",
    description: "NLP-based tool that extracts structured data from resumes in multiple formats. Supports both English and Chinese documents with 95%+ accuracy.",
    titleZh: "智能简历解析器",
    descriptionZh: "基于NLP的工具，从多种格式的简历中提取结构化数据。支持中英文文档，准确率95%+。",
    tech: ["Python", "GPT-4", "FastAPI", "spaCy"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    hasDemo: false,
  },
  {
    title: "Market Pulse",
    description: "Real-time market intelligence dashboard that aggregates news, social sentiment, and financial data for investment decision-making.",
    titleZh: "市场脉搏",
    descriptionZh: "实时市场情报看板，聚合新闻、社交舆情和财务数据，辅助投资决策。",
    tech: ["Python", "React", "OpenAI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    hasDemo: false,
  },
  {
    title: "Cross-Cultural AI Chatbot",
    description: "Bilingual conversational AI assistant designed for cross-border business communication, with cultural context awareness and real-time translation.",
    titleZh: "跨文化AI聊天机器人",
    descriptionZh: "面向跨境商务沟通的双语AI助手，具备文化语境感知和实时翻译功能。",
    tech: ["Claude API", "React", "Node.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1531746790095-e5888436e48f?w=600&q=80",
    hasDemo: true,
  },
];

const AIProductsPage = () => {
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
            {t("AI Products", "AI 产品")}
          </h1>
          <p className="text-muted-foreground max-w-lg">
            {t(
              "AI-powered products I've built to solve real-world problems across content creation, market intelligence, and cross-cultural communication.",
              "我构建的AI产品，解决内容创作、市场情报和跨文化沟通中的实际问题。"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.title, product.titleZh)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {t(product.title, product.titleZh)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t(product.description, product.descriptionZh)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {product.link ? (
                    <Link to={product.link} className="text-sm font-medium text-primary hover:underline">
                      {t("View Details →", "查看详情 →")}
                    </Link>
                  ) : product.hasDemo ? (
                    <button className="text-sm font-medium text-primary hover:underline">
                      {t("View Demo", "查看演示")}
                    </button>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">
                      {t("Coming Soon", "即将推出")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIProductsPage;
