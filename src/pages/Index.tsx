import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import VibeCodingProducts from "@/components/VibeCodingProducts";
import Experience from "@/components/Experience";
import DetailedAbout from "@/components/DetailedAbout";
import Contact from "@/components/Contact";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <VibeCodingProducts />
      <Experience />
      <DetailedAbout />
      <Contact />
    </div>
  );
};

export default Index;
