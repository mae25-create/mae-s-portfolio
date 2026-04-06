import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, BarChart3, Star, TrendingUp, Target, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";

import bestsellerRatioImg from "@/assets/retail-bestseller-ratio.png";
import starsSalesImg from "@/assets/retail-stars-sales-v2.png";
import revenuePerProductImg from "@/assets/retail-revenue-per-product.png";
import reviewsPerSaleImg from "@/assets/retail-reviews-per-sale.png";
import healthMarketImg from "@/assets/retail-health-market.png";
import premiumBestsellersImg from "@/assets/retail-premium-bestsellers.png";
import starProductsImg from "@/assets/retail-star-products.png";
import dashboardImg from "@/assets/retail-dashboard.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const RetailAnalysisPage = () => {
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
              <ShoppingCart size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {t("Market Research · 2025", "市场研究 · 2025")}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            {t(
              "Retail Product Market Report",
              "零售产品市场报告"
            )}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {t(
              "Data-driven insights for strategic decision-making. Comprehensive evaluation of 1.39M+ retail products across categories, analyzing sales performance, product quality, customer engagement, and market segmentation using BigQuery SQL and Python.",
              "数据驱动的战略决策洞察。对139万+零售产品进行全面评估，使用BigQuery SQL和Python分析销售表现、产品质量、客户参与度和市场细分。"
            )}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["BigQuery SQL", "Python", "Google Colab", "Vanna.AI", "Matplotlib"].map((tech) => (
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
                "This report delivers a comprehensive evaluation of a retail products dataset (1,393,564 rows, 12 columns) to support strategic decision-making in digital marketing and operations. It articulates eight key business insights, ranging from sales performance and product quality to customer engagement and market segmentation.",
                "本报告对零售产品数据集（1,393,564行，12列）进行全面评估，支持数字营销和运营的战略决策。报告阐述了八个关键商业洞察，涵盖销售表现、产品质量、客户参与度和市场细分。"
              )}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: t("Data Points", "数据量"), value: "1.39M+" },
                { label: t("Categories", "品类"), value: "100+" },
                { label: t("Insights", "洞察"), value: "8" },
                { label: t("Tools", "工具"), value: "SQL + Python" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-xl md:text-2xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Insight 1: Bestseller Ratio vs Sales */}
        <motion.section {...fadeUp(0.15)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Bestseller Ratio vs Total Monthly Sales", "畅销比率 vs 月度总销售额")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("High Bestseller ≠ High Volume", "高畅销率 ≠ 高销量")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Kitchen & Dining has the highest sales (~$11M) yet only a ~6% bestseller ratio. Its strength comes from many mid-selling SKUs rather than a handful of blockbusters.",
                  "厨房与餐饮销售额最高（约1100万美元），但畅销比率仅约6%。其优势来自大量中等销量的SKU，而非少数爆款。"
                )}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold mb-2">{t("Dual Champions", "双冠品类")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(
                  "Industrial & Scientific ranks high on both metrics (~9% & ~$7.1M). Health & Household also appears in both lists (~8% & ~$6M), deserving extra marketing focus.",
                  "工业与科学品类在两项指标上均排名靠前（约9%和710万美元）。健康与家居同样表现优异（约8%和600万美元），值得重点营销。"
                )}
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-4 pb-0">
              <h3 className="font-heading text-sm font-semibold">
                {t("Top 10 Categories by Bestseller Ratio vs Total Monthly Sales", "前10品类畅销比率 vs 月度总销售额")}
              </h3>
            </div>
            <img src={bestsellerRatioImg} alt="Bestseller Ratio Chart" className="w-full" />
          </div>
        </motion.section>

        {/* Insight 2: Stars vs Sales */}
        <motion.section {...fadeUp(0.2)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Star size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Average Stars vs Total Monthly Sales", "平均评分 vs 月度总销售额")}
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Health & Household and Industrial & Scientific boast ratings near 4.6 and strong sales — the sweet spot of 'high quality + high demand.' Kitchen & Dining is a sales leader (~$11M) with a solid ~4.55 rating; improving product features could boost long-term loyalty.",
                "健康与家居和工业与科学品类评分接近4.6且销售额强劲——'高品质+高需求'的甜蜜点。厨房与餐饮是销售领头羊（约1100万美元），评分约4.55；改善产品功能可提升长期忠诚度。"
              )}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <img src={starsSalesImg} alt="Stars vs Sales" className="w-full" />
          </div>
        </motion.section>

        {/* Insight 3: Revenue Per Product */}
        <motion.section {...fadeUp(0.25)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Average Monthly Revenue Per Product", "产品平均月收入")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={revenuePerProductImg} alt="Revenue Per Product" className="w-full" />
            </div>
            <div className="space-y-4">
              {[
                { cat: "Health & Household", val: "~$135K", desc: t("Dominates — a handful of high-price, high-turnover items drive outsized revenue.", "占据主导——少数高价高周转产品带来超额收入。") },
                { cat: "Smart Home: Vacuums", val: "~$70K", desc: t("High-value niche benefiting from elevated price points and repeat purchases.", "高价值细分市场，受益于高价格和重复购买。") },
                { cat: "Kitchen & Dining", val: "~$55K", desc: t("Steady mid-tier returns balancing volume and margin.", "稳定的中端回报，平衡了销量和利润。") },
              ].map((item) => (
                <div key={item.cat} className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-semibold text-sm">{item.cat}</span>
                    <span className="text-primary font-bold text-sm">{item.val}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Insight 4: Reviews Per Sale */}
        <motion.section {...fadeUp(0.3)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Customer Engagement: Reviews Per Sale", "客户参与度：每笔销售评论数")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img src={reviewsPerSaleImg} alt="Reviews Per Sale" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="space-y-4">
                {[
                  { cat: "Smart Home: Voice Assistants", val: "26", desc: t("Buyers highly motivated to share feedback — ideal for social-proof campaigns.", "买家高度倾向分享反馈——社会证明营销的理想选择。") },
                  { cat: "PlayStation 4 Games", val: "19.5", desc: t("Passionate fan bases present community-driven promotion opportunities.", "热情的粉丝群体带来社区驱动的推广机会。") },
                  { cat: "Women's Watches", val: "17.9", desc: t("Personal expression and gifting drive high review rates.", "个人表达和送礼驱动高评论率。") },
                ].map((item) => (
                  <div key={item.cat} className="border-l-2 border-primary/30 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading font-semibold text-sm">{item.cat}</span>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-bold">{item.val}</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Deep Dives */}
        <motion.section {...fadeUp(0.35)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Category Deep Dives", "品类深度分析")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Health & Household: Top 10 by Revenue & Market Share", "健康与家居：收入和市占率前10")}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  {t("Highly fragmented — top 10 cover only ~11.2% of category revenue", "高度碎片化——前10仅覆盖品类收入的约11.2%")}
                </p>
              </div>
              <img src={healthMarketImg} alt="Health Market Share" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Premium Bestsellers (>$100) in Industrial & Scientific", "工业与科学品类中的高端畅销品（>$100）")}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  {t("Consumer 'sweet spot' at $140–$170 price range", "消费者'甜蜜点'在$140-$170价格区间")}
                </p>
              </div>
              <img src={premiumBestsellersImg} alt="Premium Bestsellers" className="w-full" />
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden md:col-span-2">
              <div className="p-4 pb-0">
                <h3 className="font-heading text-sm font-semibold">
                  {t("Underestimated High-Engagement Products (Non-Bestsellers)", "被低估的高参与度产品（非畅销品）")}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  {t("Products with >4.5 stars, >200 reviews/sale but not flagged as bestsellers", "评分>4.5、每笔销售评论>200但未标记为畅销品的产品")}
                </p>
              </div>
              <img src={starProductsImg} alt="Star Products" className="w-full" />
            </div>
          </div>
        </motion.section>

        {/* Recommendations */}
        <motion.section {...fadeUp(0.4)} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb size={22} className="text-primary" />
            <h2 className="font-heading text-2xl font-semibold">
              {t("Strategic Recommendations", "战略建议")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t("Deepen Engagement in Dual Champions", "深化双冠品类参与度"),
                desc: t("Roll out subscription-style refill bundles for Industrial & Scientific and Health & Household with a tiered loyalty program.", "为工业与科学和健康与家居品类推出订阅式补充装捆绑和分级忠诚度计划。"),
              },
              {
                title: t("Elevate Kitchen & Dining Premium Line", "提升厨房与餐饮高端线"),
                desc: t("Introduce a 'Signature Collection' with upgraded materials and packaging, targeting top 10% spenders via email campaigns.", "推出'签名系列'，升级材料和包装，通过邮件营销定向前10%消费者。"),
              },
              {
                title: t("Bundle Niche Bestsellers", "捆绑细分畅销品"),
                desc: t("Create thematic kits like 'DIY Starter Pack' for Tools & Home Improvement, combining blockbusters with mid-tail SKUs.", "为工具与家装品类创建'DIY入门套装'等主题套件，将爆款与中尾SKU结合。"),
              },
              {
                title: t("Subscription Programs for High-Engagement SKUs", "高参与度SKU订阅计划"),
                desc: t("Convert top reviews-per-sale items into auto-ship subscriptions at a slight premium to capture repeat-use demand.", "将评论/销售比最高的产品转化为自动配送订阅，以微溢价捕获重复使用需求。"),
              },
              {
                title: t("Optimize Listings with Mid-Length Titles", "优化中等长度标题列表"),
                desc: t("Standardize titles to 150–180 characters for ≥4.8-star SKUs and feature user-generated content in imagery.", "将4.8星以上SKU的标题标准化为150-180个字符，并在图片中展示用户生成内容。"),
              },
              {
                title: t("Accessory & Service Upsells", "配件和服务追加销售"),
                desc: t("Bundle premium flagships with accessory packages or extended warranties at checkout, targeting 15–20% attach rate.", "在结账时将高端旗舰产品与配件包或延长保修捆绑，目标附加率15-20%。"),
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-xs">{i + 1}</span>
                  <h3 className="font-heading font-semibold text-sm">{title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Dashboard */}
        <motion.section {...fadeUp(0.45)} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Dashboard Overview", "仪表板概览")}
          </h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <img src={dashboardImg} alt="Retail Dashboard" className="w-full" />
          </div>
        </motion.section>

        {/* Back */}
        <motion.div {...fadeUp(0.5)} className="text-center">
          <Link
            to="/projects/data-analysis"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            {t("Back to Data Analysis Projects", "返回数据分析项目")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RetailAnalysisPage;
