import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t("Shanghai Jinshan Capital", "上海金山资本"),
      role: t("Investment Manager", "投资经理"),
      period: t("July 2021 – July 2024", "2021年7月 – 2024年7月"),
      location: t("Shanghai, China", "上海"),
      highlights: [
        t("Led investment strategy and portfolio optimization for 3 Fund-of-Funds and direct investments across AI, renewable energy, and biotech. Partnered with C-suite executives and subsidiaries to define long-term objectives, allocate capital, and align deployment with corporate strategy and long-term growth.\nl \nConducted 15+ commercial due diligence projects using SQL and advanced financial modeling to evaluate market opportunities, providing critical insights that directly informed the investment committee's decisions.", "领导了3支母基金及AI、新能源、生物技术领域直投项目的投资策略和投后管理。与高管及子公司合作确定长期目标、分配资本，并使投资布局与公司战略及长期增长保持一致。"),
        t("l  Conducted 15+ commercial due diligence projects using SQL and advanced financial modeling to evaluate market opportunities, providing critical insights that directly informed the investment committee's decisions.\n\n Built and maintained real-time risk assessment dashboards in Python and Tableau, improving fund allocation efficiency by 20% and enabling faster, data-transparent strategic choices.\n\nl  Designed a standardized reporting system that consolidated data from 35+ subsidiaries across 17 departments, enhancing cross-functional alignment and accelerating monthly reporting speed by 30%.\n", "为AI和消费科技领域的A/B轮投资进行尽职调查"),
      ],
    },
    {
      company: t("BRIVE Consulting", "BRIVE咨询"),
      role: t("Co-founder & Business Development", "联合创始人兼业务发展"),
      period: t("Feb 2019 – Jun 2021", "2019年2月 – 2021年6月"),
      location: t("Hybrid", "远程/混合"),
      highlights: [
        t("Designed GTM strategy for a $2M ARR SaaS product targeting SMB market", "为一款年收入200万美元的SaaS产品设计进入中小企业市场的策略"),
        t("Led cross-functional workshops with 15+ stakeholders across 3 time zones", "领导跨3个时区、15+利益相关者的跨职能研讨会"),
      ],
    },
    {
      company: t("Energy Monster (Nasdaq: EM)", "怪兽充电 (Nasdaq: EM)"),
      role: t("Strategy Analyst Intern", "战略分析实习生"),
      period: t("Jun 2020 – Apr 2020", "2020年6月 – 2020年4月"),
      location: t("Shanghai, China", "上海"),
      highlights: [
        t("Analyzed 10K+ data points to identify Gen-Z consumption patterns", "分析10,000+数据点识别Z世代消费趋势"),
        t("Delivered go-to-market recommendations adopted by regional marketing team", "提交的市场策略建议被区域营销团队采纳"),
      ],
    },
    {
      company: t("CICC (China International Capital Corp)", "中金公司"),
      role: t("Data Analyst Intern", "数据分析实习生"),
      period: t("July 2019 – Dec 2019", "2019年7月 – 2019年12月"),
      location: t("Beijing, China", "北京"),
      highlights: [
        t("Supported IPO and M&A projects with combined deal value of $500M+", "参与总交易金额超5亿美元的IPO及并购项目"),
        t("Built financial models and industry reports for TMT sector deals", "为TMT行业交易构建财务模型和行业研究报告"),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            {t("Work Experience", "工作经历")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            {t(
              "From strategy consulting to FoFs investment, cross-border commerce to AI product building.",
              "从战略咨询到母基金投资，跨境电商到AI产品构建。"
            )}
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold">{exp.company}</h3>
                  <p className="text-primary font-medium text-sm">{exp.role}</p>
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
                    <span className="text-primary mt-0.5">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
