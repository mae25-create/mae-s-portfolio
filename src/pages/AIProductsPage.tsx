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
                   loading="lazy"
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
