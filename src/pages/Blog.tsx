
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Crypto Memes as Digital Assets",
    excerpt: "Explore how internet memes have evolved from simple jokes to valuable digital assets in the blockchain ecosystem.",
    coverImage: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28",
    date: "May 15, 2025",
    readTime: "6 min read",
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    },
    tags: ["NFTs", "Meme Culture", "Digital Assets"]
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Meme Creation",
    excerpt: "AI tools are changing how we create and distribute memes. Learn how CryptoMemeX is leading this revolution.",
    coverImage: "https://images.unsplash.com/photo-1639803938667-6bb27eeba112",
    date: "May 10, 2025",
    readTime: "4 min read",
    author: {
      name: "Samantha Wu",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    tags: ["AI", "Technology", "Creator Economy"]
  },
  {
    id: 3,
    title: "Top 10 Crypto Memes That Sold for Thousands",
    excerpt: "These crypto memes weren't just funny—they were incredibly valuable. Here are the top 10 memes that sold for thousands.",
    coverImage: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9",
    date: "May 5, 2025",
    readTime: "8 min read",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    tags: ["NFT Sales", "Collectibles", "Investment"]
  },
  {
    id: 4,
    title: "Aptos Blockchain: The Perfect Home for Meme NFTs",
    excerpt: "Why we chose Aptos blockchain for CryptoMemeX and how it benefits creators and collectors alike.",
    coverImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    date: "April 28, 2025",
    readTime: "5 min read",
    author: {
      name: "Janice Chen",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    tags: ["Aptos", "Blockchain", "Technology"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-6 text-white">
            CryptoMemeX <span className="text-cyber-purple">Blog</span>
          </h1>
          
          <div className="glass-panel p-6 mb-10">
            <p className="text-gray-300 mb-8">
              Latest news, tutorials, and insights from the world of crypto memes and NFTs. Stay informed about the latest trends and developments in the space.
            </p>
            
            {/* Featured Post */}
            <div className="mb-12">
              <div className="cyber-border p-1 bg-cyber-dark/20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1621504450181-5fdb1eaeb4c8"
                      alt="Featured blog post" 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-cyber-pink text-sm">Featured</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        May 20, 2025
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        10 min read
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">
                      The Future of Meme Economy: How NFTs are Changing Content Creation
                    </h2>
                    
                    <p className="text-gray-300 mb-6">
                      Memes have always been a form of cultural currency on the internet, but now they're becoming actual currency. 
                      Explore how NFTs are transforming the meme economy and creating new opportunities for creators.
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">John Doe</p>
                        <p className="text-gray-400 text-sm">CryptoMemeX Founder</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["NFTs", "Creator Economy", "Future Trends"].map((tag) => (
                        <span key={tag} className="flex items-center text-xs text-cyber-purple bg-cyber-purple/10 px-2 py-1 rounded">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="flex items-center text-white bg-gradient-to-r from-cyber-purple to-cyber-blue">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="cyber-border p-1 bg-cyber-dark/20 overflow-hidden flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.coverImage}
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <span className="text-gray-400 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                    
                    <p className="text-gray-300 mb-4 text-sm flex-1">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>AU</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-300 text-sm">{post.author.name}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-cyber-purple bg-cyber-purple/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="outline" className="mt-auto text-cyber-purple border-cyber-purple/30">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-cyber-purple/30 text-cyber-purple">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
