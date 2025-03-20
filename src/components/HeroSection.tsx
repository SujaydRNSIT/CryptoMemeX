
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid effect */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 16, 32, 0.9), rgba(5, 8, 22, 0.95)), 
            linear-gradient(90deg, rgba(155, 135, 245, 0.1) 1px, transparent 1px), 
            linear-gradient(rgba(155, 135, 245, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          opacity: isHovering ? 0.9 : 0.7,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Floating circles */}
      <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-cyber-purple/10 blur-[80px] animate-float z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyber-blue/10 blur-[100px] animate-float animation-delay-1000 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
              The Future of Memes
            </span>
            <br />
            <span className="text-white">is on the Blockchain</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Create, share, and trade AI-generated memes as NFTs on the first decentralized meme marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-cyber-purple to-cyber-accent text-white hover:opacity-90 text-lg py-6 px-8 rounded-xl shadow-lg shadow-cyber-purple/20"
              onClick={() => navigate('/marketplace')}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore Memes
            </Button>
            
            <Button 
              variant="outline" 
              className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 text-lg py-6 px-8 rounded-xl"
              onClick={() => navigate('/generator')}
            >
              <Brain className="mr-2 h-5 w-5" />
              Generate Meme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
