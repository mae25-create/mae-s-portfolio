import { useLanguage } from "@/contexts/LanguageContext";

const MarqueeBanner = () => {
  const { t } = useLanguage();
  const items = [
    t("BUSINESS ANALYST", "商业分析师"),
    t("DATA-DRIVEN", "数据驱动"),
    t("MBA CANDIDATE", "MBA候选人"),
    t("AI BUILDER", "AI 构建者"),
    t("STRATEGY", "战略咨询"),
    t("CROSS-CULTURAL", "跨文化"),
  ];
  const track = items.map((item, i) => (
    <span key={i} className="mx-8 text-sm font-heading font-semibold tracking-widest uppercase whitespace-nowrap">
      {item}
      <span className="mx-8 text-primary">✦</span>
    </span>
  ));

  return (
    <div className="bg-foreground text-background py-2.5 overflow-hidden">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
};

export default MarqueeBanner;
