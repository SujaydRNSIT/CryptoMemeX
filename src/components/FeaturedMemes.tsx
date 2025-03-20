
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MemeCard from './MemeCard';
import { TrendingUp, CircuitBoard, Infinity, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Mock data for memes with uploaded image URLs
const trendingMemes = [
  {
    id: '1',
    title: 'Why Am I Still Losing?',
    imageUrl: "/images1.jpg",
    creator: 'cryptoArtist',
    likes: 423,
    isNFT: true,
    price: '0.5'
  },
  {
    id: '2',
    title: 'I Invested In Crypto',
    imageUrl: "/images3.jpg",
    creator: 'memeKing',
    likes: 356,
    isNFT: false
  },
  {
    id: '3',
    title: 'To The Moon!',
    imageUrl: "/images5.jpg",
    creator: 'blockchainMemer',
    likes: 289,
    isNFT: true,
    price: '0.3'
  },
  {
    id: '4',
    title: 'Dinner vs Crypto Charts',
    imageUrl: "/images4.jpg",
    creator: 'web3Guru',
    likes: 178,
    isNFT: true,
    price: '0.2'
  },
  {
    id: '5',
    title: 'Daddy Did Crypto',
    imageUrl: "/images6.jpg",
    creator: 'ethFan',
    likes: 197,
    isNFT: false
  },
  {
    id: '6',
    title: 'Stock Traders vs Crypto Degens',
    imageUrl: "/images2.jpg",
    creator: 'devMemer',
    likes: 164,
    isNFT: true,
    price: '0.1'
  }
];

const newMemes = [
  {
    id: '5',
    title: 'Money We Saved For House',
    imageUrl: "/images2.jpg",
    creator: 'ethFan',
    likes: 97,
    isNFT: false
  },
  {
    id: '6',
    title: 'Crypto Urinal Talk',
    imageUrl: "/images3.jpg",
    creator: 'devMemer',
    likes: 64,
    isNFT: true,
    price: '0.1'
  },
  {
    id: '7',
    title: 'Crypto Crash Feelings',
    imageUrl: "/images3.jpg",
    creator: 'minerDude',
    likes: 122,
    isNFT: false
  },
  {
    id: '8',
    title: 'Better Monitor?',
    imageUrl: "/images1.jpg",
    creator: 'daoActivist',
    likes: 85,
    isNFT: true,
    price: '0.25'
  },
  {
    id: '9',
    title: 'McDonald\'s After Crash',
    imageUrl: "/images5.jpg",
    creator: 'metaBuilder',
    likes: 134,
    isNFT: false
  },
  {
    id: '10',
    title: 'Stock Traders vs Crypto',
    imageUrl: "/images2.jpg",
    creator: 'defiGuru',
    likes: 248,
    isNFT: true,
    price: '0.45'
  }
];

const nftMemes = [
  {
    id: '11',
    title: 'Why Am I Still Losing?',
    imageUrl: "/images1.jpg",
    creator: 'web3Artist',
    likes: 356,
    isNFT: true,
    price: '0.4'
  },
  {
    id: '12',
    title: 'Crypto Urinal Talk',
    imageUrl: "/images3.jpg",
    creator: 'cryptoMiner',
    likes: 189,
    isNFT: true,
    price: '0.3'
  },
  {
    id: '13',
    title: 'Dinner vs Crypto Charts',
    imageUrl: "/images4.jpg",
    creator: 'blockchainTeacher',
    likes: 421,
    isNFT: true,
    price: '0.6'
  },
  {
    id: '14',
    title: 'I Invested In Crypto',
    imageUrl: "/images3.jpg",
    creator: 'nftCollector',
    likes: 278,
    isNFT: true,
    price: '0.35'
  },
  {
    id: '15',
    title: 'Daddy Did Crypto',
    imageUrl: "/images6.jpg",
    creator: 'metaInvestor',
    likes: 312,
    isNFT: true,
    price: '0.5'
  },
  {
    id: '16',
    title: 'Stock Traders vs Crypto',
    imageUrl: "/images2.jpg",
    creator: 'daoCreator',
    likes: 156,
    isNFT: true,
    price: '0.25'
  }
];

const FeaturedMemes = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [currentPage, setCurrentPage] = useState(0);
  const memesPerPage = 4;
  
  const getCurrentMemes = () => {
    if (activeTab === "trending") return trendingMemes;
    if (activeTab === "new") return newMemes;
    if (activeTab === "nft") return nftMemes;
    return trendingMemes;
  };

  const totalPages = Math.ceil(getCurrentMemes().length / memesPerPage);
  const displayMemes = getCurrentMemes().slice(
    currentPage * memesPerPage, 
    (currentPage + 1) * memesPerPage
  );
  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Reset pagination when changing tabs
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  return (
    <section className="py-16 px-4 bg-cyber-dark/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="relative">
            <h2 className="text-3xl font-bold font-display text-white relative z-10">
              Featured <span className="text-cyber-purple">Memes</span>
            </h2>
            <div className="absolute -bottom-2 left-0 h-3 w-24 bg-cyber-purple/20 rounded-full blur-md"></div>
          </div>
          
          <Tabs 
            defaultValue="trending" 
            className="w-full md:w-auto"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 bg-cyber-dark border border-cyber-purple/20">
              <TabsTrigger 
                value="trending" 
                className="flex items-center gap-2 data-[state=active]:bg-cyber-purple/20 transition-all duration-300"
              >
                <TrendingUp className="h-4 w-4" />
                <span>Trending</span>
              </TabsTrigger>
              <TabsTrigger 
                value="new" 
                className="flex items-center gap-2 data-[state=active]:bg-cyber-purple/20 transition-all duration-300"
              >
                <Infinity className="h-4 w-4" />
                <span>New</span>
              </TabsTrigger>
              <TabsTrigger 
                value="nft" 
                className="flex items-center gap-2 data-[state=active]:bg-cyber-purple/20 transition-all duration-300"
              >
                <CircuitBoard className="h-4 w-4" />
                <span>NFTs</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {displayMemes.map(meme => (
            <div className="transform transition-all duration-300 hover:-translate-y-2" key={meme.id}>
              <MemeCard {...meme} />
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="border-cyber-purple/30 text-cyber-purple disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm text-gray-400 px-3">
              {currentPage + 1} / {totalPages}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="border-cyber-purple/30 text-cyber-purple disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default FeaturedMemes;
