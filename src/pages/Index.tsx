
import HeroSection from "@/components/HeroSection";
import FeaturedMemes from "@/components/FeaturedMemes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedMemes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
