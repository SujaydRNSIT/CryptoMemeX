
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Share, Heart, User, Wallet } from "lucide-react";

interface MemeCardProps {
  id: string;
  title: string;
  imageUrl: string;
  creator: string;
  likes: number;
  price?: string;
  isNFT?: boolean;
}

const MemeCard = ({ id, title, imageUrl, creator, likes, price, isNFT = false }: MemeCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (!liked) {
      setLikeCount(prev => prev + 1);
    } else {
      setLikeCount(prev => prev - 1);
    }
    setLiked(!liked);
  };

  // Use the image URL directly
  const imgSrc = imageUrl;
  
  // Log for debugging
  console.log("Rendering MemeCard with image:", imgSrc);

  return (
    <div className="gradient-border animate-pulse-neon">
      <Card className="gradient-border-content overflow-hidden border-0 bg-transparent">
        <CardContent className="p-0 relative group">
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isNFT && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-cyber-dark/80 backdrop-blur-sm rounded-md border border-cyber-purple/30 text-xs font-medium text-cyber-purple flex items-center">
              <Wallet className="h-3 w-3 mr-1" />
              NFT
            </div>
          )}
        </CardContent>
        
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-white mb-2 truncate">{title}</h3>
          
          <div className="flex items-center mb-3">
            <User className="h-3 w-3 text-gray-400 mr-1" />
            <span className="text-xs text-gray-400">@{creator}</span>
          </div>
          
          <CardFooter className="flex justify-between items-center p-0">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLike}
                className={`px-2 py-1 h-auto transition-colors ${
                  liked ? 'text-cyber-pink' : 'text-gray-400 hover:text-cyber-pink'
                }`}
              >
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-xs">{likeCount}</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="px-2 py-1 h-auto text-gray-400 hover:text-cyber-blue">
                <Share className="h-4 w-4" />
              </Button>
            </div>
            
            {isNFT && price && (
              <div className="text-sm font-semibold text-cyber-cyan">
                {price} APT
              </div>
            )}
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default MemeCard;
