
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Upload, Image, CircuitBoard, ArrowRight, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AIMemeGenerator = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('upload');
  const [generatingMeme, setGeneratingMeme] = useState(false);
  const [memeGenerated, setMemeGenerated] = useState(false);
  const [captionPrompt, setCaptionPrompt] = useState('');
  const [generatedCaptions, setGeneratedCaptions] = useState<string[]>([]);
  const [selectedCaption, setSelectedCaption] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
        console.log("Image uploaded:", reader.result);
      };
      reader.readAsDataURL(file);
      
      toast({
        title: "Image uploaded",
        description: "Your meme template is ready for customization.",
      });
    }
  };

  const handleGenerateCaptions = () => {
    if (!captionPrompt.trim() || !previewImage) {
      toast({
        title: "Incomplete information",
        description: "Please upload an image and describe your meme idea.",
        variant: "destructive",
      });
      return;
    }

    setGeneratingMeme(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      // These would normally come from the AI model
      const mockCaptions = [
        "When you finally buy the dip but it keeps dipping",
        "Web3 developers explaining gas fees to new users",
        "My NFT collection VS the current market",
        "Blockchain promises VS blockchain reality"
      ];
      setGeneratedCaptions(mockCaptions);
      setSelectedCaption(mockCaptions[0]);
      setGeneratingMeme(false);
      setMemeGenerated(true);
    }, 2000);
  };

  const handleSelectCaption = (caption: string) => {
    setSelectedCaption(caption);
  };

  const handleMintNFT = () => {
    toast({
      title: "Minting functionality",
      description: "This would connect to Aptos blockchain to mint your meme as an NFT.",
    });
  };

  const handlePostMeme = () => {
    if (!previewImage || !selectedCaption) {
      toast({
        title: "Cannot post meme",
        description: "Please create a meme with an image and caption first.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Meme posted successfully!",
      description: "Your meme has been shared with the CryptoMemeX community.",
    });
  };

  return (
    <div className="container mx-auto py-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold font-display mb-4 text-white">
          AI <span className="text-cyber-purple">Meme Generator</span>
        </h1>
        <p className="text-gray-300 max-w-3xl">
          Create epic memes with the help of our AI assistant. Upload your image or choose from templates, 
          then let our AI suggest captions that will make your meme go viral.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="glass-panel p-6">
          <Tabs defaultValue="upload" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-cyber-dark mb-5">
              <TabsTrigger value="upload" className="flex items-center gap-2 data-[state=active]:bg-cyber-purple/20">
                <Upload className="h-4 w-4" />
                <span>Upload Image</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2 data-[state=active]:bg-cyber-purple/20">
                <Image className="h-4 w-4" />
                <span>Templates</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload">
              <Card className="cyber-border bg-cyber-dark/50">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-10 text-center">
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                    <label 
                      htmlFor="image-upload" 
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="h-10 w-10 text-cyber-purple mb-4" />
                      <p className="text-gray-300 mb-2">
                        Drag and drop or click to upload
                      </p>
                      <p className="text-gray-500 text-sm">
                        Supports JPG, PNG, GIF
                      </p>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="grid grid-cols-2 gap-4">
                {['Template 1', 'Template 2', 'Template 3', 'Template 4'].map((template, idx) => (
                  <div 
                    key={idx} 
                    className="cyber-border p-1 cursor-pointer transition-all hover:scale-105"
                    onClick={() => {
                      setPreviewImage('https://placeholder.svg');
                      toast({
                        title: `${template} selected`,
                        description: "Template ready for customization.",
                      });
                    }}
                  >
                    <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                      <CircuitBoard className="h-10 w-10 text-gray-500" />
                    </div>
                    <p className="text-center text-sm mt-2 text-gray-300">{template}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Describe Your Meme</h3>
            <Textarea 
              placeholder="E.g., 'A funny situation about cryptocurrency crashes' or 'Something about NFT hype'"
              className="bg-cyber-dark/50 border-cyber-purple/30 resize-none"
              value={captionPrompt}
              onChange={(e) => setCaptionPrompt(e.target.value)}
            />
          </div>

          <Button 
            className="w-full mt-6 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white"
            onClick={handleGenerateCaptions}
            disabled={generatingMeme || !previewImage}
          >
            <Brain className="mr-2 h-5 w-5" />
            {generatingMeme ? 'Generating...' : 'Generate AI Captions'}
          </Button>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Preview</h3>
          
          <div className="cyber-border h-[300px] flex items-center justify-center bg-cyber-dark">
            {previewImage ? (
              <div className="relative w-full h-full">
                <img 
                  src={previewImage} 
                  alt="Meme preview" 
                  className="w-full h-full object-contain" 
                />
                {selectedCaption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white text-center font-bold">
                    {selectedCaption}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <CircuitBoard className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                <p>Meme preview will appear here</p>
              </div>
            )}
          </div>

          {previewImage && (
            <div className="flex space-x-2 mt-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-cyber-accent to-cyber-pink text-white"
                onClick={handleMintNFT}
                disabled={!selectedCaption}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Mint as NFT
              </Button>
              
              <Button 
                className="flex-1 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white"
                onClick={handlePostMeme}
                disabled={!selectedCaption}
              >
                <Send className="mr-2 h-5 w-5" />
                Post Meme
              </Button>
            </div>
          )}

          {memeGenerated && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-white">AI-Generated Captions</h3>
              <div className="space-y-2">
                {generatedCaptions.map((caption, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedCaption === caption 
                        ? 'bg-cyber-purple/20 border border-cyber-purple/40' 
                        : 'bg-cyber-dark/70 hover:bg-cyber-dark'
                    }`}
                    onClick={() => handleSelectCaption(caption)}
                  >
                    <p className="text-sm text-gray-200">{caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIMemeGenerator;
