
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIMemeGenerator from "@/components/AIMemeGenerator";
import ParallaxBackground from "@/components/ParallaxBackground";

const Generator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20">
        <AIMemeGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
