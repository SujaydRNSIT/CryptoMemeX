
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemeMarketplace from "@/components/MemeMarketplace";

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <MemeMarketplace />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
