
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircuitBoard, FileText, Code, Wallet } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white">
            <span className="text-cyber-purple">Documentation</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              Learn how to use CryptoMemeX with our comprehensive documentation. From creating your first meme NFT to advanced trading strategies, we've got you covered.
            </p>
            
            <Tabs defaultValue="getting-started" className="mb-10">
              <TabsList className="grid grid-cols-4 bg-cyber-dark mb-6">
                <TabsTrigger value="getting-started" className="data-[state=active]:bg-cyber-purple/20">
                  Getting Started
                </TabsTrigger>
                <TabsTrigger value="meme-creation" className="data-[state=active]:bg-cyber-purple/20">
                  Meme Creation
                </TabsTrigger>
                <TabsTrigger value="blockchain" className="data-[state=active]:bg-cyber-purple/20">
                  Blockchain
                </TabsTrigger>
                <TabsTrigger value="api" className="data-[state=active]:bg-cyber-purple/20">
                  API
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="text-gray-300 space-y-6">
                <div className="glass-panel p-6 bg-cyber-dark/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CircuitBoard className="text-cyber-purple h-5 w-5" />
                    Introduction to CryptoMemeX
                  </h3>
                  <p className="mb-4">
                    CryptoMemeX is a decentralized platform for creating, collecting, and trading meme NFTs on the Aptos blockchain. This guide will help you get started with the basics.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an account and connect your wallet</li>
                    <li>Explore the marketplace to understand how meme NFTs are valued</li>
                    <li>Try the AI Meme Generator to create your first meme</li>
                    <li>Mint your creation as an NFT</li>
                    <li>List your NFT for sale or collect others' creations</li>
                  </ol>
                </div>
                
                <div className="glass-panel p-6 bg-cyber-dark/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Wallet className="text-cyber-purple h-5 w-5" />
                    Setting Up Your Wallet
                  </h3>
                  <p className="mb-4">
                    Before using CryptoMemeX, you'll need an Aptos-compatible wallet. We recommend using Petra Wallet for the best experience.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Install the Petra Wallet browser extension</li>
                    <li>Create a new wallet or import an existing one</li>
                    <li>Fund your wallet with APT tokens for transactions</li>
                    <li>Connect your wallet to CryptoMemeX using the "Connect Wallet" button</li>
                  </ol>
                </div>
              </TabsContent>
              
              <TabsContent value="meme-creation" className="text-gray-300 space-y-6">
                <div className="glass-panel p-6 bg-cyber-dark/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="text-cyber-purple h-5 w-5" />
                    Using the AI Meme Generator
                  </h3>
                  <p className="mb-4">
                    Our AI Meme Generator helps you create unique and engaging memes quickly. You can upload your own images or use one of our templates.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Navigate to the AI Meme Generator page</li>
                    <li>Upload an image or select a template</li>
                    <li>Enter a description of your meme idea</li>
                    <li>Let the AI generate caption suggestions</li>
                    <li>Choose your favorite caption or edit it to your liking</li>
                    <li>Mint your meme as an NFT</li>
                  </ol>
                </div>
              </TabsContent>
              
              <TabsContent value="blockchain" className="text-gray-300 space-y-6">
                <div className="glass-panel p-6 bg-cyber-dark/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CircuitBoard className="text-cyber-purple h-5 w-5" />
                    Understanding the Aptos Blockchain
                  </h3>
                  <p className="mb-4">
                    CryptoMemeX is built on the Aptos blockchain, a high-performance Layer 1 blockchain designed for fast and secure transactions.
                  </p>
                  <p className="mb-4">
                    Key features of Aptos that benefit CryptoMemeX users:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>High throughput for faster transactions</li>
                    <li>Low gas fees compared to other chains</li>
                    <li>Flexible storage options for NFT metadata</li>
                    <li>Move language for secure smart contracts</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="api" className="text-gray-300 space-y-6">
                <div className="glass-panel p-6 bg-cyber-dark/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="text-cyber-purple h-5 w-5" />
                    API Documentation
                  </h3>
                  <p className="mb-4">
                    CryptoMemeX provides a public API for developers who want to integrate with our platform. This section covers the available endpoints and how to use them.
                  </p>
                  <div className="bg-cyber-darker p-4 rounded-md font-mono text-sm mb-4">
                    <p className="text-gray-400">// Example API call to get meme details</p>
                    <p className="text-cyber-purple">GET https://api.cryptomemex.io/v1/memes/{"memeId"}</p>
                  </div>
                  <p>
                    For full API documentation, please refer to our <a href="#" className="text-cyber-purple underline">Developer Portal</a>.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
