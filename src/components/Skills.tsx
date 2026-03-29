import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap } from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      label: t("Data & Analytics", "数据分析"),
      skills: ["SQL", "Python", "Tableau", "Power BI", "Excel / VBA", "Google Analytics"],
    },
    {
      label: t("Business Tools", "商业工具"),
      skills: ["Salesforce", "HubSpot", "Jira", "Notion", "Figma", "SAP"],
    },
    {
      label: t("AI & Tech", "AI与技术"),
      skills: ["ChatGPT / LLMs", "Prompt Engineering", "React", "TypeScript", "API Integration"],
    },
    {
      label: t("Languages", "语言能力"),
      skills: [
        t("Mandarin (Native)", "中文（母语）"),
        t("English (Fluent)", "英语（流利）"),
        t("Japanese (Basic)", "日语（基础）"),
      ],
    },
  ];

  const education = [
    {
      school: "Hult International Business School",
      degree: t("MBA — Global Business", "MBA — 全球商务"),
      period: "2024 – 2025",
      location: t("Boston, USA", "波士顿"),
      color: "bg-primary",
    },
    {
      school: "Johns Hopkins University (SAIS)",
      degree: t("M.A. International Relations", "国际关系硕士"),
      period: "2023 – 2024",
      location: t("Washington D.C., USA", "华盛顿特区"),
      color: "bg-teal",
    },
    {
      school: t("Nanjing University", "南京大学"),
      degree: t("B.A. English Language & Literature", "英语语言文学学士"),
      period: "2019 – 2023",
      location: t("Nanjing, China", "南京"),
      color: "bg-coral",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            {t("Skills", "技能")}
            <span className="text-primary"> & {t("Education", "教育")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-muted-foreground mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              <GraduationCap className="inline w-4 h-4 mr-2" />
              {t("Education", "教育背景")}
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-border pb-6 last:pb-0"
              >
                <div className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full ${edu.color}`} />
                <h4 className="font-heading font-bold text-lg">{edu.school}</h4>
                <p className="text-primary text-sm font-medium">{edu.degree}</p>
                <p className="text-muted-foreground text-sm mt-1">
                  {edu.period} · {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
