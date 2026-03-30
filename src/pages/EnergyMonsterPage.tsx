import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, CreditCard, TrendingUp, Users, MapPin, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import coverImg from "@/assets/energy-monster-cover.png";
import overviewImg from "@/assets/energy-monster-overview.jpg";
import chinaFactorsImg from "@/assets/energy-monster-china-factors.jpg";
import tamDemandImg from "@/assets/energy-monster-tam-demand.jpg";
import tamSupplyImg from "@/assets/energy-monster-tam-supply.jpg";
import competitorsImg from "@/assets/energy-monster-competitors.jpg";
import conclusionImg from "@/assets/energy-monster-conclusion.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const EnergyMonsterPage = () => {
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
          {t("Back to Data Analysis", "返回数据分析")}
        </Link>

        {/* Hero */}
        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {t(
                "GTM Strategy: Power Bank Sharing Market in Japan",
                "市场进入策略：日本共享充电宝市场"
              )}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                "A go-to-market analysis exploring Energy Monster's expansion from China to Japan — examining why the power bank sharing model that thrived in China failed to replicate overseas.",
                "深入分析怪兽充电从中国拓展至日本的市场进入策略——探讨为何在中国成功的共享充电宝模式未能在海外复制。"
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Market Analysis", "TAM Estimation", "GTM Strategy", "Competitive Analysis"].map(
                (tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={coverImg} alt="Energy Monster" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Company Overview */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Company Overview & Background", "公司概况与背景")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold mb-3">{t("Energy Monster", "怪兽充电")}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("Founded May 2017 in China", "2017年5月成立于中国")}</li>
                  <li>• {t("IPO on NASDAQ (\"EM\") in April 2021 — raised $150M", "2021年4月纳斯达克IPO（代码\"EM\"）— 融资1.5亿美元")}</li>
                  <li>• {t("Revenue peaked at ¥3.585B in 2020", "2020年营收峰值35.85亿元")}</li>
                  <li>• {t("Expanded to Japan in 2020 as target market", "2020年将日本作为目标市场进行扩张")}</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold mb-3 text-destructive">
                  {t("Result", "结果")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "The company could not replicate the success it saw in China and eventually withdrew from the Japanese market. This analysis examines four key factors behind the failure.",
                    "公司未能复制在中国的成功，最终退出日本市场。本分析从四个关键因素剖析失败原因。"
                  )}
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={overviewImg} alt="Overview" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Four Success Factors in China */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Four Success Factors in China", "中国市场四大成功因素")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                icon: Smartphone,
                title: t("High Smartphone Penetration", "高智能手机渗透率"),
                desc: t("68% penetration = 1B users, 5hrs+ daily mobile use per person", "68%渗透率=10亿用户，人均每日使用手机5小时+"),
              },
              {
                icon: CreditCard,
                title: t("Mobile Payment Ecosystem", "移动支付生态"),
                desc: t("36% of offline transactions via mobile payment; WeChat Pay & Alipay dominant", "36%线下交易通过移动支付；微信支付和支付宝主导"),
              },
              {
                icon: Users,
                title: t("Super App Integration", "超级应用集成"),
                desc: t("WeChat & Alipay mini programs enable seamless power bank rental with zero friction", "微信和支付宝小程序实现无缝充电宝租赁"),
              },
              {
                icon: TrendingUp,
                title: t("Online Credit System", "在线信用体系"),
                desc: t("Zhima Credit & WeChat Credit Score improved conversion rate by 50%", "芝麻信用和微信信用分提升转化率50%"),
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6">
                <Icon size={24} className="text-primary mb-3" />
                <h3 className="font-heading font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={chinaFactorsImg} alt="China Success Factors" className="w-full object-contain bg-muted" />
          </div>
        </motion.div>

        {/* Japan Market Challenges */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Japan Market Challenges", "日本市场挑战")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: t("Lower Smartphone Usage", "较低的智能手机使用率"),
                desc: t("59% penetration (ranked #21 globally), only 2.4 hrs daily mobile app usage vs China's 5hrs+", "59%渗透率（全球第21），日均移动应用使用仅2.4小时，远低于中国的5小时+"),
              },
              {
                title: t("Mobile Payment Not at Tipping Point", "移动支付未达临界点"),
                desc: t("~3% of offline payment, fragmented across PayPay, LINE Pay, Rakuten Pay, and Origami Pay", "仅约3%的线下支付，分散在PayPay、LINE Pay、乐天支付和Origami Pay"),
              },
              {
                title: t("Credit System Under Development", "信用体系发展中"),
                desc: t("J. Score (Mizuho + Softbank) launched AI credit ratings in Oct 2019, but ecosystem is nascent", "J. Score（瑞穗+软银）2019年10月推出AI信用评分，但生态系统尚处萌芽"),
              },
              {
                title: t("Cultural Barriers", "文化障碍"),
                desc: t("Only 37% feel safe sharing payment info; aging population prefers ownership over sharing; power banks are inexpensive", "仅37%的人信任APP保存支付信息；老龄化人口偏好拥有而非共享；充电宝本身不贵"),
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TAM Estimation */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("TAM Estimation", "总可寻址市场估算")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-semibold mb-4">
                {t("Consumer Demand Side", "消费者需求端")}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left font-medium">{t("Metric", "指标")}</th>
                      <th className="p-3 text-right font-medium">{t("Japan", "日本")}</th>
                      <th className="p-3 text-right font-medium">{t("China", "中国")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [t("Mobile Users", "移动用户"), "0.07B", "1.0B"],
                      [t("PB Sharing Penetration", "共享充电渗透率"), "25%", "31%"],
                      [t("Orders/User/Day", "每用户每日订单"), "0.07", "0.14"],
                      [t("GMV/Order", "每单GMV"), "$1.7", "$0.87"],
                      [t("Total Demand/Year", "年总需求"), "$0.77B", "$13.7B"],
                    ].map(([label, jp, cn]) => (
                      <tr key={label as string} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{label}</td>
                        <td className="p-3 text-right font-mono">{jp}</td>
                        <td className="p-3 text-right font-mono">{cn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">
                {t("Merchant Supply Side", "商户供给端")}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left font-medium">{t("Metric", "指标")}</th>
                      <th className="p-3 text-right font-medium">{t("Japan", "日本")}</th>
                      <th className="p-3 text-right font-medium">{t("China", "中国")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [t("POI Count", "POI数量"), "4.5M", "48M"],
                      [t("PB Penetration Rate", "充电宝渗透率"), "20%", "36%"],
                      [t("PB per POI", "每POI充电宝数"), "5", "6.4"],
                      [t("GMV/PB/Day", "每充电宝每日GMV"), "$0.5", "$0.34"],
                      [t("Total Supply/Year", "年总供给"), "$0.82B", "$13.7B"],
                    ].map(([label, jp, cn]) => (
                      <tr key={label as string} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{label}</td>
                        <td className="p-3 text-right font-mono">{jp}</td>
                        <td className="p-3 text-right font-mono">{cn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={tamDemandImg} alt="TAM Demand" className="w-full object-contain bg-muted" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img src={tamSupplyImg} alt="TAM Supply" className="w-full object-contain bg-muted" />
            </div>
          </div>
        </motion.div>

        {/* Competitive Landscape */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Competitive Landscape in Japan", "日本竞争格局")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-3">Mocha</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t("Founded 2018, ¥11M registered capital", "2018年成立，注册资本1100万日元")}</li>
                <li>• {t("Founders: Waseda University international students", "创始人：早稻田大学留学生")}</li>
                <li>• {t("~5,000 POI in Japan; 2,000 orders/day", "日本约5,000个POI；每日2,000订单")}</li>
                <li>• {t("30% cabinet utilization; 5% per-unit usage rate", "30%机柜利用率；5%单个充电宝使用率")}</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-3">ChargeSpot</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t("Guangzhou-based, covering Japan, Taiwan, HK, Thailand", "总部广州，覆盖日本、台湾、香港、泰国")}</li>
                <li>• {t("By end 2018: profit loss, only 0.6 daily uses per POI", "2018年底：亏损，每POI日均使用仅0.6次")}</li>
                <li>• {t("By April 2019: claimed 25K stores globally", "2019年4月：宣称全球25K门店")}</li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={competitorsImg} alt="Competitors" className="w-full object-contain bg-muted" />
          </div>
        </motion.div>

        {/* Conclusion & Recommendations */}
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            {t("Conclusion & Market Validation Suggestions", "结论与市场验证建议")}
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              {t(
                "Japan is a potential market, but it was still not ready for entry. The analysis identifies critical gaps in smartphone usage, mobile payment adoption, credit systems, and cultural acceptance.",
                "日本是一个潜在市场，但尚未做好进入准备。分析识别出智能手机使用、移动支付普及、信用体系和文化接受度方面的关键差距。"
              )}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: CreditCard,
                  text: t("Meet with online payment platforms (PayPay, LINE Pay, Rakuten Pay) to explore integration", "与在线支付平台（PayPay、LINE Pay、乐天支付）洽谈合作集成"),
                },
                {
                  icon: Users,
                  text: t("Meet with key chain customers to build trust in data security", "与大型连锁客户接洽以建立数据安全信任"),
                },
                {
                  icon: Target,
                  text: t("Partner with local giants (Rakuten, LINE) to boost credibility and market reach", "与本地巨头（乐天、LINE）合作提升可信度和市场覆盖"),
                },
                {
                  icon: MapPin,
                  text: t("Target high-traffic locations: urban centers, transport hubs, malls", "瞄准高客流地点：城市中心、交通枢纽、购物中心"),
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex gap-3 items-start">
                  <Icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={conclusionImg} alt="Conclusion" className="w-full object-contain bg-muted" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnergyMonsterPage;
