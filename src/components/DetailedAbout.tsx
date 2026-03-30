import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const filmPhotos = [
  "/1749c2b4-6fda-42ec-a7c5-ea335af09c28.jpg",
  "/4880bb82-4e87-426a-ab79-bab6b4ea4504.jpg",
  "/f6af3d19-4c0e-4b16-ad0f-1a887013517d.png",
  "/a91b7e83-5d7f-404e-9a0f-587711142c7d.png",
  "/b28dc0af-6c4a-4fd1-83bf-8f3bf8fdeaa1.png",
  "/1749c2b4-6fda-42ec-a7c5-ea335af09c28.jpg",
];

const FilmPerforation = () => (
  <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: "#1A1A1A" }} />
);

const FilmBorder = ({ photoCount }: { photoCount: number }) => {
  const perforationCount = Math.max(20, photoCount * 5);
  return (
    <div
      className="absolute top-0 bottom-0 w-[12px] flex flex-col items-center justify-between py-3 z-10"
      style={{ backgroundColor: "#111" }}
    >
      {Array.from({ length: perforationCount }).map((_, i) => (
        <FilmPerforation key={i} />
      ))}
    </div>
  );
};

const DetailedAbout = () => {
  const { t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const funFacts = [
    t("🐕 Corgi parent to a 3-year-old troublemaker", "🐕 三岁柯基的铲屎官"),
    t("📲 Runs a Xiaohongshu channel teaching AI tools in Chinese", "📲 运营小红书频道，用中文教AI工具"),
    t("☕ Coffee snob — currently rotating between Sightglass, Andytown, and home espresso", "☕ 咖啡控——目前轮换Sightglass、Andytown和家用意式"),
    t("🥾 Weekend warrior hiking Bay Area trails", "🥾 周末湾区徒步爱好者"),
    t("🍜 Food-first travel planner — museums second, local eats first", "🍜 美食优先的旅行者——博物馆其次，当地美食第一"),
    t("🎨 I enjoy listening to heavy metal while painting and working with pottery", "🎨 喜欢一边听重金属音乐一边画画和做陶艺"),
  ];

  const visiblePhotos = filmPhotos;

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

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
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
                "Growing up in one of China's first provinces to embrace economic reform, I watched international trade and technology reshape everything around me. That early exposure sparked a question I'm still exploring: how do products cross borders and cultures?",
                "在中国最早拥抱经济改革的省份长大，我亲眼目睹了国际贸易和科技如何重塑周围的一切。那段早期经历引发了一个我至今仍在探索的问题：产品如何跨越国界和文化？"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "After graduating from Nanjing University, I co-founded Brive Consulting to help Chinese SMEs expand globally while pursuing my Master's at Johns Hopkins SAIS. We worked with 70+ clients on market entry and localization—building partner networks, running cross-border roadshows, pivoting to digital engagement during COVID.",
                "从南京大学毕业后，我在约翰霍普金斯大学SAIS攻读硕士期间联合创立了Brive Consulting，帮助中国中小企业走向全球。我们与70多家客户合作，涵盖市场进入和本地化——建立合作伙伴网络、举办跨境路演，并在疫情期间转向数字化运营。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "But I kept seeing the same gap: I could analyze markets, identify opportunities, and write the strategy decks. I just couldn't build the solutions myself. That realization led me to Shanghai Jinshan Capital, where I operated fund-of-funds and conducted due diligence on AI startups. I built data dashboards, extracted insights from messy datasets, and presented findings to investors making multi-million-dollar decisions. The work taught me to see patterns—but also reinforced what I was missing: the ability to ship.",
                "但我不断看到同一个差距：我能分析市场、发现机会、撰写战略方案，却无法亲手构建解决方案。这个认知促使我加入上海金山资本，运营母基金并对AI初创企业进行尽职调查。我搭建数据看板，从杂乱的数据集中提取洞察，向做出数百万美元决策的投资人呈现分析结果。这份工作教会我识别模式——但也强化了我所欠缺的：将想法落地的能力。"
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Today, I build at the intersection of data and product. I believe the best solutions come from understanding both the numbers and the humans behind them.",
                "如今，我在数据与产品的交叉领域深耕。我相信最好的解决方案来自于同时理解数字和数字背后的人。"
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

          {/* Right: Film Strip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div
              className="relative w-full rounded-sm overflow-hidden"
              style={{ backgroundColor: "#2A2A2A", padding: "16px 0" }}
            >
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />

              {/* Top gradient fade */}
              <div
                className="absolute top-0 left-0 right-0 h-8 z-20 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, #2A2A2A, transparent)" }}
              />
              {/* Bottom gradient fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-8 z-20 pointer-events-none"
                style={{ background: "linear-gradient(to top, #2A2A2A, transparent)" }}
              />

              {/* Left film border */}
              <div className="absolute left-0 top-0 bottom-0">
                <FilmBorder photoCount={visiblePhotos.length} />
              </div>
              {/* Right film border */}
              <div className="absolute right-0 top-0 bottom-0">
                <FilmBorder photoCount={visiblePhotos.length} />
              </div>

              {/* Photo frames */}
              <div className="flex flex-col gap-[6px] px-[16px] relative z-[5]">
                {visiblePhotos.map((src, i) => (
                  <div
                    key={i}
                    className="relative cursor-pointer"
                    style={{
                      border: "2px solid #1A1A1A",
                      transform: activePhoto === i ? "scale(1.1)" : "scale(1)",
                      zIndex: activePhoto === i ? 10 : 1,
                      boxShadow: activePhoto === i ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
                      filter: activePhoto === i ? "brightness(1.1)" : "brightness(1)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={() => setActivePhoto(i)}
                    onMouseLeave={() => setActivePhoto(null)}
                    onClick={() => setActivePhoto(activePhoto === i ? null : i)}
                  >
                    <div className="w-full aspect-[3/2] overflow-hidden">
                      <img
                        src={src}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Frame number */}
                    <span
                      className="absolute bottom-2 right-2 select-none"
                      style={{
                        fontFamily: "'Courier New', Courier, monospace",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}A
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3 font-mono">
              {t("Nice to meet you!", "很高兴认识你！")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAbout;
