import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import VibeCodingProducts from "@/components/VibeCodingProducts";
import Experience from "@/components/Experience";
import DetailedAbout from "@/components/DetailedAbout";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div style={{ background: "#FFF8F0" }}>
        <FeaturedProjects />
      </div>
      <div style={{ background: "#FFF8F0" }}>
        <VibeCodingProducts />
      </div>
      <div style={{ background: "#FFF8F0" }}>
        <Experience />
      </div>
      <div style={{ background: "#FFF8F0" }}>
        <DetailedAbout />
      </div>
      <div style={{ background: "#FFF8F0" }}>
        <Contact />
      </div>
    </div>
  );
};

export default Index;
