
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MemeCard from './MemeCard';
import { User, Wallet, CircuitBoard } from 'lucide-react';

// Mock data with uploaded image URLs
const ownedMemes = [
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
    title: 'Money We Saved For House',
    imageUrl: "/images2.jpg",
    creator: 'blockchainMemer',
    likes: 289,
    isNFT: true,
    price: '0.3'
  }
];

const createdMemes = [
  {
    id: '3',
    title: 'I Invested In Crypto',
    imageUrl: "/images3.jpg",
    creator: 'web3Guru',
    likes: 178,
    isNFT: true,
    price: '0.2'
  },
  {
    id: '4',
    title: 'Dinner vs Crypto Charts',
    imageUrl: "/images4.jpg",
    creator: 'devMemer',
    likes: 64,
    isNFT: true,
    price: '0.1'
  },
  {
    id: '5',
    title: 'To The Moon!',
    imageUrl: "/images5.jpg",
    creator: 'daoActivist',
    likes: 85,
    isNFT: true,
    price: '0.25'
  }
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('owned');

  return (
    <div className="container mx-auto py-10">
      <div className="glass-panel p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden cyber-border flex items-center justify-center bg-cyber-dark">
            <User className="w-16 h-16 text-cyber-purple" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold font-display mb-2 text-white">
              CryptoMemer
            </h1>
            <p className="text-gray-400 mb-4">Joined April 2023</p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <div className="cyber-border px-4 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Memes Created</p>
                <p className="text-xl font-semibold text-white">5</p>
              </div>
              
              <div className="cyber-border px-4 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Memes Owned</p>
                <p className="text-xl font-semibold text-white">2</p>
              </div>
              
              <div className="cyber-border px-4 py-2 rounded-lg">
                <p className="text-xs text-gray-400">Total Likes</p>
                <p className="text-xl font-semibold text-white">1.2K</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple flex gap-2">
                <Wallet className="h-4 w-4" />
                <span className="truncate">0x71C7...65F3</span>
              </Button>
              
              <Button variant="outline" className="border-cyber-purple/30">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="owned" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-cyber-dark mb-8">
          <TabsTrigger value="owned" className="data-[state=active]:bg-cyber-purple/20">My Collection</TabsTrigger>
          <TabsTrigger value="created" className="data-[state=active]:bg-cyber-purple/20">Created Memes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="owned">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownedMemes.map(meme => (
              <MemeCard key={meme.id} {...meme} />
            ))}
            
            {ownedMemes.length === 0 && (
              <div className="col-span-full glass-panel p-8 text-center">
                <CircuitBoard className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                <h3 className="text-xl font-semibold text-white mb-2">No memes in collection</h3>
                <p className="text-gray-400 mb-4">You haven't purchased any memes yet</p>
                <Button>Browse Marketplace</Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="created">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {createdMemes.map(meme => (
              <MemeCard key={meme.id} {...meme} />
            ))}
            
            {createdMemes.length === 0 && (
              <div className="col-span-full glass-panel p-8 text-center">
                <CircuitBoard className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                <h3 className="text-xl font-semibold text-white mb-2">No created memes</h3>
                <p className="text-gray-400 mb-4">You haven't created any memes yet</p>
                <Button>Create Meme</Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
