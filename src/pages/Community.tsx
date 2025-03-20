
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Users, Twitter, Share2 } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white">
            Join the <span className="text-cyber-purple">Community</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              Connect with fellow meme creators, collectors, and crypto enthusiasts. 
              Share ideas, collaborate on projects, and stay up-to-date with the latest trends in the crypto meme space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card className="cyber-border bg-cyber-dark/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-cyber-purple" />
                    Discord Server
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Join our active Discord community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Our Discord server is the central hub for the CryptoMemeX community. 
                    Join channels dedicated to meme creation, NFT trading, and blockchain discussions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">5,200+ members</span>
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">Daily contests</span>
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">Active mods</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-[#5865F2] to-[#7289DA] text-white">
                    Join Discord
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="cyber-border bg-cyber-dark/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Twitter className="h-5 w-5 text-cyber-purple" />
                    Twitter Community
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Follow us for the latest updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Stay updated with the latest memes, drops, and platform news. 
                    Participate in Twitter contests and engage with our growing community.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">10K+ followers</span>
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">Daily memes</span>
                    <span className="bg-cyber-purple/20 text-cyber-purple text-xs px-2 py-1 rounded">Weekly giveaways</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-[#1DA1F2] to-[#0C85D0] text-white">
                    Follow on Twitter
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <h2 className="text-2xl font-semibold text-white mb-6">Community Spotlight</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="cyber-border bg-cyber-dark/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://source.unsplash.com/random/100x100?crypto=${i}`} />
                        <AvatarFallback>CM</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base text-white">CryptoMemer{i}</CardTitle>
                        <CardDescription className="text-xs text-gray-400">Meme Artist</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      "The CryptoMemeX community has been amazing for sharing my crypto-themed memes and connecting with like-minded creators!"
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="text-cyber-purple border-cyber-purple/30">
                      <Users className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm" className="text-cyber-purple border-cyber-purple/30">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
