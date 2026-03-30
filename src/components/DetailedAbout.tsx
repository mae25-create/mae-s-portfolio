import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const placeholderPhotos = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
];

// Each frame gets a slight random rotation and offset for an organic feel
const frameTransforms = [
  { rotate: -2, x: 4, y: 0 },
  { rotate: 1.5, x: -6, y: 2 },
  { rotate: -1, x: 2, y: -3 },
  { rotate: 2.5, x: -3, y: 4 },
  { rotate: -1.8, x: 5, y: -2 },
];

const DetailedAbout = () => {
  const { t } = useLanguage();

  const funFacts = [
    t("Born and raised in Shanghai, now based in San Francisco", "在上海出生长大，现居旧金山"),
    t("Speaks Mandarin, English, and basic Japanese", "会说中文、英语和基础日语"),
    t("Built 5+ AI products in the last year using Claude and GPT", "去年用Claude和GPT构建了5+个AI产品"),
    t("Avid coffee enthusiast — always exploring new roasters", "咖啡爱好者——总在探索新的烘焙店"),
    t("Loves hiking in the Bay Area on weekends", "周末喜欢在湾区徒步"),
    t("Former debate team captain in college", "大学时期的辩论队队长"),
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            {t("About", "关于我")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          {/* Left: Text + Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Growing up in Shanghai gave me a front-row seat to China's tech revolution. After earning my degree at Nanjing University, I moved to the U.S. to pursue graduate studies at Johns Hopkins SAIS and later an MBA at Hult International Business School.",
                "在上海长大让我亲眼见证了中国的科技革命。在南京大学获得学位后，我来到美国，在约翰霍普金斯SAIS攻读研究生，之后在Hult国际商学院攻读MBA。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "My career started in investment banking at CICC, where I worked on IPO and M&A deals worth over $500M. This gave me a deep understanding of financial modeling and market dynamics. I then moved into venture capital at Kingsoft Capital, part of the Xiaomi ecosystem, where I built data dashboards and conducted due diligence on AI startups.",
                "我的职业生涯始于中金公司的投资银行部门，参与了总额超过5亿美元的IPO和并购交易。这让我深入理解了财务建模和市场动态。之后我进入小米生态链旗下的金山资本从事风险投资，搭建数据看板并对AI初创企业进行尽职调查。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Today, I'm focused on the intersection of data analysis and AI product development. I'm building Avanti, an AI-powered tool for content creators, while creating educational content about AI and data analytics. I believe the best products come from understanding both the numbers and the humans behind them.",
                "如今，我专注于数据分析和AI产品开发的交叉领域。我正在构建Avanti——一个面向内容创作者的AI工具，同时也在创作关于AI和数据分析的教育内容。我相信最好的产品来自于对数据和用户的双重理解。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "What sets me apart is my ability to bridge East and West — culturally, linguistically, and professionally. Whether I'm analyzing a dataset in Python or pitching to stakeholders in Mandarin, I bring the same rigor and curiosity to everything I do.",
                "我的独特之处在于能够连接东西方——无论是文化、语言还是专业领域。无论是用Python分析数据集还是用中文向利益相关者汇报，我始终保持同样的严谨和好奇心。"
              )}
            </p>

            {/* Fun Facts */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-heading text-lg font-semibold mb-4">
                {t("Fun Facts", "有趣的事")}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {funFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">✦</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Film strip photos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative">
              {/* Film strip spine — vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border z-0" />

              {/* Sprocket holes along the strip */}
              <div className="absolute left-1/2 -translate-x-[22px] top-0 bottom-0 w-[6px] z-[1] flex flex-col justify-between py-2">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={`l-${i}`} className="w-[6px] h-[6px] rounded-[1px] bg-border" />
                ))}
              </div>
              <div className="absolute left-1/2 translate-x-[16px] top-0 bottom-0 w-[6px] z-[1] flex flex-col justify-between py-2">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={`r-${i}`} className="w-[6px] h-[6px] rounded-[1px] bg-border" />
                ))}
              </div>

              {/* Photos stacked vertically with irregular rotations */}
              <div className="relative z-[2] flex flex-col items-center gap-3 py-4">
                {placeholderPhotos.map((src, i) => {
                  const t = frameTransforms[i];
                  return (
                    <motion.div
                      key={i}
                      className="relative group"
                      style={{
                        rotate: `${t.rotate}deg`,
                        x: t.x,
                        y: t.y,
                      }}
                      whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Polaroid-style frame */}
                      <div className="bg-card border border-border rounded-sm p-[5px] pb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                        <div className="w-[160px] h-[110px] md:w-[180px] md:h-[120px] overflow-hidden rounded-[2px]">
                          <img
                            src={src}
                            alt={`Photo ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        {/* Film frame number */}
                        <span className="absolute bottom-1.5 right-2.5 text-[9px] font-mono text-muted-foreground/50">
                          {String(i + 1).padStart(2, "0")}A
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3 font-mono">
              🎬 {t("Life in frames", "胶片里的生活")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAbout;
