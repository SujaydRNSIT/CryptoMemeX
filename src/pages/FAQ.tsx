
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white">
            Frequently <span className="text-cyber-purple">Asked Questions</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              Find answers to the most common questions about CryptoMemeX, our NFT marketplace, and how to get started with crypto memes.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  What is CryptoMemeX?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  CryptoMemeX is the first decentralized meme marketplace powered by the Aptos blockchain. We allow users to create, collect, and trade unique memes as NFTs, giving creators ownership and monetization opportunities for their content.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  How do I create a meme NFT?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  You can create a meme NFT by using our AI Meme Generator. Upload an image or choose from our templates, add captions, and mint your creation as an NFT on the Aptos blockchain. You'll need to connect your wallet first and pay a small gas fee to mint.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  What wallet can I use with CryptoMemeX?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  CryptoMemeX supports several Aptos-compatible wallets, including Petra Wallet, Martian Wallet, Pontem Wallet, and Rise Wallet. We recommend Petra Wallet for the best experience.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  How do royalties work for creators?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  When you create and mint a meme NFT, you can set a royalty percentage (up to 10%) that you'll receive from all future sales of your NFT. This allows creators to earn passive income as their memes gain popularity and trade hands.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  What are the fees for using CryptoMemeX?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  CryptoMemeX charges a 2.5% platform fee on all NFT sales. Additionally, there are small gas fees for minting and transactions on the Aptos blockchain. Using the AI Meme Generator is free for basic features, with premium features available for a small fee.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="cyber-border p-1 bg-cyber-dark/30">
                <AccordionTrigger className="px-4 text-white hover:text-cyber-purple">
                  How can I ensure my meme is unique?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">
                  Our platform uses AI technology to check for similarities with existing content. However, we encourage users to create original content or properly transform existing templates with their unique perspective. Remember that ownership of a meme NFT doesn't necessarily grant copyright to the underlying images.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
