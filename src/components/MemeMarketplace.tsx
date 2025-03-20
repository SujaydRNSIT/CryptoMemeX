
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import MemeCard from './MemeCard';
import { Search, Filter, CircuitBoard } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Mock data for NFT memes with uploaded image URLs
const mockNftMemes = [
  {
    id: '1',
    title: 'Why Am I Still Losing?',
    imageUrl: "/images1.jpg",
    creator: 'cryptoArtist',
    likes: 423,
    isNFT: true,
    price: '0.5',
    created: new Date('2025-05-01')
  },
  {
    id: '2',
    title: 'I Invested In Crypto',
    imageUrl: "/images3.jpg",
    creator: 'blockchainMemer',
    likes: 289,
    isNFT: true,
    price: '0.3',
    created: new Date('2025-05-10')
  },
  {
    id: '3',
    title: 'To The Moon!',
    imageUrl: "/images5.jpg",
    creator: 'web3Guru',
    likes: 178,
    isNFT: true,
    price: '0.2',
    created: new Date('2025-05-05')
  },
  {
    id: '4',
    title: 'Dinner vs Crypto Charts',
    imageUrl: "/images4.jpg",
    creator: 'devMemer',
    likes: 64,
    isNFT: true,
    price: '0.1',
    created: new Date('2025-05-15')
  },
  {
    id: '5',
    title: 'Daddy Did Crypto',
    imageUrl: "/images6.jpg",
    creator: 'daoActivist',
    likes: 85,
    isNFT: true,
    price: '0.25',
    created: new Date('2025-05-08')
  },
  {
    id: '6',
    title: 'Stock Traders vs Crypto',
    imageUrl: "/images2.jpg",
    creator: 'yieldFarmer',
    likes: 132,
    isNFT: true,
    price: '0.4',
    created: new Date('2025-05-03')
  },
  {
    id: '7',
    title: 'Money We Saved For House',
    imageUrl: "/images2.jpg",
    creator: 'virtualRealist',
    likes: 210,
    isNFT: true,
    price: '0.55',
    created: new Date('2025-05-12')
  },
  {
    id: '8',
    title: 'Crypto Urinal Talk',
    imageUrl: "/images3.jpg",
    creator: 'cryptoExplainer',
    likes: 176,
    isNFT: true,
    price: '0.35',
    created: new Date('2025-05-07')
  }
];

const MemeMarketplace = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1]);
  const [sortBy, setSortBy] = useState('popularity');
  const [filterOpen, setFilterOpen] = useState(false);
  const [nftMemes, setNftMemes] = useState(mockNftMemes);

  useEffect(() => {
    let filteredMemes = [...mockNftMemes];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredMemes = filteredMemes.filter(meme => 
        meme.title.toLowerCase().includes(query) || 
        meme.creator.toLowerCase().includes(query)
      );
    }
    
    // Apply price filter
    filteredMemes = filteredMemes.filter(meme => {
      const memePrice = parseFloat(meme.price);
      return memePrice >= priceRange[0] && memePrice <= priceRange[1];
    });
    
    // Apply sorting
    switch (sortBy) {
      case 'popularity':
        filteredMemes.sort((a, b) => b.likes - a.likes);
        break;
      case 'recent':
        filteredMemes.sort((a, b) => b.created.getTime() - a.created.getTime());
        break;
      case 'price-low':
        filteredMemes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-high':
        filteredMemes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }
    
    setNftMemes(filteredMemes);
    
    // Show toast notification when sort is changed
    if (sortBy) {
      let sortMessage = '';
      switch (sortBy) {
        case 'popularity':
          sortMessage = 'Sorted by most popular';
          break;
        case 'recent':
          sortMessage = 'Sorted by recently added';
          break;
        case 'price-low':
          sortMessage = 'Sorted by price: low to high';
          break;
        case 'price-high':
          sortMessage = 'Sorted by price: high to low';
          break;
      }
      
      toast({
        title: "Sorting applied",
        description: sortMessage,
      });
    }
  }, [searchQuery, priceRange, sortBy, toast]);

  const handleApplyFilters = () => {
    toast({
      title: "Filters applied",
      description: `Price range: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)} APT`,
    });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold font-display mb-4 text-white">
          Meme <span className="text-cyber-purple">Marketplace</span>
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Discover and collect unique memes as NFTs on the Aptos blockchain. 
          Each meme is a one-of-a-kind digital asset that you can buy, sell, or trade.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - mobile toggle */}
        <Button 
          variant="outline" 
          className="lg:hidden flex items-center justify-between w-full border-cyber-purple/30"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <span className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </span>
          <span>{filterOpen ? '−' : '+'}</span>
        </Button>

        {/* Filters sidebar */}
        <div className={`lg:w-1/4 lg:block ${filterOpen ? 'block' : 'hidden'}`}>
          <div className="glass-panel p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search memes..." 
                    className="pl-10 bg-cyber-dark/50 border-cyber-purple/30"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Price Range (APT)
                </label>
                <div className="pt-6 px-2">
                  <Slider 
                    defaultValue={[0, 1]} 
                    max={1} 
                    step={0.01} 
                    className="mb-4"
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{priceRange[0].toFixed(2)} APT</span>
                    <span>{priceRange[1].toFixed(2)} APT</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Sort By
                </label>
                <Select 
                  defaultValue="popularity" 
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="bg-cyber-dark/50 border-cyber-purple/30">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-cyber-dark border-cyber-purple/30">
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="recent">Recently Added</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full bg-cyber-purple hover:bg-cyber-purple/90"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftMemes.map(meme => (
              <MemeCard key={meme.id} {...meme} />
            ))}
          </div>
          
          {nftMemes.length === 0 && (
            <div className="glass-panel p-8 text-center">
              <CircuitBoard className="h-16 w-16 mx-auto mb-4 text-gray-500" />
              <h3 className="text-xl font-semibold text-white mb-2">No memes found</h3>
              <p className="text-gray-400">Try adjusting your filters or search query</p>
            </div>
          )}
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeMarketplace;
