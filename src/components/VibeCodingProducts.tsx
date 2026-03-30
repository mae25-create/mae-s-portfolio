import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import nestedCover from "@/assets/nested-cover.jpg";

const Marquee = ({ text }: { text: string }) => (
  <div className="overflow-hidden py-3 bg-foreground">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["-50%", "0%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="font-heading text-xl md:text-2xl font-black uppercase tracking-wider mx-8"
          style={{ color: "#4300FF" }}
        >
          {text} •&nbsp;&nbsp;
        </span>
      ))}
    </motion.div>
  </div>
);

const vibeProducts = [
  {
    title: "NestEd — Breaking the Cycle",
    titleZh: "NestEd — 打破贫困循环",
    description: "AI-powered mobile app empowering low-income parents in Brazil with parenting, financial literacy, and career skills.",
    descriptionZh: "AI驱动的移动应用，为巴西低收入家庭父母提供育儿、金融素养和职业技能支持。",
    tags: ["FLUTTERFLOW", "FIREBASE", "AI/ML"],
    image: nestedCover,
    to: "/projects/ai-products/nested",
  },
  {
    title: "Avanti",
    titleZh: "Avanti",
    description: "AI-powered content creation assistant that helps creators produce high-quality multilingual content at scale.",
    descriptionZh: "AI驱动的内容创作助手，帮助创作者高效生产多语言优质内容。",
    tags: ["REACT", "TYPESCRIPT", "CLAUDE API", "SUPABASE"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Mae Studio",
    titleZh: "Mae Studio",
    description: "AI-powered personal portfolio platform built with modern web technologies. Dynamic content generation and bilingual support.",
    descriptionZh: "AI驱动的个人作品集平台，支持动态内容生成和双语切换。",
    tags: ["REACT", "FRAMER MOTION", "TAILWIND"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    title: "Smart Resume Parser",
    titleZh: "智能简历解析器",
    description: "NLP-based tool that extracts structured data from resumes in multiple formats with 95%+ accuracy.",
    descriptionZh: "基于NLP的工具，从多种格式简历中提取结构化数据，准确率95%+。",
    tags: ["PYTHON", "GPT-4", "FASTAPI", "SPACY"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
  },
  {
    title: "Market Pulse",
    titleZh: "市场脉搏",
    description: "Real-time market intelligence dashboard aggregating news, social sentiment, and financial data.",
    descriptionZh: "实时市场情报看板，聚合新闻、社交舆情和财务数据。",
    tags: ["PYTHON", "REACT", "OPENAI", "POSTGRESQL"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
  {
    title: "Cross-Cultural AI Chatbot",
    titleZh: "跨文化AI聊天机器人",
    description: "Bilingual conversational AI for cross-border business communication with cultural context awareness.",
    descriptionZh: "面向跨境商务沟通的双语AI助手，具备文化语境感知和实时翻译功能。",
    tags: ["CLAUDE API", "REACT", "WEBSOCKET"],
    image: "https://images.unsplash.com/photo-1531746790095-e5888436e48f?w=800&q=80",
  },
];

const VibeCodingProducts = () => {
  const { t } = useLanguage();

  return (
    <section id="vibe-coding" className="py-0">
      {/* Marquee Banner */}
      <Marquee
        text={t(
          "SKETCHES • PROTOTYPES • VIBE CODING • PRODUCTS",
          "草图 • 原型 • VIBE CODING • 产品"
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
            {t("AI Products", "AI 产品")}
          </h2>
          <p className="text-muted-foreground max-w-lg">
            {t(
              "A collection of rapid prototypes, vibe coding products, and visual experiments.",
              "一系列快速原型、vibe coding 产品和视觉实验。"
            )}
          </p>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vibeProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3 border border-border hover:border-primary/30 transition-all duration-300">
                <img
                  src={product.image}
                  alt={t(product.title, product.titleZh)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                {t(product.title, product.titleZh)}
              </h3>
              <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                {t(product.description, product.descriptionZh)}
              </p>
              {product.to && (
                <Link to={product.to} className="text-xs font-medium text-primary hover:underline mt-2 inline-block">
                  {t("View Details →", "查看详情 →")}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeCodingProducts;
