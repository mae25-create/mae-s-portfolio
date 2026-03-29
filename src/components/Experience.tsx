import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("Kingsoft Capital (Xiaomi Ecosystem)", "金山资本（小米生态链）"),
      role: t("Business Analyst Intern", "商业分析实习生"),
      period: t("Jun 2025 – Present", "2025年6月 – 至今"),
      location: t("Beijing, China", "北京"),
      color: "bg-primary",
      highlights: [
        t(
          "Built internal data dashboards tracking 50+ portfolio companies across 6 sectors",
          "搭建内部数据看板，追踪50+被投企业的6个行业数据"
        ),
        t(
          "Conducted due diligence for Series A/B deals in AI and consumer tech",
          "为AI和消费科技领域的A/B轮投资进行尽职调查"
        ),
      ],
    },
    {
      company: t("BRIVE Consulting", "BRIVE咨询"),
      role: t("Business Analyst", "商业分析师"),
      period: t("Sep 2024 – Apr 2025", "2024年9月 – 2025年4月"),
      location: t("Boston, USA", "波士顿"),
      color: "bg-teal",
      highlights: [
        t(
          "Designed GTM strategy for a $2M ARR SaaS product targeting SMB market",
          "为一款年收入200万美元的SaaS产品设计进入中小企业市场的策略"
        ),
        t(
          "Led cross-functional workshops with 15+ stakeholders across 3 time zones",
          "领导跨3个时区、15+利益相关者的跨职能研讨会"
        ),
      ],
    },
    {
      company: t("Monster Energy (via Hult)", "怪兽充电（Hult项目）"),
      role: t("Strategy Consultant", "战略咨询顾问"),
      period: t("Jan 2025 – Apr 2025", "2025年1月 – 2025年4月"),
      location: t("Boston, USA", "波士顿"),
      color: "bg-coral",
      highlights: [
        t(
          "Analyzed 10K+ data points to identify Gen-Z consumption patterns",
          "分析10,000+数据点识别Z世代消费趋势"
        ),
        t(
          "Delivered go-to-market recommendations adopted by regional marketing team",
          "提交的市场策略建议被区域营销团队采纳"
        ),
      ],
    },
    {
      company: t("CICC (China International Capital Corp)", "中金公司"),
      role: t("Investment Banking Intern", "投资银行实习生"),
      period: t("Jun 2022 – Sep 2022", "2022年6月 – 2022年9月"),
      location: t("Beijing, China", "北京"),
      color: "bg-navy",
      highlights: [
        t(
          "Supported IPO and M&A projects for clients with combined deal value of $500M+",
          "参与总交易金额超5亿美元的IPO及并购项目"
        ),
        t(
          "Built financial models and industry reports for TMT sector deals",
          "为TMT行业交易构建财务模型和行业研究报告"
        ),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            {t("Work", "工作")}
            <span className="text-primary"> {t("Experience", "经历")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            {t(
              "From investment banking to venture capital, strategy consulting to AI product building.",
              "从投资银行到风险投资，从战略咨询到AI产品构建。"
            )}
          </p>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`w-3 h-3 rounded-full ${exp.color} mt-2 shrink-0`} />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
