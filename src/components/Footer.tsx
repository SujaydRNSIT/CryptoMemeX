
import { CircuitBoard, Github, Twitter, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-cyber-dark/50 to-cyber-darker py-16">
      <div className="container mx-auto px-4">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CircuitBoard className="text-cyber-purple h-8 w-8" />
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                CryptoMemeX
              </span>
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              The first decentralized meme marketplace powered by Aptos blockchain.
              Create, collect, and trade your favorite crypto memes.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-cyber-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-purple transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyber-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-white">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/generator" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    AI Meme Generator
                  </Link>
                </li>
                <li>
                  <Link to="/marketplace" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/documentation" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-cyber-purple transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-white">Join our community</h3>
            <p className="text-gray-300">Connect with fellow meme creators and collectors</p>
            <div className="flex space-y-2 flex-col">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cyber-dark/50 border-cyber-purple/30"
              />
              <Button className="bg-gradient-to-r from-cyber-purple to-cyber-blue text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Full width linear section */}
        <div className="w-full mb-12 py-6 px-4 bg-gradient-to-r from-cyber-purple/30 to-cyber-blue/30 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <h3 className="font-display text-xl font-semibold text-white">CryptoMemeX</h3>
            </div>
          </div>
        </div>
        
        {/* Divider with glow effect */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cyber-purple/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-cyber-darker via-cyber-dark to-cyber-darker px-4">
              <CircuitBoard className="h-10 w-10 text-cyber-purple" />
            </span>
          </div>
        </div>
        
        {/* Bottom Footer Section with improved visibility */}
        <div className="text-center pt-6">
          <div className="flex items-center justify-center gap-1 mb-3">
            <span className="text-gray-300 text-sm">Made with</span>
            <Heart className="h-4 w-4 text-cyber-pink fill-cyber-pink" />
            <span className="text-gray-300 text-sm">by Team Zegenze</span>
          </div>
          <p className="text-gray-300 text-sm">
            © 2025 CryptoMemeX. All rights reserved.
          </p>
          <p className="text-gray-300 text-xs mt-2">
            Powered by Aptos blockchain, MemeGen, and Move Agent Kit.
          </p>
          <div className="flex justify-center space-x-8 mt-4">
            <Link to="/privacy-policy" className="text-gray-300 text-xs hover:text-cyber-purple transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 text-xs hover:text-cyber-purple transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-300 text-xs hover:text-cyber-purple transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
