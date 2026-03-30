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
        t("Conducted 15+ commercial due diligence projects on AI and renewable energy startups, using SQL and financial modeling to evaluate market opportunities and inform investment decisions", "对AI和新能源初创企业进行了15+商业尽职调查项目，使用SQL和财务建模评估市场机会并为投资决策提供信息"),
        t("Built a standardized reporting system consolidating data from 35+ subsidiaries, improving cross-functional alignment and accelerating monthly reporting by 30%", "构建了一个标准化报告系统，整合35+子公司数据，改善跨职能协作并将月度报告速度提升30%"),
        t("Deployed analytical dashboards and enhanced data workflows, integrating tools into internal systems and driving 15% operational efficiency gains", "部署分析仪表板并优化数据工作流，将工具集成到内部系统中，推动运营效率提升15%"),
      ],
    },
    {
      company: t("BRIVE Consulting", "BRIVE咨询"),
      role: t("Co-founder & Business Development", "联合创始人兼业务发展"),
      period: t("Feb 2019 – Jun 2021", "2019年2月 – 2021年6月"),
      location: t("Hybrid", "远程/混合"),
      highlights: [
        t("Led GTM and localization strategies for 70+ SME clients expanding into APAC and LATAM markets, focusing on e-commerce and manufacturing sectors", "为70+中小企业客户制定进入亚太和拉美市场的GTM和本地化策略，专注于电商和制造业"),
        t("Managed a 13-member cross-functional team to secure partnerships with local legal, financial, and distribution partners, improving client market entry success rates by 25%", "管理13人跨职能团队，与当地法律、财务和分销合作伙伴建立合作关系，将客户市场进入成功率提升25%"),
        t("Designed KPI dashboards to track post-expansion performance, contributing to an 18% increase in client retention through data-driven optimization", "设计KPI仪表板追踪扩展后的业绩表现，通过数据驱动优化将客户留存率提升18%"),
      ],
    },
    {
      company: t("Energy Monster (Nasdaq: EM)", "怪兽充电 (Nasdaq: EM)"),
      role: t("Strategy Analyst Intern", "战略分析实习生"),
      period: t("Jun 2020 – Apr 2020", "2020年6月 – 2020年4月"),
      location: t("Shanghai, China", "上海"),
      highlights: [
        t("Performed consumer insights analysis and market research for new beverage product launches, producing strategic reports to inform GTM decisions", "进行消费者洞察分析和市场研究，为新饮品产品发布制定战略报告以指导GTM决策"),
        t("Executed financial scenario modeling across distribution channels, identifying opportunities for 15% revenue growth", "对各分销渠道进行财务情景建模，发现15%收入增长机会"),
        t("Collaborated with cross-functional teams to refine product-market fit ahead of the company's IPO", "与跨职能团队合作，在公司IPO前优化产品市场契合度"),
      ],
    },
    {
      company: t("China International Capital Corporation (CICC)", "中金公司"),
      role: t("Data Analyst Intern", "数据分析实习生"),
      period: t("July 2019 – Dec 2019", "2019年7月 – 2019年12月"),
      location: t("Beijing, China", "北京"),
      highlights: [
        t("Developed 18+ interactive Tableau dashboards for HR analytics and knowledge management, providing synthesized insights for executive decision-making", "开发18+交互式Tableau仪表板用于HR分析和知识管理，为高管决策提供综合洞察"),
        t("Automated reporting workflows with SQL and Excel macros, reducing manual reporting time by 50%", "使用SQL和Excel宏自动化报告流程，将手动报告时间减少50%"),
        t("Built and maintained a 50,000-entry alumni database, improving engagement tracking accuracy by 40%", "构建并维护50,000条记录的校友数据库，将参与度追踪准确率提升40%"),
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
