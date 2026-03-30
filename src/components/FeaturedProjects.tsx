import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("Data Analysis Projects", "数据分析项目"),
      to: "/projects/data-analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: t("AI Products", "AI 产品"),
      to: "/projects/ai-products",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  return (
    <section id="featured-projects" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t("Featured Projects", "精选项目")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              "Explore my work across data analysis and AI product development",
              "探索我在数据分析和AI产品开发方面的作品"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                to={card.to}
                className="group block relative h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white text-center px-6">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
