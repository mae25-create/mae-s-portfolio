import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  CreditCard,
  Gauge,
  MapPin,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  Target,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import coverImg from "@/assets/energy-monster-cover.png";
import overviewImg from "@/assets/energy-monster-overview.jpg";
import chinaFactorsImg from "@/assets/energy-monster-china-factors.jpg";
import tamDemandImg from "@/assets/energy-monster-tam-demand.jpg";
import tamSupplyImg from "@/assets/energy-monster-tam-supply.jpg";
import competitorsImg from "@/assets/energy-monster-competitors.jpg";
import conclusionImg from "@/assets/energy-monster-conclusion.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, delay },
});

const EnergyMonsterPage = () => {
  const { t } = useLanguage();

  const chinaSuccessFactors = [
    {
      icon: Smartphone,
      title: t("Smartphone scale", "智能手机规模"),
      value: "68% / 1B",
      desc: t(
        "China had roughly one billion smartphone users and mobile usage exceeded five hours per person per day.",
        "中国智能手机用户约10亿，人均每日手机使用时长超过5小时。"
      ),
    },
    {
      icon: CreditCard,
      title: t("Mobile payment habit", "移动支付习惯"),
      value: "36%",
      desc: t(
        "Mobile payment already contributed 36% of offline transactions, far above the global level of under 5%.",
        "移动支付已贡献36%的线下交易，远高于全球低于5%的水平。"
      ),
    },
    {
      icon: Rocket,
      title: t("Super-app distribution", "超级应用分发"),
      value: t("Free integration", "免费接入"),
      desc: t(
        "WeChat Pay and Alipay mini programs made rental entry points nearly frictionless for both users and merchants.",
        "微信支付和支付宝小程序让用户与商户的租借入口几乎无摩擦。"
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Credit infrastructure", "信用基础设施"),
      value: "+50%",
      desc: t(
        "Zhima Credit and WeChat Credit Score improved conversion by enabling deposit-free rental flows.",
        "芝麻信用与微信信用分通过免押金流程将转化率提升约50%。"
      ),
    },
  ];

  const japanReadiness = [
    {
      title: t("Smartphone penetration", "智能手机渗透率"),
      metric: "59%",
      context: t("No.21 globally; about 73.75M smartphones in a 125M population.", "全球第21；1.25亿人口中约7375万台智能手机。"),
    },
    {
      title: t("Daily mobile-app time", "每日移动应用时长"),
      metric: "2.4h",
      context: t("Usage was growing, but not with the acceleration seen in China.", "使用时长在增长，但没有出现中国市场的高速跃迁。"),
    },
    {
      title: t("Offline mobile payment", "线下移动支付"),
      metric: "~3%",
      context: t("PayPay, LINE Pay, Rakuten Pay and Origami Pay remained fragmented and below tipping point.", "PayPay、LINE Pay、Rakuten Pay 与 Origami Pay 仍然分散，尚未到达临界点。"),
    },
    {
      title: t("Payment-data trust", "支付数据信任"),
      metric: "37%",
      context: t("Only 37% of consumers felt safe letting an app keep payment information.", "仅37%的消费者认为APP保存支付信息是安全的。"),
    },
  ];

  const tamRows = [
    [t("Mobile users / POI", "移动用户 / POI"), "0.07B", "4.5M", "1.0B / 48M"],
    [t("Penetration", "渗透率"), "25%", "20%", "31% / 36%"],
    [t("Usage intensity", "使用强度"), "0.07 orders/user/day", "5 PB per POI", "0.14 orders/user/day"],
    [t("Unit GMV", "单元GMV"), "$1.70/order", "$0.50/PB/day", "$0.87/order"],
    [t("Annual market", "年市场规模"), "$0.77B", "$0.82B", "$13.7B"],
  ];

  const competitors = [
    {
      name: "Mocha",
      detail: t(
        "Founded in 2018 by Waseda University international students; about 5,000 POI, 2,000 daily orders, 30% cabinet utilization and 5% per-unit usage.",
        "2018年由早稻田大学留学生创立；约5,000个POI、每日2,000单、机柜利用率30%、单个充电宝使用率5%。"
      ),
    },
    {
      name: "ChargeSpot",
      detail: t(
        "Guangzhou-based and covering Japan, Taiwan, Hong Kong and Thailand; average daily use per POI was only 0.6 by end-2018, while the company later claimed 25K global stores.",
        "总部广州，覆盖日本、台湾、香港和泰国；2018年底每POI日均使用仅0.6次，后宣称全球25K门店。"
      ),
    },
  ];

  const recommendations = [
    {
      icon: CreditCard,
      text: t("Validate integrations with PayPay, LINE Pay and Rakuten Pay before scaling hardware deployment.", "先验证与PayPay、LINE Pay和Rakuten Pay的集成，再扩大硬件投放。"),
    },
    {
      icon: Store,
      text: t("Meet major chain customers early to address payment-data security and operational trust concerns.", "尽早接触大型连锁客户，解决支付数据安全与运营信任问题。"),
    },
    {
      icon: Building2,
      text: t("Partner with local giants such as Rakuten or LINE to borrow credibility and acquire users faster.", "与Rakuten或LINE等本地巨头合作，借助品牌可信度并加速获客。"),
    },
    {
      icon: MapPin,
      text: t("Prioritize dense, high-frequency locations: urban centers, transit hubs, malls and entertainment venues.", "优先布局高密度高频场景：城市中心、交通枢纽、商场与娱乐场所。"),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-content mx-auto px-6 pt-28 pb-20">
        <Link
          to="/projects/data-analysis"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t("Back to Data Analysis", "返回数据分析")}
        </Link>

        <motion.section {...fadeUp()} className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground">
              <BadgeDollarSign size={14} className="text-primary" />
              {t("Business experiment · Japan market entry", "商业实验 · 日本市场进入")}
            </div>
            <div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-5">
                {t("GTM Strategy: Power Bank Sharing Market in Japan", "市场进入策略：日本共享充电宝市场")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t(
                  "Energy Monster had proven product-market fit in China, but Japan exposed a different question: was the ecosystem ready for shared power banks, or only potentially attractive on paper?",
                  "怪兽充电已在中国验证产品市场契合，但日本市场提出了不同问题：生态是否真正准备好共享充电宝，还是只在纸面上具备潜力？"
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                [t("Founded", "成立"), "2017"],
                [t("NASDAQ IPO", "纳斯达克IPO"), "2021"],
                [t("Capital raised", "融资额"), "$150M"],
                [t("Japan entry", "进入日本"), "2020"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className="font-heading text-2xl font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <img src={coverImg} alt="Energy Monster power bank sharing market entry" className="h-full w-full object-cover" />
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16 rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-primary mb-3">{t("Executive Summary", "执行摘要")}</p>
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t("A strong China playbook met a market that was still warming up.", "成熟的中国打法，遇到了仍在预热的日本市场。")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "The Japan opportunity was real, with consumer demand estimated at $0.77B and merchant-side potential at $0.82B per year. The entry risk came from readiness gaps: average smartphone usage, low mobile-payment penetration, immature credit scoring, and conservative rental culture.",
                  "日本机会真实存在：消费者侧年需求约7.7亿美元，商户侧年潜力约8.2亿美元。但进入风险来自准备度缺口：智能手机使用强度一般、移动支付渗透低、信用评分体系未成熟，以及偏保守的租赁文化。"
                )}
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                [t("Consumer TAM", "消费者TAM"), "$0.77B", t("per year", "每年")],
                [t("Merchant TAM", "商户TAM"), "$0.82B", t("per year", "每年")],
                [t("Conclusion", "结论"), t("Validate first", "先验证"), t("before scaling", "再扩张")],
              ].map(([label, value, note]) => (
                <div key={label} className="rounded-lg bg-muted p-5">
                  <p className="text-xs text-muted-foreground mb-2">{label}</p>
                  <p className="font-heading text-2xl font-bold mb-1">{value}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t("Why the model worked in China", "为什么中国市场能够跑通")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "Energy Monster’s China growth was not only a hardware story. It sat on four reinforcing infrastructures: heavy smartphone use, habitual mobile payment, super-app entry points, and credit systems that made deposit-free rental credible.",
                  "怪兽充电在中国的增长不只是硬件故事，而是建立在四个相互增强的基础设施之上：高频手机使用、移动支付习惯、超级应用入口，以及让免押金可信的信用体系。"
                )}
              </p>
              <div className="rounded-lg overflow-hidden border border-border bg-card">
                <img src={chinaFactorsImg} alt="China success factors for shared power bank market" className="w-full object-contain bg-muted" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {chinaSuccessFactors.map(({ icon: Icon, title, value, desc }) => (
                <div key={title} className="rounded-lg border border-border bg-card p-5">
                  <Icon size={22} className="text-primary mb-4" />
                  <p className="font-heading text-2xl font-bold mb-1">{value}</p>
                  <h3 className="font-heading font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">{t("Japan Readiness Check", "日本市场准备度检查")}</p>
              <h2 className="font-heading text-3xl font-bold">
                {t("The demand signals existed, but adoption conditions were weaker.", "需求信号存在，但采用条件更弱。")}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {t(
                "Compared with China, Japan had lower smartphone intensity, earlier-stage QR payment behavior, a developing credit system, and stronger ownership preferences.",
                "与中国相比，日本的手机使用强度更低，二维码支付习惯仍处早期，信用体系正在发展，且消费者更偏好拥有而非租赁。"
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {japanReadiness.map(({ title, metric, context }) => (
              <div key={title} className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground mb-3">{title}</p>
                <p className="font-heading text-3xl font-bold mb-3">{metric}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{context}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              t("PayPay had 20M+ registered users by Nov 2019 and was launching mini-program capabilities.", "截至2019年11月，PayPay拥有2,000万+注册用户，并开始推出小程序能力。"),
              t("J. Score, backed by Mizuho Bank and SoftBank, began licensing AI credit-rating tools in Oct 2019.", "由瑞穗银行与软银支持的J. Score于2019年10月开始开放AI信用评级工具。"),
              t("An aging population and quality concerns made consumers less comfortable with shared rentals.", "老龄化人口与质量顾虑让消费者对共享租赁更谨慎。"),
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-muted p-4">
                <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 items-start">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">{t("TAM Estimation", "TAM估算")}</p>
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t("Japan was smaller than China, but still large enough to test deliberately.", "日本远小于中国，但仍足够进行审慎验证。")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "The PDF estimates Japan from two sides: consumer demand from mobile users, penetration and rental frequency; merchant demand from point-of-interest density, cabinet penetration and GMV per power bank.",
                  "PDF从两侧估算日本市场：消费者侧基于移动用户、渗透率和租借频次；商户侧基于POI密度、机柜渗透率和单个充电宝GMV。"
                )}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden border border-border bg-card">
                  <img src={tamDemandImg} alt="Consumer demand TAM estimation" className="w-full object-contain bg-muted" />
                </div>
                <div className="rounded-lg overflow-hidden border border-border bg-card">
                  <img src={tamSupplyImg} alt="Merchant demand TAM estimation" className="w-full object-contain bg-muted" />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 text-left font-semibold">{t("Metric", "指标")}</th>
                    <th className="p-4 text-left font-semibold">{t("Japan consumer", "日本消费者侧")}</th>
                    <th className="p-4 text-left font-semibold">{t("Japan merchant", "日本商户侧")}</th>
                    <th className="p-4 text-left font-semibold">{t("China benchmark", "中国基准")}</th>
                  </tr>
                </thead>
                <tbody>
                  {tamRows.map(([metric, consumer, merchant, china]) => (
                    <tr key={metric} className="border-t border-border">
                      <td className="p-4 font-medium">{metric}</td>
                      <td className="p-4 text-muted-foreground">{consumer}</td>
                      <td className="p-4 text-muted-foreground">{merchant}</td>
                      <td className="p-4 text-muted-foreground">{china}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="rounded-lg overflow-hidden border border-border bg-card">
              <img src={competitorsImg} alt="Mocha and ChargeSpot competitive landscape in Japan" className="w-full object-contain bg-muted" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary mb-2">{t("Competitive Reality", "竞争现实")}</p>
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t("Existing players showed traction, but also weak utilization economics.", "已有玩家显示牵引力，也暴露了偏弱的利用率经济性。")}
              </h2>
              <div className="space-y-4">
                {competitors.map((item) => (
                  <div key={item.name} className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-heading text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="mb-16 rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold mb-5">
                <Gauge size={16} className="text-primary" />
                {t("Go / No-Go Logic", "进入 / 暂缓逻辑")}
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t("Conclusion: Japan was attractive, but not yet ready for aggressive rollout.", "结论：日本有吸引力，但尚不适合激进铺开。")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "The right GTM strategy was not to copy China’s rollout speed. It was to validate ecosystem readiness first, then scale only after payment, trust, location economics and local partnerships were proven.",
                  "正确的GTM策略不是复制中国的扩张速度，而是先验证生态准备度；只有在支付、信任、点位经济性和本地合作被证明后再扩张。"
                )}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {recommendations.map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-lg bg-muted p-5">
                  <Icon size={22} className="text-primary mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp()} className="grid md:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">{t("Final Takeaway", "最终启示")}</p>
            <h2 className="font-heading text-3xl font-bold mb-4">
              {t("Market size alone is not market readiness.", "市场规模不等于市场准备度。")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Energy Monster’s Japan case shows that shared-economy GTM depends on behavioral infrastructure: users must already pay by phone, trust app-based credit/payment flows, and encounter enough high-frequency rental moments for unit economics to work.",
                "怪兽充电的日本案例说明，共享经济的GTM取决于行为基础设施：用户必须已经习惯手机支付、信任APP内信用/支付流程，并在足够高频的场景中产生租借需求，单点经济性才可能成立。"
              )}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <img src={conclusionImg} alt="Conclusion and market validation suggestions" className="w-full object-contain bg-muted" />
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default EnergyMonsterPage;
